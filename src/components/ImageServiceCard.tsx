
import { MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ImageServiceCardProps {
  title: string;
  price: string;
  unit: string;
  description: string;
  negotiable: boolean;
  image: string;
  category: string;
  popular?: boolean;
}

export const ImageServiceCard = ({ 
  title, 
  price, 
  unit, 
  description, 
  negotiable, 
  image, 
  category, 
  popular 
}: ImageServiceCardProps) => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent(`Hi! I'm interested in ${title}. Can you provide more details about pricing and availability?`);
    window.open(`https://wa.me/919634877767?text=${message}`, '_blank');
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white border-0 shadow-md overflow-hidden h-full">
      <div className="relative h-36 sm:h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {popular && (
          <div className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
            Popular
          </div>
        )}
      </div>

      <CardContent className="p-3 sm:p-4 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="font-bold text-sm sm:text-lg text-gray-800 mb-2 line-clamp-2 min-h-[2.5rem] sm:min-h-[3.5rem]">
            {title}
          </h3>
          
          <p className="text-xs sm:text-sm text-gray-600 mb-3 line-clamp-2 min-h-[2rem] sm:min-h-[2.5rem]">
            {description}
          </p>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <span className="text-lg sm:text-2xl font-bold text-blue-600">{price}</span>
            <span className="text-xs sm:text-sm text-gray-500 ml-1 block sm:inline">{unit}</span>
          </div>
          <Button 
            onClick={handleWhatsApp}
            size="icon"
            className="bg-green-500 hover:bg-green-600 text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0 ml-2"
          >
            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
