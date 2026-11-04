'use client'

import { tools } from '@/data/tools'
import Image from 'next/image'

export default function FeaturedTools() {
    return (
        <section className="featured-tools" aria-labelledby="featured-tools-title">
            <div className="featured-tools-shell">
                {/* Header */}
                <header className="featured-tools-heading">
                    <p className="ds-label">THE TOOLKIT</p>
                    <h2 id="featured-tools-title" className="ds-heading">
                        TOOLS & <em>TECHNOLOGIES.</em>
                    </h2>
                    <p>The tools I use across backend, data, and infrastructure projects.</p>
                </header>

                {/* Elegant Minimal Grid */}
                <ul className="featured-tools-grid">
                    {tools.map((tool) => {
                        return (
                            <li
                                key={tool.name}
                                className="featured-tool-card group"
                            >
                                {/* Tool Card */}
                                <div className="featured-tool-inner">
                                    

                                    {/* Content */}
                                    <div className="featured-tool-content">
                                        {/* Logo Image */}
                                        <div className="featured-tool-logo">
                                            <Image
                                                src={tool.logo}
                                                alt={`${tool.name} logo`}
                                                fill
                                                className="object-contain"
                                                onError={(e) => {
                                                    const target = e.target as HTMLImageElement
                                                    target.style.display = 'none'
                                                }}
                                            />
                                        </div>
                                        
                                        {/* Name */}
                                        <p className="featured-tool-name">
                                            {tool.name}
                                        </p>
                                    </div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}
