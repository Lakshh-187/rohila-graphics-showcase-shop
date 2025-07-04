
import { ServiceCard } from "./ServiceCard";

const flexPrintingServices = [
  {
    title: "Banner - FL",
    price: "₹10",
    unit: "per sq ft",
    description: "Standard quality banner printing for everyday use",
    negotiable: true
  },
  {
    title: "Black Star Banner",
    price: "₹12",
    unit: "per sq ft", 
    description: "Enhanced quality for better durability",
    negotiable: true
  },
  {
    title: "White Star (220 GSM)",
    price: "₹15",
    unit: "per sq ft",
    description: "Premium quality with excellent finish",
    negotiable: true
  },
  {
    title: "White Star (310 GSM)",
    price: "₹25",
    unit: "per sq ft",
    description: "Heavy duty banner for long-term use",
    negotiable: true
  },
  {
    title: "Back Light (410 GSM)",
    price: "₹35",
    unit: "per sq ft",
    description: "Perfect for illuminated displays",
    negotiable: true
  },
  {
    title: "Retro (440 GSM)",
    price: "₹45",
    unit: "per sq ft",
    description: "Premium heavy-duty banner material",
    negotiable: true
  }
];

const wallpaperServices = [
  {
    title: "Standard Wallpaper",
    price: "₹12-20",
    unit: "per sq ft",
    description: "Available in 3 quality options with pasting included",
    negotiable: true
  },
  {
    title: "Roof Wallpaper",
    price: "₹17-25",
    unit: "per sq ft",
    description: "Specialized wallpaper for ceiling applications",
    negotiable: true
  }
];

const digitalPrintingServices = [
  {
    title: "Vinyl Print",
    price: "₹40",
    unit: "per sq ft",
    description: "High-quality vinyl printing for durability",
    negotiable: true
  },
  {
    title: "One Way Print",
    price: "₹60",
    unit: "per sq ft",
    description: "See-through printing for windows",
    negotiable: true
  },
  {
    title: "Transparent Print",
    price: "₹35",
    unit: "per sq ft",
    description: "Clear printing for glass applications",
    negotiable: true
  },
  {
    title: "Retro Vinyl Print",
    price: "₹50",
    unit: "per sq ft",
    description: "Premium vinyl with retro finish",
    negotiable: true
  }
];

const offsetPrintingServices = [
  {
    title: "Visiting Cards",
    price: "₹500+",
    unit: "for 950-1000 cards",
    description: "Professional business cards in various finishes",
    negotiable: true
  },
  {
    title: "Pamphlets",
    price: "₹1,499+",
    unit: "for 950-1000 pieces",
    description: "Size 8.5x11 inches, full color printing",
    negotiable: true
  },
  {
    title: "Posters",
    price: "₹4,499+",
    unit: "for 950-1000 pieces",
    description: "Size 18x22 inches, high-quality printing",
    negotiable: true
  },
  {
    title: "Letter Heads",
    price: "₹1,599",
    unit: "for 1000 sheets",
    description: "A4 size professional letterheads",
    negotiable: true
  }
];

const boardServices = [
  {
    title: "Advertisement Board",
    price: "₹25-65",
    unit: "per sq ft",
    description: "Custom boards and hoardings, price depends on size and fitting area",
    negotiable: true
  },
  {
    title: "Glow Sign Board",
    price: "₹150-300",
    unit: "per sq ft",
    description: "Illuminated signage, price varies by size and location",
    negotiable: true
  }
];

const digitalPaperServices = [
  {
    title: "Letter Head Paper",
    price: "₹350",
    unit: "for 50 papers (A4)",
    description: "Professional letterhead printing",
    negotiable: true
  },
  {
    title: "Sticker Sheets",
    price: "₹450",
    unit: "for 15 sheets (12x18)",
    description: "Custom sticker printing",
    negotiable: true
  },
  {
    title: "Certificates",
    price: "₹450",
    unit: "for 20 certificates (A4)",
    description: "Professional certificate printing",
    negotiable: true
  }
];

export const ServicesGrid = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete printing solutions with competitive pricing and premium quality. 
            All prices are negotiable for bulk orders.
          </p>
        </div>

        <div className="space-y-16">
          <ServiceSection title="Flex Printing" services={flexPrintingServices} />
          <ServiceSection title="Wallpaper Solutions" services={wallpaperServices} />
          <ServiceSection title="Digital Printing" services={digitalPrintingServices} />
          <ServiceSection title="Offset Printing" services={offsetPrintingServices} />
          <ServiceSection title="Boards & Signage" services={boardServices} />
          <ServiceSection title="Digital Paper Printing" services={digitalPaperServices} />
        </div>
      </div>
    </section>
  );
};

const ServiceSection = ({ title, services }: { title: string; services: any[] }) => {
  return (
    <div className="animate-fade-in">
      <h3 className="text-3xl font-bold text-center mb-10 text-gray-800">{title}</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};
