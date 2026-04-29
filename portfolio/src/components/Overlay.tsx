"use client";

import { motion, useTransform } from "framer-motion";

export default function Overlay({ scrollYProgress }: { scrollYProgress: any }) {
    // Section 1: 0% to 20%
    const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

    // Section 2: 25% to 45%
    const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.2, 0.5], [100, -100]);

    // Section 3: 55% to 75%
    const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.7, 0.8], [0, 1, 1, 0]);
    const y3 = useTransform(scrollYProgress, [0.5, 0.8], [100, -100]);

    return (
        <div className="absolute inset-0 pointer-events-none z-10 font-sans text-white">
            {/* Section 1 */}
            <motion.div
                style={{ opacity: opacity1, y: y1 }}
                className="fixed inset-0 flex items-center justify-center p-8"
            >
                <div className="text-center">
                    <h1 className="text-7xl md:text-9xl font-bold tracking-tight mb-4">
                        Saptarshi
                    </h1>
                    <p className="text-2xl md:text-4xl text-white/50 tracking-widest uppercase">
                        Content Strategist
                    </p>
                </div>
            </motion.div>

            {/* Section 2 */}
            <motion.div
                style={{ opacity: opacity2, y: y2 }}
                className="fixed inset-0 flex items-center justify-start p-8 md:p-24"
            >
                <div className="max-w-xl">
                    <h2 className="text-6xl md:text-8xl font-semibold leading-tight mb-6">
                        I make content that actually works
                    </h2>
                </div>
            </motion.div>

            {/* Section 3 */}
            <motion.div
                style={{ opacity: opacity3, y: y3 }}
                className="fixed inset-0 flex items-center justify-end p-8 md:p-24"
            >
                <div className="max-w-xl text-right">
                    <h2 className="text-6xl md:text-8xl font-semibold leading-tight mb-6">
                        Bridging <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                            Storytelling with Technology
                        </span>
                    </h2>
                    <p className="text-lg md:text-xl text-white/70 ml-auto max-w-md leading-relaxed">
                        Merging logic and creativity to deliver seamless user journeys and cutting-edge visual storytelling.
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
