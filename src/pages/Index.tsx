
import { Hero } from "@/components/Hero";
import { ServicesGrid } from "@/components/ServicesGrid";
import { PageRedirectCards } from "@/components/PageRedirectCards";
import { SamplesSection } from "@/components/SamplesSection";
import { BulkQuantity } from "@/components/BulkQuantity";
import { BannerSection } from "@/components/BannerSection";
import { GallerySection } from "@/components/GallerySection";
import { VideoShowcase } from "@/components/VideoShowcase";
import { MediaCarousel } from "@/components/MediaCarousel";
import { ContactSection } from "@/components/ContactSection";
import { FloatingSocials } from "@/components/FloatingSocials";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/components/Footer";
import { SocialPopup } from "@/components/SocialPopup";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-red-50">
      <Hero />
      <BannerSection />
      <ServicesGrid />
      <PageRedirectCards />
      <SamplesSection />
      <GallerySection />
      <BulkQuantity />
      <VideoShowcase />
      <MediaCarousel />
      <ContactSection />
      <FloatingSocials />
      <FloatingWhatsApp />
      <Footer />
      <SocialPopup />
    </div>
  );
};

export default Index;
