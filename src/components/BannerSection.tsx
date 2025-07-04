
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const BannerSection = () => {
  const banners = [
    {
      title: "Professional Digital Printing",
      subtitle: "High-quality prints for your business needs",
      image: "https://images.unsplash.com/photo-1586243287039-23f4c8e2e7ab?w=800&h=400&fit=crop",
      cta: "Explore Services"
    },
    {
      title: "Custom Banner Solutions",
      subtitle: "Eye-catching banners for events and promotions",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=400&fit=crop",
      cta: "View Samples"
    },
    {
      title: "Wedding Print Packages",
      subtitle: "Beautiful designs for your special day",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
      cta: "Get Quote"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Premium Printing Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From business cards to large format banners, we deliver exceptional quality that makes your brand stand out.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {banners.map((banner, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={banner.image} 
                  alt={banner.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{banner.title}</h3>
                  <p className="text-sm opacity-90 mb-4">{banner.subtitle}</p>
                  <Button variant="secondary" size="sm" className="group-hover:bg-white group-hover:text-black transition-colors">
                    {banner.cta}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
