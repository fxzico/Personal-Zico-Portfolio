"use client";

import { motion } from "framer-motion";
import BackToHub from "@/components/BackToHub";
import Link from "next/link";

const EVENTS = [
    { title: "Tata Steel Kapilash Half Marathon", href: "/iimc/events/tata-steel" },
    { title: "Odisha Landscape Symposium (DFO)", href: "/iimc/events/dfo-symposium" },
    { title: "Regional Science Center Bhubaneswar", href: "/iimc/events/science-center" },
    { title: "Photography Competition DFO", href: "/iimc/events/dfo-photography" },
    { title: "SP Cyber Security", href: "/iimc/events/cyber-security" },
    { title: "MCL Startup Carnival 2026", href: "/iimc/events/mcl-carnival" }
];

export default function EventsPage() {
    return (
        <main className="min-h-screen bg-[#121212] text-white font-sans overflow-x-hidden">
            <BackToHub />
            <div className="max-w-7xl mx-auto px-8 pb-32">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16 text-center md:text-left"
                >
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-600">
                        Events
                    </h1>
                    <p className="text-xl md:text-2xl text-white/50 max-w-3xl font-light leading-relaxed">
                        A showcase of strategic planning, ground execution, and premium brand storytelling across high-profile settings.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {EVENTS.map((event, i) => (
                        <Link href={event.href} key={i}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1, duration: 0.6 }}
                                className="group relative aspect-[4/3] rounded-3xl overflow-hidden bg-white/[0.03] border border-white/10 flex items-center justify-center p-8 hover:bg-white/[0.08] hover:border-blue-500/50 transition-all duration-500 shadow-2xl"
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                                <h2 className="text-3xl font-bold tracking-wide text-center group-hover:-translate-y-4 group-hover:scale-105 transition-all duration-500 relative z-20">
                                    {event.title}
                                </h2>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
