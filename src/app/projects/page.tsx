'use client'

import { projects } from '@/data/projects'
import Image from 'next/image'
import { useState } from 'react'

export default function Projects() {
    const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({})

    // Function to check if demo is valid
    const hasValidDemo = (demo?: string) => {
        // Temporarily disabled to avoid API key issues
        return false
        // return demo && demo !== '#' && demo.startsWith('http')
    }

    // Function to get screenshot URL from website
    const getScreenshotUrl = (url: string) => {
        // Using screenshotapi.net service for website preview
        return `https://api.screenshotmachine.com/?key=demo&url=${encodeURIComponent(url)}&dimension=1024x768`
    }

    const handleImageError = (index: number) => {
        setImageErrors(prev => ({ ...prev, [index]: true }))
    }

    return (
        <div className="projects-page">
            <div className="projects-shell">
                {/* Header Section with Animation */}
                <header className="projects-heading">
                    <h1 className="ds-display">
                        Featured <em>Projects</em>
                    </h1>
                    <p>
                        Explore my latest work in machine learning, web development, and software engineering
                    </p>
                </header>

                {/* Projects Grid - Minimalist Cards */}
                <div className="projects-grid">
                    {projects.map((project, index: number) => {
                        const hasLiveDemo = project.demo && project.demo !== '#' && project.demo.startsWith('http')
                        
                        return (
                        <article
                            key={index}
                            className="project-case group"
                        >
                            {/* Project Image */}
                            <div className="project-case-image">
                                {project.image ? (
                                    <Image
                                        src={project.image}
                                        alt={`${project.title} — project by Very Fachrurozi`}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        sizes="(max-width: 1100px) 100vw, 50vw"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center">
                                        <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="project-case-content">
                                {/* Title & Status */}
                                <div className="project-case-title-row">
                                    <h3>
                                        {project.title}
                                    </h3>
                                    {hasLiveDemo && (
                                        <span className="project-live">
                                            <span className="project-live-dot"></span>
                                            Live
                                        </span>
                                    )}
                                </div>

                                {/* Description */}
                                <p className="project-case-description">
                                    {project.description}
                                </p>

                                {/* Action Links - Minimal Style */}
                                <div className="project-case-actions">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-case-link"
                                        >
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                                            </svg>
                                            Code
                                        </a>
                                    )}
                                    {hasLiveDemo ? (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-case-link"
                                        >
                                            View Demo
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                    ) : (
                                        <span className="project-case-unavailable">
                                            Source code available
                                        </span>
                                    )}
                                </div>
                            </div>
                        </article>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
