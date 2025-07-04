
import { Instagram, Facebook, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FloatingSocials = () => {
  const socials = [
    {
      icon: Instagram,
      href: "https://instagram.com/ROHILAGRAPHICSNAKUR",
      color: "bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600",
      label: "Instagram"
    },
    {
      icon: Facebook,
      href: "https://facebook.com/RohilaGraphics",
      color: "bg-blue-600 hover:bg-blue-700",
      label: "Facebook"
    },
    {
      icon: Phone,
      href: "tel:9634877767",
      color: "bg-green-600 hover:bg-green-700",
      label: "Call Now"
    },
    {
      icon: Mail,
      href: "mailto:rohilagraphicsnakur@gmail.com",
      color: "bg-red-600 hover:bg-red-700",
      label: "Email"
    }
  ];

  return (
    <>
      {/* Left side floating socials */}
      <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 space-y-3">
        {socials.map((social, index) => (
          <Button
            key={index}
            size="icon"
            className={`${social.color} text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 w-12 h-12 rounded-full animate-fade-in`}
            style={{ animationDelay: `${index * 100}ms` }}
            asChild
          >
            <a 
              href={social.href} 
              target={social.href.startsWith('http') ? '_blank' : undefined}
              rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              title={social.label}
            >
              <social.icon className="w-5 h-5" />
            </a>
          </Button>
        ))}
      </div>

      {/* Right side floating socials */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 space-y-3">
        {socials.slice().reverse().map((social, index) => (
          <Button
            key={index}
            size="icon"
            className={`${social.color} text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 w-12 h-12 rounded-full animate-fade-in`}
            style={{ animationDelay: `${index * 100 + 400}ms` }}
            asChild
          >
            <a 
              href={social.href} 
              target={social.href.startsWith('http') ? '_blank' : undefined}
              rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              title={social.label}
            >
              <social.icon className="w-5 h-5" />
            </a>
          </Button>
        ))}
      </div>
    </>
  );
};
