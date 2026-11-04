'use client'

import { projects } from '@/data'
import Image from 'next/image'
import Link from 'next/link'

export default function FeaturedProjects() {
    const featuredProjects = projects.slice(0, 4)
    const contributions = [
        'Hospital search, availability checks, and health articles',
        'APIs, nutrition analysis, database, and AI integration',
        'Backend development and MongoDB integration',
        'Express.js backend integration',
    ]

    return (
        <section className="featured-work" aria-labelledby="featured-work-title">
            <div className="featured-work-shell">
                {/* Section Header */}
                <header className="featured-work-heading">
                    <p className="ds-label">SELECTED WORK / 01—04</p>
                    <h2 id="featured-work-title" className="ds-heading">
                        PROJECTS <em>WITH PURPOSE.</em>
                    </h2>
                    <p className="featured-work-intro">
                        REAL PRODUCTS, REAL PROBLEMS, AND THE PART I PLAYED IN BUILDING THEM.
                    </p>
                </header>

                {/* Projects Grid - Minimalist Design */}
                <div className="featured-work-grid">
                    {featuredProjects.map((project, index) => (
                        <article
                            key={index}
                            className="featured-case group"
                        >
                            {/* Project Image */}
                            <div className="featured-case-image">
                                <Image
                                    src={project.image}
                                    alt={`${project.title} — project by Very Fachrurozi`}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                {/* Overlay on hover */}
                                <div className="featured-case-shade" aria-hidden="true" />
                                
                                {/* Quick Links */}
                                <div className="featured-case-links">
                                    {project.demo && project.demo !== '#' && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`Open ${project.title} live demo`}
                                            className="featured-case-icon-link"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                    )}
                                    {project.github && project.github !== '#' && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`View ${project.title} source code`}
                                            className="featured-case-icon-link"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                            </svg>
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Project Info */}
                            <div className="featured-case-content">
                                <h3>
                                    {project.title}
                                </h3>
                                <p className="featured-case-description">
                                    {project.description}
                                </p>
                                <p className="featured-case-role">
                                    MY ROLE — {contributions[index]}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>

                {/* View All Button */}
                <div className="featured-work-footer">
                    <Link
                        href="/projects"
                        className="featured-work-link group"
                    >
                        View All Projects
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    )
}
