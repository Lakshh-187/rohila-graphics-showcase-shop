
import { Play, Clock, Youtube } from "lucide-react";
import { Card } from "@/components/ui/card";

const videos = [
  {
    id: 1,
    title: "Digital Printing Process",
    thumbnail: "/lovable-uploads/5a72f972-2581-4fa9-960a-3ac54e7d17a7.png",
    platform: "youtube",
    duration: "2:45",
    url: "https://youtube.com/shorts/K2vBIF2qRIo?feature=share"
  },
  {
    id: 2,
    title: "Banner Installation",
    thumbnail: "/lovable-uploads/586aebe3-4320-41e2-ac62-9150f1049305.png",
    platform: "youtube",
    duration: "1:30",
    url: "https://youtube.com/shorts/8vX3aSbRlIs?feature=share"
  },
  {
    id: 3,
    title: "Business Card Design",
    thumbnail: "/lovable-uploads/cc566479-1e40-44b6-846a-27a9827d8d35.png",
    platform: "youtube",
    duration: "3:15",
    url: "https://youtube.com/shorts/fH4iiKpdqpM?feature=share"
  },
  {
    id: 4,
    title: "Wedding Print Setup",
    thumbnail: "/lovable-uploads/5a72f972-2581-4fa9-960a-3ac54e7d17a7.png",
    platform: "youtube",
    duration: "2:00",
    url: "https://youtube.com/shorts/7csiNb6AV_E?feature=share"
  }
];

export const VideoShowcase = () => {
  const handleVideoClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold mb-6">Behind the Scenes</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Watch our printing process in action and see how we create amazing results for our clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video) => (
            <Card 
              key={video.id} 
              className="group overflow-hidden bg-gray-800 border-gray-700 hover:border-purple-500 transition-all duration-300 cursor-pointer"
              onClick={() => handleVideoClick(video.url)}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-red-600 rounded-full p-4">
                    <Play className="w-8 h-8 text-white fill-white" />
                  </div>
                </div>
                
                <div className="absolute top-3 right-3">
                  <Youtube className="w-6 h-6 text-red-500" />
                </div>

                <div className="absolute bottom-3 right-3 bg-black/60 px-2 py-1 rounded text-sm flex items-center">
                  <Clock className="w-3 h-3 mr-1" />
                  {video.duration}
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-semibold text-white group-hover:text-purple-400 transition-colors">
                  {video.title}
                </h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
