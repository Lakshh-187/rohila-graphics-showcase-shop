
import { Users, Percent, TrendingUp, HandshakeIcon, Award, FileText, Phone, MessageCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ChannelPartner = () => {
  const rewardTiers = [
    {
      tier: "Bronze Referrer",
      reward: "10%",
      color: "from-amber-400 to-orange-500",
      icon: "🥉",
      description: "Perfect for occasional referrals",
      example: "Refer a friend's wedding card printing - earn ₹500 on a ₹5,000 order"
    },
    {
      tier: "Silver Referrer", 
      reward: "15%",
      color: "from-gray-400 to-gray-600",
      icon: "🥈",
      description: "Great for regular referrals",
      example: "Help a local shop with banner printing - earn ₹1,500 on a ₹10,000 order"
    },
    {
      tier: "Gold Referrer",
      reward: "20%",
      color: "from-yellow-400 to-yellow-600",
      icon: "🥇",
      description: "Best for business partnerships",
      example: "Connect an event company for bulk printing - earn ₹5,000 on a ₹25,000 order"
    }
  ];

  const howItWorksSteps = [
    {
      step: "1. Find a Customer",
      description: "Know someone who needs printing services? Great! This could be friends, family, local businesses, or event organizers.",
      example: "Your friend mentions they need wedding cards printed"
    },
    {
      step: "2. Connect with Us",
      description: "Contact us via phone or WhatsApp and share the customer's details. We'll handle the rest professionally.",
      example: "Call us at 9634877767 and say 'Hi, my friend Raj needs 500 wedding cards printed'"
    },
    {
      step: "3. We Serve the Customer",
      description: "Our team will directly contact the customer, provide quotes, complete the work with quality service.",
      example: "We contact Raj, design beautiful cards, print them perfectly, and deliver on time"
    },
    {
      step: "4. You Get Rewarded",
      description: "Once the order is completed and payment received, you get your reward percentage as per your tier.",
      example: "Raj's order was ₹8,000. You earn 15% = ₹1,200 as your reward!"
    }
  ];

  const referralExamples = [
    {
      scenario: "Wedding Season Referral",
      description: "You know 3 families planning weddings in your area",
      potential: "Each spends ₹12,000 on invitations → You earn ₹1,800 × 3 = ₹5,400"
    },
    {
      scenario: "Business Network",
      description: "Local shops in your area need banners and visiting cards", 
      potential: "5 shops × ₹6,000 average → You earn ₹900 × 5 = ₹4,500"
    },
    {
      scenario: "Event Organizer Contact",
      description: "Connect us with someone organizing corporate events",
      potential: "One big event worth ₹50,000 → You earn 20% = ₹10,000"
    }
  ];

  const contactMethods = [
    {
      method: "WhatsApp (Preferred)",
      contact: "9634877767",
      description: "Send customer details via WhatsApp - fastest response"
    },
    {
      method: "Phone Call",
      contact: "9634877767 / 9720688000", 
      description: "Direct call to discuss customer requirements"
    },
    {
      method: "Visit Our Shop",
      contact: "Near SBI Main Branch, Nakur",
      description: "Bring customers directly to our location"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-green-700 via-blue-700 to-purple-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center mb-6">
            <HandshakeIcon className="w-12 h-12 mr-4" />
            <h1 className="text-5xl font-bold">Referral Rewards Program</h1>
          </div>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-8">
            Know someone who needs quality printing? Connect them with us and earn attractive rewards! 
            It's that simple - refer customers and get paid for every successful order.
          </p>
          <Badge className="bg-green-500 text-white text-lg px-6 py-2">
            <TrendingUp className="w-4 h-4 mr-2" />
            Earn up to 20% on Every Referral
          </Badge>
        </div>
      </section>

      {/* Reward Structure */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Reward Structure</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The more you refer, the more you earn! Our tiered reward system recognizes your contribution.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {rewardTiers.map((tier, index) => (
              <Card key={index} className="relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${tier.color}`}></div>
                <CardHeader className="text-center pb-4">
                  <div className="text-4xl mb-3">{tier.icon}</div>
                  <CardTitle className="text-2xl text-gray-800">{tier.tier}</CardTitle>
                  <p className="text-gray-600">{tier.description}</p>
                </CardHeader>
                <CardContent className="text-center">
                  <div className={`text-5xl font-bold bg-gradient-to-r ${tier.color} bg-clip-text text-transparent mb-4`}>
                    {tier.reward}
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700 font-medium mb-2">Example:</p>
                    <p className="text-sm text-gray-600">{tier.example}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">How It Works</h2>
            <p className="text-xl text-gray-600">Simple 4-step process to start earning</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {howItWorksSteps.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 font-bold text-lg">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800 mb-2">{item.step}</h3>
                      <p className="text-gray-600 mb-3">{item.description}</p>
                      <div className="bg-green-50 p-3 rounded-lg">
                        <p className="text-sm text-green-700 font-medium">Example: {item.example}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Real Examples */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Real-Life Earning Examples</h2>
            <p className="text-xl text-gray-600">See how much you can potentially earn</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {referralExamples.map((example, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg text-gray-800 mb-3">{example.scenario}</h3>
                  <p className="text-gray-600 mb-4">{example.description}</p>
                  <div className="bg-gradient-to-r from-green-100 to-blue-100 p-4 rounded-lg">
                    <p className="font-bold text-green-700">{example.potential}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">How to Connect Customers</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {index === 0 ? <MessageCircle className="w-8 h-8 text-blue-600" /> :
                     index === 1 ? <Phone className="w-8 h-8 text-blue-600" /> :
                     <Users className="w-8 h-8 text-blue-600" />}
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">{method.method}</h3>
                  <p className="text-blue-600 font-semibold mb-2">{method.contact}</p>
                  <p className="text-gray-600 text-sm">{method.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Start Earning Today!</h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Join hundreds of people already earning through our referral program. 
            Your network is your net worth - start monetizing it today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a href="https://wa.me/919634877767?text=Hi! I want to join your referral program and start earning rewards.">
                <MessageCircle className="w-5 h-5 mr-2" />
                Join via WhatsApp
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600" asChild>
              <a href="tel:9634877767">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChannelPartner;
