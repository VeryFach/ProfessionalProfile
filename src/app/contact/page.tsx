export default function Contact() {
    return (
        <div className="min-h-screen bg-red-500 flex items-center justify-center">
            <div className="container mx-auto px-8">
                <div className="max-w-2xl mx-auto">
                    <h1 className="text-6xl font-black text-black mb-12">
                        ABOUT
                    </h1>
                    <div className="bg-white/90 p-12 rounded-lg backdrop-blur-sm">
                        <form className="space-y-6">
                            <div>
                                <label className="block text-lg font-medium text-black mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                                />
                            </div>
                            <div>
                                <label className="block text-lg font-medium text-black mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                                />
                            </div>
                            <div>
                                <label className="block text-lg font-medium text-black mb-2">
                                    Message
                                </label>
                                <textarea
                                    rows={6}
                                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-black text-white py-4 rounded-lg text-lg font-medium hover:bg-gray-800 transition-colors"
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