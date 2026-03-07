import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Send,
    Loader2,
    Mail,
    CheckCircle,
    AlertCircle,
    ShieldCheck,
    ArrowRight,
    TowerControl,
    Zap,
    Fingerprint
} from 'lucide-react';
import axios from 'axios';

const FormInput = ({ label, ...props }) => (
    <div className="space-y-6">
        <label className="text-[10px] font-black uppercase tracking-[0.5em] text-primary/20 ml-4 flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
            {label}
        </label>
        <input
            {...props}
            required
            className="w-full px-10 py-8 rounded-[2rem] bg-primary/5 border-2 border-transparent focus:border-accent/30 focus:bg-background outline-none transition-all text-primary font-bold placeholder:text-primary/10 tracking-tight shadow-inner"
        />
    </div>
);

const GatewayContact = () => {
    const [formData, setFormData] = useState({
        name: '',
        to: '', // Recipient Email
        message: ''
    });
    const [status, setStatus] = useState('idle');
    const [errorMsg, setErrorMsg] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMsg('');

        try {
            // Direct SMTP Gateway Uplink
            const response = await axios.post('http://localhost:5000/send-email', formData);

            if (response.status === 200) {
                setStatus('success');
                setFormData({ name: '', to: '', message: '' });
                setTimeout(() => setStatus('idle'), 5000);
            }
        } catch (error) {
            console.error('Failed to send:', error);
            setStatus('error');
            setErrorMsg(error.response?.data?.error || 'Message failed to send. PLEASE VERIFY SYSTEM STATUS.');
        }
    };

    return (
        <div className="max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-20 py-24 lg:py-48 relative min-h-screen">
            {/* Architectural Grid System */}
            <div className="absolute inset-0 circuit-grid opacity-[0.03] dark:opacity-[0.05] -z-10" />

            {/* Narrative Header */}
            <div className="max-w-5xl mx-auto text-center mb-32 space-y-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-flex items-center gap-4 px-6 py-2.5 rounded-full bg-primary/5 border border-primary/10 text-primary/40 font-black text-[10px] uppercase tracking-[0.4em]"
                >
                    <TowerControl className="w-4 h-4 text-accent" />
                    Communication Portal
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                    className="text-8xl lg:text-[11rem] font-black tracking-[-0.07em] text-primary leading-[0.8] text-balance"
                >
                    Get in <span className="text-accent italic">Touch</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="text-2xl lg:text-3xl text-primary/40 max-w-3xl mx-auto font-medium leading-tight tracking-tight"
                >
                    Initiate a direct communication channel for collaborations, project inquiries, or high-fidelity technical dialogue.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
                {/* System Diagnostics Cluster */}
                <div className="lg:col-span-4 space-y-12">
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="p-12 rounded-[3.5rem] bg-primary text-background space-y-12 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] relative overflow-hidden group"
                    >
                        <div className="absolute -bottom-10 -right-10 opacity-5 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-1000">
                            <ShieldCheck className="w-64 h-64" />
                        </div>

                        <div className="space-y-6 relative z-10">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse shadow-[0_0_15px_rgba(34,197,94,0.6)]" />
                                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-background/40">Portal: Active</span>
                            </div>
                            <h3 className="text-4xl font-black tracking-tighter leading-none italic">
                                Secure Messaging
                            </h3>
                        </div>

                        <div className="space-y-8 relative z-10">
                            {[
                                { icon: Zap, label: "Quantum Delivery" },
                                { icon: Fingerprint, label: "Identity Verified" },
                                { icon: Mail, label: "AES-256 Encrypted" }
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-6 group/item">
                                    <div className="p-4 rounded-2xl bg-white/5 border border-white/5 text-accent group-hover/item:bg-accent group-hover/item:text-white transition-all duration-500">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 group-hover/item:text-white transition-colors duration-500">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Technical Metadata */}
                    <div className="px-10 py-10 rounded-[2.5rem] border border-primary/5 space-y-8 bg-card/40 backdrop-blur-sm">
                        <p className="text-[10px] font-black uppercase tracking-[0.6em] text-primary/20 flex items-center gap-4">
                            <div className="w-1 h-4 bg-accent" />
                            System Protocols
                        </p>
                        <div className="space-y-6 text-xs font-black text-primary/40 uppercase tracking-widest">
                            <div className="flex justify-between items-center pb-4 border-b border-primary/5">
                                <span>Payload Limit</span>
                                <span className="text-primary tracking-normal font-bold lowercase">10.0 KB</span>
                            </div>
                            <div className="flex justify-between items-center pb-4 border-b border-primary/5">
                                <span>Security Layer</span>
                                <span className="text-accent">TLS 1.3</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span>Availability</span>
                                <span className="text-green-500/60 font-medium">99.9% Uptime</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Transmission Interface Console */}
                <div className="lg:col-span-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-card/40 backdrop-blur-3xl border border-primary/5 rounded-[4rem] p-12 lg:p-24 shadow-[-50px_80px_120px_rgba(0,0,0,0.05)] relative overflow-hidden group"
                    >
                        {/* Background Ornament */}
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -mr-64 -mt-64 group-hover:bg-accent/10 transition-colors duration-1000" />

                        <form onSubmit={handleSubmit} className="relative z-10 space-y-16">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <FormInput
                                    label="System Identity"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter full name"
                                />
                                <FormInput
                                    label="Registry Email"
                                    name="to"
                                    type="email"
                                    value={formData.to}
                                    onChange={handleChange}
                                    placeholder="Enter recipient email"
                                />
                            </div>

                            <div className="space-y-6">
                                <label className="text-[10px] font-black uppercase tracking-[0.5em] text-primary/20 ml-4 flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                                    Secure Message Payload
                                </label>
                                <textarea
                                    name="message"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={8}
                                    placeholder="Initiate terminal text input..."
                                    className="w-full px-10 py-8 rounded-[2.5rem] bg-primary/5 border-2 border-transparent focus:border-accent/30 focus:bg-background outline-none transition-all text-primary font-bold placeholder:text-primary/10 resize-none tracking-tight leading-relaxed shadow-inner"
                                />
                            </div>

                            <div className="flex flex-col sm:flex-row items-center gap-12 pt-8">
                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="w-full sm:w-auto px-16 py-8 rounded-[2rem] bg-primary text-background font-black uppercase tracking-[0.5em] text-[10px] hover:bg-accent transition-all shadow-[0_30px_60px_-10px_rgba(0,0,0,0.3)] active:scale-95 disabled:opacity-50 group flex items-center justify-center gap-6"
                                >
                                    {status === 'loading' ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            Encrypting...
                                        </>
                                    ) : (
                                        <>
                                            Push to Gateway
                                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                                        </>
                                    )}
                                </button>

                                <AnimatePresence>
                                    {status === 'success' && (
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0 }}
                                            className="flex items-center gap-4 text-green-500 font-black text-[10px] uppercase tracking-[0.3em] bg-green-500/5 px-10 py-5 rounded-full border border-green-500/10 shadow-sm"
                                        >
                                            <CheckCircle className="w-5 h-5" />
                                            Transmission Successful
                                        </motion.div>
                                    )}

                                    {status === 'error' && (
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            className="flex items-center gap-4 text-red-500 font-black text-[10px] uppercase tracking-[0.3em] bg-red-500/5 px-10 py-5 rounded-full border border-red-500/10 shadow-sm"
                                        >
                                            <AlertCircle className="w-5 h-5" />
                                            {errorMsg}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default GatewayContact;
