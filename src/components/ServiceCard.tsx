
import { MessageCircle, Tag } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  title: string;
  price: string;
  unit: string;
  description: string;
  negotiable: boolean;
}

export const ServiceCard = ({ title, price, unit, description, negotiable }: ServiceCardProps) => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent(`Hi! I'm interested in ${title}. Can you provide more details about pricing and availability?`);
    window.open(`https://wa.me/919634877767?text=${message}`, '_blank');
  };

  return (
    <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 shadow-lg overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <CardHeader className="relative z-10">
        <div className="flex justify-between items-start mb-2">
          <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-blue-800 transition-colors">
            {title}
          </CardTitle>
          {negotiable && (
            <Badge variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-200">
              <Tag className="w-3 h-3 mr-1" />
              Negotiable
            </Badge>
          )}
        </div>
        
        <div className="text-3xl font-bold text-blue-600 mb-1">
          {price}
        </div>
        <div className="text-sm text-gray-500 font-medium">
          {unit}
        </div>
      </CardHeader>

      <CardContent className="relative z-10">
        <p className="text-gray-600 mb-6 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-col gap-3">
          <Button 
            onClick={handleWhatsApp}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp for Quote
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
