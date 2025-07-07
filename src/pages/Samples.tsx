
import { useState, useRef } from "react";
import { ArrowRight, Download, Eye, Palette, ChevronLeft, ChevronRight, Filter } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SampleCard } from "@/components/SampleCard";

const sampleCategories = [
  {
    title: "Business Cards",
    items: [
      { 
        id: 1, 
        title: "Visiting Card Collection", 
        designs: 50, 
        thumbnail: "https://images.unsplash.com/photo-1586243287039-23f4c8e2e7ab?w=300&h=200&fit=crop", 
        popular: true, 
        discount: "Premium Quality",
        driveLink: "https://drive.google.com/drive/folders/1E58lbgWMGxRaLlKtwihC3ELPCeRq_MCB?usp=sharing"
      },
    ]
  },
  {
    title: "Letterheads & Stationery",
    items: [
      { 
        id: 2, 
        title: "Professional Letterheads", 
        designs: 30, 
        thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop", 
        popular: true,
        driveLink: "https://drive.google.com/drive/folders/1BF_b_SvG1s7Ajg6D73L6lY7bDPG1uCjZ?usp=sharing"
      },
    ]
  },
  {
    title: "Bill Books & Invoices",
    items: [
      { 
        id: 3, 
        title: "Custom Bill Books", 
        designs: 25, 
        thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop", 
        discount: "GST Ready",
        driveLink: "https://drive.google.com/drive/folders/1oyyum2RxHBZ_rAFO5UKN-jtJwkf_Pjd1?usp=sharing"
      },
    ]
  },
  {
    title: "Banners & Hoardings",
    items: [
      { 
        id: 4, 
        title: "Banner & Board Collection", 
        designs: 40, 
        thumbnail: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=300&h=200&fit=crop", 
        popular: true, 
        discount: "All Sizes",
        driveLink: "https://drive.google.com/drive/folders/1RXAMLI_L4xQJHhFwreOWJkq-ZW8fbmQI?usp=sharing"
      },
    ]
  },
  {
    title: "Wallpapers & Decor",
    items: [
      { 
        id: 5, 
        title: "Custom Wallpapers", 
        designs: 35, 
        thumbnail: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=300&h=200&fit=crop", 
        discount: "HD Quality",
        driveLink: "https://drive.google.com/drive/folders/1ExcQVNT757raRO-9OJVqRvRbnXRWTwHD?usp=sharing"
      },
    ]
  },
  {
    title: "Wedding Invitations",
    items: [
      { id: 6, title: "Traditional Wedding Cards", designs: 30, thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300&h=200&fit=crop", comingSoon: true },
      { id: 7, title: "Modern Wedding Invites", designs: 25, thumbnail: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=300&h=200&fit=crop", comingSoon: true },
    ]
  },
  {
    title: "Brochures & Flyers",
    items: [
      { id: 8, title: "Corporate Brochures", designs: 20, thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop", comingSoon: true },
      { id: 9, title: "Event Flyers", designs: 35, thumbnail: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=200&fit=crop", comingSoon: true },
    ]
  },
  {
    title: "Stickers & Labels",
    items: [
      { id: 10, title: "Product Stickers", designs: 40, thumbnail: "https://images.unsplash.com/photo-1541367777708-7905fe3296c0?w=300&h=200&fit=crop", comingSoon: true },
      { id: 11, title: "Custom Labels", designs: 35, thumbnail: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=300&h=200&fit=crop", comingSoon: true },
    ]
  },
  {
    title: "T-Shirt Designs",
    items: [
      { id: 12, title: "Custom T-Shirts", designs: 32, thumbnail: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=200&fit=crop", comingSoon: true },
      { id: 13, title: "Corporate T-Shirts", designs: 20, thumbnail: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=200&fit=crop", comingSoon: true },
    ]
  }
];

const ScrollableSection = ({ title, items, discount }: { title: string; items: any[]; discount?: string }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <h3 className="text-lg md:text-xl font-bold text-gray-800">{title}</h3>
          {discount && (
            <Badge className="bg-green-500 text-white px-2 py-1 text-xs font-semibold">
              {discount}
            </Badge>
          )}
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            className="h-7 w-7 rounded-full"
            onClick={() => scroll('left')}
          >
            <ChevronLeft className="h-3 w-3" />
          </Button>
          <Button
            variant="outline" 
            size="icon"
            className="h-7 w-7 rounded-full"
            onClick={() => scroll('right')}
          >
            <ChevronRight className="h-3 w-3" />
          </Button>
        </div>
      </div>
      
      <div 
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto scrollbar-hide pb-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {items.map((item) => (
          <SampleCard
            key={item.id}
            id={item.id}
            title={item.title}
            designs={item.designs}
            thumbnail={item.thumbnail}
            popular={item.popular}
            discount={item.discount}
            comingSoon={item.comingSoon}
            driveLink={item.driveLink}
          />
        ))}
      </div>
    </div>
  );
};

const Samples = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const filters = ["All", "Available", "Coming Soon", "Popular"];

  const filteredCategories = sampleCategories.map(category => ({
    ...category,
    items: category.items.filter(item => {
      if (selectedFilter === "All") return true;
      if (selectedFilter === "Available") return !item.comingSoon;
      if (selectedFilter === "Coming Soon") return Boolean(item.comingSoon);
      if (selectedFilter === "Popular") return Boolean(item.popular);
      return true;
    })
  })).filter(category => category.items.length > 0);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Palette className="w-8 h-8 text-purple-600 mr-3" />
            <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1">
              Design Gallery
            </Badge>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent mb-4">
            Design Sample Library
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse our extensive collection of professional design templates with direct access to sample galleries
          </p>
        </div>

        {/* Announcement Banner */}
        <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-xl p-6 mb-8 text-white">
          <h2 className="text-xl md:text-2xl font-bold mb-2">New Sample Collections Available!</h2>
          <p className="text-base opacity-90">Access professional design samples directly from our Google Drive galleries</p>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={selectedFilter === filter ? "default" : "outline"}
              size="sm"
              className={`flex-none ${selectedFilter === filter ? 'bg-purple-600 text-white' : ''}`}
              onClick={() => setSelectedFilter(filter)}
            >
              <Filter className="w-3 h-3 mr-1" />
              {filter}
            </Button>
          ))}
        </div>

        {/* Sample Categories */}
        {filteredCategories.map((category) => (
          <ScrollableSection
            key={category.title}
            title={category.title}
            items={category.items}
            discount={category.title === "Business Cards" ? "Premium Quality" : 
                     category.title === "Banners & Hoardings" ? "All Sizes Available" : undefined}
          />
        ))}

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          <div className="text-center bg-white rounded-lg p-4 shadow-sm">
            <div className="text-2xl font-bold text-purple-600">5</div>
            <div className="text-sm text-gray-600">Categories Available</div>
          </div>
          <div className="text-center bg-white rounded-lg p-4 shadow-sm">
            <div className="text-2xl font-bold text-pink-600">180+</div>
            <div className="text-sm text-gray-600">Sample Designs</div>
          </div>
          <div className="text-center bg-white rounded-lg p-4 shadow-sm">
            <div className="text-2xl font-bold text-red-600">9</div>
            <div className="text-sm text-gray-600">Total Categories</div>
          </div>
          <div className="text-center bg-white rounded-lg p-4 shadow-sm">
            <div className="text-2xl font-bold text-green-600">Free</div>
            <div className="text-sm text-gray-600">Access</div>
          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Samples;
