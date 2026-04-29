import FeaturedProjects from '../components/FeaturedProjects'
import HeroSection from '../components/HeroSection'
import FeaturedTools from '@/components/FeaturedTools'
import AnimationPage from './animation/page'

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