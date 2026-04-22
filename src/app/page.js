import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import GallerySection from "@/components/GallerySection";
import LocationSection from "@/components/LocationSection";
import UrgencySection from "@/components/UrgencySection";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex-1">
      <Navbar />
      <HeroSection />
      <LeadForm />

      {/* Section Divider */}
      <div className="section-divider" />

      <TrustSection />
      <FeaturesSection />

      <div className="section-divider" />

      <PricingSection />

      <div className="bg-red-50 text-red-700 text-center py-2 sm:py-3 px-4 font-bold tracking-wide text-sm sm:text-base border-y border-red-200">
        🚨 Limited plots available — Prices increasing soon!
      </div>

      <GallerySection />

      <div className="bg-gold-50 text-gold-800 text-center py-2 sm:py-3 px-4 font-bold tracking-wide text-sm sm:text-base border-y border-gold-200">
        ⚠️ Book before rates increase
      </div>


      <UrgencySection />

      <Footer />
    </main>
  );
}
