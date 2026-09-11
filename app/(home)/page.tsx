import DashboardPreviewSection from "../components/home/DashboardPreviewSection";
import Hero from "../components/home/Hero";
import FeatureSection from "../components/home/FeatureSection";
import CTASection from "../components/home/CTASection";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-white">
      <Hero />
      <DashboardPreviewSection />
      <FeatureSection />
      <CTASection />
    </main>
  );
}
