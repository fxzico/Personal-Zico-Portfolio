"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Contact from "@/components/Contact";
import Link from "next/link";
import { Play, Volume2, VolumeX, ArrowRight, ShieldCheck, Cpu, Layers, ExternalLink } from "lucide-react";

const PROOF_CARDS = [
    {
        title: "City Style Campaign Card",
        views: "2.1M Organic Views",
        sublabel: "Affordable High-Fashion Status Reframe",
        src: "/Home%20page%20Videos/City%20Style.mp4",
        cover: "/Home%20page%20Videos/Cover%20Images/City%20Style.png"
    },
    {
        title: "Cars 24 Sequence Card",
        views: "2.0M Combined Views",
        sublabel: "Dual-Processing Market Communication Funnel",
        src: "/Home%20page%20Videos/Cars%2024.mp4",
        cover: "/Home%20page%20Videos/Cover%20Images/Cars%2024.png"
    },
    {
        title: "Fire Lens [Bolt] Launch Card",
        views: "1.1M Views",
        sublabel: "First-Frame Phonk Retention Vector",
        src: "/Home%20page%20Videos/Fire%20Lens%20[Bolt].mp4",
        cover: "/Home%20page%20Videos/Cover%20Images/Fire%20Lens%20[Bolt].png"
    }
];

function VideoProofCard({ card, idx }: { card: typeof PROOF_CARDS[0], idx: number }) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isMuted, setIsMuted] = useState(true);
    const [isActive, setIsActive] = useState(false);

    const handleMouseEnter = () => {
        setIsActive(true);
        if (videoRef.current) {
            videoRef.current.play().catch(() => {});
        }
    };

    const handleMouseLeave = () => {
        setIsActive(false);
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    const handleTouchStart = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play().catch(() => {});
                setIsActive(true);
            } else {
                videoRef.current.pause();
                setIsActive(false);
            }
        }
    };

    const toggleMute = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15, duration: 0.6 }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            className="shimmer-effect group relative w-full max-w-[260px] aspect-[9/16] rounded-2xl overflow-hidden bg-zinc-950 border border-white/10 hover:border-emerald-500/30 transition-all duration-500 shadow-2xl flex flex-col justify-between p-5 mx-auto cursor-pointer"
        >
            <video
                ref={videoRef}
                src={card.src}
                poster={card.cover}
                preload="none"
                autoPlay={false}
                muted
                loop
                playsInline={true}
                disablePictureInPicture
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-85 transition-opacity duration-500 z-0 pointer-events-none"
            />
            {/* Dark Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-zinc-950/20 z-0 transition-opacity duration-500 pointer-events-none" />

            {/* Mute button on top-right */}
            <button
                onClick={toggleMute}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/40 hover:bg-black/70 border border-white/10 text-white transition-all hover:scale-105"
            >
                {isMuted ? <VolumeX className="w-3.5 h-3.5 text-white/70" /> : <Volume2 className="w-3.5 h-3.5 text-emerald-400" />}
            </button>

            {/* Content Overlay */}
            <div className={`relative z-10 flex flex-col h-full justify-between w-full pointer-events-none transition-all duration-300 ease-out opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto ${
                isActive ? "opacity-100 translate-y-0 pointer-events-auto" : ""
            }`}>
                <div className="pt-2">
                    <span className="font-mono text-[9px] text-emerald-400 font-semibold tracking-widest uppercase bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full w-max block">
                        {card.title}
                    </span>
                </div>

                <div className="flex flex-col space-y-2 mt-auto">
                    <div className="min-h-[72px] flex items-end">
                        <h3 className="text-sm md:text-base font-bold font-serif text-white tracking-tight leading-tight break-words group-hover:text-emerald-400 transition-colors duration-300">
                            {card.sublabel}
                        </h3>
                    </div>
                    <div className="flex items-center pt-2 border-t border-white/10">
                        <span className="font-mono text-[10px] text-emerald-400/90 font-semibold tracking-widest uppercase">
                            {card.views}
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default function BrandLandingPage() {
    return (
        <div className="bg-[#0a0a0a] min-h-screen text-white overflow-x-hidden font-sans relative">
            {/* Global Shimmer stylesheet */}
            <style>{`
                @keyframes shimmer {
                    0% {
                        transform: translateX(-150%) skewX(-15deg);
                    }
                    100% {
                        transform: translateX(150%) skewX(-15deg);
                    }
                }
                .shimmer-effect {
                    position: relative;
                    overflow: hidden;
                }
                .shimmer-effect::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 60%;
                    height: 100%;
                    background: linear-gradient(
                        95deg,
                        transparent,
                        rgba(52, 211, 153, 0.15),
                        rgba(255, 255, 255, 0.1),
                        transparent
                    );
                    transform: translateX(-150%) skewX(-15deg);
                    pointer-events: none;
                    z-index: 10;
                }
                .shimmer-effect:hover::after {
                    animation: shimmer 1.2s ease-in-out;
                }
            `}</style>

            {/* Section 1: Above-the-Fold Header */}
            <section id="top" className="relative min-h-[75vh] flex flex-col justify-center items-center px-8 pt-32 pb-8">
                <div className="max-w-6xl mx-auto text-center space-y-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="font-mono text-xs md:text-sm tracking-[0.3em] uppercase text-emerald-400 font-bold bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-full">
                            Marketing Content End-to-End Execution Specialist
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-5xl md:text-8xl font-serif font-light tracking-tight leading-[1.1] max-w-5xl mx-auto break-words"
                    >
                        End-to-End Content Strategy & <span className="font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-white">Organic Growth</span> Architecture
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg md:text-2xl text-zinc-400 font-light max-w-3xl mx-auto leading-relaxed break-words"
                    >
                        Orchestrating 5.2M+ organic views for national brands by bridging consumer behavioral psychology with high-velocity internal production.
                    </motion.p>
                </div>

                {/* Background Ambient Glows */}
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[160px] -z-10 pointer-events-none" />
                <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
            </section>

            {/* Section 2: The 3-Column Analytics Row */}
            <section id="metrics" className="px-8 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs tracking-wider"
                >
                    <div className="border border-white/5 bg-zinc-950/40 rounded-2xl px-6 py-4 flex items-center justify-between group hover:border-emerald-500/20 transition-all duration-300">
                        <span className="text-zinc-500">REACH</span>
                        <span className="text-emerald-400 font-bold">5.2M+ Organic Reach Orchestrated</span>
                    </div>
                    <div className="border border-white/5 bg-zinc-950/40 rounded-2xl px-6 py-4 flex items-center justify-between group hover:border-emerald-500/20 transition-all duration-300">
                        <span className="text-zinc-500">PIPELINE</span>
                        <span className="text-emerald-400 font-bold">100% In-House Pipeline Control</span>
                    </div>
                    <div className="border border-white/5 bg-zinc-950/40 rounded-2xl px-6 py-4 flex items-center justify-between group hover:border-emerald-500/20 transition-all duration-300">
                        <span className="text-zinc-500">EXECUTION</span>
                        <span className="text-emerald-400 font-bold">Zero Campaign Friction</span>
                    </div>
                </motion.div>
            </section>

            {/* Section 3: The 3 Aligned Video Cards Grid */}
            <section id="projects" className="py-20 px-8 max-w-6xl mx-auto">
                <div className="space-y-16">
                    <div className="text-center space-y-4">
                        <span className="font-mono text-xs tracking-widest text-emerald-400 uppercase font-semibold">
                            PROOF OF PERFORMANCE
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif font-light tracking-tight text-white">
                            Viral Campaign Showcase
                        </h2>
                        <div className="w-20 h-[2px] bg-emerald-500/30 rounded-full mx-auto" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
                        {PROOF_CARDS.map((card, i) => (
                            <VideoProofCard key={i} card={card} idx={i} />
                        ))}
                    </div>

                    {/* Section 4: Video Production Archive button */}
                    <div className="flex justify-center pt-8">
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <a
                                href="https://drive.google.com/drive/folders/1nk8QV86Krsm3N5MAEVgKC9ii6GE6PwHJ?usp=drive_link"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-8 py-5 border border-white/10 hover:border-emerald-500/30 rounded-full font-mono text-sm tracking-wider uppercase text-zinc-300 hover:text-white bg-zinc-950/50 hover:bg-zinc-950 transition-all duration-300 shadow-xl"
                            >
                                [ ACCESS VIDEO PRODUCTION ARCHIVE ]
                                <ExternalLink className="w-4 h-4 ml-3 text-emerald-400" />
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section 5: The 7-Touchpoints Behavioral Hook Component */}
            <section id="about" className="py-32 px-8 border-y border-white/5 bg-zinc-950/30 relative">
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="inline-block p-1 px-3 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 font-mono text-xs tracking-widest uppercase mb-8">
                        Behavioral Psychology
                    </div>
                    <p className="text-2xl md:text-4xl font-serif font-light tracking-tight leading-relaxed text-zinc-100 break-words">
                        "According to consumer psychology, it takes <span className="text-emerald-400 font-normal">7 unique touchpoints</span> to turn a stranger into a brand advocate. This portfolio home page is <span className="underline decoration-emerald-400 underline-offset-8">Touchpoint #1</span>. Hire me to build and execute the other 6 for your brand."
                    </p>
                </div>
            </section>

            {/* Section 6: Strategic Execution Flowchart Conversion */}
            <section id="experience" className="py-32 px-8 border-t border-white/5 bg-zinc-950/20">
                <div className="max-w-7xl mx-auto space-y-20">
                    <div className="text-center space-y-4">
                        <span className="font-mono text-xs tracking-widest text-emerald-400 uppercase font-semibold">
                            EXECUTION METHODOLOGY
                        </span>
                        <h2 className="text-4xl md:text-6xl font-serif font-light tracking-tight text-white">
                            Single-USP Retention Pipeline
                        </h2>
                        <div className="w-20 h-[2px] bg-emerald-500/30 rounded-full mx-auto" />
                    </div>

                    <div className="relative max-w-4xl mx-auto pl-8 md:pl-12 space-y-12">
                        {/* Vertical Flow Line */}
                        <div className="absolute left-[23px] md:left-[31px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-emerald-500/40 via-emerald-500/20 to-transparent pointer-events-none" />

                        {[
                            {
                                step: "01",
                                sub: "USP Isolation",
                                title: "Brief Deconstruction",
                                desc: "Analyzing the corporate brief to lock down one singular core value proposition."
                            },
                            {
                                step: "02",
                                sub: "Psychological Copy",
                                title: "StoryBrand Scripting",
                                desc: "Writing the narrative framework placing the target audience as the active hero."
                            },
                            {
                                step: "03",
                                sub: "Tech Optimization",
                                title: "AI Pre-Visualization",
                                desc: "Generating rapid storyboard frames and rough structural visual references."
                            },
                            {
                                step: "04",
                                sub: "Brand Alignment",
                                title: "Governance Approval",
                                desc: "Running a tight client compliance check based on core values and brand identity."
                            },
                            {
                                step: "05",
                                sub: "Shoot & Post",
                                title: "Full-Stack Production",
                                desc: "Executing in-house cinematography and cutting the asset for high algorithmic retention."
                            },
                            {
                                step: "06",
                                sub: "Ad Architecture",
                                title: "Meta-Distribution",
                                desc: "Launching across YouTube/Instagram organically alongside targeted ad manager campaigns."
                            },
                            {
                                step: "07",
                                sub: "Performance Report",
                                title: "ROI Data Analytics",
                                desc: "Auditing campaign retention, CTR, and delivery metrics after 7 days of live traction."
                            }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="group relative flex items-start space-x-6 md:space-x-10"
                            >
                                {/* Connector Dot */}
                                <div className="relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-full bg-zinc-950 border border-emerald-500/20 text-emerald-400 flex items-center justify-center font-mono text-sm md:text-base font-bold shadow-2xl transition-all duration-500 group-hover:bg-emerald-500 group-hover:text-zinc-950 group-hover:border-emerald-500 group-hover:shadow-emerald-500/20 shrink-0">
                                    {item.step}
                                </div>

                                {/* Content Card */}
                                <div className="flex-grow bg-zinc-950/40 border border-white/5 hover:border-emerald-500/30 p-6 md:p-8 rounded-3xl transition-all duration-500 hover:bg-zinc-950/80 shadow-2xl">
                                    <div className="flex items-center space-x-2">
                                        <span className="font-mono text-[10px] md:text-xs text-emerald-400 font-bold uppercase tracking-wider bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                                            Step {item.step} | {item.sub}
                                        </span>
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-serif font-bold text-white mt-4 group-hover:text-emerald-400 transition-colors duration-300">
                                        {item.title}
                                    </h3>
                                    <p className="text-zinc-400 text-sm md:text-base font-light leading-relaxed mt-3 break-words">
                                        {item.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 7: Institutional Vault Redirect Banner */}
            <section id="vault" className="py-24 px-8 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative rounded-3xl p-12 md:p-16 border border-emerald-500/20 bg-gradient-to-r from-emerald-950/20 to-zinc-950/60 overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8"
                >
                    <div className="absolute inset-0 bg-emerald-500/5 rounded-full blur-[80px] -z-10 pointer-events-none" />

                    <div className="space-y-4 text-center md:text-left max-w-2xl">
                        <span className="font-mono text-xs tracking-widest text-emerald-400 uppercase font-semibold">
                            ACADEMIC & STRATEGIC VAULT
                        </span>
                        <h3 className="text-3xl md:text-5xl font-serif font-light tracking-tight text-white leading-tight break-words">
                            Explore the IIMC Corporate Communication & Brand Management Vault
                        </h3>
                    </div>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="shrink-0"
                    >
                        <Link
                            href="/iimc"
                            className="inline-flex items-center px-8 py-5 bg-white text-zinc-950 font-mono text-sm tracking-wider uppercase font-bold hover:bg-emerald-400 hover:text-zinc-950 transition-all duration-300 rounded-full"
                        >
                            Enter Vault
                            <ArrowRight className="w-4 h-4 ml-3" />
                        </Link>
                    </motion.div>
                </motion.div>
            </section>

            {/* Conversion Exit Point: Contact Form & Socials */}
            <Contact />
        </div>
    );
}
