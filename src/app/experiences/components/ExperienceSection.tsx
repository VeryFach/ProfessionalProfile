import { experiences } from '@/data'

export default function ExperienceSection() {
    return (
        <section className="experience-work" aria-labelledby="work-experience-title">
            <h2 id="work-experience-title" className="ds-heading">Work Experience</h2>
            {experiences.length > 0 ? (
                <div className="experience-timeline">
                    {experiences.map((exp, index) => (
                        <article className="experience-entry" key={`${exp.company}-${exp.role}-${index}`}>
                            <div className="experience-date">
                                <span className="experience-date-large">{exp.startDate}</span>
                                <span className="experience-date-range">{exp.endDate || 'Present'}</span>
                            </div>
                            <div className="experience-panel">
                                <h3>{exp.role}</h3>
                                <p className="experience-company">{exp.company}</p>
                                <p className="experience-location">{exp.location}</p>
                                <p className="experience-description">{exp.description}</p>
                            </div>
                        </article>
                    ))}
                </div>
            ) : (
                <div className="experience-empty">
                    <p>No work experience yet</p>
                    <p>Professional experiences will appear here</p>
                </div>
            )}
        </section>
    )
}
