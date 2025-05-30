import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-dark-lightest text-white py-10">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <p className="text-sm">&copy; {new Date().getFullYear()}  Built with & good vibes by Fachru.</p>
                <div className="flex gap-4">
                    <Link href="mailto:veryfach@gmail.com" target="_blank" rel="noopener noreferrer">
                        <Mail className="hover:text-primary transition" />
                    </Link>
                    <Link href="https://github.com/VeryFach" target="_blank" rel="noopener noreferrer">
                        <Github className="hover:text-primary transition" />
                    </Link>
                    <Link href="https://linkedin.com/in/very-fachrurozi" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="hover:text-primary transition" />
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;