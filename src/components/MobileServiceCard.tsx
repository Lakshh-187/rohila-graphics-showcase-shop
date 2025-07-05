
import { MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface MobileServiceCardProps {
  title: string;
  price: string;
  unit: string;
  description: string;
  negotiable: boolean;
  image: string;
  category: string;
  popular?: boolean;
  discount?: string;
}

export const MobileServiceCard = ({ 
  title, 
  price, 
  unit, 
  description, 
  negotiable, 
  image, 
  category, 
  popular,
  discount 
}: MobileServiceCardProps) => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent(`Hi! I'm interested in ${title}. Can you provide more details?`);
    window.open(`https://wa.me/919634877767?text=${message}`, '_blank');
  };

  return (
    <Card className="w-full bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-32 object-cover"
        />
        {popular && (
          <Badge className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1">
            Popular
          </Badge>
        )}
        {discount && (
          <Badge className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1">
            {discount}
          </Badge>
        )}
      </div>

      <CardContent className="p-3">
        <h3 className="font-semibold text-sm text-gray-800 mb-1 line-clamp-2 leading-tight">
          {title}
        </h3>
        
        <div className="flex items-center justify-between mb-2">
          <div>
            <span className="text-lg font-bold text-green-600">{price}</span>
            <span className="text-xs text-gray-500 ml-1 block leading-tight">{unit}</span>
          </div>
          <Button 
            onClick={handleWhatsApp}
            size="icon"
            className="bg-green-500 hover:bg-green-600 text-white rounded-full w-8 h-8"
          >
            <MessageCircle className="w-4 h-4" />
          </Button>
        </div>

        <div className="flex items-center justify-between">
          <Badge variant="outline" className="text-xs border-purple-200 text-purple-700">
            {category}
          </Badge>
          {negotiable && (
            <span className="text-xs text-green-600 font-medium">Negotiable</span>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
