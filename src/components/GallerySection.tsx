
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Business Cards", "Banners", "Brochures", "Wedding", "Digital"];

  const galleryItems = [
    { id: 1, category: "Business Cards", image: "https://images.unsplash.com/photo-1586243287039-23f4c8e2e7ab?w=400&h=300&fit=crop", title: "Modern Business Cards" },
    { id: 2, category: "Banners", image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop", title: "Event Banners" },
    { id: 3, category: "Brochures", image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop", title: "Corporate Brochures" },
    { id: 4, category: "Wedding", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop", title: "Wedding Invitations" },
    { id: 5, category: "Digital", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop", title: "Digital Prints" },
    { id: 6, category: "Business Cards", image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop", title: "Professional Cards" },
    { id: 7, category: "Banners", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop", title: "Promotional Banners" },
    { id: 8, category: "Brochures", image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop", title: "Product Catalogs" },
    { id: 9, category: "Wedding", image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=300&fit=crop", title: "Save the Date" },
    { id: 10, category: "Digital", image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop", title: "Large Format" },
    { id: 11, category: "Business Cards", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop", title: "Creative Designs" },
    { id: 12, category: "Banners", image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop", title: "Store Banners" }
  ];

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Our Work Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Browse through our extensive portfolio of completed projects and see the quality we deliver.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <Card key={item.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center">
                  <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <Badge variant="secondary">{item.category}</Badge>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
