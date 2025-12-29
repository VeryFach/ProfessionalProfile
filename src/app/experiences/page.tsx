'use client'

import { certificates, organizations } from '@/data'

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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    {certificates.map((cert, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl 
                                      transition-all duration-500 ease-out hover:-translate-y-2 
                                      border-2 border-gray-100 hover:border-red-300 flex flex-col"
                            style={{
                                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                            }}
                        >
                            {/* Certificate Image/Badge */}
                            <div className="relative h-90 bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100 flex items-center justify-center overflow-hidden">
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
                                        <svg className="w-24 h-24 mx-auto text-red-500 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                                    ) : null}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Organizations & Committees Section */}
                <div className="mt-24 sm:mt-32">
                    {/* Section Header */}
                    <div className="text-center mb-12 sm:mb-16">
                        <div className="inline-block mb-4">
                            <span className="inline-block px-4 py-2 bg-blue-200/10 text-blue-100 rounded-full text-sm font-semibold tracking-wide">
                                LEADERSHIP & INVOLVEMENT
                            </span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black mb-4 tracking-tight">
                            Organizations & <span className="text-neutral-200">Committees</span>
                        </h2>
                        <p className="text-gray-200 text-base sm:text-lg max-w-2xl mx-auto">
                            Active participation in student organizations and event committees
                        </p>
                    </div>

                    {/* Organizations Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                        {organizations.map((org, index) => (
                            <div
                                key={index}
                                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl 
                                          transition-all duration-500 ease-out hover:-translate-y-2 
                                          border-2 border-gray-100 hover:border-blue-300 flex flex-col"
                                style={{
                                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                                }}
                            >
                                <div className="p-6 sm:p-8">
                                    {/* Header with Logo & Type Badge */}
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex items-center gap-4">
                                            {org.logo ? (
                                                <div className="w-16 h-16 rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center flex-shrink-0">
                                                    <img
                                                        src={org.logo}
                                                        alt={org.name}
                                                        className="w-full h-full object-cover"
                                                        onError={(e) => {
                                                            const target = e.target as HTMLImageElement
                                                            target.style.display = 'none'
                                                        }}
                                                    />
                                                </div>
                                            ) : (
                                                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                                    </svg>
                                                </div>
                                            )}
                                            <div className="flex-1">
                                                <h3 className="text-xl sm:text-2xl font-bold text-black leading-tight mb-1 group-hover:text-blue-600 transition-colors duration-300">
                                                    {org.name}
                                                </h3>
                                                <p className="text-red-600 font-semibold text-sm">{org.role}</p>
                                            </div>
                                        </div>
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold flex-shrink-0 ${
                                            org.type === 'organization' 
                                                ? 'bg-blue-100 text-blue-700' 
                                                : 'bg-purple-100 text-purple-700'
                                        }`}>
                                            {org.type === 'organization' ? 'Organization' : 'Committee'}
                                        </span>
                                    </div>

                                    {/* Period */}
                                    <div className="flex items-center gap-2 mb-4 text-gray-600">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-sm font-medium">{org.period}</span>
                                    </div>

                                    {/* Description */}
                                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                                        {org.description}
                                    </p>

                                    {/* Achievements */}
                                    {org.achievements && org.achievements.length > 0 && (
                                        <div className="mt-4 pt-4 border-t border-gray-100">
                                            <p className="text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
                                                <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                                </svg>
                                                Key Achievements
                                            </p>
                                            <ul className="space-y-2">
                                                {org.achievements.map((achievement, idx) => (
                                                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                                                        <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                        </svg>
                                                        <span>{achievement}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
