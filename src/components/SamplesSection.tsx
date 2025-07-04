
import { Link } from "react-router-dom";
import { ArrowRight, Download, Eye, Palette } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const SamplesSection = () => {
  const featuredSamples = [
    {
      id: 1,
      title: "Business Card Collection",
      category: "Business Cards",
      thumbnail: "https://images.unsplash.com/photo-1586243287039-23f4c8e2e7ab?w=400&h=300&fit=crop",
      designs: 25,
      popular: true
    },
    {
      id: 2,
      title: "Wedding Invitation Suite",
      category: "Wedding",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      designs: 30,
      popular: true
    },
    {
      id: 3,
      title: "Corporate Brochures",
      category: "Brochures",
      thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      designs: 20
    },
    {
      id: 4,
      title: "Event Banners",
      category: "Banners",
      thumbnail: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop",
      designs: 18
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-red-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-red-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Palette className="w-8 h-8 text-purple-600 mr-3" />
            <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1">
              Design Gallery
            </Badge>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent mb-6">
            Explore Our Design Samples
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Browse through our extensive collection of professional design templates. 
            Get inspired and find the perfect style for your project.
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <Link to="/samples">
              View All Samples
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredSamples.map((sample) => (
            <Card key={sample.id} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0 overflow-hidden">
              <div className="relative">
                <img 
                  src={sample.thumbnail} 
                  alt={sample.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {sample.popular && (
                  <Badge className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-pink-500 text-white">
                    Popular
                  </Badge>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button size="sm" variant="secondary" className="backdrop-blur-md">
                    <Eye className="w-4 h-4 mr-1" />
                    Preview
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2 text-gray-800">{sample.title}</h3>
                <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                  <Badge variant="outline" className="border-purple-200 text-purple-700">
                    {sample.category}
                  </Badge>
                  <span className="font-medium">{sample.designs} designs</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-4 bg-white/60 backdrop-blur-md rounded-full px-8 py-4 shadow-lg">
            <Download className="w-6 h-6 text-purple-600" />
            <span className="text-gray-700 font-medium">40+ E-books Available</span>
            <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
            <span className="text-gray-700 font-medium">Free Downloads</span>
          </div>
        </div>
      </div>
    </section>
  );
};
