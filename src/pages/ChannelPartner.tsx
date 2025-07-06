
import { Users, Percent, TrendingUp, HandshakeIcon, Award, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ChannelPartner = () => {
  const commissionTiers = [
    {
      tier: "Bronze Partner",
      commission: "10%",
      minOrder: "₹5,000",
      color: "from-amber-400 to-orange-500",
      icon: "🥉",
      benefits: ["Basic commission rate", "Standard support", "Monthly settlements"]
    },
    {
      tier: "Silver Partner",
      commission: "15%",
      minOrder: "₹10,000", 
      color: "from-gray-400 to-gray-600",
      icon: "🥈",
      benefits: ["Higher commission rate", "Priority support", "Bi-weekly settlements", "Marketing materials"]
    },
    {
      tier: "Gold Partner",
      commission: "20%",
      minOrder: "₹25,000",
      color: "from-yellow-400 to-yellow-600",
      icon: "🥇",
      benefits: ["Premium commission rate", "Dedicated support", "Weekly settlements", "Exclusive marketing materials", "Special pricing"]
    }
  ];

  const termsAndConditions = [
    "Minimum order value must be met for commission eligibility",
    "Commission is calculated on the total order value excluding taxes",
    "Payment settlements are made as per the partner tier schedule",
    "Partners must provide valid business registration documents",
    "All referred customers must mention the partner's reference code",
    "Commission payments are subject to successful order completion",
    "Partnership agreement is renewable annually",
    "Partners must maintain professional conduct with referred customers"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-green-700 via-blue-700 to-purple-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center mb-6">
            <HandshakeIcon className="w-12 h-12 mr-4" />
            <h1 className="text-5xl font-bold">Channel Partner Program</h1>
          </div>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-8">
            Join our referral network and earn attractive commissions by connecting customers with our premium printing services
          </p>
          <Badge className="bg-green-500 text-white text-lg px-6 py-2">
            <TrendingUp className="w-4 h-4 mr-2" />
            Earn up to 20% Commission
          </Badge>
        </div>
      </section>

      {/* Commission Tiers */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Commission Structure</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the partnership tier that suits your business goals and start earning today
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {commissionTiers.map((tier, index) => (
              <Card key={index} className="relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${tier.color}`}></div>
                <CardHeader className="text-center pb-4">
                  <div className="text-4xl mb-3">{tier.icon}</div>
                  <CardTitle className="text-2xl text-gray-800">{tier.tier}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className={`text-5xl font-bold bg-gradient-to-r ${tier.color} bg-clip-text text-transparent mb-4`}>
                    {tier.commission}
                  </div>
                  <div className="mb-6">
                    <p className="text-gray-600 mb-2">Minimum Order Value</p>
                    <p className="text-2xl font-bold text-gray-800">{tier.minOrder}</p>
                  </div>
                  <div className="space-y-3">
                    {tier.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        {benefit}
                      </div>
                    ))}
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
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">1. Register</h3>
                <p className="text-gray-600 text-sm">Sign up as our channel partner with valid documents</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HandshakeIcon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">2. Refer</h3>
                <p className="text-gray-600 text-sm">Connect customers with our printing services</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">3. Track</h3>
                <p className="text-gray-600 text-sm">Monitor your referrals and commission earnings</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Percent className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">4. Earn</h3>
                <p className="text-gray-600 text-sm">Receive commission payments as per your tier</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Terms and Conditions */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl text-gray-800">
                  <FileText className="w-6 h-6" />
                  Terms & Conditions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {termsAndConditions.map((term, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                        <span className="text-blue-600 text-sm font-bold">{index + 1}</span>
                      </div>
                      <p className="text-gray-700">{term}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Partner With Us?</h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Start earning attractive commissions by joining our channel partner program today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Users className="w-5 h-5 mr-2" />
              Become a Partner
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
              Download Brochure
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChannelPartner;
