
import { Phone, Mail, MapPin, CreditCard, QrCode } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const ContactSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Contact us for quotes, consultations, or any questions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6 animate-fade-in">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-blue-800">
                  <Phone className="w-6 h-6" />
                  Phone & WhatsApp
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-2xl font-bold text-gray-800">9634877767</p>
                  <p className="text-gray-600">Primary (Call & WhatsApp)</p>
                  <p className="text-lg font-semibold text-gray-700">9720688000</p>
                  <p className="text-gray-600">Alternative Contact</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-blue-800">
                  <Mail className="w-6 h-6" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-800">rohilagraphicsnakur@gmail.com</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-blue-800">
                  <MapPin className="w-6 h-6" />
                  Address
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  <p className="font-semibold text-gray-800">Rohila Graphics</p>
                  <p className="text-gray-700">Near SBI Main Branch</p>
                  <p className="text-gray-700">Tehsil Road, Nakur</p>
                  <p className="text-gray-700">Saharanpur, UP - 247342</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Payment & Social */}
          <div className="space-y-6 animate-fade-in">
            <Card className="hover:shadow-lg transition-shadow bg-gradient-to-br from-green-50 to-blue-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-green-800">
                  <CreditCard className="w-6 h-6" />
                  Payment Options
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <QrCode className="w-8 h-8 text-blue-600" />
                    <div>
                      <p className="font-semibold text-gray-800">PhonePe QR Available</p>
                      <p className="text-sm text-gray-600">Scan & Pay at our location</p>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border-2 border-dashed border-blue-200">
                    <p className="font-semibold text-gray-800">UPI ID</p>
                    <p className="text-xl font-mono text-blue-600">9720688000@upi</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow bg-gradient-to-br from-purple-50 to-pink-50">
              <CardHeader>
                <CardTitle className="text-purple-800">Follow Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <div>
                      <p className="font-semibold text-gray-800">Instagram</p>
                      <p className="text-purple-600">@ROHILAGRAPHICSNAKUR</p>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg"></div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <div>
                      <p className="font-semibold text-gray-800">Facebook</p>
                      <p className="text-blue-600">Rohila Graphics</p>
                    </div>
                    <div className="w-12 h-12 bg-blue-600 rounded-lg"></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full">
                <span className="animate-pulse">💡</span>
                <span className="font-semibold">Bulk Orders Get Special Discounts!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
