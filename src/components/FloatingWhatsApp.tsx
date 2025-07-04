
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FloatingWhatsApp = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'm interested in your printing services. Can you help me with a quote?");
    window.open(`https://wa.me/919634877767?text=${message}`, '_blank');
  };

  return (
    <Button
      onClick={handleWhatsApp}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 w-16 h-16 rounded-full animate-bounce"
      size="icon"
    >
      <MessageCircle className="w-8 h-8" />
      <span className="sr-only">WhatsApp</span>
    </Button>
  );
};
