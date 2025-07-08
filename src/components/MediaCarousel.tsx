
import { Play, Instagram, Youtube } from "lucide-react";
import { Card } from "@/components/ui/card";

export const MediaCarousel = () => {
  const mediaItems = [
    {
      type: "youtube",
      title: "Banner Printing Process",
      thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
      icon: Youtube,
      url: "https://youtube.com/shorts/h2istcrOTQc?feature=share"
    },
    {
      type: "youtube", 
      title: "Digital Printing Demo",
      thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
      icon: Youtube,
      url: "https://youtube.com/shorts/IhOXuJn22-o?feature=share"
    },
    {
      type: "youtube",
      title: "Custom Print Solutions",
      thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
      icon: Youtube,
      url: "https://youtube.com/shorts/LJRIeNydPI0?feature=share"
    },
    {
      type: "youtube",
      title: "Professional Printing",
      thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      icon: Youtube,
      url: "https://youtube.com/shorts/KWqU4H_QV3I?feature=share"
    },
    {
      type: "youtube",
      title: "Quality Control Process",
      thumbnail: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop",
      icon: Youtube,
      url: "https://youtube.com/shorts/d5ijtpbCJNk?feature=share"
    }
  ];

  const handleMediaClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold text-white mb-6">
            See Our Work in Action
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Watch our printing processes and check out our latest projects on YouTube
          </p>
        </div>

        <div className="relative">
          {/* Floating circular carousel */}
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="relative w-80 h-80 animate-spin" style={{ animationDuration: '20s' }}>
              {mediaItems.slice(0, 4).map((item, index) => {
                const angle = (index * 360) / 4;
                const x = Math.cos((angle * Math.PI) / 180) * 140;
                const y = Math.sin((angle * Math.PI) / 180) * 140;
                
                return (
                  <Card
                    key={index}
                    className="absolute w-24 h-24 cursor-pointer hover:scale-110 transition-all duration-300 group"
                    style={{
                      left: `calc(50% + ${x}px - 48px)`,
                      top: `calc(50% + ${y}px - 48px)`,
                      animation: `reverse-spin 20s linear infinite`
                    }}
                    onClick={() => handleMediaClick(item.url)}
                  >
                    <div className="w-full h-full rounded-lg overflow-hidden relative bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                      <item.icon className="w-8 h-8 text-white group-hover:scale-125 transition-transform" />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Center content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Card className="w-48 h-48 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 border-0 flex items-center justify-center">
              <div className="text-center text-white">
                <Play className="w-12 h-12 mx-auto mb-4 animate-pulse" />
                <h3 className="text-lg font-bold">Media Gallery</h3>
                <p className="text-sm opacity-90">Click to explore</p>
              </div>
            </Card>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {mediaItems.slice(0, 4).map((item, index) => (
            <Card 
              key={index}
              className="bg-white/10 backdrop-blur-md border-white/20 overflow-hidden cursor-pointer hover:bg-white/20 transition-all duration-300 group"
              onClick={() => handleMediaClick(item.url)}
            >
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={item.thumbnail} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-white">{item.title}</h4>
                <p className="text-sm text-gray-300">YouTube Shorts</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes reverse-spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(-360deg);
            }
          }
        `}
      </style>
    </section>
  );
};
