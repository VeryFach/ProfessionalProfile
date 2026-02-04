'use client'

import { certificates, organizations, experiences } from '@/data'
import { useState } from 'react'

type ViewType = 'certificates' | 'organizations'

export default function Experiences() {
    const [activeView, setActiveView] = useState<ViewType>('certificates')

    return (
        <div className="min-h-screen py-16 sm:py-20 lg:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 max-w-7xl">
                {/* Header Section */}
                <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-black mb-4 tracking-tight animate-fade-in">
                        Certifications & <span className="text-white">Experience</span>
                    </h1>
                    <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Professional experience and certifications earned through continuous learning and practical implementation
                    </p>
                </div>

                {/*Experience section*/}
                <div className="mb-12 sm:mb-16 lg:mb-20">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 text-center">
                        Work Experience
                    </h2>
                    
                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gray-600 via-gray-400 to-gray-600 hidden md:block"></div>
                        
                        <div className="space-y-6 sm:space-y-8">
                            {experiences.map((exp, index) => (
                                <div
                                    key={index}
                                    className="group relative md:pl-16 lg:pl-20"
                                    style={{
                                        animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`
                                    }}
                                >
                                    {/* Timeline Dot */}
                                    <div className="absolute left-2 sm:left-6 top-6 w-4 h-4 bg-white border-4 border-gray-800 rounded-full hidden md:block group-hover:scale-125 transition-transform duration-300 z-10"></div>
                                    
                                    <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 shadow-lg hover:shadow-2xl 
                                                  transition-all duration-500 ease-out hover:-translate-y-1 
                                                  border-2 border-gray-200 hover:border-black">
                                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                                            <div className="flex-1">
                                                {/* Role */}
                                                <h3 className="text-xl sm:text-2xl font-bold text-black mb-2 group-hover:text-gray-700 transition-colors duration-300">
                                                    {exp.role}
                                                </h3>
                                                
                                                {/* Company */}
                                                <div className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                                                    <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                                    </svg>
                                                    <span className="text-base sm:text-lg">{exp.company}</span>
                                                </div>
                                                
                                                {/* Location */}
                                                <div className="flex items-center gap-2 text-gray-600">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    </svg>
                                                    <span className="text-sm sm:text-base">{exp.location}</span>
                                                </div>
                                            </div>
                                            
                                            {/* Date Badge */}
                                            <div className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-full text-sm font-bold whitespace-nowrap self-start">
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                                </svg>
                                                <span>{exp.startDate} - {exp.endDate || 'Present'}</span>
                                            </div>
                                        </div>
                                        
                                        {/* Description */}
                                        <div className="pt-4 border-t border-gray-200">
                                            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                                {exp.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {experiences.length === 0 && (
                        <div className="text-center py-12">
                            <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <p className="text-gray-400 text-lg">No work experience added yet.</p>
                        </div>
                    )}
                </div>

                {/* Filter Navigation */}
                <div className="mb-8 sm:mb-12">
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-2xl mx-auto px-4">
                        <button
                            onClick={() => setActiveView('certificates')}
                            className={`relative px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base transition-all duration-300 ${
                                activeView === 'certificates'
                                    ? 'bg-black text-white shadow-xl scale-105'
                                    : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200 hover:border-gray-400'
                            }`}
                        >
                            <span className="flex items-center justify-center gap-2 sm:gap-3">
                                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                </svg>
                                <span>Certificates</span>
                                <span className={`ml-1 px-2.5 py-0.5 rounded-full text-xs font-bold ${
                                    activeView === 'certificates' 
                                        ? 'bg-white/20 text-white' 
                                        : 'bg-gray-100 text-gray-700'
                                }`}>
                                    {certificates.length}
                                </span>
                            </span>
                        </button>
                        <button
                            onClick={() => setActiveView('organizations')}
                            className={`relative px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base transition-all duration-300 ${
                                activeView === 'organizations'
                                    ? 'bg-black text-white shadow-xl scale-105'
                                    : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200 hover:border-gray-400'
                            }`}
                        >
                            <span className="flex items-center justify-center gap-2 sm:gap-3">
                                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                <span>Organizations</span>
                                <span className={`ml-1 px-2.5 py-0.5 rounded-full text-xs font-bold ${
                                    activeView === 'organizations' 
                                        ? 'bg-white/20 text-white' 
                                        : 'bg-gray-100 text-gray-700'
                                }`}>
                                    {organizations.length}
                                </span>
                            </span>
                        </button>
                    </div>
                </div>

                {/* Content Area */}
                <div className="relative">
                    {/* Certificates Section */}
                    {activeView === 'certificates' && (
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
                    )}

                    {/* Organizations Section */}
                    {activeView === 'organizations' && (
                        <div className="animate-fadeIn">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                                {organizations.map((org, index) => (
                                    <div
                                        key={index}
                                        className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl 
                                                  transition-all duration-500 ease-out hover:-translate-y-2 
                                                  border-2 border-gray-200 hover:border-black flex flex-col"
                                        style={{
                                            animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                                        }}
                                    >
                                        <div className="p-4 sm:p-6 lg:p-8">
                                            {/* Header with Logo & Type Badge */}
                                            <div className="flex items-start justify-between gap-3 mb-4">
                                                <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                                                    {org.logo ? (
                                                        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-200 flex items-center justify-center flex-shrink-0">
                                                            <img
                                                                src={org.logo}
                                                                alt={org.name}
                                                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                                                                onError={(e) => {
                                                                    const target = e.target as HTMLImageElement
                                                                    target.style.display = 'none'
                                                                }}
                                                            />
                                                        </div>
                                                    ) : (
                                                        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl bg-gradient-to-br from-gray-800 to-black flex items-center justify-center flex-shrink-0">
                                                            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                                            </svg>
                                                        </div>
                                                    )}
                                                    <div className="flex-1 min-w-0">
                                                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-black leading-tight mb-1 group-hover:text-gray-700 transition-colors duration-300 break-words">
                                                            {org.name}
                                                        </h3>
                                                        <p className="text-gray-700 font-semibold text-sm">{org.role}</p>
                                                    </div>
                                                </div>
                                                <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-bold flex-shrink-0 whitespace-nowrap ${
                                                    org.type === 'organization' 
                                                        ? 'bg-gray-900 text-white' 
                                                        : 'bg-gray-200 text-gray-900'
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
                                                <div className="mt-4 pt-4 border-t border-gray-200">
                                                    <p className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                                                        <svg className="w-4 h-4 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                                        </svg>
                                                        Key Achievements
                                                    </p>
                                                    <ul className="space-y-2">
                                                        {org.achievements.map((achievement, idx) => (
                                                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                                                                <svg className="w-4 h-4 text-gray-800 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
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
                    )}
                </div>
            </div>
        </div>
    )
}