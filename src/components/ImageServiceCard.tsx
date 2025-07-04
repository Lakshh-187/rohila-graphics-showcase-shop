
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
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white border-0 shadow-md overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {popular && (
          <div className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
            Popular
          </div>
        )}
      </div>

      <CardContent className="p-4">
        <h3 className="font-bold text-lg text-gray-800 mb-2 line-clamp-2">
          {title}
        </h3>
        
        <div className="flex items-center justify-between mb-3">
          <div>
            <span className="text-2xl font-bold text-blue-600">{price}</span>
            <span className="text-sm text-gray-500 ml-1">{unit}</span>
          </div>
          <Button 
            onClick={handleWhatsApp}
            size="icon"
            className="bg-green-500 hover:bg-green-600 text-white rounded-full w-10 h-10"
          >
            <MessageCircle className="w-5 h-5" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
