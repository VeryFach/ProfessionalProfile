import { projects } from '@/lib/data/projects';
import ProjectCard from '@/components/projects/ProjectCard';

const FeaturedProjects = () => {
    const featured = projects.filter((p) => p.featured);
    return (
        <section className="py-16 px-4 bg-dark">
            <h2 className="text-3xl font-bold text-center mb-8">Latest Works</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {featured.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
};

export default FeaturedProjects;
