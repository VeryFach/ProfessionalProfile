'use client'

import { certificates } from '@/data'

export default function CertificatesSection() {
    return (
        <div className="animate-fadeIn">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {certificates.map((cert, index) => (
                    <div
                        key={index}
                        className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl 
                                  transition-all duration-500 ease-out hover:-translate-y-2 
                                  border-2 border-gray-200 hover:border-black flex flex-col"
                        style={{
                            animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                        }}
                    >
                        {/* Certificate Image/Badge */}
                        <div className="relative h-48 sm:h-56 md:h-64 bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center overflow-hidden">
                            {/* Decorative Background Pattern */}
                            <div className="absolute inset-0 opacity-5">
                                <div className="absolute top-0 left-0 w-20 h-20 bg-black rounded-full blur-2xl"></div>
                                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gray-900 rounded-full blur-3xl"></div>
                            </div>
                            
                            {cert.image ? (
                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    className="w-full h-full object-cover transition-transform duration-700 
                                              group-hover:scale-110 grayscale group-hover:grayscale-0"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement
                                        target.style.display = 'none'
                                    }}
                                />
                            ) : (
                                <div className="relative z-10 text-center p-4 sm:p-6">
                                    <svg className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto text-gray-800 mb-2 sm:mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                    </svg>
                                    <p className="text-xs sm:text-sm font-bold text-gray-700">{cert.issuer}</p>
                                </div>
                            )}
                            
                            {/* Date Badge */}
                            <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                                <span className="inline-flex items-center px-2 py-1 sm:px-3 sm:py-1.5 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-bold rounded-full shadow-lg border border-gray-300">
                                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                    </svg>
                                    {cert.date}
                                </span>
                            </div>
                        </div>

                        {/* Certificate Info */}
                        <div className="p-4 sm:p-6 flex-1 flex flex-col">
                            {/* Title */}
                            <h3 className="text-lg sm:text-xl font-bold text-black leading-tight mb-2 group-hover:text-gray-700 transition-colors duration-300">
                                {cert.title}
                            </h3>
                            
                            {/* Issuer */}
                            <p className="text-gray-600 font-medium mb-4 flex items-center gap-2">
                                <svg className="w-4 h-4 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
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
                                                      group-hover:bg-gray-200 group-hover:text-black transition-colors duration-300"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            )}
                            
                            {/* View Credential Button */}
                            <div className="mt-auto pt-4 border-t border-gray-200">
                                {cert.credentialUrl && cert.credentialUrl !== '#' ? (
                                    <a
                                        href={cert.credentialUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 w-full px-3 py-2.5 sm:px-4 sm:py-3
                                                  bg-white text-black rounded-lg sm:rounded-xl 
                                                  font-bold text-xs sm:text-sm hover:bg-gray-300 
                                                  transition-all duration-300 hover:shadow-xl transform hover:-translate-y-0.5"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                        View Credential
                                    </a>
                                ) : null}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
