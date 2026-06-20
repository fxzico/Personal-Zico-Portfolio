"use client";

import { motion } from "framer-motion";
import { Lightbulb, Target, Users, Zap, ExternalLink, Code2 } from "lucide-react";

export default function About() {
    const features = [
        {
            icon: <Lightbulb className="w-8 h-8 text-yellow-400" />,
            title: "Adobe Premiere Pro",
            description: "Advanced non-linear editing, color grading, and seamless timeline management."
        },
        {
            icon: <Target className="w-8 h-8 text-red-400" />,
            title: "After Effects",
            description: "Advanced motion graphics, compositing, and visual effects implementation."
        },
        {
            icon: <Users className="w-8 h-8 text-blue-400" />,
            title: "Cinematography",
            description: "Expert eye for composition, lighting, and framing to capture striking visuals."
        },
        {
            icon: <Zap className="w-8 h-8 text-emerald-400" />,
            title: "GenAI Creative Tools",
            description: "Leveraging cutting-edge AI technologies to elevate and expedite creative pipelines."
        },
        {
            icon: <Code2 className="w-8 h-8 text-emerald-400" />,
            title: "Open-Source Web Architecture Development",
            description: "Designing modular page rendering logic and developing custom website-engine infrastructure.",
            link: "https://github.com/lapaasindia/website-builder"
        }
    ];

    return (
        <section id="about" className="py-32 px-8 bg-[#121212] text-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-20"
                >
                    <h2 className="text-6xl md:text-8xl font-bold mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-white/20 rounded-full mb-12" />
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6 text-xl text-neutral-100 leading-relaxed font-light">
                            <p>
                                Hi, I'm <span className="text-white font-medium">Saptarshi</span>, a <span className="text-white font-medium">Visual Designer & Motion Creator</span> with over 4 years of experience seamlessly bridging storytelling with technology.
                            </p>
                            <p>
                                With a deep background in cinematography and video editing, I specialize in crafting high-end corporate AVs, engaging documentaries, and polished brand commercials that resonate with modern audiences.
                            </p>
                            <p>
                                My approach merges traditional filmmaking principles with rapid GenAI workflows to deliver cinematic scale and precision at every creative touchpoint.
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {features.map((feature, i) => {
                                const CardContent = (
                                    <>
                                        <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-6">
                                            {feature.icon}
                                        </div>
                                        <h3 className="text-xl font-bold mb-3 flex items-center gap-2 group-hover:text-emerald-400 transition-colors">
                                            {feature.title}
                                            {feature.link && (
                                                <ExternalLink className="w-4 h-4 text-emerald-400 opacity-50 group-hover:opacity-100 transition-all" />
                                            )}
                                        </h3>
                                        <p className="text-neutral-100 text-sm leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </>
                                );

                                return (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: i * 0.1 }}
                                        className="group p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] hover:border-emerald-500/20 transition-all duration-300"
                                    >
                                        {feature.link ? (
                                            <a
                                                href={feature.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="block w-full h-full cursor-pointer"
                                            >
                                                {CardContent}
                                            </a>
                                        ) : (
                                            <div>{CardContent}</div>
                                        )}
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Background elements */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10 mix-blend-screen mix-blend-overlay" />
            <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] -z-10" />
        </section>
    );
}
