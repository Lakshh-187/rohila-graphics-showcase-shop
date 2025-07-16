import { Search, MapPin, Star, Phone, Mail } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const businessImages = [
  "/lovable-uploads/cc566479-1e40-44b6-846a-27a9827d8d35.png",
  "/lovable-uploads/5a72f972-2581-4fa9-960a-3ac54e7d17a7.png",
  "/lovable-uploads/586aebe3-4320-41e2-ac62-9150f1049305.png",
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
    { title: "Flex Banner Printing", image: "/lovable-uploads/5e287451-aa72-4d7b-b71e-b6882a28e36a.png", popular: false },
    { title: "Digital Printing", image: "/lovable-uploads/70522788-fd14-40e9-9758-c7707e074864.png", popular: true },
    { title: "Offset Printing", image: "/lovable-uploads/a56a81f0-6086-492f-8bd1a69bf1f0.png", popular: true },
    { title: "Digital Paper Printing", image: "/lovable-uploads/6124f148-3aa0-4758-b1c9-eee61ed37f56.png", popular: false },
    { title: "T-shirt Printing", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop", popular: false },
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
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <div>
              <h1 className="text-lg sm:text-xl font-bold gradient-text">Rohila Graphics</h1>
              <div className="flex items-center text-xs sm:text-sm text-gray-600">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                <span>Nakur, Saharanpur</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button size="sm" variant="outline" asChild className="text-xs sm:text-sm">
                <a href="tel:9634877767">
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                  Call
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section with Business Image */}
      <section className="relative py-8 sm:py-12 lg:py-16 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold">
                  <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
                    Professional
                  </span>
                  <br />
                  <span className="text-gray-800">Printing Solutions</span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
                  From flex banners to premium digital prints - we deliver quality that speaks for your brand
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  onClick={handleWhatsApp}
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-3 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get Quote Now
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => navigate('/samples')}
                  className="border-2 border-purple-500 text-purple-600 hover:bg-purple-50 px-8 py-3 text-lg rounded-xl transition-all duration-300"
                >
                  View Portfolio
                </Button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Star className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />
                  </div>
                  <p className="text-sm sm:text-base font-semibold text-gray-800">Premium Quality</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-pink-600" />
                  </div>
                  <p className="text-sm sm:text-base font-semibold text-gray-800">24/7 Support</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-red-600" />
                  </div>
                  <p className="text-sm sm:text-base font-semibold text-gray-800">Fast Delivery</p>
                </div>
              </div>
            </div>

            {/* Right Image Carousel */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src={businessImages[currentImage]} 
                  alt="Rohila Graphics Store"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-lg sm:text-xl font-bold mb-1">Rohila Graphics</h3>
                  <p className="text-sm sm:text-base opacity-90">Digital Printing & Large Format Solutions</p>
                </div>
              </div>
              
              {/* Carousel Indicators */}
              <div className="flex justify-center mt-4 space-x-2">
                {businessImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      currentImage === index ? 'bg-purple-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                GSTIN: 09AXGPK8237N1ZS
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <div className="container mx-auto px-4 py-4 sm:py-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
          <input
            type="text"
            placeholder="Search for printing services..."
            className="w-full pl-8 sm:pl-10 pr-4 py-2 sm:py-3 text-sm sm:text-base rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white shadow-sm"
          />
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 mb-6 sm:mb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-base sm:text-lg font-semibold text-gray-800">What are you looking for?</h3>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => navigate('/samples')}
            className="text-purple-600 hover:text-purple-700 text-xs sm:text-sm"
          >
            View All
          </Button>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
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
              <div className="p-2 sm:p-3">
                <h4 className="font-medium text-xs sm:text-sm text-center text-gray-800 leading-tight">
                  {service.title}
                </h4>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Contact Cards */}
      <div className="container mx-auto px-4 mb-6 sm:mb-8">
        <div className="grid md:grid-cols-2 gap-3 sm:gap-4">
          <Card className="p-3 sm:p-4 bg-gradient-to-r from-green-500 to-green-600 text-white">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex-1">
                <h4 className="font-semibold mb-1 text-sm sm:text-base">Quick Order via WhatsApp</h4>
                <p className="text-xs sm:text-sm opacity-90">Get instant quotes and place orders</p>
              </div>
              <Button 
                onClick={handleWhatsApp}
                className="bg-white text-green-600 hover:bg-gray-100 text-xs sm:text-sm px-3 sm:px-4 py-2 w-full sm:w-auto"
              >
                Chat Now
              </Button>
            </div>
          </Card>

          <Card className="p-3 sm:p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex-1">
                <h4 className="font-semibold mb-1 text-sm sm:text-base">Call for Custom Orders</h4>
                <p className="text-xs sm:text-sm opacity-90">Speak with our design experts</p>
              </div>
              <Button asChild className="bg-white text-blue-600 hover:bg-gray-100 text-xs sm:text-sm px-3 sm:px-4 py-2 w-full sm:w-auto">
                <a href="tel:9634877767">Call Now</a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
