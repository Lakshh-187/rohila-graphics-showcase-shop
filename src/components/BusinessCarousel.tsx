
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";

export const BusinessCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const businessImages = [
    {
      id: 1,
      image: "/lovable-uploads/0da165e7-bfe5-42e4-89de-4a5c597feece.png",
      title: "Large Format Printing",
      description: "High-quality poster printing"
    },
    {
      id: 2,
      image: "/lovable-uploads/4ca38484-ba19-47b8-938b-4f26ca1eec3a.png",
      title: "Digital Printing Services",
      description: "Professional digital prints"
    },
    {
      id: 3,
      image: "/lovable-uploads/78ac59f3-3c1e-4e96-8da3-e5efea679825.png",
      title: "Design Studio",
      description: "Creative design solutions"
    },
    {
      id: 4,
      image: "/lovable-uploads/0da165e7-bfe5-42e4-89de-4a5c597feece.png",
      title: "Rohila Graphics",
      description: "Your trusted printing partner"
    }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % businessImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? businessImages.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % businessImages.length);
  };

  return (
    <div className="relative w-full h-48 md:h-64 mb-6 overflow-hidden rounded-xl">
      {/* Main carousel container */}
      <div 
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {businessImages.map((item, index) => (
          <div key={item.id} className="min-w-full h-full relative">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            {/* Overlay with gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            {/* Content overlay */}
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h3 className="text-lg md:text-xl font-bold mb-1">{item.title}</h3>
              <p className="text-sm opacity-90">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-200"
      >
        <ChevronLeft className="w-5 h-5 text-white" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-200"
      >
        <ChevronRight className="w-5 h-5 text-white" />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {businessImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              index === currentIndex 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
