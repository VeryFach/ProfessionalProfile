const Footer = () => {
    return (
        <footer className="bg-gradient-to-t from-black via-gray-900 to-black text-white py-16">
            <div className="container mx-auto px-8 max-w-7xl">
                {/* Main Footer Content */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-12">
                    {/* Left Section - Brand */}
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold tracking-wide mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                            Fachru
                        </h3>
                        <p className="text-gray-400 max-w-md leading-relaxed tracking-wide">
                            Creating digital experiences that inspire and connect. 
                            Passionate about design, development, and storytelling.
                        </p>
                    </div>

                    {/* Center Section - Navigation */}
                    <div className="flex-1 flex justify-center">
                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-lg font-semibold mb-4 tracking-widest text-gray-200">
                                    EXPLORE
                                </h4>
                                <div className="space-y-3">
                                    <a href="/projects" className="block text-gray-400 hover:text-white transition-all duration-300 tracking-wide hover:translate-x-1">
                                        Works
                                    </a>
                                    <a href="/blog" className="block text-gray-400 hover:text-white transition-all duration-300 tracking-wide hover:translate-x-1">
                                        Stories
                                    </a>
                                    <a href="/about" className="block text-gray-400 hover:text-white transition-all duration-300 tracking-wide hover:translate-x-1">
                                        Experiences
                                    </a>
                                </div>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold mb-4 tracking-widest text-gray-200">
                                    CONNECT
                                </h4>
                                <div className="space-y-3">
                                    <a href="/contact" className="block text-gray-400 hover:text-white transition-all duration-300 tracking-wide hover:translate-x-1">
                                        About
                                    </a>
                                    <a href="mailto:hello@fachru.com" className="block text-gray-400 hover:text-white transition-all duration-300 tracking-wide hover:translate-x-1">
                                        Email
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Social Links */}
                    <div className="flex-1 flex justify-end">
                        <div className="text-center lg:text-right">
                            <h4 className="text-lg font-semibold mb-6 tracking-widest text-gray-200">
                                FOLLOW
                            </h4>
                            <div className="flex flex-col space-y-4">
                                <a
                                    href="#"
                                    className="group flex items-center justify-center lg:justify-end gap-3 text-gray-400 hover:text-red-400 transition-all duration-300"
                                >
                                    <span className="tracking-widest group-hover:tracking-wide transition-all duration-300">
                                        GITHUB
                                    </span>
                                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="group flex items-center justify-center lg:justify-end gap-3 text-gray-400 hover:text-blue-400 transition-all duration-300"
                                >
                                    <span className="tracking-widest group-hover:tracking-wide transition-all duration-300">
                                        LINKEDIN
                                    </span>
                                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="group flex items-center justify-center lg:justify-end gap-3 text-gray-400 hover:text-green-400 transition-all duration-300"
                                >
                                    <span className="tracking-widest group-hover:tracking-wide transition-all duration-300">
                                        EMAIL
                                    </span>
                                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 mb-8"></div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <p className="text-gray-500 tracking-wide">
                            © {new Date().getFullYear()} Fachru. All rights reserved.
                        </p>
                    </div>

                    <div className="flex items-center gap-8">
                        <a
                            href="/privacy"
                            className="text-gray-500 hover:text-gray-300 transition-colors duration-300 tracking-wide"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="/terms"
                            className="text-gray-500 hover:text-gray-300 transition-colors duration-300 tracking-wide"
                        >
                            Terms of Service
                        </a>
                        <a
                            href="#top"
                            className="group flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-300 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-full"
                        >
                            <span className="tracking-wide">Back to Top</span>
                            <svg className="w-4 h-4 transform group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer