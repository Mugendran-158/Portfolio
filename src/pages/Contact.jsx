import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Send,
    Loader2,
    Mail,
    Linkedin,
    Github,
    CheckCircle,
    AlertCircle,
    Globe,
    Clock,
    ShieldCheck,
    ArrowRight,
    Fingerprint,
    Zap,
    TowerControl
} from 'lucide-react';

const ContactInfoCard = ({ icon: Icon, title, value, link, description }) => (
    <motion.a
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ x: 5 }}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative p-8 rounded-3xl bg-card border border-primary/10 hover:border-accent/40 hover:bg-accent/[0.02] transition-all duration-500 flex items-start gap-6 shadow-sm hover:shadow-2xl overflow-hidden"
    >
        {/* Subtle Background Glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        <div className="p-4 rounded-2xl bg-primary/5 text-primary/40 group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-inner flex-shrink-0">
            <Icon className="w-6 h-6" />
        </div>
        <div className="space-y-2 relative z-10">
            <h3 className="text-sm font-black text-primary/40 uppercase tracking-[0.2em] group-hover:text-accent transition-colors">
                {title}
            </h3>
            <p className="text-xl font-black text-primary tracking-tighter leading-none break-all">
                {value}
            </p>
            <p className="text-[10px] text-primary/30 font-bold uppercase tracking-widest pt-2">
                {description}
            </p>
        </div>
    </motion.a>
);

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        subject: 'Strategic Partnership'
    });
    const [status, setStatus] = useState('idle');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            // Simulation of secure transmission
            await new Promise(resolve => setTimeout(resolve, 2500));
            setStatus('success');
            setTimeout(() => setStatus('idle'), 5000);
            setFormData({ name: '', email: '', message: '', subject: 'Strategic Partnership' });
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 py-24 lg:py-40 relative">
            {/* Background Architectural Grid Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 -z-10" />

            {/* Header Narrative */}
            <div className="max-w-4xl mb-24 space-y-8">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary/40 text-[10px] font-black uppercase tracking-[0.3em]"
                >
                    <TowerControl className="w-4 h-4 text-accent" />
                    Global Communication Uplink
                </motion.div>
                <h2 className="text-7xl lg:text-9xl font-black tracking-[-0.05em] text-primary leading-[0.8]">
                    Initiate <span className="text-accent underline decoration-accent/10 underline-offset-[16px]">Dialogue</span>
                </h2>
                <p className="text-xl lg:text-2xl text-primary/50 leading-relaxed font-medium max-w-3xl">
                    Strategic infrastructure requires precision communication. Reach out to coordinate enterprise-grade digital solutions and architectural consultations.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                {/* Connection Matrix Area */}
                <div className="lg:col-span-5 space-y-12">
                    {/* Status Monitor */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-10 rounded-[2.5rem] bg-primary text-background space-y-6 shadow-2xl relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-5">
                            <Fingerprint className="w-32 h-32" />
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-background/40">Active System Status</span>
                        </div>
                        <h3 className="text-3xl font-black tracking-tight leading-tight italic">
                            Ready for Professional Integration
                        </h3>
                        <p className="text-lg text-background/40 font-medium font-inter">
                            Open for high-impact collaborations and technical leadership roles for Q1-Q2 2026.
                        </p>
                    </motion.div>

                    {/* Contact Node Cluster */}
                    <div className="grid grid-cols-1 gap-6">
                        <ContactInfoCard
                            icon={Mail}
                            title="Correspondence"
                            value="rmugendran2004@gmail.com"
                            link="mailto:rmugendran2004@gmail.com"
                            description="Response SLA: < 24 Hours"
                        />
                        <ContactInfoCard
                            icon={Linkedin}
                            title="Career Matrix"
                            value="linkedin.com/in/mugendraraja-r"
                            link="https://www.linkedin.com/in/mugendraraja-r-527a692b6"
                            description="Professional Network Sync"
                        />
                        <ContactInfoCard
                            icon={Github}
                            title="Code Repositories"
                            value="github.com/Mugendran-158"
                            link="https://github.com/Mugendran-158"
                            description="Open Source Architecture"
                        />
                    </div>

                    {/* Metadata Footer */}
                    <div className="flex flex-wrap items-center gap-10 px-6 pt-6">
                        <div className="flex items-center gap-3 text-primary/30 font-black text-[10px] uppercase tracking-[0.2em]">
                            <Clock className="w-4 h-4" />
                            IST (GMT +5:30)
                        </div>
                        <div className="flex items-center gap-3 text-primary/30 font-black text-[10px] uppercase tracking-[0.2em]">
                            <ShieldCheck className="w-4 h-4" />
                            TLS 1.3 Secure
                        </div>
                        <div className="flex items-center gap-3 text-primary/30 font-black text-[10px] uppercase tracking-[0.2em]">
                            <Zap className="w-4 h-4 text-accent" />
                            High Availability
                        </div>
                    </div>
                </div>

                {/* Secure Message Transmission Console */}
                <div className="lg:col-span-7">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-card border border-primary/10 rounded-[3.5rem] p-12 lg:p-20 shadow-[-20px_40px_100px_rgba(0,0,0,0.05)] relative overflow-hidden"
                    >
                        {/* Internal Ornament */}
                        <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/[0.03] rounded-full blur-[100px] -mr-40 -mb-40" />

                        <form onSubmit={handleSubmit} className="relative z-10 space-y-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/30 ml-2">Identity</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="e.g. Jean-Luc Picard"
                                        className="w-full px-8 py-5 rounded-3xl bg-primary/5 border-2 border-transparent focus:border-accent/30 focus:bg-background outline-none transition-all text-primary font-bold placeholder:text-primary/10 tracking-tight"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/30 ml-2">Communication Hub</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="e.g. captain@enterprise.com"
                                        className="w-full px-8 py-5 rounded-3xl bg-primary/5 border-2 border-transparent focus:border-accent/30 focus:bg-background outline-none transition-all text-primary font-bold placeholder:text-primary/10 tracking-tight"
                                    />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/30 ml-2">Engagement Category</label>
                                <div className="relative">
                                    <select
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-8 py-5 rounded-3xl bg-primary/5 border-2 border-transparent focus:border-accent/30 focus:bg-background outline-none transition-all text-primary font-bold appearance-none cursor-pointer"
                                    >
                                        <option>Strategic Partnership</option>
                                        <option>Technical Consultation</option>
                                        <option>Architectural Review</option>
                                        <option>Institutional Inquiry</option>
                                    </select>
                                    <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none text-primary/20">
                                        <ArrowRight className="w-5 h-5 rotate-90" />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/30 ml-2">Communication Brief</label>
                                <textarea
                                    name="message"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={6}
                                    placeholder="Provide a detailed overview of your objectives..."
                                    className="w-full px-8 py-5 rounded-3xl bg-primary/5 border-2 border-transparent focus:border-accent/30 focus:bg-background outline-none transition-all text-primary font-bold placeholder:text-primary/10 resize-none tracking-tight leading-relaxed"
                                />
                            </div>

                            <div className="flex flex-col sm:flex-row items-center gap-8 pt-6">
                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="w-full sm:w-auto px-12 py-6 rounded-2xl bg-primary text-background font-black uppercase tracking-[0.3em] text-xs hover:bg-accent transition-all shadow-[0_20px_50px_rgba(0,0,0,0.1)] active:scale-95 flex items-center justify-center gap-4 disabled:opacity-50 group"
                                >
                                    {status === 'loading' ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            Synchronizing...
                                        </>
                                    ) : (
                                        <>
                                            Transmit Message
                                            <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                        </>
                                    )}
                                </button>

                                <AnimatePresence>
                                    {status === 'success' && (
                                        <motion.div
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0 }}
                                            className="flex items-center gap-3 text-green-600 font-black text-xs uppercase tracking-widest bg-green-500/10 px-6 py-3 rounded-full border border-green-500/20"
                                        >
                                            <CheckCircle className="w-4 h-4" />
                                            Transmission Successful
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {status === 'error' && (
                                    <motion.div
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className="flex items-center gap-3 text-red-600 font-black text-xs uppercase tracking-widest bg-red-500/10 px-6 py-3 rounded-full border border-red-500/20"
                                    >
                                        <AlertCircle className="w-4 h-4" />
                                        Matrix Sync Error
                                    </motion.div>
                                )}
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
