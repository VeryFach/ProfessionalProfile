import type { Metadata } from 'next'
import '../styles/globals.css'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Script from 'next/script'

const siteUrl = 'https://fachru.vercel.app'
const siteName = 'Very Fachrurozi'
const defaultTitle = `${siteName} - Backend Developer & Computer Science Student`
const defaultDescription = 'Official portfolio of Very Fachrurozi — a Computer Science student specializing in backend engineering, cloud computing, network infrastructure, and DevOps. Explore projects, certifications, and technical experience.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  keywords: ['Very Fachrurozi', 'Fachru', 'backend developer', 'computer science', 'cloud computing', 'DevOps', 'portfolio', 'software engineer', 'Indonesia', 'full stack developer'],
  authors: [{ name: 'Very Fachrurozi' }],
  creator: 'Very Fachrurozi',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName,
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: defaultDescription,
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icon.svg',
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: 'tXo4W7NiSY8gyXRG7Aq1Pf5rbBZQZVvHUy3FS2o5IRM',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Very Fachrurozi',
    url: siteUrl,
    image: `${siteUrl}/image/hero.webp`,
    jobTitle: 'Computer Science Student & Backend Developer',
    description: defaultDescription,
    sameAs: [
      'https://github.com/VeryFach',
      'https://www.linkedin.com/in/very-fachrurozi',
    ],
    knowsAbout: [
      'Backend Development',
      'Cloud Computing',
      'DevOps',
      'Network Infrastructure',
      'Software Engineering',
    ],
  }

  return (
    <html lang="en">
      <body>
        <Script
          id="schema-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main id="top" className="pt-10">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
