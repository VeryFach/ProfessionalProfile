import React from 'react';

const SocialLinks: React.FC = () => {
    const socialLinks = [
        { name: 'GitHub', url: 'https://github.com/yourusername', icon: '🐙' },
        { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername', icon: '🔗' },
        { name: 'Twitter', url: 'https://twitter.com/yourusername', icon: '🐦' },
    ];

    return (
        <div className="social-links">
            <ul>
                {socialLinks.map((link, index) => (
                    <li key={index}>
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                            {link.icon} {link.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SocialLinks;