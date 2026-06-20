"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Contact from "@/components/Contact";
import Link from "next/link";
import { Play, Volume2, VolumeX, ArrowRight, ShieldCheck, Cpu, Layers, ExternalLink } from "lucide-react";

// Local video proof data with custom cover images
const PROOF_CARDS = [
    {
        title: "City Style Campaign Card",
        displayTitle: "2.1M Organic Views | Affordable High-Fashion Status Reframe",
        src: "/Home%20page%20Videos/City%20Style.mp4",
        cover: "/Home%20page%20Videos/Cover%20Images/City%20Style.png"
    },
    {
        title: "Cars 24 Sequence Card",
        displayTitle: "2.0M Combined Views | Dual-Processing Market Communication Funnel",
        src: "/Home%20page%20Videos/Cars%2024.mp4",
        cover: "/Home%20page%20Videos/Cover%20Images/Cars%2024.png"
    },
    {
        title: "Fire Lens [Bolt] Launch Card",
        displayTitle: "1.1M Views | First-Frame Phonk Retention Vector",
        src: "/Home%20page%20Videos/Fire%20Lens%20%5BBolt%5D.mp4",
        cover: "/Home%20page%20Videos/Cover%20Images/Fire%20Lens%20%5BBolt%5D.png"
    }
];

function VideoProofCard({ card, idx }: { card: typeof PROOF_CARDS[0], idx: number }) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isMuted, setIsMuted] = useState(true);
    const [isVideoReady, setIsVideoReady] = useState(false);
    const [shouldLoad, setShouldLoad] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShouldLoad(true);
                    if (videoRef.current) {
                        videoRef.current.play().catch(() => {});
                    }
                } else {
                    if (videoRef.current) {
                        videoRef.current.pause();
                    }
                }
            },
            { threshold: 0.2 }
        );

        if (videoRef.current) observer.observe(videoRef.current);
        return () => observer.disconnect();
    }, []);

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
            className="shimmer-effect group relative w-full aspect-[10/16] rounded-3xl overflow-hidden bg-zinc-950 border border-white/10 hover:border-emerald-500/30 transition-all duration-500 shadow-2xl flex flex-col justify-end p-6 md:p-8"
        >
            <video
                ref={videoRef}
                src={shouldLoad ? card.src : undefined}
                poster={card.cover}
                preload="metadata"
                autoPlay
                loop
                muted={isMuted}
                playsInline
                disablePictureInPicture
                onLoadedData={() => setIsVideoReady(true)}
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-75 transition-opacity duration-500 z-0 pointer-events-none"
            />
            {/* Dark Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-zinc-950/20 z-0 transition-opacity duration-500 pointer-events-none" />

            {/* Mute button on top-right */}
            <button
                onClick={toggleMute}
                className="absolute top-6 right-6 z-20 p-3 rounded-full bg-black/40 hover:bg-black/70 border border-white/10 text-white transition-all hover:scale-105"
            >
                {isMuted ? <VolumeX className="w-4 h-4 text-white/70" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
            </button>

            {/* Content Overlay */}
            <div className="relative z-10 space-y-4">
                <span className="font-mono text-xs text-emerald-400 font-semibold tracking-widest uppercase bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full w-max block">
                    {card.title}
                </span>

                <h3 className="text-2xl md:text-3xl font-bold font-serif text-white tracking-tight leading-tight break-words group-hover:text-emerald-400 transition-colors duration-300">
                    {card.displayTitle}
                </h3>
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
            <section id="top" className="relative min-h-[90vh] flex flex-col justify-center items-center px-8 pt-32 pb-16">
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

                    {/* Section 2: Metric Counters */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto pt-12 font-mono text-xs tracking-wider"
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
                </div>

                {/* Background Ambient Glows */}
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[160px] -z-10 pointer-events-none" />
                <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
            </section>

            {/* Section 3: 7-Touchpoints Behavioral Hook */}
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

            {/* Section 4: 3 Core Video Proof Blocks */}
            <section id="projects" className="py-32 px-8 max-w-7xl mx-auto">
                <div className="space-y-16">
                    <div className="text-center md:text-left space-y-4">
                        <span className="font-mono text-xs tracking-widest text-emerald-400 uppercase font-semibold">
                            PROOF OF PERFORMANCE
                        </span>
                        <h2 className="text-4xl md:text-6xl font-serif font-light tracking-tight text-white">
                            Viral Campaign Showcase
                        </h2>
                        <div className="w-20 h-[2px] bg-emerald-500/30 rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {PROOF_CARDS.map((card, i) => (
                            <VideoProofCard key={i} card={card} idx={i} />
                        ))}
                    </div>

                    {/* Master Video Production Archive button */}
                    <div className="flex justify-center pt-8">
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <a
                                href="https://drive.google.com/drive/folders/1OPDtkL83IzvtOIdej_RM4R7BnKG-QrCL?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-8 py-5 border border-white/10 hover:border-emerald-500/30 rounded-full font-mono text-sm tracking-wider uppercase text-zinc-300 hover:text-white bg-zinc-950/50 hover:bg-zinc-950 transition-all duration-300"
                            >
                                [ Access Master Video Production Archive ]
                                <ExternalLink className="w-4 h-4 ml-3 text-emerald-400" />
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section 5: Single-USP Retention Pipeline Framework */}
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

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 font-sans">
                        {/* Phase 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-6 p-8 rounded-3xl bg-zinc-950/40 border border-white/5 hover:border-emerald-500/10 transition-colors"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                                <Cpu className="w-6 h-6 text-emerald-400" />
                            </div>
                            <h3 className="text-2xl font-bold font-serif text-white">
                                Phase 1: Brand Governance & USP Isolation
                            </h3>
                            <p className="text-zinc-400 font-light leading-relaxed break-words">
                                Auditing company briefs, analyzing historic metrics patterns, and mapping past retention/CTR parameters to isolate the singular winning value proposition—hammering it relentlessly until the market builds permanent muscle memory for the brand.
                            </p>
                        </motion.div>

                        {/* Phase 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.15 }}
                            className="space-y-6 p-8 rounded-3xl bg-zinc-950/40 border border-white/5 hover:border-emerald-500/10 transition-colors"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                                <Layers className="w-6 h-6 text-emerald-400" />
                            </div>
                            <h3 className="text-2xl font-bold font-serif text-white">
                                Phase 2: Production Multi-Formatting
                            </h3>
                            <p className="text-zinc-400 font-light leading-relaxed break-words">
                                Maximizing asset value and development speed by building synchronized multi-platform structures (capturing 16:9 master angles alongside high-fidelity iPhone BTS frames) to feed distinct channels simultaneously.
                            </p>
                        </motion.div>

                        {/* Phase 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="space-y-6 p-8 rounded-3xl bg-zinc-950/40 border border-white/5 hover:border-emerald-500/10 transition-colors"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                                <ShieldCheck className="w-6 h-6 text-emerald-400" />
                            </div>
                            <h3 className="text-2xl font-bold font-serif text-white">
                                Phase 3: Meta-Distribution & Risk Mitigation
                            </h3>
                            <p className="text-zinc-400 font-light leading-relaxed break-words">
                                Scripting cultural trends to perfectly wrap around a brand's unique identity guidelines, allowing fast algorithmic distribution capture while safeguarding corporate equity and preventing institutional controversy.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section 6: Institutional Vault Redirect Banner */}
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
