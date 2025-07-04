
import { Phone, Mail, MapPin, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const businessImages = [
  "https://images.unsplash.com/photo-1586243287039-23f4c8e2e7ab?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1534237710431-e2fc698436d0?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1516962126636-27ad087061cc?w=800&h=600&fit=crop",
];

const videoSources = [
  "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761",
  "https://player.vimeo.com/external/190291895.sd.mp4?s=1f40b97c13dc1b3f2dc2e36b3c9e4f0b3d3c8e6c&profile_id=139",
];

export const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

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
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-pink-800 to-red-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-red-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-pink-400/10 to-red-400/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>
      
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:60px_60px] animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="animate-fade-in text-center lg:text-left">
            <div className="mb-4">
              <span className="inline-block bg-gradient-to-r from-purple-400 to-pink-400 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                ✨ Premium Design Studio
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight">
              ROHILA
              <br />
              <span className="bg-gradient-to-r from-pink-300 to-red-300 bg-clip-text text-transparent">
                GRAPHICS
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-purple-100 font-light">
              Where Creativity Meets Professional Excellence
            </p>
            <p className="text-base md:text-lg mb-8 text-gray-200 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Transform your vision into stunning reality with our premium printing solutions. 
              From elegant business cards to eye-catching banners, we craft designs that speak your brand's language.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Explore Our Work
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full"
              >
                Get Free Quote
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto lg:mx-0">
              <Card className="bg-white/10 backdrop-blur-md border-white/20 p-4 hover:bg-white/20 transition-all duration-300 group">
                <Phone className="h-6 w-6 text-purple-300 mb-2 mx-auto group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-1 text-sm">Call & WhatsApp</h3>
                <p className="text-purple-200 text-xs font-medium">9634877767</p>
              </Card>

              <Card className="bg-white/10 backdrop-blur-md border-white/20 p-4 hover:bg-white/20 transition-all duration-300 group">
                <Mail className="h-6 w-6 text-purple-300 mb-2 mx-auto group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-1 text-sm">Email</h3>
                <p className="text-purple-200 text-xs font-medium">rohilagraphics@gmail.com</p>
              </Card>

              <Card className="bg-white/10 backdrop-blur-md border-white/20 p-4 hover:bg-white/20 transition-all duration-300 group">
                <MapPin className="h-6 w-6 text-purple-300 mb-2 mx-auto group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-1 text-sm">Location</h3>
                <p className="text-purple-200 text-xs font-medium">Nakur, Saharanpur</p>
              </Card>
            </div>
          </div>

          {/* Right side - Media showcase */}
          <div className="relative animate-scale-in">
            <div className="relative h-96 md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              {showVideo ? (
                <div className="w-full h-full bg-black rounded-3xl flex items-center justify-center">
                  <video 
                    className="w-full h-full object-cover rounded-3xl" 
                    autoPlay 
                    muted 
                    loop
                    src={videoSources[0]}
                  />
                </div>
              ) : (
                <>
                  <img 
                    src={businessImages[currentImage]} 
                    alt="Rohila Graphics Business" 
                    className="w-full h-full object-cover transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  
                  {/* Play button overlay */}
                  <Button
                    onClick={() => setShowVideo(true)}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white border-0 backdrop-blur-md p-4 h-auto rounded-full group"
                  >
                    <Play className="h-8 w-8 group-hover:scale-110 transition-transform" />
                  </Button>
                </>
              )}
              
              {!showVideo && (
                <>
                  {/* Navigation buttons */}
                  <Button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white border-0 backdrop-blur-md p-2 h-auto rounded-full"
                    size="icon"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </Button>
                  
                  <Button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white border-0 backdrop-blur-md p-2 h-auto rounded-full"
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
                </>
              )}
            </div>

            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-2xl shadow-lg animate-bounce">
              <div className="text-center">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-xs">Happy Clients</div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-red-500 to-pink-500 text-white p-4 rounded-2xl shadow-lg animate-pulse">
              <div className="text-center">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-xs">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
