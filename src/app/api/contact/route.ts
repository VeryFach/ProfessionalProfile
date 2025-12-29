import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
    try {
        const { name, email, message } = await request.json()

        // Validasi input
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            )
        }

        // Konfigurasi transporter dengan Gmail
        // CATATAN: Untuk production, gunakan App Password dari Google Account
        // atau gunakan service email seperti Resend, SendGrid, dll
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER || 'your-email@gmail.com',
                pass: process.env.EMAIL_PASSWORD || 'your-app-password'
            }
        })

        // Email yang akan dikirim ke Anda
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'fachvery@gmail.com',
            subject: `Portfolio Contact: Message from ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #ef4444;">New Contact Form Submission</h2>
                    <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
                        <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
                        <p style="margin: 10px 0;"><strong>Message:</strong></p>
                        <div style="background-color: white; padding: 15px; border-left: 4px solid #ef4444; margin-top: 10px;">
                            ${message.replace(/\n/g, '<br>')}
                        </div>
                    </div>
                    <p style="color: #6b7280; font-size: 14px;">
                        This message was sent from your portfolio contact form.
                    </p>
                </div>
            `,
            replyTo: email
        }

        // Kirim email
        await transporter.sendMail(mailOptions)

        return NextResponse.json(
            { success: true, message: 'Email sent successfully' },
            { status: 200 }
        )
    } catch (error) {
        console.error('Error sending email:', error)
        return NextResponse.json(
            { error: 'Failed to send email. Please try again later.' },
            { status: 500 }
        )
    }
}
