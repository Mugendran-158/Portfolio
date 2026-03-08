import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2, Globe, Cpu, Layers, Box, Terminal, Zap } from 'lucide-react';

// Import project images
import portfolioImg from '../assets/project-portfolio.png';
import nutritionImg from '../assets/project-nutrition.png';
import printingImg from '../assets/project-printing.png';
import taskImg from '../assets/project-task.png';
import farmerTwinImg from '../assets/project-farmer-twin.jpg';

const ProjectCard = ({ id, title, desc, stack, github, live, type, icon: Icon, image }) => (
    <motion.div
        whileHover={{ y: -10 }}
        className="group bg-card border border-primary/10 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] transition-all duration-700 flex flex-col h-full"
    >
        {/* Project Header Visual */}
        <div className="relative h-64 bg-primary flex items-center justify-center overflow-hidden">
            {/* Abstract Background */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,var(--accent)_0%,transparent_70%)] group-hover:scale-150 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:20px_20px]" />

            {image ? (
                <img
                    src={image}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700 relative z-10"
                />
            ) : (
                <Icon className="w-20 h-20 text-white/10 group-hover:text-accent/40 group-hover:scale-110 transition-all duration-700 relative z-10" />
            )}

            {/* Project ID Badge */}
            <div className="absolute top-6 left-6 px-4 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[10px] font-black text-white/60 tracking-[0.2em] uppercase z-20">
                ID: {id}
            </div>

            {/* Status indicator */}
            <div className="absolute top-6 right-6 flex items-center gap-2 z-20">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-black text-white/40 tracking-widest uppercase">Online</span>
            </div>
        </div>

        <div className="p-10 flex flex-col flex-grow space-y-6">
            <div className="space-y-2">
                <p className="text-accent font-black text-[10px] uppercase tracking-[0.3em]">{type}</p>
                <h3 className="text-3xl font-black text-primary tracking-tighter leading-none group-hover:text-accent transition-colors">
                    {title}
                </h3>
            </div>

            <p className="text-primary/50 font-medium leading-relaxed flex-grow text-[15px]">
                {desc}
            </p>

            {/* Tech Ecosystem */}
            <div className="flex flex-wrap gap-2 pt-4">
                {stack.map((tech) => (
                    <span
                        key={tech}
                        className="px-3 py-1 rounded-lg bg-primary/5 border border-primary/5 text-[10px] font-bold text-primary/40 uppercase tracking-widest group-hover:border-accent/20 group-hover:text-accent transition-all"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            {/* Engagement Gateway */}
            <div className="pt-8 flex items-center justify-between border-t border-primary/5">
                <div className="flex gap-6">
                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-primary/40 hover:text-accent transition-colors group/link"
                    >
                        <Github className="w-4 h-4" />
                        View Source
                    </a>
                    {live && (
                        <a
                            href={live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-primary/40 hover:text-accent transition-colors group/link"
                        >
                            <Globe className="w-4 h-4" />
                            Live Demo
                        </a>
                    )}
                </div>
                <Zap className="w-4 h-4 text-primary/10 group-hover:text-accent/20 transition-colors" />
            </div>
        </div>
    </motion.div>
);

const Projects = () => {
    const projectRegistry = [
        {
            id: "PORTFOLIO-01",
            title: 'PORTFOLIO',
            type: 'Web Application',
            icon: Layers,
            image: portfolioImg,
            desc: 'This is my portfolio website,where I showcase my projects and skills.',
            stack: ['React', 'Tailwind CSS', 'Javascript', 'Node.js'],
            github: 'https://github.com/Mugendran-158',
            live: '#'
        },
        {
            id: "HEALTH-02",
            title: 'Seasonal Nutrition Guide App',
            type: 'Web Application',
            icon: Layers,
            image: nutritionImg,
            desc: 'A smart tool that suggests the best nutrition based on your location and the current season, helping you eat healthier and more sustainably.',
            stack: ['HTML', 'CSS', 'Javascript'],
            github: 'https://github.com/Mugendran-158',
            live: 'https://food-recommendation-application-mai.vercel.app'
        },
        {
            id: "TASK-03",
            title: 'Task Management App',
            type: 'Frontend System',
            icon: Terminal,
            image: taskImg,
            desc: 'A responsive frontend task management application that helps users efficiently organize, track, and manage their daily tasks..',
            stack: ['React', 'CSS', 'Javascript'],
            github: 'https://github.com/Mugendran-158',
            live: 'https://task-management-app-mugendran-eight.vercel.app'
        },
        {
            id: "PRINT-04",
            title: 'Mobile based Printing Security App',
            type: 'Backend Service',
            icon: Terminal,
            image: printingImg,
            desc: 'A secure and fast system that allows users to send print jobs directly from their mobile phones to local network printers.',
            stack: ['Java', 'XML', 'ANDROID STUDIO', 'GOOGLE PAY API'],
            github: 'https://github.com/Mugendran-158',
            live: '#'
        },
        {
            id: "TASK-05",
            title: 'AI-Based Farmer Digital Twin Stress-Aware Decision support',
            type: 'Full Stack',
            icon: Terminal,
            image: farmerTwinImg,
            desc: 'Build an edge-AI system that analyzes voice and behavioral signals to detect farmer stress and deliver context-aware agricultural recommendations using quantum-inspired modeling.',
            stack: ['React', 'Python', 'Tenserflow', 'NLP', 'Librosa', 'SQLite', 'PostgreSQL', 'ML'],
            github: 'https://github.com/Mugendran-158',
            live: '#'
        }
    ];

    return (
        <div className="max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-20 pt-12 lg:pt-24 pb-12 lg:pb-24 relative">
            {/* Architectural Grid System */}
            <div className="absolute inset-0 circuit-grid opacity-[0.03] dark:opacity-[0.05] -z-10" />

            {/* Narrative Header */}
            <div className="max-w-5xl mx-auto text-center mb-32 space-y-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-flex items-center gap-4 px-6 py-2.5 rounded-full bg-primary/5 border border-primary/10 text-primary/40 font-black text-[10px] uppercase tracking-[0.4em]"
                >
                    <Box className="w-4 h-4 text-accent" />
                    Project Portfolio
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                    className="text-8xl lg:text-[11rem] font-black tracking-[-0.07em] text-primary leading-[0.8] text-balance"
                >
                    My <span className="text-accent italic">Projects</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="text-2xl lg:text-3xl text-primary/40 max-w-3xl mx-auto font-medium leading-tight tracking-tight"
                >
                    A collection of high-performance web applications and scalable backend systems designed for modern digital impact.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
                {projectRegistry.map((project, idx) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <ProjectCard {...project} />
                    </motion.div>
                ))}
            </div>

            {/* Registry Footer */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="mt-24 text-center"
            >
                <div className="h-[2px] w-24 bg-primary/5 mx-auto mb-12" />
                <p className="text-[10px] font-black text-primary/20 uppercase tracking-[0.6em]">
                    End of Active Registry • More coming soon
                </p>
            </motion.div>
        </div>
    );
};

export default Projects;
