'use client'

import { menuItems } from '@/data/menuItems'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const Navbar = () => {
    const pathname = usePathname()
    const [isVisible, setIsVisible] = useState(true)
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        let lastScrollY = window.scrollY

        const handleScroll = () => {
            const currentScrollY = window.scrollY

            if (currentScrollY < lastScrollY || currentScrollY < 50) {
                setIsVisible(true)
            } else if (currentScrollY > 100) {
                setIsVisible(false)
            }

            setScrolled(currentScrollY > 20)
            lastScrollY = currentScrollY
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        setMenuOpen(false)
    }, [pathname])

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => { document.body.style.overflow = '' }
    }, [menuOpen])

    return (
        <>
            {/* Desktop Nav - Centered */}
            <nav
                className={`
                    fixed top-0 left-0 right-0 z-50
                    transition-all duration-500 ease-out
                    ${isVisible ? 'translate-y-0' : '-translate-y-full'}
                    hidden md:block
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

            {/* Mobile Hamburger Button */}
            <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={`
                    fixed top-4 left-4 z-[60]
                    p-3 rounded-full
                    transition-all duration-500 ease-out
                    ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
                    md:hidden
                    ${scrolled
                        ? 'bg-black/40 backdrop-blur-2xl border border-white/10'
                        : 'bg-white/5 backdrop-blur-xl border border-white/20'
                    }
                    shadow-[0_8px_32px_rgba(0,0,0,0.4)]
                `}
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
                <div className="w-5 h-4 relative flex flex-col justify-between">
                    <span className={`block h-0.5 w-full bg-white transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
                    <span className={`block h-0.5 w-full bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                    <span className={`block h-0.5 w-full bg-white transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
                </div>
            </button>

            {/* Mobile Menu Overlay */}
            {menuOpen && (
                <div
                    className="fixed inset-0 z-40 md:hidden"
                    onClick={() => setMenuOpen(false)}
                >
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
                </div>
            )}

            {/* Mobile Menu Panel */}
            <div
                className={`
                    fixed top-0 left-0 h-full w-64 z-50
                    transform transition-all duration-300 ease-out
                    ${menuOpen ? 'translate-x-0' : '-translate-x-full'}
                    md:hidden
                    bg-black/60 backdrop-blur-2xl border-r border-white/10
                    shadow-[0_8px_32px_rgba(0,0,0,0.4)]
                    pt-20 px-6
                `}
            >
                <nav className="flex flex-col gap-2">
                    {menuItems.map((item) => {
                        const active = pathname === item.href

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`
                                    relative px-4 py-3 rounded-2xl
                                    text-sm font-semibold tracking-wide
                                    transition-all duration-300
                                    ${active
                                        ? 'bg-gradient-to-br from-white to-white/80 text-black'
                                        : '!text-white/70 hover:!text-white hover:bg-white/10'
                                    }
                                `}
                            >
                                {item.label}
                            </Link>
                        )
                    })}
                </nav>
            </div>
        </>
    )
}

export default Navbar
