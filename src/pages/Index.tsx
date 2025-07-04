
import { Hero } from "@/components/Hero";
import { ServicesGrid } from "@/components/ServicesGrid";
import { BulkQuantity } from "@/components/BulkQuantity";
import { BannerSection } from "@/components/BannerSection";
import { GallerySection } from "@/components/GallerySection";
import { VideoShowcase } from "@/components/VideoShowcase";
import { MediaCarousel } from "@/components/MediaCarousel";
import { ContactSection } from "@/components/ContactSection";
import { FloatingSocials } from "@/components/FloatingSocials";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <Hero />
      <BannerSection />
      <ServicesGrid />
      <GallerySection />
      <BulkQuantity />
      <VideoShowcase />
      <MediaCarousel />
      <ContactSection />
      <FloatingSocials />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
