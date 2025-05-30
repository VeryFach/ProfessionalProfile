import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ParticleBackground from '@/components/layout/ParticleBackground';
import ScrollProgress from '@/components/layout/ScrollProgress';
import ThemeToggle from '@/components/ui/ThemeToggle';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Very Fachru',
  description: 'Portfolio personal dengan design modern menggunakan Next.js, TypeScript, dan Tailwind CSS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={`${inter.className} bg-white text-gray-900 dark:bg-gray-900 dark:text-white`}>
        <ScrollProgress />
        <ParticleBackground />
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
        <div className="fixed bottom-5 right-5 z-50">
          <ThemeToggle />
        </div>
      </body>
    </html>
  );
}