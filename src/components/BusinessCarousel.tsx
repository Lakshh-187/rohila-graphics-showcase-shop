
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const businessImages = [
  {
    src: "/lovable-uploads/ce531cd6-8e31-4986-ae20-170ef9da4225.png",
    title: "Large Format Printing",
    description: "High-quality poster printing"
  },
  {
    src: "/lovable-uploads/cc566479-1e40-44b6-846a-27a9827d8d35.png",
    title: "Digital Printing Services",
    description: "Professional business solutions"
  },
  {
    src: "/lovable-uploads/70522788-fd14-40e9-9758-c7707e074864.png",
    title: "Banner & Signage",
    description: "Custom outdoor advertising"
  }
];

export const BusinessCarousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % businessImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % businessImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + businessImages.length) % businessImages.length);
  };

  return (
    <div className="mb-8">
      <div className="relative overflow-hidden rounded-2xl shadow-xl bg-gray-900">
        {/* Image Container with proper aspect ratio */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] lg:aspect-[24/9]">
          <img 
            src={businessImages[currentImage].src}
            alt={businessImages[currentImage].title}
            className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-500"
          />
          
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          
          {/* Content overlay */}
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 lg:bottom-8 lg:left-8 lg:right-8 text-white">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">
              {businessImages[currentImage].title}
            </h3>
            <p className="text-sm sm:text-base lg:text-lg opacity-90">
              {businessImages[currentImage].description}
            </p>
          </div>
        </div>

        {/* Navigation buttons */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 w-8 h-8 sm:w-10 sm:h-10"
          onClick={prevImage}
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </Button>
        
        <Button
          variant="outline"
          size="icon"
          className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 w-8 h-8 sm:w-10 sm:h-10"
          onClick={nextImage}
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </Button>

        {/* Dots indicator */}
        <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {businessImages.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentImage 
                  ? 'bg-white scale-110' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
