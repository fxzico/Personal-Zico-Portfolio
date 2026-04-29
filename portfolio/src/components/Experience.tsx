"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";

const EXPERIENCES = [
    {
        id: 1,
        role: "PGD in Corporate Communication",
        company: "IIMC Dhenkanal",
        period: "2025 - 2026",
        description: "Pursuing Post Graduate Diploma in Corporate Communication & Brand Management."
    },
    {
        id: 2,
        role: "Cinematographer & Video Editor",
        company: "DigimarketX, Kolkata",
        period: "2023 - 2025",
        description: "Produced 100+ videos generating 5M+ views. Specialized in cinematic product ads and brand films."
    },
    {
        id: 3,
        role: "Photographer & Social Media Creative",
        company: "Stickeropedia, Serampore",
        period: "2021 - 2023",
        description: "Managed end-to-end creative workflows and strengthened brand identity through visual consistency."
    }
];

export default function Experience() {
    return (
        <section id="experience" className="py-32 px-8 bg-[#0a0a0a] text-white relative">
            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-20"
                >
                    <h2 className="text-6xl md:text-8xl font-bold mb-4">Experience</h2>
                    <div className="w-20 h-1 bg-white/20 rounded-full mb-16" />
                    
                    <div className="space-y-12">
                        {EXPERIENCES.map((exp, i) => (
                            <motion.div
                                key={exp.id}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.2 }}
                                className="relative pl-8 md:pl-0"
                            >
                                <div className="md:grid md:grid-cols-4 md:gap-8 items-start relative group">
                                    <div className="hidden md:flex flex-col items-end pt-1 text-white/50 space-y-2">
                                        <div className="flex items-center space-x-2 text-sm">
                                            <Calendar className="w-4 h-4" />
                                            <span>{exp.period}</span>
                                        </div>
                                        <div className="flex items-center space-x-2 text-primary font-medium text-[#8b5cf6]">
                                            <Briefcase className="w-4 h-4" />
                                            <span>{exp.company}</span>
                                        </div>
                                    </div>
                                    
                                    {/* Timeline Line */}
                                    <div className="absolute left-0 md:left-[25%] top-2 bottom-[-48px] w-px bg-white/10 group-last:bg-transparent" />
                                    <div className="absolute left-[-5px] md:left-[calc(25%-4px)] top-2 w-[9px] h-[9px] rounded-full bg-[#8b5cf6] border-2 border-[#121212]" />

                                    <div className="md:col-span-3 pb-8 md:pl-8">
                                        {/* Mobile Period/Company */}
                                        <div className="md:hidden flex flex-col space-y-1 mb-4 text-white/50 text-sm">
                                            <div className="flex items-center space-x-2">
                                                <Calendar className="w-4 h-4" />
                                                <span>{exp.period}</span>
                                            </div>
                                            <div className="flex items-center space-x-2 text-[#8b5cf6] font-medium">
                                                <Briefcase className="w-4 h-4" />
                                                <span>{exp.company}</span>
                                            </div>
                                        </div>

                                        <h3 className="text-3xl font-bold text-white mb-4 flex items-center">
                                            {exp.role}
                                            <ChevronRight className="w-6 h-6 ml-2 text-white/20 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                                        </h3>
                                        <p className="text-white/60 text-lg leading-relaxed font-light">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
            
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px] -z-10 pointer-events-none transform -translate-y-1/2" />
        </section>
    );
}
