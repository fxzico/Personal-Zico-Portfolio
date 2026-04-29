"use client";

import { motion } from "framer-motion";
import BackToHub from "@/components/BackToHub";
import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX, HandMetal } from "lucide-react";
import Link from "next/link";

// Dynamically construct 23 video payloads targeting the local directory exactly
const SHORT_VIDEOS = Array.from({ length: 23 }, (_, i) => ({
    id: i + 1,
    title: `Portrait Reel ${i + 1}`,
    src: `/Short Video Section for IIMC/${i + 1}.mp4`
}));

function VideoCard({ src }: { src: string }) {
    const [isMuted, setIsMuted] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isVideoReady, setIsVideoReady] = useState(false);
    const [shouldLoad, setShouldLoad] = useState(false);

    // Intersection Observer to safely play/pause when in/out of view and lazy load
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
            { threshold: 0.5 }
        );

        if (videoRef.current) observer.observe(videoRef.current);
        return () => observer.disconnect();
    }, []);

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    return (
        <div 
            className="group w-full relative aspect-[9/16] rounded-3xl overflow-hidden bg-white/5 border border-white/10 cursor-pointer shadow-2xl transition-all hover:scale-[1.02] snap-center hover:shadow-cyan-500/20 shrink-0"
            onClick={toggleMute}
        >
            {/* HTML5 high-performance video rendering */}
            <video 
                ref={videoRef}
                src={shouldLoad ? src : undefined}
                preload="none"
                autoPlay 
                loop 
                muted={isMuted} 
                playsInline
                disablePictureInPicture
                onLoadedData={() => setIsVideoReady(true)}
                className={`w-full h-full object-cover transition-opacity duration-700 ${isVideoReady ? 'opacity-100' : 'opacity-0'}`}
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/20 opacity-80 group-hover:opacity-100 transition-opacity" />
            
            {/* Audio Toggle Overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 backdrop-blur-[2px]">
                <div className="flex flex-col items-center bg-black/50 px-6 py-4 rounded-full backdrop-blur-md border border-white/20">
                    <HandMetal className="w-8 h-8 text-white mb-2" />
                    <span className="text-sm tracking-widest uppercase font-bold text-white shadow-black drop-shadow-lg">
                        {isMuted ? "Tap to Unmute" : "Tap to Mute"}
                    </span>
                </div>
            </div>

            {/* Bottom Controls */}
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between z-10 pointer-events-none">
                <div className="p-4 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white transition-all group-hover:scale-110 shadow-xl">
                    {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6 text-cyan-400" />}
                </div>
            </div>
        </div>
    );
}

export default function ShortVideosPage() {
    return (
        <main className="min-h-screen bg-[#121212] text-white font-sans overflow-x-hidden">
            <BackToHub />
            <div className="max-w-7xl mx-auto px-8 pb-32">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16 text-center md:text-left"
                >
                    <h1 className="text-[clamp(2rem,8vw,5rem)] font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-500 break-words">
                        Short-Form Storytelling
                    </h1>
                    <p className="text-xl md:text-2xl text-white/50 max-w-2xl font-light leading-relaxed">
                        Curated vertical portraits designed for high engagement and viral potential.
                    </p>
                </motion.div>

                {/* 3-Column Snap-to-Scroll Grid Container */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-16 snap-y snap-mandatory h-[80vh] overflow-y-auto scroll-smooth hide-scrollbar p-4 -mx-4">
                    {SHORT_VIDEOS.map((video, i) => (
                        <motion.div
                            key={video.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.05, duration: 0.5 }}
                        >
                            <VideoCard src={video.src} />
                        </motion.div>
                    ))}
                </div>

                {/* Sticky Call to Action */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="sticky bottom-8 z-50 flex justify-center mt-12 pointer-events-none"
                >
                    <Link 
                        href="https://www.linkedin.com/in/saptarshi-dutta-storytelling/"
                        target="_blank"
                        className="pointer-events-auto px-8 py-4 rounded-full bg-blue-600 font-bold tracking-widest uppercase text-white hover:bg-blue-500 hover:scale-105 transition-all duration-300 shadow-[0_0_40px_-10px_rgba(37,99,235,0.6)] border border-blue-400/30"
                    >
                        Collaborate with Saptarshi
                    </Link>
                </motion.div>
            </div>
        </main>
    );
}
