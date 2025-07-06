
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, Star, Users, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const PageRedirectCards = () => {
  const navigate = useNavigate();

  const redirectCards = [
    {
      title: "Payment Options",
      description: "Multiple secure payment methods for your convenience",
      icon: <CreditCard className="w-8 h-8 text-blue-600" />,
      route: "/payment",
      gradient: "from-blue-500 to-purple-600",
      bgColor: "bg-blue-50"
    },
    {
      title: "Customer Reviews",
      description: "See what our satisfied customers say about us",
      icon: <Star className="w-8 h-8 text-yellow-600" />,
      route: "/testimonial",
      gradient: "from-yellow-500 to-orange-600",
      bgColor: "bg-yellow-50"
    },
    {
      title: "Referral Program",
      description: "Earn rewards by referring customers to us",
      icon: <Users className="w-8 h-8 text-green-600" />,
      route: "/channel-partner",
      gradient: "from-green-500 to-teal-600",
      bgColor: "bg-green-50"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent mb-6">
            Explore More Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our additional services designed to make your experience even better
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {redirectCards.map((card, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer ${card.bgColor} border-0 relative overflow-hidden`}
              onClick={() => navigate(card.route)}
            >
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${card.gradient}`}></div>
              
              <CardContent className="pt-8 text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-purple-600 transition-colors">
                  {card.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {card.description}
                </p>
                
                <Button 
                  className={`bg-gradient-to-r ${card.gradient} hover:shadow-lg transform group-hover:scale-105 transition-all duration-300 rounded-full`}
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(card.route);
                  }}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
              
              {/* Decorative elements */}
              <div className={`absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-to-r ${card.gradient} opacity-10 rounded-full group-hover:scale-150 transition-transform duration-500`}></div>
              <div className={`absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-r ${card.gradient} opacity-10 rounded-full group-hover:scale-150 transition-transform duration-500`}></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
