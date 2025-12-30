'use client'

import { tools } from '@/data/tools'
import Image from 'next/image'
import { useState } from 'react'

export default function FeaturedTools() {
    const [hoveredTool, setHoveredTool] = useState<string | null>(null)

    return (
        <section className="py-4 sm:py-6 relative overflow-hidden">
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.02]">
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-0 max-w-6xl relative z-10">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-black tracking-tight">
                        Tools & <span className="text-gray-300">Technologies</span>
                    </h1>
                </div>

                {/* Elegant Minimal Grid */}
                <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-5 sm:gap-6">
                    {tools.map((tool, index) => {
                        return (
                            <div
                                key={tool.name}
                                className="group relative"
                                style={{
                                    animation: `fadeInUp 0.5s ease-out ${index * 0.05}s both`,
                                }}
                                onMouseEnter={() => setHoveredTool(tool.name)}
                                onMouseLeave={() => setHoveredTool(null)}
                            >
                                {/* Tool Card */}
                                <div className="aspect-square flex flex-col items-center justify-center p-2 cursor-pointer relative overflow-hidden">
                                    

                                    {/* Content */}
                                    <div className="relative z-0 flex flex-col items-center justify-center h-full gap-1">
                                        {/* Logo Image */}
                                        <div className="relative w-20 h-20 sm:w-23 sm:h-23 grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-105">
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
                                        <p className="text-[29px] sm:text-[20px] font-bold text-center text-gray-900 group-hover:text-white transition-colors duration-300 leading-tight px-0.5">
                                            {tool.name}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Animations */}
            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </section>
    )
}