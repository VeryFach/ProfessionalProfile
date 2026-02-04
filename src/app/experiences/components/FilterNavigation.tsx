'use client'

import { certificates, organizations } from '@/data'

type ViewType = 'certificates' | 'organizations'

interface FilterNavigationProps {
    activeView: ViewType
    setActiveView: (view: ViewType) => void
}

export default function FilterNavigation({ activeView, setActiveView }: FilterNavigationProps) {
    return (
        <div className="mb-8 sm:mb-12">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-2xl mx-auto px-4">
                <button
                    onClick={() => setActiveView('certificates')}
                    className={`relative px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base transition-all duration-300 ${
                        activeView === 'certificates'
                            ? 'bg-black text-white shadow-xl scale-105'
                            : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200 hover:border-gray-400'
                    }`}
                >
                    <span className="flex items-center justify-center gap-2 sm:gap-3">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                        <span>Certificates</span>
                        <span className={`ml-1 px-2.5 py-0.5 rounded-full text-xs font-bold ${
                            activeView === 'certificates' 
                                ? 'bg-white/20 text-white' 
                                : 'bg-gray-100 text-gray-700'
                        }`}>
                            {certificates.length}
                        </span>
                    </span>
                </button>
                <button
                    onClick={() => setActiveView('organizations')}
                    className={`relative px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base transition-all duration-300 ${
                        activeView === 'organizations'
                            ? 'bg-black text-white shadow-xl scale-105'
                            : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200 hover:border-gray-400'
                    }`}
                >
                    <span className="flex items-center justify-center gap-2 sm:gap-3">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span>Organizations</span>
                        <span className={`ml-1 px-2.5 py-0.5 rounded-full text-xs font-bold ${
                            activeView === 'organizations' 
                                ? 'bg-white/20 text-white' 
                                : 'bg-gray-100 text-gray-700'
                        }`}>
                            {organizations.length}
                        </span>
                    </span>
                </button>
            </div>
        </div>
    )
}
