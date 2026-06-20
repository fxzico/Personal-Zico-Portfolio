import BrandLandingPage from "@/components/BrandLandingPage";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Saptarshi | Brand Manager & Full-Stack Content Strategist Portfolio",
  description: "Portfolio of Saptarshi, a Marketing Content End-to-End Execution Specialist. Expert in Brand Management, Organic Growth, Social Media Architecture, and MarCom strategy orchestration generating 5.2M+ organic reach.",
  keywords: ["Social Media Executive", "Social Media Manager", "Brand Associates", "Brand Manager", "Content Strategist", "MarCom", "Media Content Coordinator", "Social Media Marketing", "Organic Growth Architect"]
}

export default function Home() {
  return (
    <BrandLandingPage />
  );
}
