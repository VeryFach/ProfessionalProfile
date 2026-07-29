import type { Metadata } from 'next'
import FeaturedProjects from '../components/FeaturedProjects'
import HeroSection from '../components/HeroSection'
import FeaturedTools from '@/components/FeaturedTools'
import AnimationPage from './animation/page'

export const metadata: Metadata = {
  title: 'Very Fachrurozi - Backend Developer & Computer Science Student',
  description:
    'Official portfolio of Very Fachrurozi — backend engineering, cloud computing, and network infrastructure specialist. Discover projects, certifications, and technical expertise.',
  openGraph: {
    title: 'Very Fachrurozi - Backend Developer & Computer Science Student',
    description:
      'Official portfolio of Very Fachrurozi — backend engineering, cloud computing, and network infrastructure specialist.',
  },
}

export default function Home() {
    return (
        <>
            <HeroSection />
            <FeaturedProjects />
            <FeaturedTools />
            <AnimationPage />
        </>
    )
}