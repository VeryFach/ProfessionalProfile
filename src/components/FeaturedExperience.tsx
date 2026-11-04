import Link from 'next/link'
import { experiences } from '@/data/experience'

export default function FeaturedExperience() {
    return (
        <section className="featured-experience" aria-labelledby="experience-title">
            <div className="featured-experience-shell">
                <header className="featured-experience-heading">
                    <div>
                        <p className="ds-label">BEYOND THE PROJECTS / EXPERIENCE</p>
                        <h2 id="experience-title" className="ds-heading">WHERE I&apos;VE <em>PUT IT TO WORK.</em></h2>
                    </div>
                    <p>A few places where I&apos;ve applied what I learn to real teams and problems.</p>
                </header>

                <div className="featured-experience-list">
                    {experiences.map((experience, index) => (
                        <article key={`${experience.company}-${experience.role}`} className="featured-experience-row">
                            <span className="featured-experience-number">0{index + 1}</span>
                            <div className="featured-experience-role">
                                <h3>{experience.role}</h3>
                                <p>{experience.company}</p>
                                <p>{experience.startDate} — {experience.endDate ?? 'Present'}</p>
                            </div>
                            <p className="featured-experience-description">{experience.description}</p>
                        </article>
                    ))}
                </div>

                <div className="featured-experience-footer">
                    <Link href="/experiences" className="featured-experience-link">
                        SEE ALL EXPERIENCE & CERTIFICATIONS <span aria-hidden="true">↗</span>
                    </Link>
                </div>
            </div>
        </section>
    )
}
