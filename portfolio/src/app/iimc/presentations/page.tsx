"use client";

import { motion } from "framer-motion";
import BackToHub from "@/components/BackToHub";
import { Monitor, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

const PRESENTATIONS = [
    { 
        title: "Brand Evolution: Generic to Premium", 
        subtext: "Strategic framework for transforming a generic product into a recognizable brand.",
        link: "https://canva.link/1wojd6n1c5vhxfe" 
    },
    { 
        title: "AI Impact Summit 2026: Strategic Review", 
        subtext: "Key insights and communication trends from the 2026 AI Impact Summit visit.",
        link: "https://canva.link/kmmwewv98fsugjl" 
    },
    { 
        title: "Magji Ladoo: Branding Dhenkanal’s Heritage", 
        subtext: "Brand creation and identity design for Dhenkanal’s indigenous GI-tagged sweet.",
        link: "https://canva.link/le20der9iil1ikn" 
    },
    { 
        title: "Ideathon Pitch Deck: Startup Innovation", 
        subtext: "Comprehensive business model and pitch deck developed for the 2026 Ideathon.",
        link: "https://canva.link/xrod28j3l1qz7tf" 
    },
    { 
        title: "Amazon vs. Flipkart: Competitor Audit", 
        subtext: "In-depth brand analysis and positioning comparison of e-commerce giants.",
        link: "https://canva.link/ujzednpigufr8pm" 
    },
    { 
        title: "West Bengal Tourism: Domestic Strategy", 
        subtext: "Integrated marketing plan to promote West Bengal tourism in the domestic market.",
        link: "https://canva.link/a2ay9kqbfxunsty" 
    },
    { 
        title: "Luxury Tea Branding: Premium Entry", 
        subtext: "Visual identity and premium market entry strategy for a luxury tea brand.",
        link: "https://canva.link/0ktmqvqturc32yi" 
    }
];

export default function PresentationsPage() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <main className="min-h-screen bg-[#121212] text-white font-sans overflow-x-hidden">
            <BackToHub />
            <div className="max-w-5xl mx-auto px-8 pb-32">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16 text-center md:text-left"
                >
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
                        Strategic Decks
                    </h1>
                    <p className="text-xl md:text-2xl text-white/50 max-w-3xl font-light leading-relaxed">
                        A collection of professional presentations highlighting deep dives into strategic communication and brand planning.
                    </p>
                </motion.div>

                <div className="space-y-6">
                    {PRESENTATIONS.map((deck, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            className="w-full"
                        >
                            <a
                                href={deck.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex flex-col md:flex-row items-center p-6 md:p-8 rounded-3xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300 w-full cursor-pointer block"
                            >
                                <div className="w-20 h-20 md:w-32 md:h-32 mb-6 md:mb-0 shrink-0 bg-white/5 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300 overflow-hidden">
                                    <Monitor className="w-10 h-10 md:w-16 md:h-16 text-white/50 group-hover:text-pink-400 transition-colors duration-300" />
                                </div>
                                
                                <div className="md:ml-10 flex-grow text-center md:text-left">
                                    <h2 className="text-2xl md:text-4xl font-bold tracking-tight group-hover:text-pink-400 transition-colors duration-300">
                                        {deck.title}
                                    </h2>
                                    <p className="mt-2 text-white/50 text-sm md:text-lg tracking-wide group-hover:text-white/80 transition-colors duration-300">
                                        {deck.subtext}
                                    </p>
                                </div>
                                
                                <div className="mt-6 md:mt-0 flex items-center justify-center shrink-0">
                                    <ArrowUpRight className="w-10 h-10 md:w-12 md:h-12 text-white/30 group-hover:text-pink-400 transition-colors duration-300" />
                                </div>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
}
