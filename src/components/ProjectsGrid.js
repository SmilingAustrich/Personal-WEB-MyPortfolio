import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
    {
        title: 'MaVille',
        description: 'A city management app for public and private works.',
        techStack: ['Java', 'Quarkus', 'PostgreSQL'],
        link: 'https://github.com/example/maville',
        liveDemo: null,
    },
    {
        title: 'Sudoku Solver',
        description: 'A scalable Sudoku solver supporting multiple grid sizes.',
        techStack: ['Python', 'Tkinter'],
        link: 'https://github.com/example/sudoku-solver',
        liveDemo: null,
    },
];

export default function ProjectsGrid() {
    return (
        <section className="py-20 bg-gradient-radial from-spaceGray via-deepSpace to-spaceBlack text-white">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-extrabold mb-10 glow animate-neonPulse">My Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}
