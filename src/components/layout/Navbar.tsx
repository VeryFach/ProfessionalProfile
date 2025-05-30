'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { League_Spartan } from 'next/font/google';

// Initialize font
const leagueSpartan = League_Spartan({ subsets: ['latin'] });

const navLinks = [
    { href: '/works', label: 'Works' },
    { href: '/stories', label: 'Stories' },
    { href: '/experiences', label: 'Experiences' },
    { href: '/about', label: 'About' },
];

const Navbar = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const separationDistance = Math.min(scrollY * 0.5, 200); // Max 200px separation
    const opacity = Math.max(1 - scrollY * 0.005, 0); // Fade out name box

    return (
        <header className="fixed top-0 left-0 w-full z-100">
            <div className="container ml-[1050px] px-2 py-6">
                {/* Logo */}
                <div className="flex flex-col">
                    {/* <Link href="/" className="text-white text-2xl font-bold mb-2">
                        Fachru.
                    </Link> */}

                    <div className="relative">
                        {/* Name Box - Will move up and fade out when scrolling */}
                        <div
                            className="bg-white text-black rounded-lg shadow-md overflow-hidden w-[400px] transition-transform duration-300"
                            style={{
                                transform: `translateY(-${separationDistance}px)`,
                                opacity: opacity
                            }}
                        >
                            <div className="p-4 font-bold text-lg">
                                Very Fach
                            </div>
                        </div>

                        {/* Navigation - Will move down when scrolling */}
                        <nav
                            className="flex bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 w-[400px]"
                            style={{
                                transform: `translateY(${opacity < 0.1 ? 0 : separationDistance}px)`,
                                // marginTop: opacity < 0.1 ? '0' : '44px' // Height of the name box
                            }}
                        >
                            {navLinks.map((link, index) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`px-6 py-4 hover:bg-gray-100 transition-colors duration-200 text-sm text-black ${index !== 0 ? 'border-l border-gray-200' : ''
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;