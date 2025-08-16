'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const Navbar = () => {
    const pathname = usePathname()
    const [isVisible, setIsVisible] = useState(false)

    const menuItems = [
        { label: '</>', href: '/' },
        { label: 'WORKS', href: '/projects' },
        { label: 'STORIES', href: '/blog' },
        { label: 'EXPERIENCES', href: '/about' },
        { label: 'ABOUT', href: '/contact' },
    ]

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            // Show navbar when cursor is within 100px from the left edge
            const showThreshold = 100
            const hideThreshold = 400 // Hide when cursor moves beyond this point
            
            if (e.clientX <= showThreshold) {
                setIsVisible(true)
            } else if (e.clientX >= hideThreshold) {
                setIsVisible(false)
            }
        }

        document.addEventListener('mousemove', handleMouseMove)
        return () => document.removeEventListener('mousemove', handleMouseMove)
    }, [])

    return (
        <>
            {/* Invisible trigger area */}
            <div 
                className="fixed left-0 top-0 w-24 h-full z-20"
                onMouseEnter={() => setIsVisible(true)}
            />
            
            {/* Navbar */}
            <nav className={`
                fixed left-8 top-1/2 -translate-y-1/2 z-10 transition-all duration-500 ease-out
                ${isVisible
                    ? 'translate-x-0 opacity-100'
                    : '-translate-x-full opacity-0'
                }
            `}>
                <div className="flex flex-col space-y-8">
                    {menuItems.map((item, index) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`
                                relative px-24 py-10
                                text-2xl font-bold transition-all duration-300 rounded-2xl
                                backdrop-blur-lg border-2 min-w-[280px] text-center
                                overflow-hidden group
                                ${pathname === item.href
                                    ? 'bg-gradient-to-br from-blue-600/70 to-purple-600/70 text-white border-blue-400/50 shadow-xl'
                                    : index === 0 
                                        ? 'bg-gradient-to-r from-blue-500/30 to-purple-500/30 text-white hover:from-blue-500/40 hover:to-purple-500/40 border-white/30 hover:shadow-lg'
                                        : 'bg-white/10 text-white hover:bg-white/20 border-white/20 hover:border-white/40 hover:shadow-lg'
                                }
                            `}
                        >
                            {/* Hover effect overlay */}
                            <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-500" />
                            
                            {/* Glow effect for active item */}
                            {pathname === item.href && (
                                <span className="absolute inset-0 bg-white/10 animate-pulse rounded-2xl" />
                            )}
                            
                            <span className="relative z-10 flex items-center justify-center">
                                {item.label}
                                {pathname === item.href && (
                                    <span className="ml-3 w-2 h-2 animate-pulse" />
                                )}
                            </span>
                        </Link>
                    ))}
                </div>
            </nav>
        </>
    )
}

export default Navbar