import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/types/project';

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <div className="bg-dark-lighter rounded-xl overflow-hidden transition-all duration-300 card-hover">
            <div className="relative h-70 w-full">
                {project.imageUrl ? (
                    <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-secondary text-4xl font-bold text-primary">
                        {project.title.charAt(0)}
                    </div>
                )}
            </div>

            <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>

                <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 bg-primary bg-opacity-10 text-primary text-xs rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <p className="text-gray-400 mb-4">{project.description}</p>

                <div className="flex space-x-3">
                    {project.demoUrl && (
                        <Link
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary-light transition-colors"
                        >
                            Live Demo
                        </Link>
                    )}
                    {project.githubUrl && (
                        <Link
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            Source Code
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;