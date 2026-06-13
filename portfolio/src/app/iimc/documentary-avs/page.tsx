"use client";

import { motion } from "framer-motion";
import BackToHub from "@/components/BackToHub";
import { Play } from "lucide-react";

const DOCS = [
    { 
        title: "MCL Startup Carnival AV", 
        category: "Corporate AV",
        link: "https://drive.google.com/file/d/17U1zyQOatgfFb67y6NkPvMYsBL077RcN/view?usp=sharing"
    },
    { 
        title: "Tanny Shoes", 
        category: "Brand Documentary",
        link: "https://drive.google.com/file/d/1G1mtcGXFsp-QiEemag-BBtenNPV-02B9/view?usp=drive_link"
    },
    { 
        title: "Swachh Bharat", 
        category: "Social Impact",
        link: "https://drive.google.com/file/d/1oUg2ol6e0dYTGlkiDcipX-Cg6BJEiJve/view?usp=drive_link"
    }
];

export default function DocumentaryAVsPage() {
    return (
        <main className="min-h-screen bg-[#121212] text-white font-sans overflow-x-hidden">
            <BackToHub />
            <div className="max-w-7xl mx-auto px-8 pb-32">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16 text-center md:text-left"
                >
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-500">
                        Documentary & AVs
                    </h1>
                    <p className="text-xl md:text-2xl text-white/50 max-w-3xl font-light leading-relaxed">
                        Long-form storytelling capturing authentic moments and high-value corporate narratives.
                    </p>
                </motion.div>

                <div className="space-y-12">
                    {DOCS.map((doc, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            className="w-full"
                        >
                            <a
                                href={doc.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative w-full aspect-[21/9] rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-orange-500/50 transition-all duration-300 shadow-2xl flex items-center justify-center cursor-pointer block"
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 z-10" />
                                
                                {/* Inner Content */}
                                <div className="relative z-20 flex flex-col items-center justify-center">
                                    <div className="w-20 h-20 mb-6 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:bg-orange-500/20 transition-all duration-500">
                                        <Play className="w-8 h-8 text-white ml-2" />
                                    </div>
                                    <p className="text-orange-400 font-bold uppercase tracking-[0.2em] text-sm mb-4">
                                        {doc.category}
                                    </p>
                                    <h2 className="text-5xl font-bold tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-red-500 transition-colors duration-500 text-center px-4">
                                        {doc.title}
                                    </h2>
                                </div>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
}
