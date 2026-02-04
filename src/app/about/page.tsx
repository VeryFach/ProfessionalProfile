'use client'

import { useEffect, useState } from 'react'

export default function About() {
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        setIsLoaded(true)
    }, [])

    return (
        <section className="min-h-screen flex items-center relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.02]">
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
            </div>

            <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16 py-20 sm:py-32 relative z-10">
                <div className="max-w-5xl mx-auto">
                    {/* Title Section with typing animation */}
                    <div className={`mb-12 sm:mb-16 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-black rounded-full mb-6">
                            <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                            <span className="text-white text-xs font-bold tracking-wider flex items-center gap-1">
                                <span className="animate-typing overflow-hidden whitespace-nowrap border-r-2 border-white">WHO I AM</span>
                            </span>
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
                            <div 
                                className={`bg-white border-2 border-gray-200 rounded-2xl p-6 sm:p-8 hover:border-black transition-all duration-500 hover:shadow-2xl ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                                style={{ transitionDelay: '100ms' }}
                            >
                                <p className="text-lg sm:text-xl font-medium text-black leading-relaxed mb-4">
                                    Hello! I'm <span className="font-black text-black">Very Fachrurozi</span>, an enthusiastic 
                                    <span className="font-bold"> Software Development</span>
                                    <span className="font-bold"> cloud computing</span> and 
                                    <span className="font-bold">Computer Networks</span> enthusiast.
                                </p>
                                <p className="text-base text-gray-700 leading-relaxed">
                                    Focused on distributed systems, API architecture, and optimizing reliable 
                                    and secure network infrastructure. Experienced in database management, 
                                    server optimization, and network troubleshooting.
                                </p>
                            </div>

                            {/* Commitment Card */}
                            <div 
                                className={`bg-black text-white border-2 border-black rounded-2xl p-6 sm:p-8 hover:bg-gray-900 transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                                style={{ transitionDelay: '200ms' }}
                            >
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

                            {/* Quote Card with Terminal Cursor */}
                            <div 
                                className={`bg-gray-50 border-2 border-gray-200 rounded-2xl p-6 sm:p-8 relative overflow-hidden group ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                                style={{ transitionDelay: '300ms' }}
                            >
                                <div className="absolute top-4 left-4 text-6xl text-gray-300 font-serif">"</div>
                                {/* Terminal cursor effect */}
                                <div className="absolute bottom-4 right-4 flex items-center gap-1 opacity-0 group-hover:opacity-50 transition-opacity duration-500">
                                    <span className="font-mono text-xs text-gray-500">$</span>
                                    <span className="w-2 h-4 bg-gray-400 animate-blink"></span>
                                </div>
                                <p className="text-base sm:text-lg italic text-gray-700 relative z-10 pl-8">
                                    Building robust backend systems and reliable network infrastructure that scale with purpose and precision.
                                </p>
                            </div>
                        </div>

                        {/* Soft Skills Sidebar */}
                        <div className="lg:col-span-1">
                            <div 
                                className={`bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-black transition-all duration-500 sticky top-24 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                                style={{ transitionDelay: '150ms' }}
                            >
                                <h2 className="text-xl font-black text-black mb-6 flex items-center gap-2">
                                    <div className="w-1 h-6 bg-black rounded-full"></div>
                                    Soft Skills
                                </h2>
                                <ul className="space-y-3">
                                    {['Effective Communication', 'Negotiation', 'Crisis Management', 'Public Speaking', 'Storytelling'].map((skill, index) => (
                                        <li 
                                            key={skill} 
                                            className={`flex items-center gap-3 group/item cursor-pointer transition-all duration-500 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
                                            style={{ transitionDelay: `${400 + index * 80}ms` }}
                                        >
                                            <div className="w-2 h-2 bg-gray-300 rounded-full group-hover/item:bg-black group-hover/item:scale-125 transition-all duration-300"></div>
                                            <span className="text-sm font-medium text-gray-700 group-hover/item:text-black transition-colors duration-300">
                                                {skill}
                                            </span>
                                            {/* Progress bar animation on hover */}
                                            <div className="flex-1 h-1 bg-gray-100 rounded-full overflow-hidden opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                                                <div 
                                                    className="h-full bg-black rounded-full w-0 group-hover/item:w-full transition-all duration-700 ease-out"
                                                    style={{ transitionDelay: `${index * 50}ms` }}
                                                ></div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                                
                                {/* Server Status Indicator */}
                                <div 
                                    className={`mt-6 pt-4 border-t border-gray-100 transition-all duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                                    style={{ transitionDelay: '800ms' }}
                                >
                                    <div className="flex items-center gap-2 text-xs text-gray-500">
                                        <div className="flex gap-1">
                                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '150ms' }}></span>
                                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '300ms' }}></span>
                                        </div>
                                        <span className="font-mono">All systems operational</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Hard Skills Section - Full Width */}
                    <div 
                        className={`mt-8 lg:mt-12 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                        style={{ transitionDelay: '500ms' }}
                    >
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
                @keyframes blink {
                    0%, 50% {
                        opacity: 1;
                    }
                    51%, 100% {
                        opacity: 0;
                    }
                }
                
                @keyframes typing {
                    from {
                        width: 0;
                    }
                    to {
                        width: 100%;
                    }
                }
                
                .animate-blink {
                    animation: blink 1s step-end infinite;
                }
                
                .animate-typing {
                    animation: typing 1.5s steps(8) 0.5s 1 normal both, blink 1s step-end infinite;
                }
            `}</style>
        </section>
    )
}
