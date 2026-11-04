const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')
const test = require('node:test')
const vm = require('node:vm')
const ts = require('typescript')

const routePath = path.join(__dirname, '..', 'src', 'app', 'api', 'contact', 'route.ts')
const compiled = ts.transpileModule(fs.readFileSync(routePath, 'utf8'), {
    compilerOptions: {
        module: ts.ModuleKind.CommonJS,
        target: ts.ScriptTarget.ES2022,
        esModuleInterop: true
    }
}).outputText

function loadRoute(options = {}) {
    const sent = []
    let transportCreated = false
    const module = { exports: {} }
    const smtpError = options.smtpError
    const context = {
        exports: module.exports,
        module,
        Request,
        Response,
        TextDecoder,
        process: {
            env: options.env ?? {
                EMAIL_USER: 'owner@example.com',
                EMAIL_PASSWORD: 'test-only-password'
            }
        },
        console: { error: () => undefined },
        require(id) {
            if (id === 'next/server') {
                return { NextResponse: { json: Response.json } }
            }
            if (id === 'nodemailer') {
                return {
                    createTransport(config) {
                        transportCreated = true
                        if (options.transportError) throw options.transportError
                        sent.push({ config })
                        return {
                            async sendMail(mail) {
                                if (smtpError) throw smtpError
                                sent.push({ mail })
                            }
                        }
                    }
                }
            }
            throw new Error(`Unexpected import: ${id}`)
        }
    }
    vm.runInNewContext(compiled, context, { filename: routePath })
    return {
        POST: module.exports.POST,
        sent,
        wasTransportCreated: () => transportCreated
    }
}

function makeRequest(body, contentType = 'application/json', headers = {}) {
    return new Request('http://localhost/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': contentType, ...headers },
        body: typeof body === 'string' ? body : JSON.stringify(body)
    })
}

const valid = { name: 'Visitor', email: 'visitor@example.com', message: 'Hello' }

test('accepts valid JSON, preserves success contract and fixed SMTP sender', async () => {
    const route = loadRoute()
    const response = await route.POST(makeRequest(valid, 'application/json; charset=utf-8'))
    assert.equal(response.status, 200)
    assert.deepEqual(await response.json(), { success: true, message: 'Email sent successfully' })
    assert.equal(route.sent[0].config.auth.user, 'owner@example.com')
    assert.equal(route.sent[1].mail.from, 'owner@example.com')
    assert.equal(route.sent[1].mail.to, 'fachvery@gmail.com')
    assert.equal(route.sent[1].mail.replyTo, valid.email)
})

test('rejects missing, non-string, and blank fields without opening SMTP', async () => {
    for (const payload of [
        { email: valid.email, message: valid.message },
        { ...valid, name: 17 },
        { ...valid, email: null },
        { ...valid, message: ['Hello'] },
        { ...valid, message: '   ' }
    ]) {
        const route = loadRoute()
        const response = await route.POST(makeRequest(payload))
        assert.equal(response.status, 400)
        assert.equal(route.wasTransportCreated(), false)
    }
})

test('rejects invalid email and header control characters', async () => {
    for (const payload of [
        { ...valid, email: 'not-an-email' },
        { ...valid, email: 'a@@example.com' },
        { ...valid, email: 'a..b@example.com' },
        { ...valid, email: 'a@-example.com' },
        { ...valid, name: 'Bad\r\nBcc: visitor@example.com' }
    ]) {
        const route = loadRoute()
        assert.equal((await route.POST(makeRequest(payload))).status, 400)
    }
})

test('enforces field length limits', async () => {
    for (const payload of [
        { ...valid, name: 'n'.repeat(101) },
        { ...valid, email: `${'e'.repeat(245)}@example.com` },
        { ...valid, message: 'm'.repeat(5_001) }
    ]) {
        const route = loadRoute()
        assert.equal((await route.POST(makeRequest(payload))).status, 400)
        assert.equal(route.wasTransportCreated(), false)
    }
})

test('rejects oversized bodies even when Content-Length is understated', async () => {
    const route = loadRoute()
    const response = await route.POST(makeRequest(
        { ...valid, message: 'x'.repeat(17_000) },
        'application/json',
        { 'Content-Length': '1' }
    ))
    assert.equal(response.status, 413)
    assert.equal(route.wasTransportCreated(), false)
})

test('rejects oversized declared Content-Length before parsing', async () => {
    const route = loadRoute()
    assert.equal((await route.POST(makeRequest(valid, 'application/json', {
        'Content-Length': '16385'
    }))).status, 413)
})

test('rejects malformed JSON and non-object JSON', async () => {
    for (const body of ['{', 'null', '[]', '"hello"']) {
        const route = loadRoute()
        assert.equal((await route.POST(makeRequest(body))).status, 400)
        assert.equal(route.wasTransportCreated(), false)
    }
})

test('rejects unsupported content types', async () => {
    const route = loadRoute()
    assert.equal((await route.POST(makeRequest(valid, 'text/plain'))).status, 415)
    assert.equal(route.wasTransportCreated(), false)
})

test('escapes user markup while retaining message line breaks', async () => {
    const route = loadRoute()
    const payload = {
        name: '<img src=x>',
        email: 'a&b@example.com',
        message: '<script>alert("x")</script> & \'quote\'\r\nsecond line'
    }
    assert.equal((await route.POST(makeRequest(payload))).status, 200)
    const html = route.sent[1].mail.html
    assert.match(html, /&lt;img src=x&gt;/)
    assert.match(html, /a&amp;b@example\.com/)
    assert.match(html, /&lt;script&gt;alert\(&quot;x&quot;\)&lt;\/script&gt;/)
    assert.match(html, /&#39;quote&#39;<br>second line/)
    assert.doesNotMatch(html, /<script>|<img src=x>/)
})

test('returns a generic error when SMTP fails', async () => {
    const route = loadRoute({ smtpError: new Error('private SMTP detail') })
    const response = await route.POST(makeRequest(valid))
    assert.equal(response.status, 500)
    const body = await response.json()
    assert.equal(body.error, 'Failed to send email. Please try again later.')
    assert.doesNotMatch(JSON.stringify(body), /private SMTP detail/)
})

test('returns a generic error when the SMTP transport cannot be created', async () => {
    const route = loadRoute({ transportError: new Error('private transport detail') })
    const response = await route.POST(makeRequest(valid))
    assert.equal(response.status, 500)
    assert.equal((await response.json()).error, 'Failed to send email. Please try again later.')
})

test('handles missing server configuration without opening SMTP', async () => {
    const route = loadRoute({ env: {} })
    const response = await route.POST(makeRequest(valid))
    assert.equal(response.status, 503)
    assert.equal(route.wasTransportCreated(), false)
    assert.ok((await response.json()).error)
})
