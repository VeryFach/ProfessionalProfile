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

                {/* Projects Grid - Enhanced with staggered animation */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
                    {projects.map((project, index: number) => {
                        const hasLiveDemo = project.demo && project.demo !== '#' && project.demo.startsWith('http')
                        
                        return (
                        <div
                            key={index}
                            className="group bg-white rounded-2xl overflow-hidden
                                        shadow-lg hover:shadow-2xl transition-all duration-500 ease-out
                                        hover:-translate-y-2 border-2 border-gray-100
                                        hover:border-red-300 flex flex-col h-full"
                            style={{
                                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                            }}
                        >
                            {/* Project Image with Status Badge */}
                            <div className="relative overflow-hidden h-56 sm:h-64 bg-gradient-to-br from-gray-100 to-gray-50">
                                {/* Status Badge */}
                                <div className="absolute top-4 left-4 z-10">
                                    {hasLiveDemo ? (
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-500 text-white text-xs font-bold rounded-full shadow-lg">
                                            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                                            LIVE
                                        </span>
                                    ) : (
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-800 text-white text-xs font-bold rounded-full shadow-lg">
                                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                            CODE
                                        </span>
                                    )}
                                </div>
                                
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-all duration-700 
                                                    group-hover:scale-110 group-hover:rotate-1"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement
                                            target.style.display = 'none'
                                        }}
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center">
                                        <svg className="w-20 h-20 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                )}
                                
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                                
                                {/* Quick Action Buttons on Hover */}
                                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                    {hasLiveDemo && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-red-500 text-white px-6 py-3 rounded-xl font-bold text-sm
                                                      hover:bg-red-600 transition-all duration-300
                                                      transform hover:scale-110 flex items-center gap-2 shadow-2xl
                                                      translate-y-4 group-hover:translate-y-0"
                                            style={{ transitionDelay: '100ms' }}
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                            View Live
                                        </a>
                                    )}
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-white text-black px-6 py-3 rounded-xl font-bold text-sm
                                                      hover:bg-gray-100 transition-all duration-300
                                                      transform hover:scale-110 flex items-center gap-2 shadow-2xl
                                                      translate-y-4 group-hover:translate-y-0"
                                            style={{ transitionDelay: '200ms' }}
                                        >
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                                            </svg>
                                            View Code
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Content Container with Enhanced Styling */}
                            <div className="p-6 sm:p-8 flex-1 flex flex-col">
                                {/* Project Title */}
                                <h3 className="text-2xl sm:text-3xl font-bold text-black leading-tight mb-3
                                                group-hover:text-red-600 transition-colors duration-300">
                                    {project.title}
                                </h3>
                                
                                {/* Decorative Line */}
                                <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-red-300 rounded-full mb-5
                                                group-hover:w-24 transition-all duration-500"></div>

                                {/* Project Description */}
                                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 flex-1 line-clamp-4">
                                    {project.description}
                                </p>

                                {/* Action Buttons - Clear and Prominent */}
                                <div className="flex gap-3 pt-4 border-t border-gray-100">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 flex items-center justify-center gap-2 px-5 py-3.5
                                                      bg-gray-300 text-white rounded-xl font-bold text-sm
                                                      hover:bg-gray-800 transition-all duration-300
                                                      hover:shadow-xl transform hover:-translate-y-0.5"
                                        >
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                                            </svg>
                                        </a>
                                    )}
                                    {hasLiveDemo ? (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 flex items-center justify-center gap-2 px-5 py-3.5
                                                      bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl font-bold text-sm
                                                      hover:from-red-600 hover:to-red-700 transition-all duration-300
                                                      hover:shadow-xl transform hover:-translate-y-0.5"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                            Live Demo
                                        </a>
                                    ) : (
                                        <div className="flex-1 flex items-center justify-center gap-2 px-5 py-3.5
                                                      bg-gray-100 text-gray-400 rounded-xl font-bold text-sm cursor-not-allowed">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                            </svg>
                                            Coming Soon
                                        </div>
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