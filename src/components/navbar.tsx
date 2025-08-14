'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const pathname = usePathname()

    const menuItems = [
        { label: 'WORKS', href: '/projects' },
        { label: 'STORIES', href: '/(blog)' },
        { label: 'EXPERIENCES', href: '/about' },
        { label: 'ABOUT', href: '/contact' },
    ]

    return (
        <nav className="absolute left-8 top-1/2 -translate-y-1/2 z-10">
            <div className="flex flex-col space-y-4">
                {menuItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`
              px-8 py-4 text-lg font-medium transition-all duration-300 rounded-full
              ${pathname === item.href
                                ? 'bg-black text-white'
                                : 'bg-white/80 text-black hover:bg-white backdrop-blur-sm'
                            }
            `}
                    >
                        {item.label}
                    </Link>
                ))}
            </div>
        </nav>
    )
}

export default Navbar