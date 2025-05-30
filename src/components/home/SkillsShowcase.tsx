import { skills } from '@/lib/data/skills';

const SkillsShowcase = () => {
    return (
        <section className="py-16 px-4 bg-dark-lightest">
            <h2 className="text-3xl font-bold text-center mb-8">Keahlian</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {skills.map((skill, idx) => (
                    <div key={idx} className="bg-dark p-4 rounded-lg text-center shadow">
                        <img src={skill.icon} alt={skill.name} className="w-10 h-10 mx-auto mb-2" />
                        <p className="text-white font-medium">{skill.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SkillsShowcase;