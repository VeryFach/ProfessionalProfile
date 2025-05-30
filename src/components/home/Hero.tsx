'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
    const [text, setText] = useState<string>('');
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const fullText = 'Learning | Breaking | Building';
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setIsVisible(true);

        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex <= fullText.length) {
                setText(fullText.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(interval);
            }
        }, 50);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Main content */}
            <div className="flex min-h-screen">
                {/* Left content area - text aligned to the left */}
                <motion.div
                    ref={containerRef}
                    className="w-full lg:w-1/2 text-left pl-6 lg:pl-8 z-10 flex items-center"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -30 }}
                    transition={{ duration: 0.7 }}
                >
                    <div>
                        <motion.div
                            className="mb-6"
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                        >
                            <h2 className="text-3xl md:text-4xl lg:text-5xl text-slate-50 font-bold">
                                {text}
                                <span className="animate-pulse ml-1">|</span>
                            </h2>
                        </motion.div>

                        <motion.p
                            className="text-slate-50 mb-8 text-3xl md:text-4xl leading-relaxed font-times"
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.9 }}
                        >
                            CS Student Life<br />
                            Somewhere between<br />
                            Networks and Nodes,<br />
                            Data and Decisions,<br />
                            Pixels and Prototypes.
                        </motion.p>
                    </div>
                </motion.div>

                {/* Right area - image positioned to show only half of it */}
                <motion.div
                    className="hidden lg:block absolute top-0 right-0 w-1/2 h-screen overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    {/* Image container showing only half of the image */}
                    <div className="h-full w-full relative">
                        <img
                            src="/images/backgrounds/1-2.png"
                            alt="Profile Image"
                            className="h-full absolute top-0 object-cover"
                            style={{
                                objectPosition: 'left center',
                                width: '1200%', /* Makes the image twice as wide */
                                right: '-100px', /* Aligns to the right edge */
                                left: 'auto' /* Overrides any left positioning */
                            }}
                        />
                        <div className="h-full w-full relative shadow-[0_0_50px_#3B82F6]"></div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;