
import { useState } from "react";
import { Download, Eye, Filter } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface SampleEbook {
  id: number;
  title: string;
  category: string;
  thumbnail: string;
  pages: number;
  downloadUrl: string;
  previewUrl: string;
  popular?: boolean;
}

const Samples = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Business Cards", "Brochures", "Banners", "Flyers", "Posters", "Wedding", "Corporate"];

  const sampleEbooks: SampleEbook[] = [
    { id: 1, title: "Modern Business Card Designs", category: "Business Cards", thumbnail: "https://images.unsplash.com/photo-1586243287039-23f4c8e2e7ab?w=300&h=400&fit=crop", pages: 12, downloadUrl: "#", previewUrl: "#", popular: true },
    { id: 2, title: "Corporate Brochure Templates", category: "Brochures", thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=400&fit=crop", pages: 24, downloadUrl: "#", previewUrl: "#" },
    { id: 3, title: "Event Banner Collection", category: "Banners", thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=400&fit=crop", pages: 18, downloadUrl: "#", previewUrl: "#", popular: true },
    { id: 4, title: "Restaurant Flyer Designs", category: "Flyers", thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=400&fit=crop", pages: 15, downloadUrl: "#", previewUrl: "#" },
    { id: 5, title: "Wedding Invitation Suite", category: "Wedding", thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=400&fit=crop", pages: 20, downloadUrl: "#", previewUrl: "#" },
    { id: 6, title: "Product Poster Templates", category: "Posters", thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=400&fit=crop", pages: 16, downloadUrl: "#", previewUrl: "#" },
    { id: 7, title: "Minimalist Business Cards", category: "Business Cards", thumbnail: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=300&h=400&fit=crop", pages: 10, downloadUrl: "#", previewUrl: "#" },
    { id: 8, title: "Tech Company Brochures", category: "Brochures", thumbnail: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=300&h=400&fit=crop", pages: 22, downloadUrl: "#", previewUrl: "#" },
    { id: 9, title: "Festival Banner Designs", category: "Banners", thumbnail: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=300&h=400&fit=crop", pages: 14, downloadUrl: "#", previewUrl: "#" },
    { id: 10, title: "Food & Beverage Flyers", category: "Flyers", thumbnail: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300&h=400&fit=crop", pages: 18, downloadUrl: "#", previewUrl: "#" },
    { id: 11, title: "Corporate Identity Pack", category: "Corporate", thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=400&fit=crop", pages: 28, downloadUrl: "#", previewUrl: "#", popular: true },
    { id: 12, title: "Luxury Wedding Cards", category: "Wedding", thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=400&fit=crop", pages: 25, downloadUrl: "#", previewUrl: "#" },
    { id: 13, title: "Real Estate Flyers", category: "Flyers", thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=400&fit=crop", pages: 12, downloadUrl: "#", previewUrl: "#" },
    { id: 14, title: "Concert Poster Collection", category: "Posters", thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=400&fit=crop", pages: 20, downloadUrl: "#", previewUrl: "#" },
    { id: 15, title: "Medical Brochure Templates", category: "Brochures", thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=400&fit=crop", pages: 16, downloadUrl: "#", previewUrl: "#" },
    { id: 16, title: "Fashion Banner Designs", category: "Banners", thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=400&fit=crop", pages: 14, downloadUrl: "#", previewUrl: "#" },
    { id: 17, title: "Professional Business Cards", category: "Business Cards", thumbnail: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=300&h=400&fit=crop", pages: 18, downloadUrl: "#", previewUrl: "#" },
    { id: 18, title: "Educational Flyer Pack", category: "Flyers", thumbnail: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=300&h=400&fit=crop", pages: 22, downloadUrl: "#", previewUrl: "#" },
    { id: 19, title: "Startup Poster Templates", category: "Posters", thumbnail: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=300&h=400&fit=crop", pages: 15, downloadUrl: "#", previewUrl: "#" },
    { id: 20, title: "Traditional Wedding Suite", category: "Wedding", thumbnail: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300&h=400&fit=crop", pages: 30, downloadUrl: "#", previewUrl: "#" },
    { id: 21, title: "Creative Business Cards", category: "Business Cards", thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=400&fit=crop", pages: 16, downloadUrl: "#", previewUrl: "#" },
    { id: 22, title: "Healthcare Brochures", category: "Brochures", thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=400&fit=crop", pages: 20, downloadUrl: "#", previewUrl: "#" },
    { id: 23, title: "Sports Banner Collection", category: "Banners", thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=400&fit=crop", pages: 12, downloadUrl: "#", previewUrl: "#" },
    { id: 24, title: "Gym & Fitness Flyers", category: "Flyers", thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=400&fit=crop", pages: 14, downloadUrl: "#", previewUrl: "#" },
    { id: 25, title: "Art Exhibition Posters", category: "Posters", thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=400&fit=crop", pages: 18, downloadUrl: "#", previewUrl: "#" },
    { id: 26, title: "Corporate Annual Report", category: "Corporate", thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=400&fit=crop", pages: 32, downloadUrl: "#", previewUrl: "#" },
    { id: 27, title: "Elegant Business Cards", category: "Business Cards", thumbnail: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=300&h=400&fit=crop", pages: 12, downloadUrl: "#", previewUrl: "#" },
    { id: 28, title: "Travel Brochure Pack", category: "Brochures", thumbnail: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=300&h=400&fit=crop", pages: 24, downloadUrl: "#", previewUrl: "#" },
    { id: 29, title: "Christmas Banner Designs", category: "Banners", thumbnail: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=300&h=400&fit=crop", pages: 16, downloadUrl: "#", previewUrl: "#" },
    { id: 30, title: "Beauty Salon Flyers", category: "Flyers", thumbnail: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300&h=400&fit=crop", pages: 14, downloadUrl: "#", previewUrl: "#" },
    { id: 31, title: "Movie Poster Templates", category: "Posters", thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=400&fit=crop", pages: 20, downloadUrl: "#", previewUrl: "#" },
    { id: 32, title: "Vintage Wedding Collection", category: "Wedding", thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=400&fit=crop", pages: 26, downloadUrl: "#", previewUrl: "#" },
    { id: 33, title: "Digital Business Cards", category: "Business Cards", thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=400&fit=crop", pages: 10, downloadUrl: "#", previewUrl: "#" },
    { id: 34, title: "Insurance Brochures", category: "Brochures", thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=400&fit=crop", pages: 18, downloadUrl: "#", previewUrl: "#" },
    { id: 35, title: "Sale Banner Collection", category: "Banners", thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=400&fit=crop", pages: 15, downloadUrl: "#", previewUrl: "#" },
    { id: 36, title: "Club Event Flyers", category: "Flyers", thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=400&fit=crop", pages: 12, downloadUrl: "#", previewUrl: "#" },
    { id: 37, title: "Motivational Posters", category: "Posters", thumbnail: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=300&h=400&fit=crop", pages: 22, downloadUrl: "#", previewUrl: "#" },
    { id: 38, title: "Brand Identity Manual", category: "Corporate", thumbnail: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=300&h=400&fit=crop", pages: 40, downloadUrl: "#", previewUrl: "#" },
    { id: 39, title: "Modern Wedding Cards", category: "Wedding", thumbnail: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=300&h=400&fit=crop", pages: 28, downloadUrl: "#", previewUrl: "#" },
    { id: 40, title: "Complete Design Pack", category: "Corporate", thumbnail: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300&h=400&fit=crop", pages: 50, downloadUrl: "#", previewUrl: "#", popular: true }
  ];

  const filteredEbooks = selectedCategory === "All" 
    ? sampleEbooks 
    : sampleEbooks.filter(ebook => ebook.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-blue-900 via-blue-800 to-slate-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Design Samples</h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Explore our extensive collection of professionally designed templates. 
            Download e-books with sample designs to inspire your next project.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white/50 backdrop-blur-sm sticky top-16 z-40">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 overflow-x-auto">
            <Filter className="w-5 h-5 text-gray-600 flex-shrink-0" />
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="whitespace-nowrap"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* E-books Grid */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredEbooks.map((ebook) => (
              <Card key={ebook.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <div className="relative">
                  <img 
                    src={ebook.thumbnail} 
                    alt={ebook.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {ebook.popular && (
                    <Badge className="absolute top-3 left-3 bg-red-500">
                      Popular
                    </Badge>
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="flex gap-2">
                      <Button size="sm" variant="secondary">
                        <Eye className="w-4 h-4 mr-1" />
                        Preview
                      </Button>
                      <Button size="sm">
                        <Download className="w-4 h-4 mr-1" />
                        Download
                      </Button>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg mb-2 line-clamp-2">{ebook.title}</h3>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                    <Badge variant="outline">{ebook.category}</Badge>
                    <span>{ebook.pages} pages</span>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Eye className="w-4 h-4 mr-1" />
                      Preview
                    </Button>
                    <Button size="sm" className="flex-1">
                      <Download className="w-4 h-4 mr-1" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Samples;
