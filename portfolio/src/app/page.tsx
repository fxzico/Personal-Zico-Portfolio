import ClientHero from "@/components/ClientHero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Saptarshi | Content Strategist',
  description: 'Portfolio of Saptarshi - Content Strategist bridging storytelling with technology.',
}

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen text-white">
      <ClientHero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
