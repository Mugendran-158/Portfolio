import React from 'react';
import { Github, Linkedin, Mail, ShieldCheck, Cpu, Terminal } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-background border-t border-primary/5 py-24 lg:py-40 mt-32 relative overflow-hidden">
            {/* Background Architectural Grid Pattern */}
            <div className="absolute inset-0 circuit-grid opacity-[0.02] dark:opacity-[0.03] -z-10" />

            {/* Cinematic Geometric Ornament */}
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] -mr-64 -mb-64 pointer-events-none animate-pulse" />
            <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] -ml-64 -mt-64 pointer-events-none" />

            <div className="max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-20 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start pb-24 lg:pb-32">

                    {/* Brand Meta Section */}
                    <div className="lg:col-span-6 space-y-12">
                        <a href="#home" className="flex items-center gap-5 group">
                            <div className="p-3 rounded-2xl bg-primary text-background group-hover:bg-accent transition-all duration-700 shadow-2xl group-hover:-rotate-12">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-lg font-black tracking-[0.2em] text-primary uppercase group-hover:text-accent transition-colors">Mugendraraja R</span>
                                <span className="text-[9px] font-black tracking-[0.5em] text-primary/30 uppercase">Enterprise Solutions Portal</span>
                            </div>
                        </a>
                        <p className="text-xl font-medium text-primary/40 leading-tight max-w-lg tracking-tight">
                            Architecting high-performance digital environments through modular software patterns and cinematic user experiences.
                        </p>
                        <div className="flex items-center gap-4 px-6 py-2.5 rounded-full bg-primary/5 border border-primary/10 w-fit">
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_15px_rgba(34,197,94,0.6)]" />
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/30">System Status: Optimal</span>
                        </div>
                    </div>

                    {/* Navigation Matrix */}
                    <div className="lg:col-span-3 space-y-10">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.6em] text-primary/20 flex items-center gap-3">
                            <div className="w-1 h-3 bg-accent" />
                            Site Topology
                        </h4>
                        <div className="grid grid-cols-1 gap-5">
                            <a href="#about" className="text-xs font-black text-primary/40 hover:text-accent tracking-widest uppercase transition-all hover:translate-x-2">About Me</a>
                            <a href="#education" className="text-xs font-black text-primary/40 hover:text-accent tracking-widest uppercase transition-all hover:translate-x-2">Credentials</a>
                            <a href="#skills" className="text-xs font-black text-primary/40 hover:text-accent tracking-widest uppercase transition-all hover:translate-x-2">Technical Matrix</a>
                            <a href="#projects" className="text-xs font-black text-primary/40 hover:text-accent tracking-widest uppercase transition-all hover:translate-x-2">Registry</a>
                        </div>
                    </div>

                    {/* Social Interface Section */}
                    <div className="lg:col-span-3 space-y-10">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.6em] text-primary/20 flex items-center gap-3">
                            <div className="w-1 h-3 bg-accent" />
                            Social Nodes
                        </h4>
                        <div className="flex flex-wrap gap-5">
                            {[
                                { icon: Linkedin, href: "https://www.linkedin.com/in/mugendraraja-r-527a692b6", label: "LinkedIn" },
                                { icon: Github, href: "https://github.com/Mugendran-158", label: "GitHub" },
                                { icon: Mail, href: "mailto:rmugendran2004@gmail.com", label: "Email" }
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-5 rounded-[1.5rem] bg-primary/5 text-primary/40 hover:bg-accent hover:text-white transition-all duration-700 shadow-sm group/social relative overflow-hidden"
                                >
                                    <social.icon className="w-6 h-6 relative z-10" />
                                    <div className="absolute inset-0 bg-accent opacity-0 group-hover/social:opacity-100 transition-opacity" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Final Structural Layer */}
                <div className="pt-16 lg:pt-24 border-t border-primary/5 flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="flex flex-wrap items-center justify-center gap-10">
                        <div className="flex items-center gap-3 text-[10px] font-black text-primary/20 uppercase tracking-[0.4em]">
                            <Cpu className="w-4 h-4 text-accent/40" />
                            Edge Deployment: Active
                        </div>
                        <div className="flex items-center gap-3 text-[10px] font-black text-primary/20 uppercase tracking-[0.4em]">
                            <Terminal className="w-4 h-4 text-accent/40" />
                            Environment: Vercel Production
                        </div>
                    </div>
                    <p className="text-[10px] font-black text-primary/20 uppercase tracking-[0.5em] order-first md:order-last">
                        &copy; {new Date().getFullYear()} Mugendraraja R <span className="text-accent/40 mx-2">•</span> Integrated Architecture
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
