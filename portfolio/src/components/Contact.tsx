"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight, Instagram, Linkedin, FileText, ChevronDown } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-32 px-8 bg-[#121212] text-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-20"
                >
                    <h2 className="text-6xl md:text-8xl font-bold mb-4 font-serif">Onboarding</h2>
                    <div className="w-20 h-1 bg-white/20 rounded-full mb-16" />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div className="space-y-8">
                            <div className="inline-block p-1 px-3 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 font-mono text-xs tracking-widest uppercase">
                                [ TOUCHPOINT #2: INITIATE ONBOARDING ]
                            </div>
                            <h3 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight">
                                Secure the Missing Link in Your Content Architecture
                            </h3>
                            <p className="text-lg md:text-xl text-neutral-100 font-light leading-relaxed max-w-lg">
                                Don't just fill a vacancy. Eliminate campaign friction, bypass bloated agency fees, and establish permanent mental availability for your brand. Let's schedule an executive briefing.
                            </p>

                            <div className="pt-4 flex flex-col space-y-4">
                                <a
                                    href="mailto:aryadutta840@gmail.com"
                                    className="inline-flex items-center text-2xl md:text-3xl text-white hover:text-emerald-400 transition-colors group w-max"
                                >
                                    aryadutta840@gmail.com
                                    <ArrowRight className="w-8 h-8 ml-4 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                </a>
                            </div>

                            <div className="pt-16 flex items-center space-x-6">
                                <a
                                    href="https://www.linkedin.com/in/saptarshi-dutta-storytelling/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Visit Saptarshi's professional LinkedIn profile portfolio"
                                    className="p-4 rounded-full bg-white/5 hover:bg-white/10 text-white hover:text-emerald-400 transition-all transform hover:scale-110"
                                >
                                    <Linkedin className="w-6 h-6" />
                                </a>
                                <a
                                    href="https://www.instagram.com/fx_zicozzz"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Visit Saptarshi's Instagram profile"
                                    className="p-4 rounded-full bg-white/5 hover:bg-white/10 text-white hover:text-emerald-400 transition-all transform hover:scale-110"
                                >
                                    <Instagram className="w-6 h-6" />
                                </a>
                                <a
                                    href="/Saptarshi_Dutta_Resume_2026.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="View Saptarshi's Resume PDF"
                                    className="p-4 rounded-full bg-white/5 hover:bg-white/10 text-white hover:text-emerald-400 transition-all transform hover:scale-110"
                                >
                                    <FileText className="w-6 h-6" />
                                </a>
                            </div>
                        </div>

                        {/* Visual Form Area (Mock) */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden backdrop-blur-sm"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] -z-10" />

                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="space-y-2">
                                    <label className="text-sm text-neutral-100 tracking-wider uppercase font-medium">
                                        Who is initiating this touchpoint?
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/20 focus:outline-none focus:border-emerald-400/50 focus:bg-white/10 transition-all"
                                        placeholder="Your Name / Company Name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-neutral-100 tracking-wider uppercase font-medium">
                                        Where should we deliver the initial strategy deck?
                                    </label>
                                    <input
                                        type="email"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/20 focus:outline-none focus:border-emerald-400/50 focus:bg-white/10 transition-all"
                                        placeholder="corporate.email@yourbrand.com"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-neutral-100 tracking-wider uppercase font-medium">
                                        What is your primary brand bottleneck right now?
                                    </label>
                                    <div className="relative">
                                        <select
                                            className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-4 pr-10 text-white focus:outline-none focus:border-emerald-400/50 focus:bg-white/10 transition-all appearance-none cursor-pointer"
                                            defaultValue=""
                                            aria-label="Select your primary brand campaign bottleneck"
                                        >
                                            <option value="" disabled className="text-white/40">Select your operational bottleneck...</option>
                                            <option value="A" className="text-white bg-zinc-950">Our agency fees are too high / Need 100% In-House Pipeline Control</option>
                                            <option value="B" className="text-white bg-zinc-950">We have great products but zero organic audience retention</option>
                                            <option value="C" className="text-white bg-zinc-950">We need an End-to-End Specialist to handle Strategy + Shoot + Edit</option>
                                            <option value="D" className="text-white bg-zinc-950">Immediate opening for a Brand Manager / Social Media Executive</option>
                                        </select>
                                        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-white/50">
                                            <ChevronDown className="w-5 h-5" />
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-neutral-100 tracking-wider uppercase font-medium">
                                        Briefly outline your retention or distribution goals
                                    </label>
                                    <textarea
                                        rows={4}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/20 focus:outline-none focus:border-emerald-400/50 focus:bg-white/10 transition-all resize-none"
                                        placeholder="Tell me about your current average view counts, target audience, or immediate campaign deadlines..."
                                    />
                                </div>
                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <button
                                        type="submit"
                                        className="flex-grow py-4 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-mono text-xs font-bold uppercase tracking-wider text-center transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-emerald-500/10"
                                    >
                                        [ TRIGGER TOUCHPOINT #3: SCHEDULE STRATEGY BRIEFING ]
                                    </button>
                                    <button
                                        type="button"
                                        className="flex-grow py-4 px-6 rounded-xl bg-zinc-950/40 border border-white text-white hover:bg-white hover:text-zinc-950 font-mono text-xs font-bold uppercase tracking-wider text-center transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                                    >
                                        [ AUDIT MY CONTENT: TRY BRANDCHECK PRO ]
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Footer */}
            <div className="absolute bottom-4 left-0 right-0 text-center text-white/20 text-xs tracking-widest uppercase">
                &copy; {new Date().getFullYear()} Saptarshi. All Rights Reserved.
            </div>
        </section>
    );
}
