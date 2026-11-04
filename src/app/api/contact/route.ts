import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const MAX_BODY_BYTES = 16 * 1024
const MAX_NAME_LENGTH = 100
const MAX_EMAIL_LENGTH = 254
const MAX_MESSAGE_LENGTH = 5_000

const invalidRequest = (message: string, status = 400) =>
    NextResponse.json({ error: message }, { status })

function escapeHtml(value: string) {
    const entities: Record<string, string> = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
    }
    return value.replace(/[&<>"']/g, (character) => entities[character])
}

function isValidEmail(value: string) {
    const parts = value.split('@')
    if (parts.length !== 2) return false

    const [local, domain] = parts
    if (
        !local || local.length > 64 ||
        local.startsWith('.') || local.endsWith('.') || local.includes('..') ||
        !/^[a-z0-9.!#$%&'*+/=?^_{|}~-]+$/i.test(local)
    ) return false

    const labels = domain.split('.')
    return labels.length >= 2 && labels.every(
        (label) => label.length <= 63 &&
            /^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(label)
    )
}

async function readLimitedBody(request: Request): Promise<string | null> {
    if (!request.body) return ''

    const reader = request.body.getReader()
    const decoder = new TextDecoder('utf-8', { fatal: true })
    let size = 0
    let text = ''

    try {
        while (true) {
            const { done, value } = await reader.read()
            if (done) break

            size += value.byteLength
            if (size > MAX_BODY_BYTES) {
                void reader.cancel().catch(() => undefined)
                return null
            }
            text += decoder.decode(value, { stream: true })
        }
        return text + decoder.decode()
    } finally {
        reader.releaseLock()
    }
}

export async function POST(request: Request) {
    const contentType = request.headers.get('content-type')?.split(';', 1)[0].trim().toLowerCase()
    if (contentType !== 'application/json') {
        return invalidRequest('Content-Type must be application/json', 415)
    }

    const contentLength = request.headers.get('content-length')
    if (contentLength && Number(contentLength) > MAX_BODY_BYTES) {
        return invalidRequest('Request body is too large', 413)
    }

    let body: unknown
    try {
        const rawBody = await readLimitedBody(request)
        if (rawBody === null) return invalidRequest('Request body is too large', 413)
        body = JSON.parse(rawBody)
    } catch {
        return invalidRequest('Invalid JSON body')
    }

    if (typeof body !== 'object' || body === null || Array.isArray(body)) {
        return invalidRequest('Expected a JSON object')
    }

    const fields = body as Record<string, unknown>
    if (typeof fields.name !== 'string' || typeof fields.email !== 'string' || typeof fields.message !== 'string') {
        return invalidRequest('Name, email, and message must be strings')
    }

    const name = fields.name.trim()
    const email = fields.email.trim()
    const message = fields.message

    if (!name || !email || !message.trim()) {
        return invalidRequest('All fields are required')
    }
    if (
        Array.from(name).length > MAX_NAME_LENGTH ||
        email.length > MAX_EMAIL_LENGTH ||
        Array.from(message).length > MAX_MESSAGE_LENGTH
    ) {
        return invalidRequest('One or more fields exceed the maximum length')
    }
    if (/[\r\n\x00-\x1f\x7f]/.test(name) || !isValidEmail(email)) {
        return invalidRequest('Please provide a valid name and email address')
    }

    const emailUser = process.env.EMAIL_USER?.trim()
    const emailPassword = process.env.EMAIL_PASSWORD
    if (!emailUser || !emailPassword) {
        console.error('Contact email configuration is missing')
        return invalidRequest('Contact service is temporarily unavailable. Please try again later.', 503)
    }

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: { user: emailUser, pass: emailPassword }
        })
        await transporter.sendMail({
            from: emailUser,
            to: 'fachvery@gmail.com',
            subject: `Portfolio Contact: Message from ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #ef4444;">New Contact Form Submission</h2>
                    <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <p style="margin: 10px 0;"><strong>Name:</strong> ${escapeHtml(name)}</p>
                        <p style="margin: 10px 0;"><strong>Email:</strong> ${escapeHtml(email)}</p>
                        <p style="margin: 10px 0;"><strong>Message:</strong></p>
                        <div style="background-color: white; padding: 15px; border-left: 4px solid #ef4444; margin-top: 10px;">
                            ${escapeHtml(message).replace(/\r\n|\r|\n/g, '<br>')}
                        </div>
                    </div>
                    <p style="color: #6b7280; font-size: 14px;">
                        This message was sent from your portfolio contact form.
                    </p>
                </div>
            `,
            replyTo: email
        })

        return NextResponse.json(
            { success: true, message: 'Email sent successfully' },
            { status: 200 }
        )
    } catch {
        console.error('Contact email delivery failed')
        return invalidRequest('Failed to send email. Please try again later.', 500)
    }
}
