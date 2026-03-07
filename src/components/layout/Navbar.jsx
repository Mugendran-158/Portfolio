import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Sun, Moon, Menu, X, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Education', id: 'education' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
];

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeId, setActiveId] = useState('home');

    /* ── scroll shadow ── */
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    /* ── active section via IntersectionObserver ── */
    useEffect(() => {
        const observers = [];
        const sectionMap = {};

        navLinks.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (!el) return;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    sectionMap[id] = entry.isIntersecting;
                    // pick the first visible section in document order
                    const first = navLinks.find(l => sectionMap[l.id]);
                    if (first) setActiveId(first.id);
                },
                { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
            );

            observer.observe(el);
            observers.push(observer);
        });

        return () => observers.forEach(o => o.disconnect());
    }, []);

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
    };

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-700 ${scrolled
                ? 'bg-background/80 backdrop-blur-2xl border-b border-primary/5 py-3 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)]'
                : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-[1700px] mx-auto px-6 sm:px-8 lg:px-16">
                <div className="flex items-center justify-between">

                    {/* Brand Logo */}
                    <a href="#home" onClick={(e) => { e.preventDefault(); scrollTo('home'); }} className="flex items-center gap-4 group">
                        <div className="relative">
                            <div className="p-2.5 rounded-2xl bg-primary text-background group-hover:bg-accent transition-all duration-700 shadow-xl group-hover:shadow-accent/40 group-hover:-rotate-12">
                                <ShieldCheck className="w-5 h-5" />
                            </div>
                            <div className="absolute inset-0 bg-accent blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-700" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm font-black tracking-[0.25em] text-primary uppercase group-hover:text-accent transition-colors duration-500">Mugendraraja R</span>
                            <span className="text-[7px] font-black tracking-[0.5em] text-primary/30 uppercase">Enterprise Solutions</span>
                        </div>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-16">
                        <div className="flex items-center gap-10">
                            {navLinks.map((link) => {
                                const isActive = activeId === link.id;
                                return (
                                    <button
                                        key={link.name}
                                        onClick={() => scrollTo(link.id)}
                                        className={`relative group py-2 flex items-center gap-2 text-[10px] font-black font-heading uppercase tracking-[0.3em] transition-all duration-700
                                            ${isActive ? 'text-accent' : 'text-primary/40 hover:text-primary'}`}
                                    >
                                        <span className="relative z-10">{link.name}</span>

                                        {/* Active underline indicator */}
                                        <motion.div
                                            className="absolute -bottom-1 left-0 right-0 h-[2px] bg-accent origin-left"
                                            initial={false}
                                            animate={{ scaleX: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
                                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                        />
                                        <div className="absolute -inset-x-4 -inset-y-2 bg-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                                    </button>
                                );
                            })}
                        </div>

                        {/* Theme Toggle */}
                        <div className="flex items-center gap-6 border-l border-primary/10 pl-10">
                            <button
                                onClick={toggleTheme}
                                className="relative p-3.5 rounded-2xl bg-primary/5 hover:bg-primary/10 transition-all duration-700 group overflow-hidden border border-transparent hover:border-primary/5"
                                aria-label="Toggle Theme"
                            >
                                <div className="relative z-10">
                                    {theme === 'dark' ? (
                                        <Sun className="w-4 h-4 text-accent transition-transform group-hover:rotate-180 duration-1000" />
                                    ) : (
                                        <Moon className="w-4 h-4 text-primary transition-transform group-hover:-rotate-12 duration-1000" />
                                    )}
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
                            </button>
                        </div>
                    </div>

                    {/* Mobile Controls */}
                    <div className="lg:hidden flex items-center gap-4">
                        <button
                            onClick={toggleTheme}
                            className="p-3.5 rounded-2xl bg-primary/5 text-primary/60"
                        >
                            {theme === 'dark' ? <Sun className="w-4 h-4 text-accent" /> : <Moon className="w-4 h-4" />}
                        </button>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-3.5 rounded-2xl bg-primary text-background shadow-lg active:scale-95 transition-transform"
                        >
                            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-3xl border-b border-primary/5 shadow-2xl overflow-hidden"
                    >
                        <div className="px-8 py-16 space-y-4">
                            {navLinks.map((link, idx) => {
                                const isActive = activeId === link.id;
                                return (
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        key={link.name}
                                    >
                                        <button
                                            onClick={() => scrollTo(link.id)}
                                            className={`w-full flex items-center justify-between px-8 py-6 rounded-[2rem] transition-all duration-700
                                                ${isActive ? 'bg-primary text-background shadow-2xl scale-[1.02]' : 'bg-primary/5 text-primary/40 hover:bg-primary/10'}`}
                                        >
                                            <span className="text-[10px] font-black uppercase tracking-[0.4em]">{link.name}</span>
                                            <div className={`p-2 rounded-xl bg-accent text-white transition-all duration-500 ${isActive ? 'opacity-100 rotate-0' : 'opacity-0 rotate-12'}`}>
                                                <ShieldCheck className="w-3 h-3" />
                                            </div>
                                        </button>
                                    </motion.div>
                                );
                            })}
                        </div>
                        <div className="px-12 pb-12">
                            <div className="h-[1px] w-full bg-primary/5 mb-8" />
                            <p className="text-[9px] font-black text-primary/20 uppercase tracking-[0.6em] text-center">
                                System Navigation Menu
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
