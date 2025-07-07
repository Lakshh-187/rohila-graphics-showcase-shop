
import { useState } from "react";
import { Eye, Download, ExternalLink, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface SampleCardProps {
  id: number;
  title: string;
  designs: number;
  thumbnail: string;
  popular?: boolean;
  discount?: string;
  comingSoon?: boolean;
  driveLink?: string;
}

export const SampleCard = ({ 
  id, 
  title, 
  designs, 
  thumbnail, 
  popular, 
  discount, 
  comingSoon,
  driveLink 
}: SampleCardProps) => {
  const [imageError, setImageError] = useState(false);

  const handleDownload = () => {
    if (comingSoon) {
      const message = encodeURIComponent(`Hi! I'm interested in ${title} samples. When will they be available?`);
      window.open(`https://wa.me/919634877767?text=${message}`, '_blank');
    } else if (driveLink) {
      window.open(driveLink, '_blank');
    }
  };

  const handlePreview = () => {
    if (driveLink && !comingSoon) {
      window.open(driveLink, '_blank');
    }
  };

  return (
    <Card className={`flex-none w-40 bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow ${comingSoon ? 'opacity-75' : ''}`}>
      <div className="relative">
        <img 
          src={imageError ? "https://images.unsplash.com/photo-1586243287039-23f4c8e2e7ab?w=300&h=200&fit=crop" : thumbnail} 
          alt={title}
          className={`w-full h-24 object-cover ${comingSoon ? 'grayscale' : ''}`}
          onError={() => setImageError(true)}
        />
        {popular && !comingSoon && (
          <Badge className="absolute top-1 left-1 bg-red-500 text-white text-xs px-1 py-0.5">
            Popular
          </Badge>
        )}
        {comingSoon && (
          <Badge className="absolute top-1 left-1 bg-orange-500 text-white text-xs px-1 py-0.5 flex items-center gap-1">
            <Clock className="w-2 h-2" />
            Coming Soon
          </Badge>
        )}
        {discount && !comingSoon && (
          <Badge className="absolute top-1 right-1 bg-green-500 text-white text-xs px-1 py-0.5">
            {discount}
          </Badge>
        )}
      </div>
      
      <CardContent className="p-3">
        <h4 className="font-semibold text-xs text-gray-800 mb-1 line-clamp-2 leading-tight">
          {title}
        </h4>
        <div className="flex items-center justify-between text-xs text-gray-600 mb-2">
          <span className="font-medium">{designs} designs</span>
          <Button 
            size="sm" 
            variant="ghost" 
            className="h-6 w-6 p-0"
            onClick={handlePreview}
            disabled={comingSoon}
          >
            {comingSoon ? <Clock className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
          </Button>
        </div>
        <Button 
          size="sm"
          className={`w-full text-white text-xs py-1 ${
            comingSoon 
              ? 'bg-orange-500 hover:bg-orange-600' 
              : 'bg-purple-600 hover:bg-purple-700'
          }`}
          onClick={handleDownload}
        >
          {comingSoon ? (
            <>
              <Clock className="w-3 h-3 mr-1" />
              Notify Me
            </>
          ) : (
            <>
              <ExternalLink className="w-3 h-3 mr-1" />
              View Samples
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
};
