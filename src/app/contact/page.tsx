export default function Contact() {
    return (
        <div className="min-h-screen flex items-center justify-center py-20 sm:py-32">
            <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
                <div className="max-w-2xl mx-auto">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black mb-8 sm:mb-12">
                        CONTACT
                    </h1>
                    <div className="bg-white/90 p-6 sm:p-8 lg:p-12 rounded-lg backdrop-blur-sm">
                        <p className="text-gray-700 text-base sm:text-lg mb-6">
                            Have a question or want to work together? Feel free to reach out!
                        </p>
                        <form className="space-y-5 sm:space-y-6">
                            <div>
                                <label className="block text-base sm:text-lg font-medium text-black mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full p-3 sm:p-4 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                                />
                            </div>
                            <div>
                                <label className="block text-base sm:text-lg font-medium text-black mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full p-3 sm:p-4 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                                />
                            </div>
                            <div>
                                <label className="block text-base sm:text-lg font-medium text-black mb-2">
                                    Message
                                </label>
                                <textarea
                                    rows={5}
                                    placeholder="Enter your message"
                                    className="w-full p-3 sm:p-4 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-black text-white py-3 sm:py-4 rounded-lg text-base sm:text-lg font-medium hover:bg-gray-800 transition-colors"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}