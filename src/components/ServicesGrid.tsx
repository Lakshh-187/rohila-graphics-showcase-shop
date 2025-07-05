
import { ImageServiceCard } from "./ImageServiceCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const allServices = [
  // Flex Printing Services
  {
    title: "Standard Banner - FL",
    price: "₹10",
    unit: "per sq ft",
    description: "High-quality vinyl banners perfect for outdoor advertising and events",
    negotiable: true,
    image: "https://images.unsplash.com/photo-1586243287039-23f4c8e2e7ab?w=400&h=300&fit=crop",
    category: "Flex Printing",
    popular: true
  },
  {
    title: "Premium Black Star Banner",
    price: "₹12",
    unit: "per sq ft", 
    description: "Enhanced durability banner with superior weather resistance",
    negotiable: true,
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
    category: "Flex Printing"
  },
  {
    title: "White Star Banner (220 GSM)",
    price: "₹15",
    unit: "per sq ft",
    description: "Premium quality banner with excellent color reproduction",
    negotiable: true,
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop",
    category: "Flex Printing"
  },
  {
    title: "Heavy Duty White Star (310 GSM)",
    price: "₹25",
    unit: "per sq ft",
    description: "Industrial grade banner for long-term outdoor installations",
    negotiable: true,
    image: "https://images.unsplash.com/photo-1534237710431-e2fc698436d0?w=400&h=300&fit=crop",
    category: "Flex Printing"
  },
  {
    title: "Back Light Banner (410 GSM)",
    price: "₹35",
    unit: "per sq ft",
    description: "Translucent banner perfect for illuminated sign displays",
    negotiable: true,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop",
    category: "Flex Printing"
  },
  {
    title: "Premium Retro Banner (440 GSM)",
    price: "₹45",
    unit: "per sq ft",
    description: "Top-tier banner material for premium advertising needs",
    negotiable: true,
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=300&fit=crop",
    category: "Flex Printing"
  },

  // Digital Printing Services
  {
    title: "High-Quality Vinyl Print",
    price: "₹40",
    unit: "per sq ft",
    description: "Durable vinyl prints for vehicle wraps and outdoor signage",
    negotiable: true,
    image: "https://images.unsplash.com/photo-1516962126636-27ad087061cc?w=400&h=300&fit=crop",
    category: "Digital Printing",
    popular: true
  },
  {
    title: "One Way Vision Print",
    price: "₹60",
    unit: "per sq ft",
    description: "See-through window graphics for storefronts and vehicles",
    negotiable: true,
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
    category: "Digital Printing"
  },
  {
    title: "Crystal Clear Transparent Print",
    price: "₹35",
    unit: "per sq ft",
    description: "High-resolution transparent prints for glass applications",
    negotiable: true,
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop",
    category: "Digital Printing"
  },
  {
    title: "Premium Retro Vinyl",
    price: "₹50",
    unit: "per sq ft",
    description: "Luxury vinyl with special retro finish and texture",
    negotiable: true,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    category: "Digital Printing"
  },
  {
    title: "Canvas Print",
    price: "₹55",
    unit: "per sq ft",
    description: "Artistic canvas prints for interior decoration",
    negotiable: true,
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
    category: "Digital Printing"
  },
  {
    title: "Mesh Banner Print",
    price: "₹30",
    unit: "per sq ft",
    description: "Wind-resistant mesh banners for outdoor installations",
    negotiable: true,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    category: "Digital Printing"
  },

  // Wallpaper Solutions
  {
    title: "Premium Wall Graphics",
    price: "₹12-20",
    unit: "per sq ft",
    description: "Custom wall graphics with professional installation included",
    negotiable: true,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
    category: "Wallpaper"
  },
  {
    title: "Ceiling Wallpaper",
    price: "₹17-25",
    unit: "per sq ft",
    description: "Specialized ceiling applications with expert fitting",
    negotiable: true,
    image: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=400&h=300&fit=crop",
    category: "Wallpaper"
  },
  {
    title: "Textured Wall Coverings",
    price: "₹22-30",
    unit: "per sq ft",
    description: "3D textured wallpapers for premium interior design",
    negotiable: true,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
    category: "Wallpaper"
  },
  {
    title: "Photo Wallpaper",
    price: "₹25-35",
    unit: "per sq ft",
    description: "Custom photo wallpapers from your images",
    negotiable: true,
    image: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=400&h=300&fit=crop",
    category: "Wallpaper"
  },

  // Offset Printing
  {
    title: "Premium Business Cards",
    price: "₹500+",
    unit: "for 950-1000 cards",
    description: "Professional business cards with various finishing options",
    negotiable: true,
    image: "https://images.unsplash.com/photo-1541367777708-7905fe3296c0?w=400&h=300&fit=crop",
    category: "Offset Printing",
    popular: true
  },
  {
    title: "Marketing Brochures",
    price: "₹1,499+",
    unit: "for 950-1000 pieces",
    description: "Full-color brochures (8.5x11 inches) for marketing campaigns",
    negotiable: true,
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=300&fit=crop",
    category: "Offset Printing"
  },
  {
    title: "Large Format Posters",
    price: "₹4,499+",
    unit: "for 950-1000 pieces",
    description: "High-impact posters (18x22 inches) for advertising",
    negotiable: true,
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
    category: "Offset Printing"
  },
  {
    title: "Corporate Letterheads",
    price: "₹1,599",
    unit: "for 1000 sheets",
    description: "Professional A4 letterheads with company branding",
    negotiable: true,
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=300&fit=crop",
    category: "Offset Printing"
  },
  {
    title: "Custom Catalogs",
    price: "₹2,999+",
    unit: "for 500 pieces",
    description: "Multi-page product catalogs with professional binding",
    negotiable: true,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    category: "Offset Printing"
  },
  {
    title: "Event Flyers",
    price: "₹899+",
    unit: "for 1000 pieces",
    description: "Eye-catching flyers for events and promotions",
    negotiable: true,
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=300&fit=crop",
    category: "Offset Printing"
  },

  // Boards & Signage
  {
    title: "LED Advertisement Board",
    price: "₹25-65",
    unit: "per sq ft",
    description: "Modern LED signage boards with custom designs and fittings",
    negotiable: true,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop",
    category: "Signage",
    popular: true
  },
  {
    title: "Premium Glow Sign Board",
    price: "₹150-300",
    unit: "per sq ft",
    description: "Illuminated signage with energy-efficient LED lighting",
    negotiable: true,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop",
    category: "Signage"
  },
  {
    title: "Acrylic Sign Boards",
    price: "₹80-150",
    unit: "per sq ft",
    description: "Premium acrylic boards with laser cutting and engraving",
    negotiable: true,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
    category: "Signage"
  },
  {
    title: "Metal Sign Boards",
    price: "₹120-250",
    unit: "per sq ft",
    description: "Durable metal signage for industrial and commercial use",
    negotiable: true,
    image: "https://images.unsplash.com/photo-1534237710431-e2fc698436d0?w=400&h=300&fit=crop",
    category: "Signage"
  },
  {
    title: "Digital Display Boards",
    price: "₹500-1000",
    unit: "per sq ft",
    description: "Interactive digital displays for modern advertising",
    negotiable: true,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop",
    category: "Signage"
  },

  // Stickers & Labels
  {
    title: "Custom Vinyl Stickers",
    price: "₹5-15",
    unit: "per piece",
    description: "Waterproof vinyl stickers in any shape and size",
    negotiable: true,
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
    category: "Stickers"
  },
  {
    title: "Product Labels",
    price: "₹2-8",
    unit: "per piece",
    description: "Professional product labels with barcode support",
    negotiable: true,
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=300&fit=crop",
    category: "Stickers"
  },
  {
    title: "Security Stickers",
    price: "₹8-20",
    unit: "per piece",
    description: "Tamper-evident security labels and holographic stickers",
    negotiable: true,
    image: "https://images.unsplash.com/photo-1541367777708-7905fe3296c0?w=400&h=300&fit=crop",
    category: "Stickers"
  },
  {
    title: "Transparent Stickers",
    price: "₹6-12",
    unit: "per piece",
    description: "Clear transparent stickers for glass and smooth surfaces",
    negotiable: true,
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop",
    category: "Stickers"
  },

  // Digital Paper Printing
  {
    title: "Premium Letterhead Printing",
    price: "₹350",
    unit: "for 50 papers (A4)",
    description: "High-quality letterhead printing on premium paper stock",
    negotiable: true,
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=300&fit=crop",
    category: "Paper Printing"
  },
  {
    title: "Custom Sticker Sheets",
    price: "₹450",
    unit: "for 15 sheets (12x18)",
    description: "Multiple stickers printed on convenient sheets",
    negotiable: true,
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
    category: "Paper Printing"
  },
  {
    title: "Award Certificates",
    price: "₹450",
    unit: "for 20 certificates (A4)",
    description: "Professional certificates with gold foil options",
    negotiable: true,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    category: "Paper Printing"
  },
  {
    title: "Wedding Invitations",
    price: "₹15-50",
    unit: "per invitation",
    description: "Elegant wedding invitations with custom designs",
    negotiable: true,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop",
    category: "Paper Printing",
    popular: true
  },
  {
    title: "Business Proposals",
    price: "₹25-40",
    unit: "per page",
    description: "Professional business proposals with binding",
    negotiable: true,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    category: "Paper Printing"
  },

  // T-Shirt & Apparel Printing
  {
    title: "Custom T-Shirt Printing",
    price: "₹150-300",
    unit: "per t-shirt",
    description: "High-quality t-shirt printing with various techniques",
    negotiable: true,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop",
    category: "Apparel Printing",
    popular: true
  },
  {
    title: "Corporate Uniforms",
    price: "₹250-500",
    unit: "per piece",
    description: "Professional uniforms with company branding",
    negotiable: true,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop",
    category: "Apparel Printing"
  },
  {
    title: "Event T-Shirts",
    price: "₹120-250",
    unit: "per t-shirt",
    description: "Custom event t-shirts for conferences and festivals",
    negotiable: true,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop",
    category: "Apparel Printing"
  },
  {
    title: "Sports Jerseys",
    price: "₹300-600",
    unit: "per jersey",
    description: "Professional sports jerseys with numbers and names",
    negotiable: true,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop",
    category: "Apparel Printing"
  },

  // Photo Printing & Frames
  {
    title: "Photo Prints",
    price: "₹5-25",
    unit: "per photo",
    description: "High-resolution photo prints in various sizes",
    negotiable: true,
    image: "https://images.unsplash.com/photo-1541367777708-7905fe3296c0?w=400&h=300&fit=crop",
    category: "Photo Printing"
  },
  {
    title: "Canvas Photo Prints",
    price: "₹500-2000",
    unit: "per canvas",
    description: "Premium canvas photo prints for home decoration",
    negotiable: true,
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
    category: "Photo Printing"
  },
  {
    title: "Acrylic Photo Frames",
    price: "₹200-800",
    unit: "per frame",
    description: "Modern acrylic frames for professional photo display",
    negotiable: true,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
    category: "Photo Printing"
  },
  {
    title: "Photo Albums",
    price: "₹500-1500",
    unit: "per album",
    description: "Custom photo albums with professional binding",
    negotiable: true,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    category: "Photo Printing"
  }
];

const ScrollableSection = ({ title, services, discount }: { title: string; services: any[]; discount?: string }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 280;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <h3 className="text-xl md:text-2xl font-bold text-gray-800">{title}</h3>
          {discount && (
            <Badge className="bg-green-500 text-white px-3 py-1 text-sm font-semibold">
              {discount}
            </Badge>
          )}
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 rounded-full"
            onClick={() => scroll('left')}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 rounded-full"
            onClick={() => scroll('right')}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <div 
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide pb-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {services.map((service, index) => (
          <div key={index} className="flex-none w-64">
            <ImageServiceCard {...service} />
          </div>
        ))}
      </div>
    </div>
  );
};

export const ServicesGrid = () => {
  const categories = [...new Set(allServices.map(service => service.category))];
  const groupedServices = categories.reduce((acc, category) => {
    acc[category] = allServices.filter(service => service.category === category);
    return acc;
  }, {} as Record<string, any[]>);

  const discounts = {
    "Flex Printing": "Up to 30% Off",
    "Digital Printing": "Min. 25% Off", 
    "Offset Printing": "From ₹499",
    "Signage": "Min. 35% Off",
    "Stickers": "Up to 50% Off",
    "Apparel Printing": "From ₹150"
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent mb-4">
            Premium Printing Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Browse our extensive range of professional printing solutions with competitive pricing
          </p>
        </div>

        {/* Hero Offers Section */}
        <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-xl p-6 mb-8 text-white">
          <h3 className="text-2xl font-bold mb-2">Huge offers credited</h3>
          <p className="text-lg opacity-90">Limited time deals on all categories</p>
        </div>

        {/* Service Categories with Horizontal Scroll */}
        {Object.entries(groupedServices).map(([category, services]) => (
          <ScrollableSection
            key={category}
            title={category}
            services={services}
            discount={discounts[category as keyof typeof discounts]}
          />
        ))}

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Need Custom Printing Solutions?
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Contact us for personalized quotes and bulk pricing on any printing service
            </p>
            <Button 
              onClick={() => window.open('https://wa.me/919634877767?text=Hi! I need a custom printing solution.', '_blank')}
              className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg text-lg"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Get Custom Quote
            </Button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};
