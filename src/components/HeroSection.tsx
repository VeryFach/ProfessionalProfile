'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

const HeroSection = () => {
    const firstSectionRef = useRef(null)
    const secondSectionRef = useRef(null)

    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -10% 0px'
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in')
                }
            })
        }, observerOptions)

        if (firstSectionRef.current) {
            observer.observe(firstSectionRef.current)
        }
        if (secondSectionRef.current) {
            observer.observe(secondSectionRef.current)
        }

        // Auto-reload functionality when scrolling back to top
        const handleScroll = () => {
            if (window.scrollY === 0) {
                // Small delay to ensure user actually stopped at top
                setTimeout(() => {
                    if (window.scrollY === 0) {
                        window.location.reload()
                    }
                }, 100)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            observer.disconnect()
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <>
            <style jsx global>{`
                .section-transition {
                    opacity: 0;
                    transform: translateY(60px) scale(0.95);
                    transition: all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                }
                
                .section-transition.animate-in {
                    opacity: 1;
                    transform: translateY(0) scale(1);
                }

                .slide-in-left {
                    transform: translateX(-80px) rotateY(15deg);
                    opacity: 0;
                    filter: blur(8px);
                    transition: all 1s cubic-bezier(0.23, 1, 0.32, 1) 0.3s;
                }

                .slide-in-right {
                    transform: translateX(80px) rotateY(-15deg);
                    opacity: 0;
                    filter: blur(8px);
                    transition: all 1s cubic-bezier(0.23, 1, 0.32, 1) 0.3s;
                }

                .animate-in .slide-in-left,
                .animate-in .slide-in-right {
                    transform: translateX(0) rotateY(0deg);
                    opacity: 1;
                    filter: blur(0px);
                }

                .fade-in-up {
                    transform: translateY(50px) scale(0.8);
                    opacity: 0;
                    filter: blur(4px);
                    transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .animate-in .fade-in-up {
                    transform: translateY(0) scale(1);
                    opacity: 1;
                    filter: blur(0px);
                }

                /* Staggered delays with more dramatic timing */
                .fade-in-up:nth-child(1) { transition-delay: 0.1s; }
                .fade-in-up:nth-child(2) { transition-delay: 0.25s; }
                .fade-in-up:nth-child(3) { transition-delay: 0.4s; }
                .fade-in-up:nth-child(4) { transition-delay: 0.55s; }
                .fade-in-up:nth-child(5) { transition-delay: 0.7s; }
                .fade-in-up:nth-child(6) { transition-delay: 0.85s; }
                .fade-in-up:nth-child(7) { transition-delay: 1s; }

                /* Enhanced bubble animations */
                .topic-bubble {
                    transform: translateY(60px) scale(0.3) rotate(45deg);
                    opacity: 0;
                    filter: blur(6px);
                    transition: all 1s cubic-bezier(0.34, 1.56, 0.64, 1);
                }

                .animate-in .topic-bubble {
                    transform: translateY(0) scale(1) rotate(0deg);
                    opacity: 1;
                    filter: blur(0px);
                }

                .topic-bubble:hover {
                    transform: translateY(-5px) scale(1.05);
                    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
                    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                }

                /* Cinematic text reveal */
                .text-reveal {
                    opacity: 0;
                    transform: translateY(30px);
                    clip-path: inset(100% 0 0 0);
                    transition: all 0.8s cubic-bezier(0.77, 0, 0.175, 1);
                }

                .animate-in .text-reveal {
                    opacity: 1;
                    transform: translateY(0);
                    clip-path: inset(0% 0 0 0);
                }

                .text-reveal:nth-child(1) { transition-delay: 0.2s; }
                .text-reveal:nth-child(2) { transition-delay: 0.4s; }

                /* Improved silhouette image effect */
                .silhouette-image {
                    filter: brightness(0.2) contrast(1.5) saturate(0) blur(1px);
                    transform: scale(1.1);
                    transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                }

                .animate-in .silhouette-image {
                    filter: brightness(0.3) contrast(1.2) saturate(0) blur(0px);
                    transform: scale(1);
                }

                .silhouette-image:hover {
                    filter: brightness(1) contrast(1) saturate(1) blur(0px);
                    transform: scale(1.02);
                }

                /* Floating animation for strawberry character */
                .float-animation {
                    animation: float 3s ease-in-out infinite;
                }

                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-10px) rotate(5deg); }
                }

                /* Pulse effect for title */
                .title-pulse {
                    animation: titlePulse 4s ease-in-out infinite;
                }

                @keyframes titlePulse {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.9; transform: scale(1.01); }
                }

                /* Perspective container for 3D effects */
                .perspective-container {
                    perspective: 1000px;
                    transform-style: preserve-3d;
                }

                /* Glowing text effect */
                .glow-text {
                    text-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    transition: text-shadow 0.3s ease;
                }

                .animate-in .glow-text {
                    text-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
                }

                /* Enhanced backdrop filter effects */
                .glass-effect {
                    backdrop-filter: blur(10px);
                    background: rgba(255, 255, 255, 0.57);
                    border: 1px solid rgba(255, 255, 255, 0.63);
                    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                }
            `}</style>

            {/* First Section */}
            <section ref={firstSectionRef} className="min-h-screen flex items-center relative section-transition">
                {/* Header Title */}
                <div className="absolute top-8 left-8 z-20 fade-in-up">
                    <h1 className="text-2xl font-bold text-black tracking-wide title-pulse glow-text">
                        FACHRU
                    </h1>
                </div>

                {/* Left Side - Silhouette Image */}
                <div className="w-1/2 h-screen relative slide-in-left perspective-container">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-full max-w-[480px] h-[600px] relative overflow-hidden rounded-lg">
                            <Image
                                src="/image/hero.jpg"
                                alt="Silhouette"
                                fill
                                className="object-cover silhouette-image"
                                priority
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                </div>

                {/* Right Side - Main Content */}
                <div className="w-1/2 h-screen flex flex-col justify-center px-16 slide-in-right">
                    <div className="space-y-6">
                        {/* Main Heading */}
                        <div className="text-reveal">
                            <h2 className="text-7xl font-black text-black leading-[0.9] tracking-tight glow-text">
                                CS STUDENT.<br />
                                NETWORKS<br />
                                BUZZING.<br />
                                DATA CRUNCHING.<br />
                                CLOUDS FLOATING.
                            </h2>
                        </div>

                        {/* Description */}
                        <div className="mt-12 text-reveal">
                            <p className="text-lg font-medium text-black max-w-4xl leading-relaxed">
                                IT PORTRAYS A COMPUTER SCIENCE STUDENT IMMERSED IN NETWORKING, DATA ANALYSIS, AND CLOUD TECHNOLOGIES, DRIVEN BY A RESTLESS, CURIOUS MIND
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Second Section */}
            <section ref={secondSectionRef} className="min-h-screen flex items-center relative section-transition">
                {/* Left Side - Topics */}
                <div className="w-3/5 h-screen flex flex-col justify-center px-16 relative slide-in-left">
                    {/* Top Text */}
                    <div className="absolute top-20 left-16 max-w-lg fade-in-up">
                        <p className="text-black font-bold text-2xl leading-tight tracking-wide">
                            IT REFLECTS 360 DAYS OF EXPLORING DIVERSE TOPICS SOME PURSUED FOR LEARNING, OTHERS SIMPLY FOR THE JOY OF DISCOVERY.
                        </p>
                    </div>

                    {/* Topic Bubbles Container */}
                    <div className="relative flex items-center justify-center h-full">
                        {/* Strawberry Character - positioned in center */}
                        <div className="absolute z-20 top-2 right-10 fade-in-up float-animation">
                            <div className="w-70 h-100 relative">
                                <Image
                                    src="/image/meme.png"
                                    alt="Strawberry Character"
                                    fill
                                    className="object-contain"
                                    sizes="64px"
                                />
                            </div>
                        </div>

                        {/* Topic Bubbles - arranged around the strawberry */}
                        <div className="relative w-full max-w-2xl h-96 perspective-container">
                            {/* SECURITY - top left */}
                            <div className="absolute top-0 left-10 bg-white border-2 border-black rounded-full w-78 h-28 flex items-center justify-center shadow-lg transform -rotate-12 topic-bubble glass-effect">
                                <span className="text-black font-bold text-5xl tracking-wide">SECURITY</span>
                            </div>

                            {/* POLITICAL - top center, angled */}
                            <div className="absolute top-31 left-1/2 transform -translate-x-1/2 bg-white border-2 border-black rounded-full w-78 h-28 flex items-center justify-center shadow-lg rotate-12 topic-bubble glass-effect">
                                <span className="text-black font-bold text-5xl tracking-wide">POLITICAL</span>
                            </div>

                            {/* MEME - top right */}
                            <div className="absolute top-9 right-1 bg-white border-2 border-black rounded-full w-78 h-28 flex items-center justify-center shadow-lg transform rotate-6 topic-bubble glass-effect">
                                <span className="text-black font-bold text-5xl tracking-wide">MEME</span>
                            </div>

                            {/* DEVSECOPS - middle left */}
                            <div className="absolute top-72 left-[-40px] transform -translate-y-1/2 bg-white border-2 border-black rounded-full w-88 h-28 flex items-center justify-center shadow-lg -rotate-6 topic-bubble glass-effect">
                                <span className="text-black font-bold text-5xl tracking-wide">DEVSECOPS</span>
                            </div>

                            {/* HYBRID CLOUD - middle right */}
                            <div className="absolute top-79 right-[-40px] transform -translate-y-1/2 bg-white border-2 border-black rounded-full w-98 h-28 flex items-center justify-center shadow-lg rotate-3 topic-bubble glass-effect">
                                <span className="text-black font-bold text-5xl tracking-wide">HYBRID CLOUD</span>
                            </div>

                            {/* CONTAINER - bottom left */}
                            <div className="absolute bottom-[-72px] left-12 bg-white border-2 border-black rounded-full w-78 h-28 flex items-center justify-center shadow-lg transform -rotate-3 topic-bubble glass-effect">
                                <span className="text-black font-bold text-5xl tracking-wide">CONTAINER</span>
                            </div>

                            {/* CS:GO - bottom center */}
                            <div className="absolute bottom-[-105px] left-128 transform -translate-x-1/2 bg-white border-2 border-black rounded-full w-78 h-28 flex items-center justify-center shadow-lg rotate-6 topic-bubble glass-effect">
                                <span className="text-black font-bold text-5xl tracking-wide">CS:GO</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side - Atmospheric Image */}
                <div className="w-2/5 h-screen relative slide-in-right">
                    <div className="absolute inset-0 flex items-center justify-center pr-16">
                        <div className="w-full max-w-[380px] h-[600px] relative overflow-hidden rounded-lg">
                            <Image
                                src="/image/hero2.png"
                                alt="Atmospheric"
                                fill
                                className="object-cover silhouette-image"
                                sizes="(max-width: 768px) 100vw, 40vw"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSection