'use client'

import { useState } from 'react'
import {
    CertificatesSection,
    ExperienceSection,
    FilterNavigation,
    OrganizationsSection,
    SectionDivider
} from './components'

type ViewType = 'certificates' | 'organizations'

export default function Experiences() {
    const [activeView, setActiveView] = useState<ViewType>('certificates')

    return (
        <div className="min-h-screen py-16 sm:py-20 lg:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 max-w-7xl">
                {/* Header Section */}
                <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-black mb-4 tracking-tight animate-fade-in">
                        Certifications & <span className="text-white">Experience</span>
                    </h1>
                    <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Professional experience and certifications earned through continuous learning and practical implementation
                    </p>
                </div>

                {/* Experience Section */}
                <ExperienceSection />

                {/* Section Divider */}
                <SectionDivider />

                {/* Filter Navigation */}
                <FilterNavigation activeView={activeView} setActiveView={setActiveView} />

                {/* Content Area */}
                <div className="relative">
                    {activeView === 'certificates' && <CertificatesSection />}
                    {activeView === 'organizations' && <OrganizationsSection />}
                </div>
            </div>
        </div>
    )
}