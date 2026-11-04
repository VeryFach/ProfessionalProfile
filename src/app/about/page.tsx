import Image from 'next/image'

const softSkills = [
    'Effective Communication',
    'Negotiation',
    'Crisis Management',
    'Public Speaking',
    'Storytelling',
]

export default function About() {
    return (
        <section className="about-page" aria-labelledby="about-title">
            <div className="about-shell">
                <header className="about-heading">
                    <p className="ds-label about-chapter">WHO I AM</p>
                    <h1 id="about-title" className="ds-display">ABOUT <em>ME</em></h1>
                </header>

                <div className="about-grid">
                    <div className="about-main">
                        <div className="about-intro ds-surface">
                            <p className="about-lead">
                                Hello! I&apos;m <strong>Very Fachrurozi</strong>, an enthusiastic
                                <strong> Software Development</strong>
                                <strong> cloud computing</strong> and{' '}
                                <strong>Computer Networks</strong> enthusiast.
                            </p>
                            <p className="about-body">
                                Focused on distributed systems, API architecture, and optimizing reliable
                                and secure network infrastructure. Experienced in database management,
                                server optimization, and network troubleshooting.
                            </p>
                        </div>

                        <div className="about-commitment ds-surface ds-surface--dark">
                            <p>
                                Committed to delivering efficient solutions through collaboration and
                                the application of adaptive, scalable <strong>DevOps principles</strong>.
                            </p>
                        </div>

                        <blockquote className="about-quote ds-surface">
                            <span className="about-quote-mark" aria-hidden="true">"</span>
                            <span className="about-quote-cursor" aria-hidden="true">$</span>
                            <p>Building robust backend systems and reliable network infrastructure that scale with purpose and precision.</p>
                        </blockquote>
                    </div>

                    <aside className="about-aside">
                        <div className="about-portrait" aria-hidden="true">
                            <Image src="/image/hero.webp" alt="" fill sizes="(max-width: 900px) 100vw, 360px" className="about-portrait-image" />
                        </div>
                        <div className="about-skills ds-surface">
                            <h2 className="ds-heading">Soft Skills</h2>
                            <ul>
                                {softSkills.map((skill) => (
                                    <li key={skill}>{skill}</li>
                                ))}
                            </ul>
                            <p className="about-status"><span className="about-status-dot" aria-hidden="true" />All systems operational</p>
                        </div>
                    </aside>
                </div>

                <div className="about-technical">
                    <h2 className="ds-heading">Technical Arsenal</h2>
                    <p>Technologies I work with daily</p>
                </div>
            </div>
        </section>
    )
}
