"use client";

import { motion } from "framer-motion";
import BackToHub from "@/components/BackToHub";
import { BookOpen } from "lucide-react";

export default function NewslettersPage() {
    return (
        <main className="min-h-screen bg-[#121212] text-white font-sans overflow-x-hidden">
            <BackToHub />
            <div className="max-w-6xl mx-auto px-8 pb-32">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16 text-center md:text-left"
                >
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-emerald-500">
                        Newsletters
                    </h1>
                    <p className="text-xl md:text-2xl text-white/50 max-w-3xl font-light leading-relaxed">
                        A clean reading experience for 'Brand Waves', unpacking strategy in long-form.
                    </p>
                </motion.div>

                <div className="flex justify-center items-center w-full mt-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="w-full max-w-2xl group relative"
                    >
                        <a 
                            href="https://drive.google.com/drive/folders/1sDIyKA9d8p-kZFhvfcCgGIryYVeFHFNd?usp=drive_link" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="block relative flex flex-col p-12 md:p-16 rounded-3xl bg-white/[0.02] border border-white/5 shadow-2xl hover:bg-white/[0.04] transition-all duration-500 overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            
                            <div className="relative z-10 flex flex-col items-center text-center">
                                <div className="p-6 rounded-full bg-white/5 w-24 h-24 flex items-center justify-center mb-8 border border-white/10 group-hover:bg-teal-500/20 group-hover:scale-105 transition-all duration-500">
                                    <BookOpen className="w-12 h-12 text-white/70 group-hover:text-teal-400 transition-colors duration-500" />
                                </div>
                                
                                <p className="text-teal-400 text-sm tracking-[0.3em] font-bold uppercase mb-4">
                                    Single Collection
                                </p>
                                
                                <h2 className="text-4xl md:text-5xl font-serif tracking-tight mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-400 group-hover:to-emerald-500 transition-all duration-500">
                                    Brand Waves – The Complete Archive
                                </h2>
                                
                                <p className="text-white/60 font-light leading-relaxed md:text-lg max-w-lg mx-auto mb-10">
                                    Access the full collection of our monthly Corporate Communication & Brand Management newsletter, covering brand mechanics, digital strategy, and industry trends.
                                </p>
                                
                                <span className="inline-block px-8 py-4 border border-teal-500/30 rounded-full text-sm font-semibold tracking-widest uppercase group-hover:bg-teal-500 group-hover:text-white group-hover:border-teal-500 transition-all duration-500">
                                    OPEN ARCHIVE
                                </span>
                            </div>
                        </a>
                    </motion.div>
                </div>
            </div>
        </main>
    );
}
