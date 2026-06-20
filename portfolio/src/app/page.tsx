import BrandLandingPage from "@/components/BrandLandingPage";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Saptarshi Dutta | End-to-End Content Strategy & Organic Growth Specialist',
  description: 'Portfolio of Saptarshi Dutta - Marketing Content End-to-End Execution Specialist. Orchestrating 5.2M+ organic views for national brands by bridging consumer behavioral psychology with high-velocity internal production.',
}

export default function Home() {
  return (
    <BrandLandingPage />
  );
}
