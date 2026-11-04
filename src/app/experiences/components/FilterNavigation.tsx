'use client'

import { certificates, organizations } from '@/data'

type ViewType = 'certificates' | 'organizations'

interface FilterNavigationProps {
    activeView: ViewType
    setActiveView: (view: ViewType) => void
}

export default function FilterNavigation({ activeView, setActiveView }: FilterNavigationProps) {
    return (
        <div className="experience-switcher" role="group" aria-label="Experience collections">
            <div className="experience-switcher-inner">
                <button
                    type="button"
                    aria-pressed={activeView === 'certificates'}
                    aria-controls="experience-collections"
                    onClick={() => setActiveView('certificates')}
                    className={`experience-switcher-button ${activeView === 'certificates' ? 'is-active' : ''}`}
                >
                    <span className="flex items-center justify-center gap-2 sm:gap-3">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                        <span>Certificates</span>
                        <span className="experience-switcher-count">
                            {certificates.length}
                        </span>
                    </span>
                </button>
                <button
                    type="button"
                    aria-pressed={activeView === 'organizations'}
                    aria-controls="experience-collections"
                    onClick={() => setActiveView('organizations')}
                    className={`experience-switcher-button ${activeView === 'organizations' ? 'is-active' : ''}`}
                >
                    <span className="flex items-center justify-center gap-2 sm:gap-3">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span>Organizations</span>
                        <span className="experience-switcher-count">
                            {organizations.length}
                        </span>
                    </span>
                </button>
            </div>
        </div>
    )
}
