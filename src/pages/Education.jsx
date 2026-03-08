import React from 'react';
import { motion } from 'framer-motion';
import kalasalingamCampus from '../assets/kalasalingam-campus.jpg';
import kvsSchool from '../assets/kvs-school.png';
import {
    ShieldCheck,
    Library,
    ChevronRight,
    GraduationCap,
    Award,
    BookMarked,
    Star,
    Globe
} from 'lucide-react';

const InstitutionalPillar = ({ year, degree, institution, details, grade, type, icon: Icon, highlights, image }) => (
    <motion.div
        whileHover={{ y: -6 }}
        className="relative flex flex-col sm:flex-row bg-card border border-primary/10 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 group"
    >
        {/* Glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-[120px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />

        {/* LEFT — Image */}
        {image && (
            <div className="relative sm:w-72 lg:w-96 shrink-0 h-64 sm:h-auto overflow-hidden">
                <img
                    src={image}
                    alt={`${institution} campus`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Subtle gradient overlay on right edge for seamless blend */}
                <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-r from-transparent to-card/60 pointer-events-none hidden sm:block" />
            </div>
        )}

        {/* RIGHT — Content */}
        <div className="relative z-10 flex flex-col justify-between gap-8 p-8 lg:p-12 flex-1">
            {/* Top row: type badge + year + icon */}
            <div className="flex justify-between items-start">
                <div className="space-y-2">
                    <div className="px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-[10px] font-extrabold uppercase tracking-[0.2em] text-primary/50 group-hover:bg-accent group-hover:text-white transition-all duration-500 inline-block">
                        {type}
                    </div>
                    <p className="text-accent font-black tracking-[0.1em] text-sm uppercase">{year}</p>
                </div>
                <div className="p-4 rounded-3xl bg-primary/5 text-primary/30 group-hover:bg-accent group-hover:text-white transition-all duration-700 shadow-inner shrink-0">
                    <Icon className="w-7 h-7" />
                </div>
            </div>

            {/* Degree + institution */}
            <div className="space-y-2">
                <h3 className="text-3xl lg:text-4xl font-black text-primary tracking-[-0.04em] leading-[0.9] group-hover:text-accent transition-colors duration-500">
                    {degree}
                </h3>
                <p className="text-base font-bold text-primary/70 leading-tight">
                    {institution}
                </p>
            </div>

            {/* Grade */}
            <div className="py-5 border-y border-primary/5 group-hover:border-accent/20 transition-colors">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/30 mb-1">My Grade</p>
                <div className="flex items-baseline gap-2 group-hover:scale-105 origin-left transition-transform duration-700">
                    <span className="text-5xl font-black text-primary tracking-tighter">{grade.value}</span>
                    <span className="text-lg font-bold text-accent tracking-widest uppercase">{grade.label}</span>
                </div>
            </div>

            {/* Description */}
            <p className="text-[15px] font-medium text-primary/50 leading-relaxed">
                {details}
            </p>

            {/* Key Focus */}
            <div className="space-y-3">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/30">Key Focus</p>
                <div className="flex flex-wrap gap-2">
                    {highlights.map((h, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/5 text-xs font-bold text-primary/60 border border-transparent group-hover:border-accent/20 group-hover:text-primary transition-all duration-500"
                        >
                            <ShieldCheck className="w-3.5 h-3.5 text-accent" />
                            {h}
                        </div>
                    ))}
                </div>
            </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-[2px] bg-accent/20 shadow-[0_0_15px_rgba(37,99,235,0.4)] pointer-events-none opacity-0 group-hover:opacity-100 group-hover:animate-[scan_3s_linear_infinite]" />
    </motion.div>
);

const Education = () => {
    const educationTimeline = [
        {
            year: "2022 - 2026",
            degree: "B.Tech in Information Technology",
            institution: "Kalasalingam Academy Research and Education",
            details: "Focusing on full stack development, software engineering, and modern web architectures. Actively involved in learning new technologies.",
            grade: { value: "8.31", label: "CGPA" },
            type: "College",
            icon: GraduationCap,
            highlights: ["Web Development", "Data Structures", "Programming"],
            image: kalasalingamCampus
        },
        {
            year: "2021 - 2022",
            degree: "Higher Secondary Education",
            institution: "K.V.S Matriculation Higher Secondary School",
            details: "Focused on Mathematics and Science topics, building a strong logical and analytical base for my engineering journey.",
            grade: { value: "81.16", label: "%" },
            type: "High School",
            icon: Award,
            highlights: ["Mathematics", "Physics", "Chemistry", "Computer Science"],
            image: kvsSchool
        },
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
    };

    return (
        <div className="max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-20 pt-12 lg:pt-24 pb-12 lg:pb-24 relative">
            {/* Architectural Grid System */}
            <div className="absolute inset-0 circuit-grid opacity-[0.03] dark:opacity-[0.05] -z-10" />

            {/* Narrative Header */}
            <div className="max-w-5xl mx-auto text-center mb-32 space-y-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="inline-flex items-center gap-4 px-6 py-2.5 rounded-full bg-primary/5 border border-primary/10 text-primary/40 font-black text-[10px] uppercase tracking-[0.4em]"
                >
                    <Library className="w-4 h-4 text-accent" />
                    Academic Portfolio
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                    className="text-8xl lg:text-[11rem] font-black tracking-[-0.07em] text-primary leading-[0.8] text-balance"
                >
                    My <span className="text-accent italic">Education</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="text-2xl lg:text-3xl text-primary/40 max-w-3xl mx-auto font-medium leading-tight tracking-tight"
                >
                    A comprehensive registry of academic milestones and the technical foundations of my engineering journey.
                </motion.p>
            </div>

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="flex flex-col gap-10"
            >
                {educationTimeline.map((edu, idx) => (
                    <motion.div key={idx} variants={item}>
                        <InstitutionalPillar {...edu} />
                    </motion.div>
                ))}
            </motion.div>

        </div>
    );
};

export default Education;
