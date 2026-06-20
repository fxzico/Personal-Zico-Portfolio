"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
    { label: "Home", href: "#top" },
    { label: "About", href: "#about" },
    { label: "Workflow", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTo = (id: string, e: React.MouseEvent) => {
        e.preventDefault();
        const element = document.querySelector(id);
        if (id === '#top') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
                scrolled ? "py-4 bg-[#121212]/80 backdrop-blur-xl border-b border-white/10" : "py-8 bg-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
                <a href="#top" onClick={(e) => scrollTo('#top', e)} className="text-white text-xl font-bold tracking-tighter hover:text-emerald-400 transition-colors">
                    Saptarshi<span className="text-emerald-400">.</span>
                </a>

                <div className="hidden md:flex items-center space-x-8">
                    {NAV_ITEMS.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            onClick={(e) => scrollTo(item.href, e)}
                            className="text-sm font-medium text-white/70 hover:text-white transition-colors"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>

                {/* Mobile menu could go here, omitting for brevity or focusing on desktop first */}
            </div>
        </motion.nav>
    );
}
