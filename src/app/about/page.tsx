'use client'

export default function About() {
    return (
        <section className="min-h-screen flex items-center relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.02]">
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
            </div>

            <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16 py-20 sm:py-32 relative z-10">
                <div className="max-w-5xl mx-auto">
                    {/* Title Section */}
                    <div className="mb-12 sm:mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-black rounded-full mb-6">
                            <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                            <span className="text-white text-xs font-bold tracking-wider">WHO I AM</span>
                        </div>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight">
                            ABOUT <span className="text-gray-200">ME</span>
                        </h1>
                    </div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                        {/* Main Description - Spans 2 columns */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Introduction Card */}
                            <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 sm:p-8 hover:border-black transition-all duration-300 hover:shadow-2xl">
                                <p className="text-lg sm:text-xl font-medium text-black leading-relaxed mb-4">
                                    Hello! I'm <span className="font-black text-black">Fachru</span>, an enthusiastic 
                                    <span className="font-bold"> Backend Developer</span> and 
                                    <span className="font-bold"> Network Engineer</span>
                                </p>
                                <p className="text-base text-gray-700 leading-relaxed">
                                    Focused on distributed systems, API architecture, and optimizing reliable 
                                    and secure network infrastructure. Experienced in database management, 
                                    server optimization, and network troubleshooting.
                                </p>
                            </div>

                            {/* Commitment Card */}
                            <div className="bg-black text-white border-2 border-black rounded-2xl p-6 sm:p-8 hover:bg-gray-900 transition-all duration-300">
                                <div className="flex items-start gap-3">
                                    <svg className="w-6 h-6 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <p className="text-base leading-relaxed">
                                        Committed to delivering efficient solutions through collaboration and 
                                        the application of adaptive, scalable <span className="font-bold">DevOps principles</span>.
                                    </p>
                                </div>
                            </div>

                            {/* Quote Card */}
                            <div className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-6 sm:p-8 relative overflow-hidden">
                                <div className="absolute top-4 left-4 text-6xl text-gray-300 font-serif">"</div>
                                <p className="text-base sm:text-lg italic text-gray-700 relative z-10 pl-8">
                                    Building robust backend systems and reliable network infrastructure that scale with purpose and precision.
                                </p>
                            </div>
                        </div>

                        {/* Soft Skills Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-black transition-all duration-300 sticky top-24">
                                <h2 className="text-xl font-black text-black mb-6 flex items-center gap-2">
                                    <div className="w-1 h-6 bg-black rounded-full"></div>
                                    Soft Skills
                                </h2>
                                <ul className="space-y-3">
                                    {['Effective Communication', 'Negotiation', 'Crisis Management', 'Public Speaking', 'Storytelling'].map((skill, index) => (
                                        <li key={skill} className="flex items-center gap-3 group cursor-pointer">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full group-hover:bg-black transition-colors duration-300"></div>
                                            <span className="text-sm font-medium text-gray-700 group-hover:text-black transition-colors duration-300">
                                                {skill}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Hard Skills Section - Full Width */}
                    <div className="mt-8 lg:mt-12">
                        <div className="mb-6">
                            <h2 className="text-2xl sm:text-3xl font-black text-black mb-2 flex items-center gap-3">
                                <div className="w-2 h-8 bg-black rounded-full"></div>
                                Technical Arsenal
                            </h2>
                            <p className="text-sm text-gray-600 ml-5">Technologies I work with daily</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Animations */}
            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </section>
    )
}
