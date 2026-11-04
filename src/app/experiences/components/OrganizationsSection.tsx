'use client'

import { organizations } from '@/data'
import { useEffect, useRef, useState } from 'react'

// These original logo files are absent from public/. Preserve the data paths.
const unavailableOrganizationLogos = new Set([
    '/organizations/equalogic.webp',
    '/organizations/before-2024.webp',
])

function OrganizationLogo({ src, name }: { src?: string; name: string }) {
    const [failed, setFailed] = useState(false)
    const imageRef = useRef<HTMLImageElement>(null)

    useEffect(() => {
        if (imageRef.current?.complete && imageRef.current.naturalWidth === 0) {
            setFailed(true)
        }
    }, [src])

    if (!src || unavailableOrganizationLogos.has(src) || failed) {
        return (
            <div
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl bg-gradient-to-br from-gray-800 to-black flex items-center justify-center flex-shrink-0"
                role="img"
                aria-label={`Logo unavailable for ${name}`}
            >
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            </div>
        )
    }

    return (
        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-200 flex items-center justify-center flex-shrink-0">
            <img
                ref={imageRef}
                src={src}
                alt={name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                onError={() => setFailed(true)}
            />
        </div>
    )
}

export default function OrganizationsSection() {
    return (
        <div className="animate-fadeIn">
            <div className="organization-grid grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {organizations.map((org, index) => (
                    <div
                        key={index}
                        className="organization-card group bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl
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
                                    <OrganizationLogo src={org.logo} name={org.name} />
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
    )
}
