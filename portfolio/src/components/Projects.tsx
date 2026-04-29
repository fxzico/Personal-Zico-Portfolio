"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const PROJECTS = [
    {
        id: 1,
        link: "https://drive.google.com/drive/folders/1nk8QV86Krsm3N5MAEVgKC9ii6GE6PwHJ?usp=drive_link",
        isBlank: true,
        category: "All Projects",
    },
    {
        id: 2,
        link: "https://www.linkedin.com/in/saptarshi-dutta-storytelling/",
        isBlank: true,
        category: "LinkedIn",
    },
    {
        id: 3,
        link: "/iimc",
        isBlank: false,
        category: "Projects in IIMC",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="min-h-screen bg-[#121212] text-white py-32 px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-20"
                >
                    <h2 className="text-6xl md:text-8xl font-bold mb-4">Portfolio</h2>
                    <div className="w-20 h-1 bg-white/20 rounded-full mb-12" />

                    <div className="relative aspect-[21/9] w-full rounded-2xl overflow-hidden border border-white/10">
                        <img
                            src="https://drive.google.com/uc?export=view&id=1r9dRh89rvmbuDOFaGEumFRQnab5e8scd"
                            data-original-src="https://drive.google.com/file/d/1r9dRh89rvmbuDOFaGEumFRQnab5e8scd/view?usp=drive_link"
                            alt="Portfolio Cover"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                target.parentElement!.innerHTML += '<iframe src="https://drive.google.com/file/d/1r9dRh89rvmbuDOFaGEumFRQnab5e8scd/preview" width="100%" height="100%" class="border-0"></iframe>';
                            }}
                        />
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS.map((project, i) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group relative h-[400px] block"
                        >
                            <Link
                                href={project.link}
                                target={project.isBlank ? "_blank" : "_self"}
                                rel={project.isBlank ? "noopener noreferrer" : ""}
                                className="block w-full h-full"
                            >
                                <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl transition-colors duration-300 group-hover:bg-white/[0.05] group-hover:border-white/20" />

                                <div className="relative p-8 h-full flex flex-col justify-end">
                                    <p className="text-[#8b5cf6] text-4xl md:text-5xl font-bold tracking-wider uppercase mb-3 transition-colors duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-emerald-400">
                                        {project.category}
                                    </p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
