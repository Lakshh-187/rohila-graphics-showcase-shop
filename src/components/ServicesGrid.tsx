
import { ImageServiceCard } from "./ImageServiceCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageCircle, ChevronLeft, ChevronRight, Clock } from "lucide-react";
import { useRef } from "react";

const allServices = [
  // Flex Printing Services
  {
    title: "Black Star Banner (220 GSM)",
    price: "₹15",
    unit: "per sq ft",
    description: "Premium quality banner with excellent color reproduction",
    negotiable: true,
    image: "https://i.ibb.co/jvskVdQD/image.png",
    category: "Flex Printing"
  },
  {
    title: "Standard Banner - FL",
    price: "₹10",
    unit: "per sq ft",
    description: "High-quality vinyl banners perfect for outdoor advertising and events",
    negotiable: true,
    image: "/lovable-uploads/70522788-fd14-40e9-9758-c7707e074864.png",
    category: "Flex Printing",
    popular: true
  },
  {
    title: "White Star Banner (220 GSM)",
    price: "₹15",
    unit: "per sq ft",
    description: "Premium quality banner with excellent color reproduction",
    negotiable: true,
    image: "/lovable-uploads/5e287451-aa72-4d7b-b71e-b6882a28e36a.png",
    category: "Flex Printing"
  },
  {
    title: "Glow Sign Board",
    price: "₹15",
    unit: "per sq ft",
    description: "Illuminated signage with energy-efficient LED lighting",
    negotiable: true,
    image: "/lovable-uploads/9803723b-3c56-4b6c-a906-5bf25929b1a3.png",
    category: "Flex Printing"
  },
  {
    title: "Retro",
    price: "₹18",
    unit: "per sq ft",
    description: "Vintage style banner with retro finish and texture",
    negotiable: true,
    image: "https://i.ibb.co/0j4dzRtZ/image.png",
    category: "Flex Printing"
  },
  {
    title: "Black Light",
    price: "₹20",
    unit: "per sq ft",
    description: "Special black light banner for unique lighting effects",
    negotiable: true,
    image: "/lovable-uploads/bbae2d16-0375-4e01-bc75-b2e2e73c8c5f.png",
    category: "Flex Printing"
  },
  {
    title: "White Star",
    price: "₹16",
    unit: "per sq ft",
    description: "Premium white star banner with superior quality",
    negotiable: true,
    image: "/lovable-uploads/5e287451-aa72-4d7b-b71e-b6882a28e36a.png",
    category: "Flex Printing"
  },

  // Hoarding & Boards Section
  {
    title: "Glow Sign Board",
    price: "₹150-300",
    unit: "per sq ft",
    description: "Illuminated signage with energy-efficient LED lighting",
    negotiable: true,
    image: "/lovable-uploads/db2c3343-9e25-4c87-a60d-60a7d1b67c81.png",
    category: "Hoarding & Boards",
    popular: true
  },
  {
    title: "Hoarding",
    price: "₹25-65",
    unit: "per sq ft",
    description: "Large format outdoor advertising displays",
    negotiable: true,
    image: "/lovable-uploads/aee50704-c33e-4f23-afa3-0082be7831f4.png",
    category: "Hoarding & Boards"
  },
  {
    title: "Boards",
    price: "₹80-150",
    unit: "per sq ft",
    description: "Professional display boards for various applications",
    negotiable: true,
    image: "/lovable-uploads/0a99c6dd-a0bd-42e6-92d7-7153679e3585.png",
    category: "Hoarding & Boards"
  },

  // Digital Printing Services
  {
    title: "High-Quality Vinyl Print",
    price: "₹40",
    unit: "per sq ft",
    description: "Durable vinyl prints for vehicle wraps and outdoor signage",
    negotiable: true,
    image: "/lovable-uploads/5e287451-aa72-4d7b-b71e-b6882a28e36a.png",
    category: "Digital Printing",
    popular: true
  },
  {
    title: "One Way Vision Print",
    price: "₹60",
    unit: "per sq ft",
    description: "See-through window graphics for storefronts and vehicles",
    negotiable: true,
    image: "/lovable-uploads/0bc6f65d-821c-4c64-b073-c44552268199.png",
    category: "Digital Printing"
  },
  {
    title: "Premium Retro Vinyl",
    price: "₹50",
    unit: "per sq ft",
    description: "Luxury vinyl with special retro finish and texture",
    negotiable: true,
    image: "https://i.ibb.co/0j4dzRtZ/image.png",
    category: "Digital Printing"
  },
  {
    title: "VINYL",
    price: "₹55",
    unit: "per sq ft",
    description: "Artistic canvas prints for interior decoration",
    negotiable: true,
    image: "/lovable-uploads/bbae2d16-0375-4e01-bc75-b2e2e73c8c5f.png",
    category: "Digital Printing"
  },

  // Wallpaper Solutions
  {
    title: "Premium Wall Graphics",
    price: "₹12-20",
    unit: "per sq ft",
    description: "Custom wall graphics with professional installation included",
    negotiable: true,
    image: "/lovable-uploads/04e04c57-e0ff-4359-a7ce-4ccab6f420f8.png",
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
    image: "/lovable-uploads/8c07e8ca-fa72-4e2e-87ce-fd1140c5d7df.png",
    category: "Wallpaper"
  },
  {
    title: "Photo Wallpaper",
    price: "₹22-30",
    unit: "per sq ft",
    description: "Custom photo wallpapers from your images",
    negotiable: true,
    image: "/lovable-uploads/dd17eba2-8f4a-4716-a454-711918909e4b.png",
    category: "Wallpaper"
  },

  // Offset Printing
  {
    title: "Visiting Business Cards",
    price: "₹500+",
    unit: "for 950-1000 cards",
    description: "Professional business cards with various finishing options",
    negotiable: true,
    image: "/lovable-uploads/a56a81f0-6086-492f-a98f-8bd1a69bf1f0.png",
    category: "Offset Printing",
    popular: true
  },
  {
    title: "Pamplets",
    price: "₹1,499+",
    unit: "for 950-1000 pieces",
    description: "Full-color brochures (8.5x11 inches) for marketing campaigns",
    negotiable: true,
    image: "https://i.ibb.co/Xr4gNjM7/image.png",
    category: "Offset Printing"
  },
  {
    title: "Large Format Posters",
    price: "₹4,499+",
    unit: "for 950-1000 pieces",
    description: "High-impact posters (18x22 inches) for advertising",
    negotiable: true,
    image: "/lovable-uploads/86e6884a-1ff0-4d6d-92ab-e4d003b932eb.png",
    category: "Offset Printing"
  },
  {
    title: "Corporate Letterheads",
    price: "₹1,599",
    unit: "for 1000 sheets",
    description: "Professional A4 letterheads with company branding",
    negotiable: true,
    image: "/lovable-uploads/acb40429-2d58-478c-af9b-f24ec20209e9.png",
    category: "Offset Printing"
  },


  // Boards & Signage - Coming Soon
  {
    title: "LED Advertisement Board - Coming Soon",
    price: "₹25-65",
    unit: "per sq ft",
    description: "Modern LED signage boards with custom designs - Available Soon",
    negotiable: true,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop",
    category: "Signage (Coming Soon)",
    comingSoon: true
  },
  {
    title: "Premium Glow Sign Board - Coming Soon",
    price: "₹150-300",
    unit: "per sq ft",
    description: "Illuminated signage with energy-efficient LED lighting - Available Soon",
    negotiable: true,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop",
    category: "Signage (Coming Soon)",
    comingSoon: true
  },
  {
    title: "Acrylic Sign Boards - Coming Soon",
    price: "₹80-150",
    unit: "per sq ft",
    description: "Premium acrylic boards with laser cutting and engraving - Available Soon",
    negotiable: true,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
    category: "Signage (Coming Soon)",
    comingSoon: true
  },
  {
    title: "Metal Sign Boards - Coming Soon",
    price: "₹120-250",
    unit: "per sq ft",
    description: "Durable metal signage for industrial and commercial use - Available Soon",
    negotiable: true,
    image: "https://images.unsplash.com/photo-1534237710431-e2fc698436d0?w=400&h=300&fit=crop",
    category: "Signage (Coming Soon)",
    comingSoon: true
  },
  {
    title: "Digital Display Boards - Coming Soon",
    price: "₹500-1000",
    unit: "per sq ft",
    description: "Interactive digital displays for modern advertising - Available Soon",
    negotiable: true,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop",
    category: "Signage (Coming Soon)",
    comingSoon: true
  },

  // Digital Paper Printing
  {
    title: "Premium Letterhead Printing",
    price: "₹350",
    unit: "for 50 papers (A4)",
    description: "High-quality letterhead printing on premium paper stock",
    negotiable: true,
    image: "/lovable-uploads/6124f148-3aa0-4758-b1c9-eee61ed37f56.png",
    category: "Digital Paper Printing"
  },
  {
    title: "Custom Sticker Sheets",
    price: "₹450",
    unit: "for 15 sheets (12x18)",
    description: "Multiple stickers printed on convenient sheets",
    negotiable: true,
    image: "/lovable-uploads/676e6dfe-07cc-49ce-a25c-5319ba4a040d.png",
    category: "Digital Paper Printing"
  },
  {
    title: "Award Certificates",
    price: "₹450",
    unit: "for 20 certificates (A4)",
    description: "Professional certificates with gold foil options",
    negotiable: true,
    image: "/lovable-uploads/1eb489b3-5fe1-4649-b6a3-67bfd2cb5623.png",
    category: "Digital Paper Printing"
  },
  {
    title: "Wedding Invitations - Coming Soon",
    price: "₹15-50",
    unit: "per invitation",
    description: "Elegant wedding invitations with custom designs",
    negotiable: true,
    image: "/lovable-uploads/330105c5-0ca4-44d2-9a87-b5aa60d1f7c0.png",
    category: "Digital Paper Printing",
    popular: true
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
    image: "/lovable-uploads/3106b826-ca01-4608-b843-e2d547437bed.png",
    category: "Apparel Printing"
  },
  {
    title: "Event T-Shirts",
    price: "₹120-250",
    unit: "per t-shirt",
    description: "Custom event t-shirts for conferences and festivals",
    negotiable: true,
    image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=400&h=300&fit=crop",
    category: "Apparel Printing"
  },
  {
    title: "Sports Jerseys",
    price: "₹300-600",
    unit: "per jersey",
    description: "Professional sports jerseys with numbers and names",
    negotiable: true,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    category: "Apparel Printing"
  }
];

const ScrollableSection = ({ title, services, discount, comingSoon }: { title: string; services: any[]; discount?: string; comingSoon?: boolean }) => {
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
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">{title}</h3>
          {comingSoon && (
            <Badge className="bg-orange-500 text-white px-2 sm:px-3 py-1 text-xs sm:text-sm font-semibold">
              <Clock className="w-3 h-3 mr-1" />
              Coming Soon
            </Badge>
          )}
          {discount && !comingSoon && (
            <Badge className="bg-green-500 text-white px-2 sm:px-3 py-1 text-xs sm:text-sm font-semibold">
              {discount}
            </Badge>
          )}
        </div>
        <div className="flex gap-1 sm:gap-2">
          <Button
            variant="outline"
            size="icon"
            className="h-6 w-6 sm:h-8 sm:w-8 rounded-full"
            onClick={() => scroll('left')}
          >
            <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-6 w-6 sm:h-8 sm:w-8 rounded-full"
            onClick={() => scroll('right')}
          >
            <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
          </Button>
        </div>
      </div>
      
      <div 
        ref={scrollRef}
        className="flex gap-3 sm:gap-4 overflow-x-auto scrollbar-hide pb-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {services.map((service, index) => (
          <div key={index} className="flex-none w-56 sm:w-64">
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
    "Hoarding & Boards": "From ₹25",
    "Digital Printing": "Min. 25% Off", 
    "Offset Printing": "From ₹499",
    "Signage (Coming Soon)": undefined,
    "Digital Paper Printing": "From ₹350",
    "Apparel Printing": "From ₹150"
  };

  return (
    <section className="py-8 sm:py-12 lg:py-16 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent mb-4">
            Premium Printing Services
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Browse our extensive range of professional printing solutions with competitive pricing
          </p>
        </div>

        {/* Hero Offers Section */}
        <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-xl p-4 sm:p-6 mb-6 sm:mb-8 text-white">
          <h3 className="text-xl sm:text-2xl font-bold mb-2">Huge offers credited</h3>
          <p className="text-sm sm:text-lg opacity-90">Limited time deals on all categories</p>
        </div>

        {/* Service Categories with Horizontal Scroll */}
        {Object.entries(groupedServices).map(([category, services]) => (
          <ScrollableSection
            key={category}
            title={category}
            services={services}
            discount={discounts[category as keyof typeof discounts]}
            comingSoon={category.includes("Coming Soon")}
          />
        ))}

        {/* Bottom CTA */}
        <div className="text-center mt-8 sm:mt-12">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 sm:p-8 text-white">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
              Need Custom Printing Solutions?
            </h3>
            <p className="text-sm sm:text-lg opacity-90 mb-6 max-w-2xl mx-auto px-4">
              Contact us for personalized quotes and bulk pricing on any printing service
            </p>
            <Button 
              onClick={() => window.open('https://wa.me/919634877767?text=Hi! I need a custom printing solution.', '_blank')}
              className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-lg text-base sm:text-lg"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Get Custom Quote
            </Button>
          </div>
        </div>
      </div>

      <style>{`
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
