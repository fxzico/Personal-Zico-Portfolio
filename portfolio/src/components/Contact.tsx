"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight, Instagram, Linkedin, FileText } from "lucide-react";

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
                    <h2 className="text-6xl md:text-8xl font-bold mb-4">Let's Talk</h2>
                    <div className="w-20 h-1 bg-white/20 rounded-full mb-16" />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div className="space-y-8">
                            <h3 className="text-3xl md:text-5xl font-light leading-snug">
                                Ready to bring your <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">ideas to life?</span>
                            </h3>
                            <p className="text-xl text-neutral-100 font-light max-w-lg">
                                Whether you have a specific project in mind or just want to explore possibilities, I'm always open to discussing new opportunities.
                            </p>

                            <div className="pt-8 flex flex-col space-y-4">
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
                                    <label className="text-sm text-white/50 tracking-wider uppercase font-medium">Name</label>
                                    <input
                                        type="text"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/20 focus:outline-none focus:border-emerald-400/50 focus:bg-white/10 transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-white/50 tracking-wider uppercase font-medium">Email</label>
                                    <input
                                        type="email"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/20 focus:outline-none focus:border-emerald-400/50 focus:bg-white/10 transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-white/50 tracking-wider uppercase font-medium">Message</label>
                                    <textarea
                                        rows={4}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/20 focus:outline-none focus:border-emerald-400/50 focus:bg-white/10 transition-all resize-none"
                                        placeholder="Tell me about your project..."
                                    />
                                </div>
                                <button className="w-full py-4 rounded-xl bg-white text-black font-bold uppercase tracking-widest hover:bg-emerald-400 hover:text-white transition-colors duration-300 mt-4 flex justify-center items-center">
                                    Send Message <Mail className="w-5 h-5 ml-2" />
                                </button>
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
