"use client";

import { useTheme } from '@/hooks/useTheme';
import { useEffect, useState } from 'react';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <button
            type="button"
            onClick={toggleTheme}
            className="p-2 rounded bg-gray-200 dark:bg-gray-700"
        >
            {theme === 'light' ? '🌞' : '🌜'}
        </button>
    );
};

export default ThemeToggle;