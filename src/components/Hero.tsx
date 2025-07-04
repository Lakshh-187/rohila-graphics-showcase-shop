
import { Phone, Mail, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 via-blue-800 to-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.05\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
            ROHILA GRAPHICS
          </h1>
          <p className="text-2xl md:text-3xl mb-8 text-blue-200 font-light">
            Premium Printing Solutions for Your Business
          </p>
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-gray-300">
            From flex printing to digital solutions, we deliver quality that speaks for your brand. 
            Professional service with competitive pricing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto animate-scale-in">
          <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6 hover:bg-white/20 transition-all duration-300">
            <Phone className="h-8 w-8 text-blue-300 mb-4 mx-auto" />
            <h3 className="font-semibold mb-2">Call & WhatsApp</h3>
            <p className="text-blue-200">9634877767</p>
            <p className="text-blue-200 text-sm">Other: 9720688000</p>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6 hover:bg-white/20 transition-all duration-300">
            <Mail className="h-8 w-8 text-blue-300 mb-4 mx-auto" />
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-blue-200 text-sm">rohilagraphicsnakur@gmail.com</p>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6 hover:bg-white/20 transition-all duration-300 md:col-span-2 lg:col-span-1">
            <MapPin className="h-8 w-8 text-blue-300 mb-4 mx-auto" />
            <h3 className="font-semibold mb-2">Location</h3>
            <p className="text-blue-200 text-sm">Near SBI Main Branch, Tehsil Road</p>
            <p className="text-blue-200 text-sm">Nakur (Saharanpur) UP-247342</p>
          </Card>
        </div>
      </div>
    </section>
  );
};
