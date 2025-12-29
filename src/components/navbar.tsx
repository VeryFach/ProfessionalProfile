'use client'

import { menuItems } from '@/data/menuItems'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const Navbar = () => {
    const pathname = usePathname()
    const [isVisible, setIsVisible] = useState(true)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        let lastScrollY = window.scrollY

        const handleScroll = () => {
            const currentScrollY = window.scrollY
            
            // Show navbar when scrolling up or at top
            if (currentScrollY < lastScrollY || currentScrollY < 50) {
                setIsVisible(true)
            } else if (currentScrollY > 100) {
                setIsVisible(false)
            }
            
            // Add blur effect when scrolled
            setScrolled(currentScrollY > 20)
            lastScrollY = currentScrollY
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav
            className={`
                fixed top-0 left-0 right-0 z-50
                transition-all duration-500 ease-out
                ${isVisible ? 'translate-y-0' : '-translate-y-full'}
            `}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    className={`
                        mt-4 sm:mt-6 mb-3 sm:mb-4 mx-auto w-fit
                        transition-all duration-300
                        ${scrolled ? 'scale-[0.95]' : 'scale-100'}
                    `}
                >
                    <div
                        className={`
                            relative flex items-center gap-1 sm:gap-2 p-2 sm:p-3
                            rounded-[2rem]
                            transition-all duration-300
                            ${scrolled 
                                ? 'bg-black/40 backdrop-blur-2xl border border-white/10' 
                                : 'bg-white/5 backdrop-blur-xl border border-white/20'
                            }
                            shadow-[0_8px_32px_rgba(0,0,0,0.4)]
                        `}
                    >
                        {menuItems.map((item) => {
                            const active = pathname === item.href

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="
                                        relative px-3 py-2.5 sm:px-5 sm:py-3 lg:px-6 lg:py-2.5
                                        text-xs sm:text-sm lg:text-base font-semibold tracking-wide
                                        rounded-[1.5rem]
                                        transition-all duration-300
                                        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50
                                        group
                                    "
                                >
                                    {/* Active background */}
                                    {active && (
                                        <span
                                            className="
                                                absolute inset-0 rounded-[1.5rem]
                                                bg-gradient-to-br from-white to-white/90
                                                shadow-[0_4px_16px_rgba(255,255,255,0.25)]
                                                animate-[fadeIn_.3s_ease-out]
                                            "
                                        />
                                    )}

                                    {/* Hover effect */}
                                    {!active && (
                                        <span
                                            className="
                                                absolute inset-0 rounded-[1.5rem]
                                                opacity-0 group-hover:opacity-100
                                                bg-white/10
                                                transition-opacity duration-300
                                            "
                                        />
                                    )}

                                    {/* Text */}
                                    <span
                                        className={`
                                            relative z-10 transition-colors duration-300
                                            ${active 
                                                ? 'text-black' 
                                                : 'text-white/70 group-hover:text-white'
                                            }
                                        `}
                                    >
                                        {item.label}
                                    </span>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar