"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Video, Mic, Mail, Presentation, FileVideo, LayoutList, Calendar, BookOpen } from "lucide-react";

const CATEGORIES = [
    {
        title: "Events",
        href: "/iimc/events",
        description: "Capturing and strategic planning of high-profile events.",
        icon: <Calendar className="w-8 h-8 md:w-12 md:h-12" />,
        color: "from-blue-500 to-indigo-600"
    },
    {
        title: "Short Videos",
        href: "/iimc/short-videos",
        description: "Engaging vertical portraits and snappy short-form content.",
        icon: <Video className="w-8 h-8 md:w-12 md:h-12" />,
        color: "from-emerald-400 to-cyan-500"
    },
    {
        title: "Presentations",
        href: "/iimc/presentations",
        description: "Class PPT Collection & Professional Decks.",
        icon: <Presentation className="w-8 h-8 md:w-12 md:h-12" />,
        color: "from-purple-500 to-pink-500"
    },
    {
        title: "Documentary & AVs",
        href: "/iimc/documentary-avs",
        description: "Cinematic documentaries and corporate audio-visuals.",
        icon: <FileVideo className="w-8 h-8 md:w-12 md:h-12" />,
        color: "from-orange-400 to-red-500"
    },
    {
        title: "Podcasts",
        href: "/iimc/podcasts",
        description: "Deep dive audio conversations and broadcast series.",
        icon: <Mic className="w-8 h-8 md:w-12 md:h-12" />,
        color: "from-yellow-400 to-orange-500"
    },
    {
        title: "Newsletters",
        href: "/iimc/newsletters",
        description: "Brand Waves and insightful editorial publications.",
        icon: <Mail className="w-8 h-8 md:w-12 md:h-12" />,
        color: "from-teal-400 to-emerald-500"
    },
    {
        title: "Miscellaneous",
        href: "/iimc/miscellaneous",
        description: "BrandCheck Pro, Catalyst AI & Freelance Projects.",
        icon: <LayoutList className="w-8 h-8 md:w-12 md:h-12" />,
        color: "from-gray-500 to-slate-700"
    },
    {
        title: "Case Studies",
        href: "/case-studies",
        description: "In-depth analysis of brand strategy, market positioning, and corporate communication models.",
        icon: <BookOpen className="w-8 h-8 md:w-12 md:h-12" />,
        color: "from-rose-500 to-red-600"
    }
];

export default function IIMCHub() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white pt-32 pb-24 px-8 font-sans relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="mb-20">
                    <Link 
                        href="/" 
                        className="inline-flex items-center text-white/50 hover:text-white transition-colors mb-12 group"
                    >
                        <ArrowLeft className="w-5 h-5 mr-3 transform group-hover:-translate-x-1 transition-transform" />
                        <span className="tracking-widest uppercase text-sm font-semibold">Back to Home</span>
                    </Link>
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-8xl font-bold tracking-tight mb-6"
                    >
                        Category Hub
                    </motion.h1>
                    <motion.div 
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        className="w-32 h-1 bg-white/20 rounded-full origin-left" 
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {CATEGORIES.map((cat, i) => (
                        <Link href={cat.href} key={i}>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1, duration: 0.6 }}
                                className="group relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden bg-white/[0.02] border border-white/5 flex flex-col justify-end p-8 hover:bg-white/[0.05] transition-all duration-500"
                            >
                                {/* Hover Glow */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                                
                                <div className="absolute top-8 left-8 text-white/20 group-hover:text-white transition-colors duration-500 group-hover:scale-110 transform origin-top-left">
                                    {cat.icon}
                                </div>

                                <div className="relative z-10">
                                    <h2 className="text-3xl md:text-4xl font-bold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-all duration-300">
                                        {cat.title}
                                    </h2>
                                    <p className="text-white/50 font-light max-w-sm group-hover:text-white/80 transition-colors duration-300">
                                        {cat.description}
                                    </p>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[150px] -z-10 pointer-events-none transform -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] -z-10 pointer-events-none transform translate-y-1/3 -translate-x-1/3" />
        </main>
    );
}
