"use client";

import { motion } from "framer-motion";
import BackToHub from "@/components/BackToHub";
import { FolderGit2 } from "lucide-react";

const MISC_PROJECTS = [
    { title: "BrandCheck Pro", description: "Advanced audit systems tracking brand consistency across all consumer touchpoints." },
    { title: "Catalyst AI", description: "Evaluating AI-driven workflows for hyper-personalized messaging models." },
    { title: "Institute of Life Sciences (ILS)", description: "Freelance corporate videos demystifying complex scientific research for a broader audience." }
];

export default function MiscellaneousPage() {
    return (
        <main className="min-h-screen bg-[#121212] text-white font-sans overflow-x-hidden">
            <BackToHub />
            <div className="max-w-7xl mx-auto px-8 pb-32">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16 text-center md:text-left"
                >
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-slate-200">
                        Miscellaneous
                    </h1>
                    <p className="text-xl md:text-2xl text-white/50 max-w-3xl font-light leading-relaxed">
                        A curated showcase of freelance videography, system designs, and unique side-projects.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {MISC_PROJECTS.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            className="group relative h-96 rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-all duration-300 p-8 flex flex-col items-start justify-between shadow-2xl"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                            
                            <div className="w-16 h-16 rounded-full bg-slate-800 border border-slate-600 flex items-center justify-center group-hover:scale-110 group-hover:bg-slate-700 transition-all duration-300 shadow-xl">
                                <FolderGit2 className="w-8 h-8 text-slate-300 group-hover:text-white" />
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold tracking-tight mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-colors duration-300">
                                    {project.title}
                                </h2>
                                <p className="text-white/60 font-light leading-relaxed">
                                    {project.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
}
