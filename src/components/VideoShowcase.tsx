
import { Play, Youtube, Instagram } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const VideoShowcase = () => {
  const videos = [
    {
      id: 1,
      title: "Digital Printing Process",
      thumbnail: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=500&h=300&fit=crop",
      platform: "youtube",
      duration: "2:45",
      url: "https://youtube.com/shorts/K2vBIF2qRIo?feature=share"
    },
    {
      id: 2,
      title: "Banner Installation",
      thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&h=300&fit=crop",
      platform: "youtube",
      duration: "1:30",
      url: "https://youtube.com/shorts/8vX3aSbRlIs?feature=share"
    },
    {
      id: 3,
      title: "Business Card Design",
      thumbnail: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&h=300&fit=crop",
      platform: "youtube",
      duration: "3:15",
      url: "https://youtube.com/shorts/fH4iiKpdqpM?feature=share"
    },
    {
      id: 4,
      title: "Wedding Print Setup",
      thumbnail: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&h=300&fit=crop",
      platform: "youtube",
      duration: "2:00",
      url: "https://youtube.com/shorts/7csiNb6AV_E?feature=share"
    }
  ];

  const handleVideoClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Behind the Scenes
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Watch our printing processes and see how we create high-quality prints for our clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {videos.map((video) => (
            <Card 
              key={video.id}
              className="group cursor-pointer overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/10 backdrop-blur-md border-white/20"
              onClick={() => handleVideoClick(video.url)}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-md rounded-full p-4 group-hover:bg-white/30 transition-colors duration-300">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>

                {/* Platform Icon */}
                <div className="absolute top-3 left-3">
                  <Youtube className="w-6 h-6 text-red-500" />
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-white group-hover:text-blue-300 transition-colors">
                  {video.title}
                </h3>
                <p className="text-sm text-gray-400 capitalize mt-1">
                  YouTube Shorts
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            onClick={() => window.open('https://youtube.com/shorts/G0v5xRomti4?feature=share', '_blank')}
          >
            View More Videos
          </Button>
        </div>
      </div>
    </section>
  );
};
