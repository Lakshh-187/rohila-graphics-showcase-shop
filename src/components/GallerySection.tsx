
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Printing Equipment", "Design Studio", "Digital Prints", "Banners", "Business Cards"];

  const galleryItems = [
    { id: 1, category: "Printing Equipment", image: "/lovable-uploads/01c42ca6-fdb7-4e02-b3a7-3e1ed9d8a233.png", title: "Large Format Printing Machine" },
    { id: 2, category: "Design Studio", image: "/lovable-uploads/c528929b-f4c6-4679-8642-30d2dc35080a.png", title: "Creative Design Workspace" },
    { id: 3, category: "Digital Prints", image: "/lovable-uploads/3aa23568-9de2-4000-a7aa-994869878045.png", title: "High Quality Digital Prints" },
    { id: 4, category: "Printing Equipment", image: "/lovable-uploads/4ca38484-ba19-47b8-938b-4f26ca1eec3a.png", title: "Professional Printing Setup" },
    { id: 5, category: "Design Studio", image: "/lovable-uploads/78ac59f3-3c1e-4e96-8da3-e5efea679825.png", title: "Modern Design Studio" },
    { id: 6, category: "Banners", image: "/lovable-uploads/0da165e7-bfe5-42e4-89de-4a5c597feece.png", title: "Custom Banner Solutions" },
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
