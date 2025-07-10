
import { useState, useEffect } from "react";
import { X, MessageCircle, Users, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const SocialPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem('hasSeenSocialPopup');
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 2000); // Show popup after 2 seconds
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('hasSeenSocialPopup', 'true');
  };

  const handleWhatsAppChat = () => {
    const message = encodeURIComponent("Hi! I'm interested in your printing services.");
    window.open(`https://wa.me/919634877767?text=${message}`, '_blank');
    handleClose();
  };

  const handleWhatsAppCommunity = () => {
    window.open('https://chat.whatsapp.com/FAwF9FbqzcE1n16GNpHvMs?mode=ac_c', '_blank');
    handleClose();
  };

  const handleInstagram = () => {
    window.open('https://instagram.com/ROHILAGRAPHICSNAKUR', '_blank');
    handleClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md bg-white p-6 relative animate-scale-in">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Connect with Us!</h2>
          <p className="text-gray-600">Choose your preferred way to stay connected</p>
        </div>

        <div className="space-y-3">
          <Button
            onClick={handleWhatsAppChat}
            className="w-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center gap-3 py-3"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp Chat
          </Button>

          <Button
            onClick={handleWhatsAppCommunity}
            className="w-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center gap-3 py-3"
          >
            <Users className="w-5 h-5" />
            WhatsApp Community
          </Button>

          <Button
            onClick={handleInstagram}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white flex items-center justify-center gap-3 py-3"
          >
            <Instagram className="w-5 h-5" />
            Instagram
          </Button>
        </div>

        <div className="text-center mt-4">
          <button
            onClick={handleClose}
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            Maybe later
          </button>
        </div>
      </Card>
    </div>
  );
};
