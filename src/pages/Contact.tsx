
import { Phone, Mail, MapPin, MessageCircle, Instagram } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'd like to get in touch regarding your printing services.");
    window.open(`https://wa.me/919634877767?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-blue-900 via-blue-800 to-slate-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Get in touch with us for all your printing needs. We're here to help bring your ideas to life.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center p-8 hover:shadow-xl transition-shadow">
              <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">Direct phone support</p>
              <Button asChild>
                <a href="tel:9634877767">9634877767</a>
              </Button>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-shadow">
              <MessageCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
              <p className="text-gray-600 mb-4">Chat with us instantly</p>
              <Button onClick={handleWhatsApp} className="bg-green-600 hover:bg-green-700">
                Message Now
              </Button>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-shadow">
              <Instagram className="w-12 h-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Instagram</h3>
              <p className="text-gray-600 mb-4">Follow our work</p>
              <Button asChild className="bg-gradient-to-r from-purple-500 to-pink-500">
                <a 
                  href="https://instagram.com/ROHILAGRAPHICSNAKUR" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Follow Us
                </a>
              </Button>
            </Card>
          </div>

          <div className="mt-16 max-w-2xl mx-auto">
            <Card className="p-8">
              <div className="text-center mb-8">
                <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Visit Our Shop</h3>
                <p className="text-lg text-gray-600">Nakur, Saharanpur</p>
                <p className="text-gray-600">Uttar Pradesh, India</p>
              </div>
              
              <div className="text-center">
                <Mail className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <p className="text-lg">rohilagraphics@gmail.com</p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
