"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const CASE_STUDIES = [
    {
        title: "Amazon vs Flipkart",
        tags: "CASE STUDIES - E-COMMERCE - AUDIT",
        pdfUrl: "/case-studies/Amazon%20vs%20Flipkart.pdf",
        date: "June 13, 2026",
        readTime: "5 min read"
    },
    {
        title: "Be a Strategic Advisor: Find a Solution",
        tags: "CASE STUDIES - STRATEGY - ADVISORY",
        pdfUrl: "/case-studies/Be%20a%20Stratrgic%20Advisor%20Find%20a%20Solution.pdf",
        date: "June 13, 2026",
        readTime: "6 min read"
    },
    {
        title: "Failed Brand Positioning",
        tags: "CASE STUDIES - BRANDING - ANALYSIS",
        pdfUrl: "/case-studies/Failed%20Brand%20Positioning.pdf",
        date: "June 13, 2026",
        readTime: "4 min read"
    },
    {
        title: "Industry Insights: Ed Tech",
        tags: "CASE STUDIES - EDTECH - MARKET ANALYSIS",
        pdfUrl: "/case-studies/INDUSTRY%20Insights%20ED%20TECH.pdf",
        date: "June 13, 2026",
        readTime: "7 min read"
    },
    {
        title: "Kerala Tourism Case Study",
        tags: "CASE STUDIES - TOURISM - MARKETING",
        pdfUrl: "/case-studies/Kerala%20Tourism%20Case%20study.pdf",
        date: "June 13, 2026",
        readTime: "5 min read"
    },
    {
        title: "The Fifty Rupee Tea Club",
        tags: "CASE STUDIES - BRAND DESIGN - POSITIONING",
        pdfUrl: "/case-studies/The_Fifty_Rupee_Tea_Club.pdf",
        date: "June 13, 2026",
        readTime: "5 min read"
    }
];

export default function CaseStudiesPage() {
    return (
        <main className="min-h-screen bg-[#fafaf9] text-zinc-900 font-sans pb-32 pt-24 px-8 md:px-16 lg:px-24 overflow-x-hidden">
            {/* Back Button */}
            <div className="max-w-7xl mx-auto mb-16">
                <Link 
                    href="/iimc" 
                    className="inline-flex items-center text-zinc-500 hover:text-zinc-900 transition-colors duration-300 group"
                >
                    <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
                    <span className="font-mono text-xs tracking-wider uppercase">Back to Hub</span>
                </Link>
            </div>

            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <p className="font-mono text-xs tracking-[0.25em] text-zinc-500 uppercase mb-3">
                        MARKETING STRATEGY
                    </p>
                    
                    <h1 className="text-5xl md:text-7xl font-serif font-light tracking-tight text-zinc-950 mb-6 break-words overflow-wrap-break-word">
                        Case Studies
                    </h1>

                    <p className="text-zinc-600 font-light text-lg md:text-xl max-w-3xl leading-relaxed break-words overflow-wrap-break-word">
                        How the best, new brand identities were created, including details on every aspect – from typography to brand identity guidelines.
                    </p>
                </motion.div>

                {/* Thin elegant rule */}
                <hr className="border-t border-zinc-200 mb-16" />

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                    {CASE_STUDIES.map((study, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.08, duration: 0.5 }}
                        >
                            <a
                                href={study.pdfUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block pt-6 border-t border-zinc-300 hover:border-zinc-955 transition-colors duration-500 flex flex-col justify-between min-h-[220px] md:min-h-[260px]"
                            >
                                <div className="space-y-4">
                                    {/* Tags */}
                                    <p className="font-mono text-[10px] tracking-[0.2em] text-zinc-500 uppercase break-words overflow-wrap-break-word">
                                        {study.tags}
                                    </p>
                                    
                                    {/* Title */}
                                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-zinc-955 leading-tight group-hover:text-zinc-600 transition-colors duration-300 break-words overflow-wrap-break-word">
                                        {study.title}
                                    </h2>
                                </div>

                                {/* Footer */}
                                <div className="flex items-center text-zinc-450 font-mono text-[10px] tracking-wider uppercase mt-6 pt-4">
                                    <span>IIMC Portfolio</span>
                                    <span className="mx-2 text-zinc-300">•</span>
                                    <span>{study.date}</span>
                                    <span className="mx-2 text-zinc-300">•</span>
                                    <span>{study.readTime}</span>
                                </div>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
}
