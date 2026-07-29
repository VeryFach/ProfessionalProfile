import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="bg-gradient-to-t from-black via-gray-900 to-black text-white py-12 sm:py-16 lg:py-20">
            <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 max-w-7xl">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
                    {/* Left Section - Brand */}
                    <div className="w-full">
                        <h3 className="text-xl sm:text-2xl font-bold tracking-wide mb-3 sm:mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                            Fachru
                        </h3>
                        <p className="text-sm sm:text-base text-gray-400 leading-relaxed tracking-wide pr-4">
                            Creating digital experiences that inspire and connect. 
                            Passionate about design, development, and storytelling.
                        </p>
                    </div>

                    {/* Center Section - Navigation */}
                    <div className="w-full">
                        <div className="grid grid-cols-2 gap-6 sm:gap-8">
                            <div>
                                <h4 className="text-sm sm:text-base lg:text-lg font-semibold mb-3 sm:mb-4 tracking-widest text-gray-200">
                                    EXPLORE
                                </h4>
                                <div className="space-y-2 sm:space-y-3">
                                    <Link href="/projects" className="block text-sm sm:text-base text-gray-400 hover:text-white transition-all duration-300 tracking-wide hover:translate-x-1">
                                        Works
                                    </Link>
                                    <Link href="/experiences" className="block text-sm sm:text-base text-gray-400 hover:text-white transition-all duration-300 tracking-wide hover:translate-x-1">
                                        Experiences
                                    </Link>
                                    <Link href="/about" className="block text-sm sm:text-base text-gray-400 hover:text-white transition-all duration-300 tracking-wide hover:translate-x-1">
                                        About
                                    </Link>
                                </div>
                            </div>
                            <div>
                                <h4 className="text-sm sm:text-base lg:text-lg font-semibold mb-3 sm:mb-4 tracking-widest text-gray-200">
                                    CONNECT
                                </h4>
                                <div className="space-y-2 sm:space-y-3">
                                    <Link href="/contact" className="block text-sm sm:text-base text-gray-400 hover:text-white transition-all duration-300 tracking-wide hover:translate-x-1">
                                        Contact
                                    </Link>
                                    <a href="mailto:hello@fachru.com" className="block text-sm sm:text-base text-gray-400 hover:text-white transition-all duration-300 tracking-wide hover:translate-x-1">
                                        Email
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Social Links */}
                    <div className="w-full md:col-span-2 lg:col-span-1">
                        <div className="lg:text-right">
                            <h4 className="text-sm sm:text-base lg:text-lg font-semibold mb-4 sm:mb-6 tracking-widest text-gray-200">
                                FOLLOW
                            </h4>
                            <div className="flex flex-col space-y-3 sm:space-y-4">
                                <a
                                    href="https://github.com/VeryFach"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center lg:justify-end gap-3 text-sm sm:text-base text-gray-400 hover:text-red-400 transition-all duration-300"
                                >
                                    <span className="tracking-widest group-hover:tracking-wide transition-all duration-300">
                                        GITHUB
                                    </span>
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/very-fachrurozi"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center lg:justify-end gap-3 text-sm sm:text-base text-gray-400 hover:text-blue-400 transition-all duration-300"
                                >
                                    <span className="tracking-widest group-hover:tracking-wide transition-all duration-300">
                                        LINKEDIN
                                    </span>
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </a>
                                <a
                                    href="mailto:hello@fachru.com"
                                    className="group flex items-center lg:justify-end gap-3 text-sm sm:text-base text-gray-400 hover:text-green-400 transition-all duration-300"
                                >
                                    <span className="tracking-widest group-hover:tracking-wide transition-all duration-300">
                                        EMAIL
                                    </span>
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 mb-6 sm:mb-8"></div>

                {/* Bottom Section */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
                    <div className="text-center sm:text-left order-2 sm:order-1">
                        <p className="text-xs sm:text-sm text-gray-500 tracking-wide">
                            © {new Date().getFullYear()} Fachru. All rights reserved.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8 order-1 sm:order-2">
                        <a
                            href="#top"
                            className="group flex items-center gap-2 text-xs sm:text-sm text-gray-400 hover:text-white transition-all duration-300 bg-gray-800 hover:bg-gray-700 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full"
                        >
                            <span className="tracking-wide">Back to Top</span>
                            <svg className="w-3 h-3 sm:w-4 sm:h-4 transform group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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