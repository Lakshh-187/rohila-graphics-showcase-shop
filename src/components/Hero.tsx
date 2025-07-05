
import { Search, MapPin, Star, Phone, Mail } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const businessImages = [
  "https://images.unsplash.com/photo-1586243287039-23f4c8e2e7ab?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
];

export const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % businessImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    { title: "Business Cards", image: "https://images.unsplash.com/photo-1586243287039-23f4c8e2e7ab?w=300&h=200&fit=crop", popular: true },
    { title: "Banner Printing", image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop", popular: false },
    { title: "Wedding Cards", image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=300&h=200&fit=crop", popular: true },
    { title: "Digital Printing", image: "https://images.unsplash.com/photo-1534237710431-e2fc698436d0?w=300&h=200&fit=crop", popular: false },
    { title: "Photo Printing", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&h=200&fit=crop", popular: false },
    { title: "Flex Printing", image: "https://images.unsplash.com/photo-1516962126636-27ad087061cc?w=300&h=200&fit=crop", popular: true },
  ];

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'm interested in your printing services. Can you help me with a quote?");
    window.open(`https://wa.me/919634877767?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-red-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold gradient-text">Rohila Graphics</h1>
              <div className="flex items-center text-sm text-gray-600">
                <MapPin className="w-4 h-4 mr-1" />
                <span>Nakur, Saharanpur</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button size="sm" variant="outline" asChild>
                <a href="tel:9634877767">
                  <Phone className="w-4 h-4 mr-1" />
                  Call
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="container mx-auto px-4 py-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search for printing services..."
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white shadow-sm"
          />
        </div>
      </div>

      {/* Hero Banner */}
      <div className="container mx-auto px-4 mb-6">
        <Card className="relative h-48 md:h-64 overflow-hidden rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-red-600">
          <div className="absolute inset-0 bg-black/20"></div>
          <img 
            src={businessImages[currentImage]} 
            alt="Rohila Graphics Services" 
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
          />
          <div className="relative z-10 p-6 md:p-8 text-white h-full flex flex-col justify-center">
            <div className="max-w-md">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Premium Printing Solutions
              </h2>
              <p className="text-sm md:text-base opacity-90 mb-4">
                Professional quality prints for all your business needs
              </p>
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center">
                  <Star className="w-4 h-4 mr-1 fill-yellow-400 text-yellow-400" />
                  <span>4.8 Rating</span>
                </div>
                <div>500+ Happy Clients</div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 mb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-800">What are you looking for?</h3>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => navigate('/samples')}
            className="text-purple-600 hover:text-purple-700"
          >
            View All
          </Button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="relative overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group"
              onClick={() => navigate('/samples')}
            >
              {service.popular && (
                <div className="absolute top-2 right-2 z-10">
                  <span className="bg-gradient-to-r from-pink-500 to-red-500 text-white text-xs px-2 py-1 rounded-full">
                    Popular
                  </span>
                </div>
              )}
              <div className="aspect-square overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-3">
                <h4 className="font-medium text-sm text-center text-gray-800">
                  {service.title}
                </h4>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Contact Cards */}
      <div className="container mx-auto px-4 mb-8">
        <div className="grid md:grid-cols-2 gap-4">
          <Card className="p-4 bg-gradient-to-r from-green-500 to-green-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold mb-1">Quick Order via WhatsApp</h4>
                <p className="text-sm opacity-90">Get instant quotes and place orders</p>
              </div>
              <Button 
                onClick={handleWhatsApp}
                className="bg-white text-green-600 hover:bg-gray-100"
              >
                Chat Now
              </Button>
            </div>
          </Card>

          <Card className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold mb-1">Call for Custom Orders</h4>
                <p className="text-sm opacity-90">Speak with our design experts</p>
              </div>
              <Button asChild className="bg-white text-blue-600 hover:bg-gray-100">
                <a href="tel:9634877767">Call Now</a>
              </Button>
            </div>
          </Card>
        </div>
      </div>

      {/* Features */}
      <div className="container mx-auto px-4 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <Star className="w-6 h-6 text-purple-600" />
            </div>
            <h5 className="font-medium text-sm">Premium Quality</h5>
          </div>
          <div className="text-center p-4">
            <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <Phone className="w-6 h-6 text-pink-600" />
            </div>
            <h5 className="font-medium text-sm">24/7 Support</h5>
          </div>
          <div className="text-center p-4">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <Mail className="w-6 h-6 text-red-600" />
            </div>
            <h5 className="font-medium text-sm">Fast Delivery</h5>
          </div>
          <div className="text-center p-4">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <MapPin className="w-6 h-6 text-purple-600" />
            </div>
            <h5 className="font-medium text-sm">Local Service</h5>
          </div>
        </div>
      </div>
    </div>
  );
};
