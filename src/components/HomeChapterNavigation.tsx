'use client'

import { useEffect, useState } from 'react'

const chapters = [
    { id: 'home-intro', label: 'Intro' },
    { id: 'home-interests', label: 'Interests' },
    { id: 'home-projects', label: 'Projects' },
    { id: 'home-experience', label: 'Experience' },
    { id: 'home-tools', label: 'Tools' },
] as const

export default function HomeChapterNavigation() {
    const [activeChapter, setActiveChapter] = useState<string>(chapters[0].id)
    const [visible, setVisible] = useState(true)

    useEffect(() => {
        const sections = chapters.map(({ id }) => document.getElementById(id))
        const footer = document.querySelector('footer')
        let frame = 0

        const update = () => {
            const marker = window.innerHeight * 0.4
            let current = chapters[0].id as string

            sections.forEach((section) => {
                if (section && section.getBoundingClientRect().top <= marker) current = section.id
            })

            setActiveChapter((previous) => previous === current ? previous : current)
            setVisible(!footer || footer.getBoundingClientRect().top > window.innerHeight - 16)
        }

        const scheduleUpdate = () => {
            if (frame) return
            frame = window.requestAnimationFrame(() => {
                frame = 0
                update()
            })
        }

        update()
        window.addEventListener('scroll', scheduleUpdate, { passive: true })
        window.addEventListener('resize', scheduleUpdate)
        return () => {
            window.cancelAnimationFrame(frame)
            window.removeEventListener('scroll', scheduleUpdate)
            window.removeEventListener('resize', scheduleUpdate)
        }
    }, [])

    return (
        <nav className={`home-chapter-nav ${visible ? '' : 'home-chapter-nav--hidden'}`} aria-label="Homepage chapters" aria-hidden={!visible} inert={!visible}>
            {chapters.map((chapter, index) => {
                const active = activeChapter === chapter.id
                return (
                    <a
                        key={chapter.id}
                        href={`#${chapter.id}`}
                        className={`home-chapter-link ${active ? 'home-chapter-link--active' : ''}`}
                        aria-label={`Jump to ${chapter.label}`}
                        aria-current={active ? 'location' : undefined}
                    >
                        <span className="home-chapter-tick" aria-hidden="true" />
                        <span className="home-chapter-number">{String(index + 1).padStart(2, '0')}</span>
                        <span className="home-chapter-label">{chapter.label}</span>
                    </a>
                )
            })}
        </nav>
    )
}
