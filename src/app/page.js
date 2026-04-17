import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import GallerySection from "@/components/GallerySection";
import UrgencySection from "@/components/UrgencySection";
import LeadForm from "@/components/LeadForm";
import StickyButtons from "@/components/StickyButtons";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex-1">
      <Navbar />
      <HeroSection />

      {/* Section Divider */}
      <div className="section-divider" />

      <TrustSection />
      <FeaturesSection />

      <div className="section-divider" />

      <PricingSection />
      <GallerySection />
      <UrgencySection />
      <LeadForm />
      <Footer />
      <StickyButtons />
    </main>
  );
}
