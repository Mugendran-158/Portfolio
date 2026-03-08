import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, ShieldCheck, Zap, Layers, Cpu, Globe, Infinity, Activity, Database, Cloud, Github, Linkedin, Mail } from 'lucide-react';

const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
};
import profileImg from '../assets/profile.jpg';

const FeatureCard = ({ icon: Icon, label }) => (
    <div className="flex flex-col items-center lg:items-start gap-3 group">
        <div className="p-3 rounded-xl bg-primary/5 text-primary/40 group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-sm">
            <Icon className="w-5 h-5" />
        </div>
        <div className="flex flex-col">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/30 group-hover:text-accent transition-colors">
                {label}
            </span>
        </div>
    </div>
);

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-background">
            {/* High-Fidelity Architectural Grid */}
            <div className="absolute inset-0 circuit-grid opacity-[0.03] dark:opacity-[0.05] -z-10" />

            {/* Cinematic Atmospheric FX */}
            <div className="absolute top-[-20%] right-[-10%] w-[1000px] h-[1000px] rounded-full bg-accent/10 blur-[180px] -z-10 animate-pulse" />
            <div className="absolute bottom-[-20%] left-[-10%] w-[1000px] h-[1000px] rounded-full bg-accent/5 blur-[180px] -z-10 animate-pulse" />

            {/* Floating Ornaments */}
            <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-40 left-[10%] w-24 h-24 bg-accent/5 rounded-3xl border border-accent/10 backdrop-blur-3xl hidden lg:flex items-center justify-center -z-10"
            >
                <Cpu className="w-10 h-10 text-accent/20" />
            </motion.div>

            <div className="max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-20 w-full py-20 lg:pt-40">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">

                    {/* Hero Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-7 space-y-12 text-center lg:text-left"
                    >
                        <div className="inline-flex items-center gap-4 px-6 py-2.5 rounded-full bg-primary/5 border border-primary/10 text-primary/40 text-[10px] font-black uppercase tracking-[0.4em]">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
                            Modern Web Solutions 2026
                        </div>

                        <h1 className="text-7xl sm:text-8xl lg:text-9xl font-black tracking-[-0.06em] text-primary leading-[0.85] text-balance">
                            Creating <span className="text-accent italic selection:text-white">Modern</span> Web Experiences
                        </h1>

                        <p className="text-2xl sm:text-3xl text-primary/40 max-w-3xl mx-auto lg:mx-0 leading-tight font-medium tracking-tight">
                            I am <span className="text-primary font-black underline decoration-accent/20 underline-offset-8">Mugendraraja R</span>. A Full Stack Developer building scalable web applications and modern digital experiences.
                        </p>

                        {/* High-Impact Social Connectivity */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex items-center justify-center lg:justify-start gap-6 pt-4"
                        >
                            <a
                                href="https://github.com/Mugendran-158"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-5 rounded-2xl bg-primary/5 text-primary/30 hover:bg-accent hover:text-white transition-all duration-500 shadow-inner group/social relative overflow-hidden"
                            >
                                <Github className="w-6 h-6 relative z-10" />
                                <div className="absolute inset-0 bg-accent translate-y-full group-hover/social:translate-y-0 transition-transform duration-500" />
                            </a>
                            <a
                                href="https://linkedin.com/in/mugendran-r-158"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-5 rounded-2xl bg-primary/5 text-primary/30 hover:bg-accent hover:text-white transition-all duration-500 shadow-inner group/social relative overflow-hidden"
                            >
                                <Linkedin className="w-6 h-6 relative z-10" />
                                <div className="absolute inset-0 bg-accent translate-y-full group-hover/social:translate-y-0 transition-transform duration-500" />
                            </a>
                            <a
                                href="mailto:rmugendran2004@gmail.com"
                                className="p-5 rounded-2xl bg-primary/5 text-primary/30 hover:bg-accent hover:text-white transition-all duration-500 shadow-inner group/social relative overflow-hidden"
                            >
                                <Mail className="w-6 h-6 relative z-10" />
                                <div className="absolute inset-0 bg-accent translate-y-full group-hover/social:translate-y-0 transition-transform duration-500" />
                            </a>
                        </motion.div>

                        <div className="flex flex-col sm:flex-row gap-8 justify-center lg:justify-start pt-8">
                            <button
                                onClick={() => scrollTo('projects')}
                                className="relative overflow-hidden inline-flex items-center justify-center px-14 py-7 rounded-[2rem] bg-primary text-background font-black uppercase tracking-[0.3em] text-[10px] hover:bg-accent transition-all shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4)] active:scale-95 group"
                            >
                                <span className="relative z-10 flex items-center gap-4">
                                    View My Work
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                                </span>
                                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
                            </button>
                            <button
                                onClick={() => scrollTo('contact')}
                                className="inline-flex items-center justify-center px-14 py-7 rounded-[2rem] border-2 border-primary/10 hover:border-accent/40 hover:bg-accent/[0.03] font-black uppercase tracking-[0.3em] text-[10px] text-primary transition-all active:scale-95 shadow-sm"
                            >
                                Contact Me
                            </button>
                        </div>

                        {/* Features Interface */}
                        <div className="pt-20 grid grid-cols-2 sm:grid-cols-4 gap-12 border-t border-primary/5">
                            <FeatureCard icon={Activity} label="Performance" />
                            <FeatureCard icon={Layers} label="Scalability" />
                            <FeatureCard icon={Database} label="Integrity" />
                            <FeatureCard icon={Cloud} label="Availability" />
                        </div>
                    </motion.div>

                    {/* Profile Section */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-5 relative flex justify-center lg:justify-end"
                    >
                        <div className="relative w-full max-w-[520px] aspect-[4/5] rounded-[4rem] overflow-hidden shadow-[0_80px_160px_-30px_rgba(0,0,0,0.3)] group bg-primary">
                            <img
                                src={profileImg}
                                alt="Mugendraraja R"
                                className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 group-hover:scale-110"
                            />

                            {/* Cinematic Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-60 transition-opacity duration-700 group-hover:opacity-40" />

                            {/* Update Trigger Removed for Permanence */}

                            {/* Info Overlay */}
                            <div className="absolute bottom-12 left-12 right-12 p-8 rounded-[2.5rem] bg-white/10 backdrop-blur-3xl border border-white/10 opacity-0 group-hover:opacity-100 translate-y-10 group-hover:translate-y-0 transition-all duration-700">
                                <div className="flex items-center justify-between">
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">Verified Identity</p>
                                        <p className="text-2xl font-black text-white leading-tight tracking-tighter">Mugendraraja R</p>
                                    </div>
                                    <div className="p-3 bg-accent text-white rounded-2xl shadow-xl">
                                        <ShieldCheck className="w-6 h-6" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Geometric Ornaments */}
                        <div className="absolute -top-16 -right-16 w-80 h-80 border-[1px] border-primary/5 rounded-full animate-pulse" />
                        <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-accent/5 rounded-full blur-[100px] animate-pulse" />
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute -bottom-8 -left-8 w-40 h-40 bg-card/40 backdrop-blur-3xl rounded-[3rem] border border-primary/5 flex items-center justify-center -rotate-12 hover:rotate-0 transition-all duration-700 shadow-2xl"
                        >
                            <Infinity className="text-accent/20 w-16 h-16" />
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default Home;
