'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

const HeroSection = () => {
    const firstSectionRef = useRef<HTMLElement>(null)
    const secondSectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const sections = [firstSectionRef.current, secondSectionRef.current].filter(
            (section): section is HTMLElement => section !== null
        )

        // Content is visible in the server-rendered HTML. Motion is opt-in only
        // when the browser can observe the section and the user permits it.
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in')
                    observer.unobserve(entry.target)
                }
            })
        }, { threshold: 0.1, rootMargin: '0px 0px -10% 0px' })

        sections.forEach((section) => observer.observe(section))
        return () => observer.disconnect()
    }, [])

    return (
        <>
            <section id="home-intro" ref={firstSectionRef} className="hero-primary section-transition home-anchor" aria-labelledby="home-intro-title">
                <div className="hero-primary-grain" aria-hidden="true" />
                <div className="hero-primary-inner">
                    <div className="hero-primary-copy slide-in-left">
                        <div className="text-reveal">
                            <h1 id="home-intro-title" className="hero-primary-title">
                                BACKEND FIRST.<br />
                                BUILT TO SOLVE<br />
                                REAL PROBLEMS.<br />
                                <span>ALWAYS CURIOUS.</span>
                            </h1>
                        </div>

                        <div className="hero-primary-bottom text-reveal">
                            <p className="hero-primary-description">
                                I&apos;M VERY, A COMPUTER SCIENCE STUDENT BUILDING APIs, WORKING WITH DATA, AND EXPLORING CLOUD TECHNOLOGY. HERE&apos;S WHAT I&apos;VE MADE AND WHAT I CAN BRING TO A TEAM.
                            </p>
                            <div className="hero-primary-actions">
                                <Link href="/projects" className="hero-cta">EXPLORE PROJECTS <span aria-hidden="true">↗</span></Link>
                                <Link href="/contact" className="hero-cta hero-cta-outline">LET&apos;S TALK <span aria-hidden="true">↗</span></Link>
                            </div>
                        </div>
                    </div>

                    <div className="hero-primary-visual slide-in-right">
                        <div className="hero-primary-photo-frame">
                            <Image
                                src="/image/hero.webp"
                                alt="Very Fachrurozi — Backend Developer & Computer Science Student"
                                fill
                                className="hero-primary-photo"
                                priority
                                sizes="(max-width: 767px) 90vw, (max-width: 1023px) 60vw, 38vw"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section id="home-interests" ref={secondSectionRef} className="hero-interests section-transition home-anchor" aria-label="Interests and exploration">
                <div className="hero-interests-inner">
                    <div className="hero-interests-main slide-in-left">
                        <p className="hero-interests-copy fade-in-up">
                            IT REFLECTS 360 DAYS OF EXPLORING DIVERSE TOPICS SOME PURSUED FOR LEARNING, OTHERS SIMPLY FOR THE JOY OF DISCOVERY.
                        </p>

                        <div className="hero-interests-playground">
                            <ul className="hero-topic-grid" aria-label="Interest topics">
                                <li className="hero-topic topic-bubble">SECURITY</li>
                                <li className="hero-topic topic-bubble">POLITICAL</li>
                                <li className="hero-topic topic-bubble">MEME</li>
                                <li className="hero-topic topic-bubble">DEVSECOPS</li>
                                <li className="hero-topic topic-bubble">CLOUD FINOPS</li>
                                <li className="hero-topic topic-bubble">CONTAINER</li>
                                <li className="hero-topic topic-bubble">CS-2</li>
                            </ul>
                            <div className="hero-interests-character fade-in-up">
                                <Image
                                    src="/image/meme.webp"
                                    alt="Very Fachrurozi interests — security, political, meme, DevSecOps"
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 767px) 112px, 160px"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="hero-interests-visual slide-in-right">
                        <div className="hero-interests-photo-frame">
                            <Image
                                src="/image/hero2.webp"
                                alt="Very Fachrurozi — Atmospheric Portrait showcasing computer science passion"
                                fill
                                className="hero-interests-photo"
                                sizes="(max-width: 767px) 90vw, (max-width: 1023px) 60vw, 34vw"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSection
