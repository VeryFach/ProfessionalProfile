'use client'

import { menuItems } from '@/data/menuItems'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

const Navbar = () => {
    const pathname = usePathname()
    const [isVisible, setIsVisible] = useState(true)
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const brandRef = useRef<HTMLAnchorElement>(null)
    const menuButtonRef = useRef<HTMLButtonElement>(null)
    const mobileMenuRef = useRef<HTMLDivElement>(null)

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
        const desktop = window.matchMedia('(min-width: 1024px)')
        const closeOnDesktop = () => {
            if (desktop.matches) setMenuOpen(false)
        }

        desktop.addEventListener('change', closeOnDesktop)
        return () => desktop.removeEventListener('change', closeOnDesktop)
    }, [])

    const closeMenu = (returnFocus = false) => {
        setMenuOpen(false)
        if (returnFocus) window.requestAnimationFrame(() => menuButtonRef.current?.focus())
    }

    useEffect(() => {
        if (!menuOpen) return

        const previousOverflow = document.body.style.overflow
        document.body.style.overflow = 'hidden'
        const focusFrame = window.requestAnimationFrame(() => {
            mobileMenuRef.current?.querySelector<HTMLAnchorElement>('a[href]')?.focus()
        })

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                closeMenu(true)
                return
            }

            if (event.key !== 'Tab') return

            const links = Array.from(mobileMenuRef.current?.querySelectorAll<HTMLAnchorElement>('a[href]') ?? [])
            const focusable = [brandRef.current, menuButtonRef.current, ...links].filter(
                (element): element is HTMLAnchorElement | HTMLButtonElement => element !== null
            )
            const first = focusable[0]
            const last = focusable[focusable.length - 1]

            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault()
                last?.focus()
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault()
                first?.focus()
            }
        }

        document.addEventListener('keydown', handleKeyDown)
        return () => {
            window.cancelAnimationFrame(focusFrame)
            document.removeEventListener('keydown', handleKeyDown)
            document.body.style.overflow = previousOverflow
        }
    }, [menuOpen])

    return (
        <>
            <header
                className={`site-header ${scrolled ? 'site-header--scrolled' : ''} ${isVisible || menuOpen ? '' : 'site-header--hidden'}`}
                onFocusCapture={() => setIsVisible(true)}
            >
                <div className="site-header-inner">
                    <Link ref={brandRef} href="/" className="site-brand" aria-label="Very Fachrurozi, homepage">
                        <Image src="/logo.svg" alt="" width={45} height={42} priority />
                        <span>FACHRU</span>
                    </Link>

                    <nav className="site-desktop-nav" aria-label="Primary navigation">
                        {menuItems.map((item) => {
                            const active = pathname === item.href
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`site-nav-link ${active ? 'site-nav-link--active' : ''}`}
                                    aria-current={active ? 'page' : undefined}
                                >
                                    {item.label}
                                </Link>
                            )
                        })}
                    </nav>

                    <button
                        ref={menuButtonRef}
                        type="button"
                        className={`site-menu-trigger ${menuOpen ? 'site-menu-trigger--open' : ''}`}
                        onClick={() => setMenuOpen((open) => !open)}
                        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={menuOpen}
                        aria-controls="mobile-navigation"
                    >
                        <span className="site-menu-trigger-lines" aria-hidden="true"><span /><span /><span /></span>
                        <span>MENU</span>
                    </button>
                </div>
            </header>

            {menuOpen && <div className="site-menu-backdrop" aria-hidden="true" onClick={() => closeMenu(true)} />}

            <div
                ref={mobileMenuRef}
                id="mobile-navigation"
                className={`site-mobile-panel ${menuOpen ? 'site-mobile-panel--open' : ''}`}
                aria-hidden={!menuOpen}
                inert={!menuOpen}
            >
                <nav aria-label="Mobile navigation">
                    {menuItems.map((item) => {
                        const active = pathname === item.href
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`site-mobile-link ${active ? 'site-mobile-link--active' : ''}`}
                                aria-current={active ? 'page' : undefined}
                                onClick={() => setMenuOpen(false)}
                            >
                                <span>{item.label}</span>
                                <span aria-hidden="true">↗</span>
                            </Link>
                        )
                    })}
                </nav>
            </div>
        </>
    )
}

export default Navbar
