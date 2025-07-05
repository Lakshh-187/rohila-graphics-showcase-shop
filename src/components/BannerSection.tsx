
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const BannerSection = () => {
  const banners = [
    {
      title: "Professional Digital Printing",
      subtitle: "High-quality prints that make your business shine",
      image: "/lovable-uploads/01c42ca6-fdb7-4e02-b3a7-3e1ed9d8a233.png",
      cta: "Explore Services",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      title: "Custom Design Solutions",
      subtitle: "Creative workspace for all your design needs",
      image: "/lovable-uploads/c528929b-f4c6-4679-8642-30d2dc35080a.png",
      cta: "View Samples",
      gradient: "from-pink-600 to-red-600"
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

        <div className="grid md:grid-cols-2 gap-8 mb-12">
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

        {/* New Banner Component for the third image */}
        <div className="w-full">
          <Card className="overflow-hidden bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 p-1">
            <div className="bg-white rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/d237a972-4404-4e22-b0c0-6c020ba095aa.png" 
                alt="Rohila Graphics Banner"
                className="w-full h-32 md:h-48 object-cover"
              />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
