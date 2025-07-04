
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const BannerSection = () => {
  const banners = [
    {
      title: "Professional Digital Printing",
      subtitle: "High-quality prints that make your business shine",
      image: "https://images.unsplash.com/photo-1586243287039-23f4c8e2e7ab?w=800&h=400&fit=crop",
      cta: "Explore Services",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      title: "Custom Banner Solutions",
      subtitle: "Eye-catching banners for events and promotions",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=400&fit=crop",
      cta: "View Samples",
      gradient: "from-pink-600 to-red-600"
    },
    {
      title: "Wedding Print Packages",
      subtitle: "Beautiful designs for your special day",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
      cta: "Get Quote",
      gradient: "from-red-600 to-purple-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-tl from-red-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 text-purple-600 mr-3" />
            <span className="text-purple-600 font-semibold text-lg">Featured Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent mb-6">
            Premium Printing Solutions
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            From business essentials to creative masterpieces, we deliver exceptional quality 
            that transforms your vision into stunning reality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {banners.map((banner, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white/80 backdrop-blur-sm border-0 relative">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={banner.image} 
                  alt={banner.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${banner.gradient} opacity-60`}></div>
                <div className="absolute inset-0 bg-black/20"></div>
                
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-xl font-bold mb-2 transform group-hover:translate-y-[-4px] transition-transform duration-300">
                    {banner.title}
                  </h3>
                  <p className="text-sm opacity-90 mb-4 leading-relaxed">
                    {banner.subtitle}
                  </p>
                  <Button 
                    variant="secondary" 
                    size="sm" 
                    className="bg-white/20 backdrop-blur-md hover:bg-white hover:text-gray-800 transition-all duration-300 rounded-full px-6"
                  >
                    {banner.cta}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
              
              {/* Floating accent */}
              <div className={`absolute top-4 right-4 w-3 h-3 bg-gradient-to-r ${banner.gradient} rounded-full opacity-80 group-hover:scale-150 transition-transform duration-300`}></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
