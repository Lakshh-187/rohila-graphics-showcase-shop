
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, MessageCircle, Instagram, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'm interested in your printing services. Can you help me?");
    window.open(`https://wa.me/919634877767?text=${message}`, '_blank');
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Samples", path: "/samples" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-blue-600">
            ROHILA GRAPHICS
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Social Icons */}
            <div className="flex items-center space-x-2">
              <Button
                size="icon"
                variant="ghost"
                className="w-8 h-8"
                asChild
              >
                <a href="tel:9634877767">
                  <Phone className="w-4 h-4" />
                </a>
              </Button>
              
              <Button
                size="icon"
                variant="ghost"
                className="w-8 h-8"
                onClick={handleWhatsApp}
              >
                <MessageCircle className="w-4 h-4" />
              </Button>
              
              <Button
                size="icon"
                variant="ghost"
                className="w-8 h-8"
                asChild
              >
                <a 
                  href="https://instagram.com/ROHILAGRAPHICSNAKUR" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block py-2 text-sm font-medium ${
                  location.pathname === link.path
                    ? "text-blue-600"
                    : "text-gray-700"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="flex items-center space-x-4 mt-4 pt-4 border-t">
              <Button size="sm" asChild>
                <a href="tel:9634877767">
                  <Phone className="w-4 h-4 mr-2" />
                  Call
                </a>
              </Button>
              
              <Button size="sm" onClick={handleWhatsApp}>
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
