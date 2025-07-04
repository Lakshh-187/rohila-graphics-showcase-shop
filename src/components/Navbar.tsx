
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, MessageCircle, Instagram, Sparkles } from "lucide-react";
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
    <nav className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-purple-100">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              ROHILA GRAPHICS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-all duration-300 relative group ${
                  location.pathname === link.path
                    ? "text-purple-600"
                    : "text-gray-700 hover:text-purple-600"
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full ${
                  location.pathname === link.path ? "w-full" : ""
                }`}></span>
              </Link>
            ))}
            
            {/* Social Icons */}
            <div className="flex items-center space-x-2">
              <Button
                size="icon"
                variant="ghost"
                className="w-8 h-8 hover:bg-purple-100 hover:text-purple-600 transition-colors rounded-full"
                asChild
              >
                <a href="tel:9634877767">
                  <Phone className="w-4 h-4" />
                </a>
              </Button>
              
              <Button
                size="icon"
                variant="ghost"
                className="w-8 h-8 hover:bg-green-100 hover:text-green-600 transition-colors rounded-full"
                onClick={handleWhatsApp}
              >
                <MessageCircle className="w-4 h-4" />
              </Button>
              
              <Button
                size="icon"
                variant="ghost"
                className="w-8 h-8 hover:bg-pink-100 hover:text-pink-600 transition-colors rounded-full"
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
            className="md:hidden p-2 rounded-lg hover:bg-purple-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6 text-purple-600" /> : <Menu className="w-6 h-6 text-purple-600" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-purple-100 bg-white/95 backdrop-blur-md">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block py-3 px-2 text-sm font-medium transition-colors rounded-lg ${
                  location.pathname === link.path
                    ? "text-purple-600 bg-purple-50"
                    : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="flex items-center space-x-4 mt-4 pt-4 border-t border-purple-100">
              <Button 
                size="sm" 
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full"
                asChild
              >
                <a href="tel:9634877767">
                  <Phone className="w-4 h-4 mr-2" />
                  Call
                </a>
              </Button>
              
              <Button 
                size="sm" 
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full"
                onClick={handleWhatsApp}
              >
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
