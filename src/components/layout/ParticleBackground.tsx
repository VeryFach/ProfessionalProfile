'use client';
import React from 'react';

const Background: React.FC = () => {
    return (
        <div
            className="fixed inset-0 w-full h-full -z-10"
            style={{ backgroundColor: '#0F172A' }}
        />
    );
};

export default Background;