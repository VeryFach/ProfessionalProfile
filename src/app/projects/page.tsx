'use client'

import { projects } from '@/data/projects'
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
        <div className="min-h-screen py-16 sm:py-20 lg:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 max-w-7xl">
                {/* Header Section with Animation */}
                <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-black mb-4 tracking-tight animate-fade-in">
                        Featured <span className="text-white">Projects</span>
                    </h1>
                    <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Explore my latest work in machine learning, web development, and software engineering
                    </p>
                </div>

                {/* Projects Grid - Minimalist Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                    {projects.map((project, index: number) => {
                        const hasLiveDemo = project.demo && project.demo !== '#' && project.demo.startsWith('http')
                        
                        return (
                        <div
                            key={index}
                            className="group bg-white border border-gray-200 rounded-lg overflow-hidden
                                        hover:border-gray-900 transition-all duration-300"
                        >
                            {/* Project Image */}
                            <div className="relative overflow-hidden aspect-video bg-gray-50">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 
                                                    group-hover:scale-105"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement
                                            target.style.display = 'none'
                                        }}
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center">
                                        <svg className="w-16 h-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                {/* Title & Status */}
                                <div className="flex items-start justify-between mb-3">
                                    <h3 className="text-xl font-semibold text-gray-900 flex-1">
                                        {project.title}
                                    </h3>
                                    {hasLiveDemo && (
                                        <span className="flex items-center gap-1.5 text-xs text-green-600 font-medium ml-3">
                                            <span className="w-1.5 h-1.5 bg-green-600 rounded-full"></span>
                                            Live
                                        </span>
                                    )}
                                </div>

                                {/* Description */}
                                <p className="text-gray-600 text-sm leading-relaxed mb-5 line-clamp-3">
                                    {project.description}
                                </p>

                                {/* Action Links - Minimal Style */}
                                <div className="flex items-center gap-4 text-sm">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1.5 text-gray-700 hover:text-gray-900 
                                                      transition-colors duration-200 font-medium"
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
                                            className="flex items-center gap-1.5 text-gray-900 hover:text-gray-700
                                                      transition-colors duration-200 font-medium"
                                        >
                                            View Demo
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                    ) : (
                                        <span className="flex items-center gap-1.5 text-gray-400 font-medium">
                                            Coming Soon
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}