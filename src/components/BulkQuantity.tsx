
import { MessageCircle, Package, Zap, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const bulkPricing = [
  {
    icon: Package,
    title: "Small Bulk Orders",
    quantity: "100-500 pieces",
    discount: "10% OFF",
    description: "Perfect for small businesses and events",
    color: "bg-blue-500"
  },
  {
    icon: Zap,
    title: "Medium Bulk Orders", 
    quantity: "500-1000 pieces",
    discount: "15% OFF",
    description: "Great for marketing campaigns",
    color: "bg-green-500"
  },
  {
    icon: Award,
    title: "Large Bulk Orders",
    quantity: "1000+ pieces", 
    discount: "20% OFF",
    description: "Best value for corporations",
    color: "bg-purple-500",
    popular: true
  }
];

export const BulkQuantity = () => {
  const handleWhatsApp = (orderType: string) => {
    const message = encodeURIComponent(`Hi! I'm interested in ${orderType} pricing. Can you provide me with a detailed quote?`);
    window.open(`https://wa.me/919634877767?text=${message}`, '_blank');
  };

  return (
    <section className="py-16 px-4 md:px-6 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Bulk Order Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Save more with larger quantities! Get special pricing for bulk orders with faster turnaround times.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {bulkPricing.map((item, index) => (
            <Card key={index} className={`relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${item.popular ? 'ring-2 ring-purple-500' : ''}`}>
              {item.popular && (
                <div className="absolute top-4 right-4">
                  <Badge className="bg-purple-500 text-white">Most Popular</Badge>
                </div>
              )}
              
              <CardHeader className="text-center">
                <div className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold">{item.title}</CardTitle>
                <div className="text-2xl font-bold text-green-600">{item.discount}</div>
                <div className="text-sm text-gray-500">{item.quantity}</div>
              </CardHeader>

              <CardContent className="text-center">
                <p className="text-gray-600 mb-6">{item.description}</p>
                <Button 
                  onClick={() => handleWhatsApp(item.title)}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Get Bulk Quote
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Need Custom Bulk Pricing?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            For orders above 2000 pieces or special requirements, contact us for personalized pricing. 
            We offer competitive rates for large-scale projects.
          </p>
          <Button 
            onClick={() => handleWhatsApp("Custom Bulk Order")}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-lg text-lg"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Contact for Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
};
