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
        <div className="experiences-page">
            <div className="experiences-shell">
                {/* Header Section */}
                <header className="experiences-heading">
                    <h1 className="ds-display">
                        Certifications & <em>Experience</em>
                    </h1>
                    <p>
                        Professional experience and certifications earned through continuous learning and practical implementation
                    </p>
                </header>

                {/* Experience Section */}
                <ExperienceSection />

                {/* Section Divider */}
                <SectionDivider />

                {/* Filter Navigation */}
                <FilterNavigation activeView={activeView} setActiveView={setActiveView} />

                {/* Content Area */}
                <div id="experience-collections" className="experience-collections" aria-live="polite">
                    {activeView === 'certificates' && <CertificatesSection />}
                    {activeView === 'organizations' && <OrganizationsSection />}
                </div>
            </div>
        </div>
    )
}
