'use client'

import { experiences } from '@/data'

export default function ExperienceSection() {
    return (
        <div className="mb-16 sm:mb-20 lg:mb-24">
            <div className="text-center mb-10 sm:mb-12">
                <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-white mb-3 flex items-center justify-center gap-3">
                    Work Experience
                </h2>
            </div>
            
            {experiences.length > 0 ? (
                <div className="max-w-5xl mx-auto space-y-6">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="group relative"
                            style={{
                                animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`
                            }}
                        >
                            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-1 hover:from-black hover:to-gray-900 transition-all duration-500">
                                <div className="bg-white rounded-xl p-6 sm:p-8 hover:bg-gray-50 transition-all duration-300">
                                    <div className="flex flex-col lg:flex-row gap-6">
                                        {/* Left Side - Date & Status */}
                                        <div className="lg:w-48 flex-shrink-0">
                                            <div className="flex lg:flex-col gap-3 lg:gap-2">
                                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-full text-xs sm:text-sm font-bold">
                                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                                    </svg>
                                                    {exp.startDate}
                                                </div>
                                                <div className="hidden lg:flex items-center justify-center">
                                                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                                    </svg>
                                                </div>
                                                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-bold ${
                                                    exp.endDate 
                                                        ? 'bg-gray-200 text-gray-700' 
                                                        : 'bg-green-100 text-green-700 border border-green-300'
                                                }`}>
                                                    {exp.endDate ? (
                                                        <>
                                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                                            </svg>
                                                            {exp.endDate}
                                                        </>
                                                    ) : (
                                                        <>
                                                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                                            Present
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* Divider */}
                                        <div className="hidden lg:block w-px bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200"></div>
                                        
                                        {/* Right Side - Content */}
                                        <div className="flex-1 space-y-4">
                                            {/* Role */}
                                            <h3 className="text-xl sm:text-2xl font-bold text-black group-hover:text-gray-700 transition-colors duration-300">
                                                {exp.role}
                                            </h3>
                                            
                                            {/* Company & Location */}
                                            <div className="flex flex-wrap items-center gap-4 text-gray-600">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                                                        <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                                        </svg>
                                                    </div>
                                                    <span className="font-semibold text-gray-800">{exp.company}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                                                        <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        </svg>
                                                    </div>
                                                    <span className="text-sm">{exp.location}</span>
                                                </div>
                                            </div>
                                            
                                            {/* Description */}
                                            <div className="pt-4 border-t border-gray-100">
                                                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                                                    {exp.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="max-w-2xl mx-auto text-center py-16 bg-white/5 rounded-2xl border border-gray-700">
                    <svg className="w-20 h-20 mx-auto text-gray-500 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <p className="text-gray-400 text-xl font-medium mb-2">No work experience yet</p>
                    <p className="text-gray-500 text-sm">Professional experiences will appear here</p>
                </div>
            )}
        </div>
    )
}
