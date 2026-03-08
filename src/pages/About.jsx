import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Code, Terminal, Layout, Database, Palette, Fingerprint, ShieldCheck, Cpu, Globe, Compass, Layers, Zap, Activity } from 'lucide-react';

const MilestoneItem = ({ year, role, company, desc, latest }) => (
    <div className="relative group pl-12 pb-12 last:pb-0">
        {/* Connector Line */}
        <div className="absolute left-[9px] top-2 bottom-0 w-[2px] bg-primary/10 group-last:hidden" />

        {/* Point Indicator */}
        <div className={`absolute left-0 top-1.5 w-5 h-5 rounded-full border-2 transition-all duration-500 z-10 
      ${latest ? 'bg-accent border-accent shadow-[0_0_20px_rgba(37,99,235,0.4)] scale-125' : 'bg-background border-primary/20 group-hover:border-accent group-hover:scale-110'}`}
        />

        <div className="space-y-2">
            <span className={`text-[10px] font-black uppercase tracking-[0.3em] ${latest ? 'text-accent' : 'text-primary/30'}`}>
                {year}
            </span>
            <h4 className="text-2xl font-black text-primary tracking-tighter leading-none group-hover:text-accent transition-colors">
                {role}
            </h4>
            <p className="text-sm font-bold text-primary/60 tracking-tight italic">
                {company}
            </p>
            <p className="text-[15px] font-medium text-primary/40 leading-relaxed max-w-xl pt-2">
                {desc}
            </p>
        </div>
    </div>
);

const ExpertiseCard = ({ title, desc, icon: Icon }) => (
    <div className="p-8 rounded-[2.5rem] bg-card border border-primary/10 hover:border-accent/40 hover:bg-accent/[0.02] transition-all duration-500 group shadow-sm hover:shadow-2xl">
        <div className="flex flex-col gap-6">
            <div className="p-4 rounded-2xl bg-primary/5 text-primary/30 group-hover:bg-accent group-hover:text-white transition-all duration-700 shadow-inner w-fit">
                <Icon className="w-6 h-6" />
            </div>
            <div className="space-y-3">
                <h4 className="text-xl font-black text-primary tracking-tighter transition-colors group-hover:text-accent">
                    {title}
                </h4>
                <p className="text-sm font-medium text-primary/50 leading-relaxed">
                    {desc}
                </p>
            </div>
        </div>
    </div>
);

const About = () => {
    return (
        <div className="max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-20 pt-24 lg:pt-48 pb-12 lg:pb-24 relative">
            {/* Architectural Grid System */}
            <div className="absolute inset-0 circuit-grid opacity-[0.03] dark:opacity-[0.05] -z-10" />

            {/* Cinematic Background Elements */}
            <div className="absolute top-40 right-10 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] -z-10 animate-pulse" />
            <div className="absolute bottom-20 left-20 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] -z-10" />

            {/* Main Content Architecture */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="space-y-48"
            >
                {/* Header Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
                    <div className="lg:col-span-12 space-y-12">
                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            className="inline-flex items-center gap-4 px-6 py-2.5 rounded-full bg-primary/5 border border-primary/10 text-primary/40 text-[10px] font-black uppercase tracking-[0.4em]"
                        >
                            <Fingerprint className="w-4 h-4 text-accent" />
                            Personal Profile
                        </motion.div>
                        <h2 className="text-8xl lg:text-[11rem] font-black tracking-[-0.07em] text-primary leading-[0.8] selection:bg-accent selection:text-white">
                            My <span className="text-accent italic">Philosophy</span>
                        </h2>
                        <p className="text-3xl lg:text-4xl text-primary/50 leading-[1.1] font-medium tracking-tighter text-balance">
                            I am <span className="text-primary font-black underline decoration-accent/20 underline-offset-8">Mugendraraja R</span>. I am Mugendraraja R, an aspiring Full Stack Developer passionate about building modern web applications and scalable digital solutions. I enjoy combining clean design with efficient code to create meaningful user experiences while continuously learning new technologies and improving my development skills.
                        </p>

                    </div>
                </div>

                {/* Engagement & Trajectory Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-32">

                    {/* Timeline Node Cluster */}
                    <div className="lg:col-span-12 space-y-16">
                        <div className="flex items-center gap-6">
                            <div className="p-4 rounded-2xl bg-primary/5 text-accent border border-primary/5">
                                <Zap className="w-7 h-7" />
                            </div>
                            <h3 className="text-5xl font-black text-primary tracking-tighter">
                                My Journey
                            </h3>
                        </div>

                        <div className="space-y-2 border-l-2 border-primary/5 ml-4">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <MilestoneItem
                                    year="2024 - PRESENT"
                                    role="Full Stack Developer"
                                    company="Freelance / Personal Projects"
                                    desc="Building and managing various web applications using modern stacks and ensuring high quality delivery."
                                    latest={true}
                                />
                                <MilestoneItem
                                    year="2022 - 2026"
                                    role="B.Tech (IT) Student"
                                    company="Kalasalingam Academy"
                                    desc="Studying the foundations of software engineering, networking, and data structures to build a strong technical base."
                                    latest={false}
                                />
                                <MilestoneItem
                                    year="2018 - 2022"
                                    role="Secondary Education"
                                    company="School Achievements"
                                    desc="Developed strong analytical and mathematical skills during early academic years."
                                    latest={false}
                                />
                            </motion.div>
                        </div>
                    </div>



                </div>
            </motion.div>
        </div>
    );
};

export default About;
