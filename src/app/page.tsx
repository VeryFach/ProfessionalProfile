import type { Metadata } from 'next'
import FeaturedProjects from '../components/FeaturedProjects'
import HeroSection from '../components/HeroSection'
import FeaturedTools from '@/components/FeaturedTools'
import FeaturedExperience from '@/components/FeaturedExperience'
import HomeChapterNavigation from '@/components/HomeChapterNavigation'

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
        <div className="home-page">
            <HeroSection />
            <div id="home-projects" className="home-anchor"><FeaturedProjects /></div>
            <div id="home-experience" className="home-anchor"><FeaturedExperience /></div>
            <div id="home-tools" className="home-anchor"><FeaturedTools /></div>
            <HomeChapterNavigation />
        </div>
    )
}
