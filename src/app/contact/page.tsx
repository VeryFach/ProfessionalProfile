'use client'

import { useState } from 'react'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
    const [errorMessage, setErrorMessage] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('loading')
        setErrorMessage('')

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            const data = await response.json()

            if (response.ok) {
                setStatus('success')
                setFormData({ name: '', email: '', message: '' })
                setTimeout(() => setStatus('idle'), 5000)
            } else {
                setStatus('error')
                setErrorMessage(data.error || 'Failed to send message')
            }
        } catch (error) {
            setStatus('error')
            setErrorMessage('Network error. Please try again.')
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center py-20 sm:py-32">
            <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
                <div className="max-w-2xl mx-auto">
                    <div className="text-center mb-8 sm:mb-12">
                        <div className="inline-block mb-4">
                            <span className="inline-block px-4 py-2 bg-red-100/10 text-white rounded-full text-sm font-semibold tracking-wide">
                                GET IN TOUCH
                            </span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black mb-4">
                            Let's <span className="text-white">Connect</span>
                        </h1>
                        <p className="text-gray-600 text-base sm:text-lg">
                            Have a question or want to work together? I'd love to hear from you!
                        </p>
                    </div>

                    <div className="bg-white p-6 sm:p-8 lg:p-12 rounded-2xl shadow-xl border-2 border-gray-100">
                        {status === 'success' && (
                            <div className="mb-6 p-4 bg-green-50 border-2 border-green-500 rounded-xl flex items-center gap-3">
                                <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p className="text-green-700 font-medium">
                                    Message sent successfully! I'll get back to you soon.
                                </p>
                            </div>
                        )}

                        {status === 'error' && (
                            <div className="mb-6 p-4 bg-red-50 border-2 border-black rounded-xl flex items-center gap-3">
                                <svg className="w-6 h-6 text-black flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p className="text-red-700 font-medium">{errorMessage}</p>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                            <div>
                                <label className="block text-base sm:text-lg font-medium text-black mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your name"
                                    required
                                    disabled={status === 'loading'}
                                    className="w-full p-3 sm:p-4 text-sm sm:text-base border-2 border-gray-200 rounded-xl 
                                              focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent
                                              disabled:bg-gray-100 disabled:cursor-not-allowed transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-base sm:text-lg font-medium text-black mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                    required
                                    disabled={status === 'loading'}
                                    className="w-full p-3 sm:p-4 text-sm sm:text-base border-2 border-gray-200 rounded-xl 
                                              focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent
                                              disabled:bg-gray-100 disabled:cursor-not-allowed transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-base sm:text-lg font-medium text-black mb-2">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={5}
                                    placeholder="Enter your message"
                                    required
                                    disabled={status === 'loading'}
                                    className="w-full p-3 sm:p-4 text-sm sm:text-base border-2 border-gray-200 rounded-xl 
                                              focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent
                                              disabled:bg-gray-100 disabled:cursor-not-allowed transition-all resize-none"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="w-full bg-gradient-to-r from-black to-black text-white py-3 sm:py-4 
                                          rounded-xl text-base sm:text-lg font-bold hover:from-blue-950 hover:to-blue-900 
                                          transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed
                                          hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                            >
                                {status === 'loading' ? (
                                    <>
                                        <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        Send Message
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}