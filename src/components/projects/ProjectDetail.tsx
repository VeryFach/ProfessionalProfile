import { FC } from 'react';
import { Project } from '@/types';

interface Props {
    project: Project;
}

const ProjectDetail: FC<Props> = ({ project }) => (
    <div className="space-y-4">
        <h2 className="text-2xl font-bold">{project.title}</h2>
        <img src={project.image} alt={project.title} className="w-full rounded-lg" />
        <p className="text-gray-700">{project.description}</p>
        <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
        >
            Visit Project
        </a>
    </div>
);

export default ProjectDetail;