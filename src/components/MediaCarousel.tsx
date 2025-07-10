
import { Youtube, Play } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const mediaItems = [
  {
    type: "youtube",
    title: "Banner Printing Process",
    thumbnail: "/lovable-uploads/586aebe3-4320-41e2-ac62-9150f1049305.png",
    icon: Youtube,
    url: "https://youtube.com/shorts/h2istcrOTQc?feature=share"
  },
  {
    type: "youtube", 
    title: "Digital Printing Demo",
    thumbnail: "/lovable-uploads/5a72f972-2581-4fa9-960a-3ac54e7d17a7.png",
    icon: Youtube,
    url: "https://youtube.com/shorts/IhOXuJn22-o?feature=share"
  },
  {
    type: "youtube",
    title: "Custom Print Solutions",
    thumbnail: "/lovable-uploads/cc566479-1e40-44b6-846a-27a9827d8d35.png",
    icon: Youtube,
    url: "https://youtube.com/shorts/LJRIeNydPI0?feature=share"
  },
  {
    type: "youtube",
    title: "Professional Printing",
    thumbnail: "/lovable-uploads/586aebe3-4320-41e2-ac62-9150f1049305.png",
    icon: Youtube,
    url: "https://youtube.com/shorts/KWqU4H_QV3I?feature=share"
  },
  {
    type: "youtube",
    title: "Quality Control Process",
    thumbnail: "/lovable-uploads/5a72f972-2581-4fa9-960a-3ac54e7d17a7.png",
    icon: Youtube,
    url: "https://youtube.com/shorts/d5ijtpbCJNk?feature=share"
  }
];

export const MediaCarousel = () => {
  const handleItemClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">Media Gallery</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our collection of videos, tutorials, and behind-the-scenes content showcasing our printing expertise.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {mediaItems.map((item, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div 
                    className="group cursor-pointer"
                    onClick={() => handleItemClick(item.url)}
                  >
                    <div className="relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                      <div className="aspect-video relative overflow-hidden">
                        <img 
                          src={item.thumbnail}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-red-600 rounded-full p-3">
                            <Play className="w-6 h-6 text-white fill-white" />
                          </div>
                        </div>

                        <div className="absolute top-3 right-3">
                          <item.icon className="w-6 h-6 text-red-500" />
                        </div>
                      </div>
                      
                      <div className="p-4">
                        <h3 className="font-semibold text-gray-800 group-hover:text-purple-600 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1 capitalize">
                          {item.type} Video
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
