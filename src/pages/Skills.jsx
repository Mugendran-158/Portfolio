import React from 'react';
import { motion } from 'framer-motion';
import {
    Code2,
    Database,
    ShieldCheck,
    Cpu,
    Layers,
    Terminal,
    Globe,
    Settings,
    Flame,
    Zap,
    Workflow,
    Box,
    Braces,
    Wind,
    Atom,
    Package,
    Server,
    Cloud
} from 'lucide-react';

const SkillCard = ({ title, items, icon: Icon }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="bg-card rounded-2xl border border-primary/10 p-8 shadow-sm hover:shadow-xl transition-all duration-500 relative overflow-hidden group/card"
    >
        {/* Subtle Background Glow */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/5 rounded-full blur-3xl group-hover/card:bg-accent/10 transition-colors duration-500" />

        <div className="flex items-center gap-4 mb-8">
            <div className="p-3 rounded-xl bg-accent/5 text-accent shadow-sm group-hover/card:bg-accent group-hover/card:text-white transition-all duration-500">
                <Icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-primary tracking-tight">{title}</h3>
        </div>

        <div className="grid grid-cols-2 gap-4">
            {items.map((item) => (
                <div
                    key={item.name}
                    className="flex items-center gap-3 text-sm text-primary/70 hover:text-accent transition-all duration-300 p-2.5 rounded-lg hover:bg-accent/[0.04] cursor-default group/item border border-transparent hover:border-accent/10"
                >
                    <div className="flex-shrink-0 p-1.5 rounded-md bg-primary/5 text-primary/40 group-hover/item:text-accent group-hover/item:bg-accent/10 transition-all duration-300">
                        <item.icon className="w-4 h-4" />
                    </div>
                    <span className="font-medium">{item.name}</span>
                </div>
            ))}
        </div>
    </motion.div>
);

const Skills = () => {
    const skillCategories = [
        {
            title: 'Languages',
            icon: Braces,
            items: [
                { name: 'JavaScript', icon: Code2 },
                { name: 'TypeScript', icon: ShieldCheck },
                { name: 'Python', icon: Flame },
                { name: 'Java', icon: Cpu },
                { name: 'HTML / CSS', icon: Globe }
            ]
        },
        {
            title: 'Frontend',
            icon: Atom,
            items: [
                { name: 'React', icon: Atom },
                { name: 'Next.js', icon: Zap },
                { name: 'Tailwind CSS', icon: Wind },
                { name: 'Redux', icon: Workflow }

            ]
        },
        {
            title: 'Backend & Database',
            icon: Server,
            items: [
                { name: 'Node.js', icon: Terminal },
                { name: 'Express', icon: Settings },
                { name: 'MongoDB', icon: Database },
                { name: 'PostgreSQL', icon: Database },
                { name: 'Firebase', icon: Cloud }
            ]
        },
        {
            title: 'Tools',
            icon: Package,
            items: [
                { name: 'Git & GitHub', icon: Workflow },
                { name: 'Docker', icon: Box },
                { name: 'VS Code', icon: Code2 },
                { name: 'API Testing', icon: Terminal },
                { name: 'Vercel', icon: Zap }
            ]
        }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const item = {
        hidden: { opacity: 0, scale: 0.95, y: 30 },
        show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
    };

    return (
        <div className="max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-20 py-24 lg:py-48 relative min-h-screen">
            {/* Architectural Grid System */}
            <div className="absolute inset-0 circuit-grid opacity-[0.03] dark:opacity-[0.05] -z-10" />

            <div className="max-w-4xl mx-auto text-center mb-32 space-y-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-flex items-center gap-4 px-6 py-2.5 rounded-full bg-primary/5 border border-primary/10 text-primary/40 text-[10px] font-black uppercase tracking-[0.4em]"
                >
                    <Package className="w-4 h-4 text-accent" />
                    Technical Matrix
                </motion.div>
                <h2 className="text-8xl lg:text-[10rem] font-black tracking-[-0.07em] text-primary leading-[0.8] selection:bg-accent selection:text-white">
                    My <span className="text-accent italic">Skills</span>
                </h2>
                <p className="mt-8 text-2xl lg:text-3xl text-primary/40 max-w-3xl mx-auto leading-tight font-medium tracking-tight">
                    An advanced inventory of technologies and methodologies driving modern digital innovation and architectural excellence.
                </p>
            </div>

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16"
            >
                {skillCategories.map((category) => (
                    <motion.div key={category.title} variants={item}>
                        <SkillCard {...category} />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Skills;
