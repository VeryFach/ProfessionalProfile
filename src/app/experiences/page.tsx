'use client'

import { certificates } from '@/data'

export default function Experiences() {
    return (
        <div className="min-h-screen py-16 sm:py-20 lg:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 max-w-7xl">
                {/* Header Section */}
                <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                    <div className="inline-block mb-4">
                        <span className="inline-block px-4 py-2 bg-red-200/10 text-red-100 rounded-full text-sm font-semibold tracking-wide">
                            MY ACHIEVEMENTS
                        </span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-black mb-4 tracking-tight animate-fade-in">
                        Certifications & <span className="text-neutral-200">Experience</span>
                    </h1>
                    <p className="text-gray-200 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Professional certifications and credentials earned through continuous learning
                    </p>
                </div>

                {/* Certificates Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {certificates.map((cert, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl 
                                      transition-all duration-500 ease-out hover:-translate-y-2 
                                      border-2 border-gray-100 hover:border-red-300 flex flex-col"
                            style={{
                                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                            }}
                        >
                            {/* Certificate Image/Badge */}
                            <div className="relative h-48 bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100 flex items-center justify-center overflow-hidden">
                                {/* Decorative Background Pattern */}
                                <div className="absolute inset-0 opacity-10">
                                    <div className="absolute top-0 left-0 w-20 h-20 bg-red-500 rounded-full blur-2xl"></div>
                                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
                                </div>
                                
                                {cert.image ? (
                                    <img
                                        src={cert.image}
                                        alt={cert.title}
                                        className="w-full h-full object-cover transition-transform duration-700 
                                                  group-hover:scale-110"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement
                                            target.style.display = 'none'
                                        }}
                                    />
                                ) : (
                                    <div className="relative z-10 text-center p-6">
                                        <svg className="w-20 h-20 mx-auto text-red-500 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                        </svg>
                                        <p className="text-sm font-bold text-gray-700">{cert.issuer}</p>
                                    </div>
                                )}
                                
                                {/* Date Badge */}
                                <div className="absolute top-4 right-4">
                                    <span className="inline-flex items-center px-3 py-1.5 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-bold rounded-full shadow-lg border border-gray-200">
                                        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                        </svg>
                                        {cert.date}
                                    </span>
                                </div>
                            </div>

                            {/* Certificate Info */}
                            <div className="p-6 flex-1 flex flex-col">
                                {/* Title */}
                                <h3 className="text-xl font-bold text-black leading-tight mb-2 group-hover:text-red-600 transition-colors duration-300">
                                    {cert.title}
                                </h3>
                                
                                {/* Issuer */}
                                <p className="text-gray-600 font-medium mb-4 flex items-center gap-2">
                                    <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                    </svg>
                                    {cert.issuer}
                                </p>
                                
                                {/* Skills Tags */}
                                {cert.skills && cert.skills.length > 0 && (
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {cert.skills.map((skill, idx) => (
                                            <span
                                                key={idx}
                                                className="px-2.5 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-lg 
                                                          group-hover:bg-red-50 group-hover:text-red-600 transition-colors duration-300"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                )}
                                
                                {/* View Credential Button */}
                                <div className="mt-auto pt-4 border-t border-gray-100">
                                    {cert.credentialUrl && cert.credentialUrl !== '#' ? (
                                        <a
                                            href={cert.credentialUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-2 w-full px-4 py-3
                                                      bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl 
                                                      font-bold text-sm hover:from-red-600 hover:to-red-700 
                                                      transition-all duration-300 hover:shadow-xl transform hover:-translate-y-0.5"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                            View Credential
                                        </a>
                                    ) : (
                                        <div className="flex items-center justify-center gap-2 w-full px-4 py-3
                                                      bg-gray-100 text-gray-400 rounded-xl font-bold text-sm cursor-not-allowed">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                            </svg>
                                            Coming Soon
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
