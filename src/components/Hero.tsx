
import { Phone, Mail, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const businessImages = [
  "https://images.unsplash.com/photo-1586243287039-23f4c8e2e7ab?w=800&h=600&fit=crop", // Printing equipment
  "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop", // Digital printing
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop", // Banner printing
  "https://images.unsplash.com/photo-1534237710431-e2fc698436d0?w=800&h=600&fit=crop", // Printing workspace
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop", // LED signage
  "https://images.unsplash.com/photo-1516962126636-27ad087061cc?w=800&h=600&fit=crop", // Vinyl printing
];

export const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % businessImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % businessImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + businessImages.length) % businessImages.length);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 via-blue-800 to-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:60px_60px] animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="animate-fade-in text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
              ROHILA GRAPHICS
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-blue-200 font-light">
              Premium Printing Solutions for Your Business
            </p>
            <p className="text-base md:text-lg mb-8 text-gray-300 max-w-2xl mx-auto lg:mx-0">
              From flex printing to digital solutions, we deliver quality that speaks for your brand. 
              Professional service with competitive pricing.
            </p>

            <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto lg:mx-0">
              <Card className="bg-white/10 backdrop-blur-md border-white/20 p-4 hover:bg-white/20 transition-all duration-300">
                <Phone className="h-6 w-6 text-blue-300 mb-2 mx-auto" />
                <h3 className="font-semibold mb-1 text-sm">Call & WhatsApp</h3>
                <p className="text-blue-200 text-xs">9634877767</p>
              </Card>

              <Card className="bg-white/10 backdrop-blur-md border-white/20 p-4 hover:bg-white/20 transition-all duration-300">
                <Mail className="h-6 w-6 text-blue-300 mb-2 mx-auto" />
                <h3 className="font-semibold mb-1 text-sm">Email</h3>
                <p className="text-blue-200 text-xs">rohilagraphics@gmail.com</p>
              </Card>

              <Card className="bg-white/10 backdrop-blur-md border-white/20 p-4 hover:bg-white/20 transition-all duration-300">
                <MapPin className="h-6 w-6 text-blue-300 mb-2 mx-auto" />
                <h3 className="font-semibold mb-1 text-sm">Location</h3>
                <p className="text-blue-200 text-xs">Nakur, Saharanpur</p>
              </Card>
            </div>
          </div>

          {/* Right side - Image carousel */}
          <div className="relative animate-scale-in">
            <div className="relative h-96 md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={businessImages[currentImage]} 
                alt="Rohila Graphics Business" 
                className="w-full h-full object-cover transition-opacity duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              
              {/* Navigation buttons */}
              <Button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white border-0 backdrop-blur-md p-2 h-auto"
                size="icon"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              
              <Button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white border-0 backdrop-blur-md p-2 h-auto"
                size="icon"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>

              {/* Dots indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {businessImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentImage ? 'bg-white scale-125' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
