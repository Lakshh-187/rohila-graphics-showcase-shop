
import { Instagram, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FloatingSocials = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'm interested in your printing services. Can you help me?");
    window.open(`https://wa.me/919634877767?text=${message}`, '_blank');
  };

  return (
    <>
      {/* Left side - Phone and Instagram */}
      <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-40 space-y-3">
        <Button
          size="icon"
          className="bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 w-12 h-12 rounded-full"
          asChild
        >
          <a href="tel:9634877767" title="Call Now">
            <Phone className="w-5 h-5" />
          </a>
        </Button>
        
        <Button
          size="icon"
          className="bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 w-12 h-12 rounded-full"
          asChild
        >
          <a 
            href="https://instagram.com/ROHILAGRAPHICSNAKUR" 
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </Button>
      </div>

      {/* Right side - WhatsApp */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40">
        <Button
          onClick={handleWhatsApp}
          size="icon"
          className="bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 w-12 h-12 rounded-full"
          title="WhatsApp"
        >
          <MessageCircle className="w-5 h-5" />
        </Button>
      </div>
    </>
  );
};
