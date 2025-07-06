
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import { Card } from "@/components/ui/card";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Rohila Graphics</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted partner for all printing needs. We deliver quality prints with professional service and timely delivery.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-400" />
                <span>9634877767, 9720688000</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>rohilagraphicsnakur@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>Near SBI Main Branch, Tehsil Road, Nakur</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <div className="space-y-3 text-gray-300">
              <a href="/" className="block hover:text-blue-400 transition-colors">Home</a>
              <a href="/samples" className="block hover:text-blue-400 transition-colors">Samples</a>
              <a href="/contact" className="block hover:text-blue-400 transition-colors">Contact</a>
              <a href="/payment" className="block hover:text-blue-400 transition-colors">Payment Options</a>
              <a href="/testimonial" className="block hover:text-blue-400 transition-colors">Reviews</a>
              <a href="/channel-partner" className="block hover:text-blue-400 transition-colors">Channel Partner</a>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-6">Follow Us</h3>
            <div className="space-y-4">
              <a 
                href="https://instagram.com/ROHILAGRAPHICSNAKUR" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-pink-400 transition-colors"
              >
                <Instagram className="w-5 h-5" />
                @ROHILAGRAPHICSNAKUR
              </a>
              <a 
                href="#" 
                className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Facebook className="w-5 h-5" />
                Rohila Graphics
              </a>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-6 text-center">Find Us Here</h3>
          <Card className="overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d110666.1160262173!2d77.22089094360155!3d29.912799987551985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x390ef3328135f8b3%3A0xaab21615f720b928!2sNakur%2C%20Uttar%20Pradesh%20247342!3m2!1d29.912825599999998!2d77.3032923!5e0!3m2!1sen!2sin!4v1751768837711!5m2!1sen!2sin" 
              width="100%" 
              height="300" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </Card>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-gray-800">
          <p className="text-gray-400">
            © 2024 Rohila Graphics. All rights reserved. | Nakur, Saharanpur
          </p>
        </div>
      </div>
    </footer>
  );
};
