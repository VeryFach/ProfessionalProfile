'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const Navbar = () => {
    const pathname = usePathname()
    const [isVisible, setIsVisible] = useState(false)

    const menuItems = [
        { label: 'WORKS', href: '/projects' },
        { label: 'STORIES', href: '/blog' },
        { label: 'EXPERIENCES', href: '/about' },
        { label: 'ABOUT', href: '/contact' },
    ]

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            // Show navbar when cursor is within 80px from the left edge
            const showThreshold = 80
            const hideThreshold = 320 // Hide when cursor moves beyond this point
            
            if (e.clientX <= showThreshold) {
                setIsVisible(true)
            } else if (e.clientX >= hideThreshold) {
                setIsVisible(false)
            }
        }

        // Add event listener
        document.addEventListener('mousemove', handleMouseMove)

        // Cleanup
        return () => {
            document.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])

    return (
        <>
            {/* Invisible trigger area */}
            <div 
                className="fixed left-0 top-0 w-20 h-full z-20"
                onMouseEnter={() => setIsVisible(true)}
            />
            
            {/* Navbar */}
            <nav className={`
                fixed left-6 top-1/2 -translate-y-1/2 z-10 transition-all duration-500 ease-out
                ${isVisible
                    ? 'translate-x-0 opacity-100'
                    : '-translate-x-full opacity-0'
                }
            `}>
                <div className="flex flex-col">
                    {menuItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`
                                px-20 py-8 mb-12 last:mb-0
                                text-xl font-semibold transition-all duration-300 rounded-full
                                backdrop-blur-md border border-white/20 shadow-lg min-w-[240px] text-center
                                ${pathname === item.href
                                    ? 'bg-black/70 text-white border-black/30'
                                    : 'bg-white/10 text-white hover:bg-white/20 hover:border-white/30'
                                }
                            `}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            </nav>
        </>
    )
}

export default Navbar