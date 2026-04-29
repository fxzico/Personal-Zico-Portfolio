"use client";

import { Linkedin } from "lucide-react";
import { usePathname } from "next/navigation";

export default function StickyLinkedIn() {
    return (
        <a 
            href="https://www.linkedin.com/in/saptarshi-dutta-000174285/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-[100] group flex items-center bg-[#0a66c2] hover:bg-[#004182] text-white px-4 py-3 rounded-full shadow-2xl shadow-blue-500/20 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
        >
            <Linkedin className="w-5 h-5 mr-0 group-hover:mr-2 transition-all duration-300" />
            <span className="max-w-0 overflow-hidden opacity-0 group-hover:max-w-xs group-hover:opacity-100 transition-all duration-300 ease-in-out font-medium whitespace-nowrap">
                Connect on LinkedIn
            </span>
        </a>
    );
}
