"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import ScrollyCanvas from "./ScrollyCanvas";
import Overlay from "./Overlay";

export default function ClientHero() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    return (
        <div id="top" ref={containerRef} className="relative h-[500vh] w-full bg-[#121212]">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <ScrollyCanvas scrollYProgress={scrollYProgress} />
                <Overlay scrollYProgress={scrollYProgress} />
            </div>
        </div>
    );
}
