'use client'

import { certificates } from '@/data'
import { useEffect, useRef, useState } from 'react'

// These paths have no original file in public/. Keep the data references for
// restoration while rendering the established certificate fallback.
const unavailableCertificateImages = new Set(['/certificates/gcp.png'])

function hasUsableCredentialUrl(url?: string): url is string {
    if (!url || url === '#' || /\s/.test(url)) return false
    try {
        const parsed = new URL(url)
        return parsed.protocol === 'https:' || parsed.protocol === 'http:'
    } catch {
        return false
    }
}

function CertificateArtwork({ src, title, issuer }: { src?: string; title: string; issuer: string }) {
    const [failed, setFailed] = useState(false)
    const imageRef = useRef<HTMLImageElement>(null)

    useEffect(() => {
        if (imageRef.current?.complete && imageRef.current.naturalWidth === 0) {
            setFailed(true)
        }
    }, [src])

    if (!src || unavailableCertificateImages.has(src) || failed) {
        return (
            <div className="certificate-image-fallback" role="img" aria-label={`Certificate image unavailable for ${title}`}>
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M12 2.5l2.8 1.4 3.1.5.5 3.1 1.4 2.8-1.4 2.8-.5 3.1-3.1.5-2.8 1.4-2.8-1.4-3.1-.5-.5-3.1-1.4-2.8 1.4-2.8.5-3.1 3.1-.5z" />
                </svg>
                <p>{issuer}</p>
            </div>
        )
    }

    return <img ref={imageRef} src={src} alt={title} className="certificate-image" onError={() => setFailed(true)} />
}

export default function CertificatesSection() {
    return (
        <div className="certificate-grid">
            {certificates.map((cert, index) => (
                <article className="certificate-card" key={index}>
                    <div className="certificate-media">
                        <CertificateArtwork src={cert.image} title={cert.title} issuer={cert.issuer} />
                        <span className="certificate-date">{cert.date}</span>
                    </div>

                    <div className="certificate-content">
                        <h3>{cert.title}</h3>
                        <p className="certificate-issuer">{cert.issuer}</p>
                        {cert.skills && cert.skills.length > 0 && (
                            <div className="certificate-skills">
                                {cert.skills.map((skill, idx) => (
                                    <span className="certificate-skill" key={idx}>{skill}</span>
                                ))}
                            </div>
                        )}
                        {hasUsableCredentialUrl(cert.credentialUrl) && (
                            <a
                                href={cert.credentialUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="certificate-link"
                            >
                                View Credential
                                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        )}
                    </div>
                </article>
            ))}
        </div>
    )
}
