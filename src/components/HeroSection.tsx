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

        return () => {
            observer.disconnect()
        }
    }, [])

    return (
        <>
            {/* First Section */}
            <section ref={firstSectionRef} className="min-h-screen flex flex-col lg:flex-row items-center relative section-transition px-6 sm:px-8 lg:px-12 xl:px-16">
                {/* Header Title */}
                <div className="absolute top-4 sm:top-6 lg:top-10 left-6 sm:left-8 lg:left-12 xl:left-16 z-20 fade-in-up">
                    <h1 className="text-xl sm:text-2xl lg:text-2xl font-bold text-black tracking-wide title-pulse glow-text">
                        FACHRU
                    </h1>
                </div>

                {/* Left Side - Silhouette Image */}
                <div className="w-full lg:w-1/2 h-[50vh] lg:h-screen relative slide-in-left perspective-container mt-16 lg:mt-0">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-full max-w-[300px] sm:max-w-[380px] lg:max-w-[480px] h-[350px] sm:h-[450px] lg:h-[600px] relative overflow-hidden rounded-lg">
                            <Image
                                src="/image/hero.jpg"
                                alt="Silhouette"
                                fill
                                className="object-cover silhouette-image"
                                priority
                                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 60vw, 50vw"
                            />
                        </div>
                    </div>
                </div>

                {/* Right Side - Main Content */}
                <div className="w-full lg:w-1/2 h-auto lg:h-screen flex flex-col justify-center py-8 lg:py-0 slide-in-right">
                    <div className="space-y-4 sm:space-y-6">
                        {/* Main Heading */}
                        <div className="text-reveal">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-black leading-[0.95] tracking-tight glow-text">
                                CS STUDENT.<br />
                                BACKEND FIRST<br />
                                FRONTEND CAPABLE.<br />
                                DATA CRUNCHING.<br />
                                CLOUDS FLOATING.
                            </h2>
                        </div>

                        {/* Description */}
                        <div className="mt-6 sm:mt-8 lg:mt-12 text-reveal">
                            <p className="text-sm sm:text-base lg:text-lg font-medium text-black max-w-4xl leading-relaxed">
                                IT PORTRAYS A COMPUTER SCIENCE STUDENT IMMERSED IN BACKEND ENGINEERING, MODERN INTERFACES, DATA ANALYSIS, AND CLOUD TECHNOLOGIES DRIVEN BY A RESTLESS, CURIOUS MIND.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Second Section */}
            <section ref={secondSectionRef} className="min-h-screen flex flex-col-reverse lg:flex-row items-center relative section-transition px-6 sm:px-8 lg:px-12 xl:px-16 py-8 lg:py-0">
                {/* Left Side - Topics */}
                <div className="w-full lg:w-3/5 min-h-[70vh] lg:h-screen flex flex-col justify-center relative slide-in-left">
                    {/* Top Text */}
                    <div className="relative lg:absolute lg:top-20 lg:left-0 max-w-lg mb-8 lg:mb-0 fade-in-up">
                        <p className="text-black font-bold text-lg sm:text-xl lg:text-2xl leading-tight tracking-wide">
                            IT REFLECTS 360 DAYS OF EXPLORING DIVERSE TOPICS SOME PURSUED FOR LEARNING, OTHERS SIMPLY FOR THE JOY OF DISCOVERY.
                        </p>
                    </div>

                    {/* Topic Bubbles Container */}
                    <div className="relative flex items-center justify-center h-full min-h-[400px] sm:min-h-[300px] lg:min-h-0">
                        {/* Strawberry Character - positioned in center */}
                        <div className="relative lg:absolute z-20 mx-auto lg:mx-0 mb-4 lg:mb-0 lg:top-2 lg:right-10 fade-in-up float-animation">
                            <div className="w-16 h-50 sm:w-20 sm:h-20 lg:w-70 lg:h-100 relative">
                                <Image
                                    src="/image/meme.webp"
                                    alt="Strawberry Character"
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 640px) 64px, (max-width: 1024px) 80px, 280px"
                                />
                            </div>
                        </div>

                        {/* Topic Bubbles - arranged around the strawberry */}
                        <div className="relative w-full max-w-xs sm:max-w-md lg:max-w-2xl h-80 sm:h-96 lg:h-96 mx-auto scale-90 sm:scale-100 lg:scale-100 perspective-container">
                            {/* SECURITY - top left */}
                            <div className="absolute top-10 sm:top-0 left-5 sm:left-6 lg:left-10 bg-white border border-black sm:border-2 rounded-full w-30 h-10 sm:w-32 sm:h-14 lg:w-78 lg:h-28 flex items-center justify-center shadow-lg transform -rotate-12 topic-bubble glass-effect">
                                <span className="text-black font-bold text-base sm:text-base lg:text-5xl tracking-wide">SECURITY</span>
                            </div>

                            {/* POLITICAL - top center, angled */}
                            <div className="absolute top-22 sm:top-16 lg:top-31 left-1/2 transform -translate-x-1/2 bg-white border border-black sm:border-2 rounded-full w-30 h-10 sm:w-32 sm:h-14 lg:w-78 lg:h-28 flex items-center justify-center shadow-lg rotate-12 topic-bubble glass-effect">
                                <span className="text-black font-bold text-base sm:text-base lg:text-5xl tracking-wide">POLITICAL</span>
                            </div>

                            {/* MEME - top right */}
                            <div className="absolute top-15 sm:top-4 lg:top-9 right-2 sm:right-1 lg:right-1 bg-white border border-black sm:border-2 rounded-full w-25 h-10 sm:w-24 sm:h-14 lg:w-78 lg:h-28 flex items-center justify-center shadow-lg transform rotate-6 topic-bubble glass-effect">
                                <span className="text-black font-bold text-base sm:text-base lg:text-5xl tracking-wide">MEME</span>
                            </div>

                            {/* DEVSECOPS - middle left */}
                            <div className="absolute top-37 sm:top-32 lg:top-72 left-[-20px] sm:left-[-30px] lg:left-[-40px] transform -translate-y-1/2 bg-white border border-black sm:border-2 rounded-full w-35 h-10 sm:w-36 sm:h-14 lg:w-88 lg:h-28 flex items-center justify-center shadow-lg -rotate-6 topic-bubble glass-effect">
                                <span className="text-black font-bold text-base sm:text-sm lg:text-5xl tracking-wide">DEVSECOPS</span>
                            </div>

                            {/* HYBRID CLOUD - middle right */}
                            <div className="absolute top-40 sm:top-40 lg:top-79 right-[-20px] sm:right-[-30px] lg:right-[-40px] transform -translate-y-1/2 bg-white border border-black sm:border-2 rounded-full w-38 h-10 sm:w-40 sm:h-14 lg:w-98 lg:h-28 flex items-center justify-center shadow-lg rotate-3 topic-bubble glass-effect">
                                <span className="text-black font-bold text-base sm:text-sm lg:text-5xl tracking-wide">HYBRID CLOUD</span>
                            </div>

                            {/* CONTAINER - bottom left */}
                            <div className="absolute bottom-28 sm:bottom-4 lg:bottom-[-72px] left-4 sm:left-8 lg:left-12 bg-white border border-black sm:border-2 rounded-full w-30 h-10 sm:w-32 sm:h-14 lg:w-78 lg:h-28 flex items-center justify-center shadow-lg transform -rotate-3 topic-bubble glass-effect">
                                <span className="text-black font-bold text-base sm:text-base lg:text-5xl tracking-wide">CONTAINER</span>
                            </div>

                            {/* CS:GO - bottom center */}
                            <div className="absolute bottom-23 sm:bottom-[-10px] lg:bottom-[-105px] left-50 lg:left-128 transform -translate-x-1/2 bg-white border border-black sm:border-2 rounded-full w-30 h-10 sm:w-24 sm:h-14 lg:w-78 lg:h-28 flex items-center justify-center shadow-lg rotate-6 topic-bubble glass-effect">
                                <span className="text-black font-bold text-base sm:text-base lg:text-5xl tracking-wide">CS:GO</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side - Atmospheric Image */}
                <div className="w-full lg:w-2/5 h-[40vh] sm:h-[50vh] lg:h-screen relative slide-in-right mb-8 lg:mb-0">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[380px] h-[300px] sm:h-[400px] lg:h-[600px] relative overflow-hidden rounded-lg">
                            <Image
                                src="/image/hero2.webp"
                                alt="Atmospheric"
                                fill
                                className="object-cover silhouette-image"
                                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 60vw, 40vw"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSection
