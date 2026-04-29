import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import React from "react";

type EventData = {
    headline: string;
    role: string;
    images: string[];
    summary: React.ReactNode;
};

const EVENTS_DB: Record<string, EventData> = {
    "tata-steel": {
        headline: "Tata Steel Kapilash Half Marathon",
        role: "Social media team",
        images: ["/Imageforeventiimc/Tata 1.png", "/images/Tata 2.png"],
        summary: "Managed promotion and marketing, generating 50k+ views."
    },
    "dfo-symposium": {
        headline: "Odisha Landscape Symposium (DFO)",
        role: "Event Management and Media",
        images: ["/Imageforeventiimc/iimc__ccbm__odishalandscapesymposium_event manage_1.png", "/Imageforeventiimc/iimc__ccbm__odishalandscapesymposium_event manage_2.png"],
        summary: "Managed event media and logistics for 500+ attendees."
    },
    "science-center": {
        headline: "Regional Science Center Bhubaneswar",
        role: "Videography and Video Editing",
        images: ["/Imageforeventiimc/RegionalScience Center_1.png", "/images/RegionalScience Center_2.png"],
        summary: (
            <>
                Produced videography and wrote{" "}
                <a 
                    href="https://docs.google.com/document/d/1ZiP7ZWOg5klG4ujA593GKL2URL_AxgH5/edit?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline"
                >
                    Press Release
                </a>
                {" "}and{" "}
                <a 
                    href="https://docs.google.com/document/d/1LF8qKP7UZ6KW0fMKIOWYoIHG-dBShysM/edit?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline"
                >
                    Press Note
                </a>
                .
            </>
        )
    },
    "dfo-photography": {
        headline: "Photography Competition DFO",
        role: "Promotion Lead",
        images: ["/Imageforeventiimc/DFO Photo_1.png", "/images/DFO Photo_2.png"],
        summary: "Lead promotion team of 14; won 3rd prize in photography."
    },
    "cyber-security": {
        headline: "SP Cyber Security",
        role: "Photography",
        images: ["/Imageforeventiimc/SPCyber_1.png", "/images/SPCyber_2.png"],
        summary: "Provided professional photography and pre-event promotion."
    },
    "mcl-carnival": {
        headline: "MCL Startup Carnival 2026",
        role: "Videographer",
        images: ["/Imageforeventiimc/MCL_1.png", "/images/MCL_2.png"],
        summary: "Shot/Edited the official AV and recreated the startup brochure."
    }
};

const getDirectUrl = (url: string) => {
    // Automatically convert drive 'view' links to direct renderable links for img src
    if (url.includes("drive.google.com/file/d/")) {
        const match = url.match(/\/d\/([^/]+)\//);
        if (match && match[1]) {
            return `https://lh3.googleusercontent.com/u/0/d/${match[1]}`;
        }
    }
    return url;
};

export default async function EventDynamicPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const slug = resolvedParams.slug;
    const event = EVENTS_DB[slug];

    if (!event) {
        return notFound();
    }

    return (
        <main className="min-h-screen bg-[#121212] text-white font-sans overflow-x-hidden">
            {/* Back to Events Button */}
            <div className="pt-32 pb-8 px-8 max-w-7xl mx-auto">
                <Link 
                    href="/iimc/events"
                    className="inline-flex items-center text-white/50 hover:text-white transition-colors duration-300 group"
                >
                    <ArrowLeft className="w-5 h-5 mr-3 group-hover:-translate-x-1 transition-transform duration-300" />
                    <span className="font-semibold tracking-wider uppercase text-sm">Back to Events</span>
                </Link>
            </div>

            <div className="max-w-7xl mx-auto px-8 pb-32">
                {/* Header Sequence */}
                <div className="mb-16">
                    <p className="text-[#8b5cf6] font-bold uppercase tracking-[0.2em] text-sm mb-4">
                        {event.role}
                    </p>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
                        {event.headline}
                    </h1>
                </div>

                {/* 2-Column Strict Static Image Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {event.images.map((img, i) => (
                        <div key={i} className="relative aspect-[4/3] w-full rounded-2xl bg-[#1a1a1a] overflow-hidden border border-white/5">
                            {/* Static Image Constraint: No Hover/Zoom effects applied here */}
                            {/* object-fit: cover correctly trims overflow retaining absolute clarity and constraint */}
                            <img 
                                src={getDirectUrl(img)} 
                                alt={`Event Photo ${i + 1}`} 
                                className="w-full h-full object-cover" 
                                draggable={false}
                            />
                        </div>
                    ))}
                </div>

                {/* Summary Bottom Text */}
                <div className="max-w-4xl border-t border-white/10 pt-16">
                    <h3 className="text-xl font-medium tracking-wide mb-6">Execution Summary</h3>
                    <p className="text-white/60 text-xl font-light leading-relaxed">
                        {event.summary}
                    </p>
                </div>
            </div>
        </main>
    );
}
