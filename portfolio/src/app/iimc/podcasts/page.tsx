"use client";

import { motion } from "framer-motion";
import BackToHub from "@/components/BackToHub";
import { PlayCircle } from "lucide-react";

const PODCASTS = [
    { title: "Fit India", link: "https://drive.google.com/file/d/10sXphJeXjosw7KHp4OwpIKOtn755bjRH/view?usp=drive_link" },
    { title: "Brand Cast", link: "https://drive.google.com/file/d/1ZAjaTm3G5PkxboWmKQ0U8WndP1ER-5q2/view?usp=drive_link" },
    { title: "Radio Day", link: "https://drive.google.com/file/d/13Tq4S1ZU1SszfGxtpmvv9zcx5QjzEp6n/view?usp=drive_link" },
    { title: "Unfiltered CCBM", link: "https://drive.google.com/file/d/1L0aa1XFGsTYVMbCU7pPbv1r_SW58_MhR/view?usp=drive_link" },
    { title: "Banakatha (DFO Biologist)", link: "https://drive.google.com/file/d/1lqrkrcarol71SV4kj70Sot71sHR3lBpa/view?usp=drive_link" },
    { title: "Cyber Security with SP", link: "https://drive.google.com/file/d/1IvjG8uRpxaom0Db3aZOi34F0GyHIDKBR/view?usp=drive_link" }
];

export default function PodcastsPage() {
    return (
        <main className="min-h-screen bg-[#121212] text-white font-sans overflow-x-hidden">
            <BackToHub />
            <div className="max-w-5xl mx-auto px-8 pb-32">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16 text-center md:text-left"
                >
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
                        Podcasts
                    </h1>
                    <p className="text-xl md:text-2xl text-white/50 max-w-3xl font-light leading-relaxed">
                        Thought-provoking conversations, industry deep dives, and unfiltered perspectives.
                    </p>
                </motion.div>

                <div className="space-y-6">
                    {PODCASTS.map((podcast, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            className="w-full"
                        >
                            <a
                                href={podcast.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex flex-col md:flex-row items-center p-6 md:p-8 rounded-3xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300 w-full cursor-pointer block"
                            >
                                <div className="w-20 h-20 md:w-32 md:h-32 mb-6 md:mb-0 shrink-0 bg-white/5 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300 overflow-hidden">
                                    <img 
                                        src="/images/podcast-icon.png" 
                                        alt="Podcast Icon" 
                                        className="w-full h-full object-cover p-2 md:p-4 block" 
                                        draggable={false}
                                    />
                                </div>
                                
                                <div className="md:ml-10 flex-grow text-center md:text-left">
                                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight group-hover:text-yellow-400 transition-colors duration-300">
                                        {podcast.title}
                                    </h2>
                                </div>
                                
                                <div className="mt-6 md:mt-0 flex items-center justify-center shrink-0">
                                    <PlayCircle className="w-12 h-12 text-white/30 group-hover:text-yellow-400 transition-colors duration-300" />
                                </div>
                            </a>
                        </motion.div>                    ))}
                </div>
            </div>
        </main>
    );
}
