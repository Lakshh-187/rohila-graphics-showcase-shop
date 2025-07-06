
import { Star, Play, ExternalLink, ThumbsUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Testimonial = () => {
  const reviews = [
    {
      id: 1,
      name: "Rajesh Kumar",
      rating: 5,
      date: "2 weeks ago",
      review: "Excellent service! Got my business cards printed with amazing quality. Very professional work and timely delivery.",
      avatar: "RK"
    },
    {
      id: 2,
      name: "Priya Sharma",
      rating: 5,
      date: "1 month ago",
      review: "Best printing services in Nakur! They handled my wedding invitations perfectly. Highly recommended!",
      avatar: "PS"
    },
    {
      id: 3,
      name: "Amit Singh",
      rating: 4,
      date: "3 weeks ago",
      review: "Good quality prints and reasonable prices. Staff is very helpful and understanding.",
      avatar: "AS"
    },
    {
      id: 4,
      name: "Sunita Devi",
      rating: 5,
      date: "1 week ago",
      review: "Amazing digital printing quality! My banners came out exactly as I wanted. Great job!",
      avatar: "SD"
    }
  ];

  const videoTestimonials = [
    {
      id: 1,
      title: "Happy Customer - Business Cards",
      thumbnail: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop",
      duration: "2:30"
    },
    {
      id: 2,
      title: "Wedding Invitation Review",
      thumbnail: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=300&h=200&fit=crop",
      duration: "1:45"
    },
    {
      id: 3,
      title: "Banner Printing Experience",
      thumbnail: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=300&h=200&fit=crop",
      duration: "3:12"
    }
  ];

  const handleGoogleReview = () => {
    window.open("https://search.google.com/local/writereview?placeid=ChIJsy8xNjJj4TkRKLlyXxUhqyo", '_blank');
  };

  const handleJustdialReview = () => {
    window.open("https://www.justdial.com/Saharanpur/Rohilla-Graphics-Flex-Printing-Near-SBI-Main-Branch-Nakur/9999PX132-X132-131206222610-H8Z4_BZDET", '_blank');
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-blue-900 via-blue-800 to-slate-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Customer Reviews</h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-8">
            See what our satisfied customers have to say about our printing services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={handleGoogleReview} className="bg-green-600 hover:bg-green-700">
              <ExternalLink className="w-4 h-4 mr-2" />
              Write a Google Review
            </Button>
            <Button onClick={handleJustdialReview} className="bg-orange-600 hover:bg-orange-700">
              <ExternalLink className="w-4 h-4 mr-2" />
              Review on Justdial
            </Button>
          </div>
        </div>
      </section>

      {/* Overall Rating */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <Card className="max-w-md mx-auto text-center bg-gradient-to-br from-yellow-50 to-orange-50">
            <CardContent className="pt-8">
              <div className="text-4xl font-bold text-gray-800 mb-2">4.8</div>
              <div className="flex justify-center mb-2">
                {renderStars(5)}
              </div>
              <p className="text-gray-600 mb-4">Based on 50+ reviews</p>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                <ThumbsUp className="w-3 h-3 mr-1" />
                Highly Rated
              </Badge>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Text Reviews */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Customer Reviews</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {reviews.map((review) => (
              <Card key={review.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      {review.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-gray-800">{review.name}</h3>
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                      <div className="flex items-center mb-3">
                        {renderStars(review.rating)}
                      </div>
                      <p className="text-gray-700 leading-relaxed">{review.review}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-12 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Video Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {videoTestimonials.map((video) => (
              <Card key={video.id} className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <CardContent className="pt-4">
                  <h3 className="font-semibold text-gray-800">{video.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12">
        <div className="container mx-auto px-6 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardContent className="pt-8">
              <h3 className="text-2xl font-bold mb-4">Share Your Experience</h3>
              <p className="mb-6 text-blue-100">
                Help others discover our quality printing services by sharing your experience
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={handleGoogleReview} variant="secondary" size="lg">
                  <Star className="w-4 h-4 mr-2" />
                  Google Review
                </Button>
                <Button onClick={handleJustdialReview} variant="secondary" size="lg">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Justdial Review
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
