
import { MessageCircle, Tag, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
    <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white border-0 shadow-lg overflow-hidden relative">
      {popular && (
        <div className="absolute top-4 left-4 z-20">
          <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold px-3 py-1">
            <Star className="w-3 h-3 mr-1" />
            Popular
          </Badge>
        </div>
      )}
      
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="absolute top-4 right-4">
          <Badge variant="secondary" className="bg-white/90 text-gray-800 font-medium">
            {category}
          </Badge>
        </div>
        
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="text-white">
            <div className="text-2xl font-bold mb-1">{price}</div>
            <div className="text-sm opacity-90">{unit}</div>
          </div>
        </div>
      </div>

      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-800 transition-colors line-clamp-2">
            {title}
          </h3>
          {negotiable && (
            <Badge variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-200 ml-2 shrink-0">
              <Tag className="w-3 h-3 mr-1" />
              Negotiable
            </Badge>
          )}
        </div>
        
        <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-2">
          {description}
        </p>

        <div className="flex flex-col gap-3">
          <Button 
            onClick={handleWhatsApp}
            className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-2.5 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
          >
            <MessageCircle className="w-4 h-4" />
            Get Quote
          </Button>
          
          <div className="text-center">
            <p className="text-xs text-gray-500">
              💡 Bulk orders get better pricing!
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
