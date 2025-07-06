
import { CreditCard, Phone, Mail, MapPin, Building2, QrCode } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Payment = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-blue-900 via-blue-800 to-slate-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Payment Options</h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Choose from our convenient payment methods for all your printing needs
          </p>
        </div>
      </section>

      {/* Contact & Payment Information */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            
            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-blue-800">
                    <Phone className="w-6 h-6" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-semibold text-gray-800">Primary Contact</p>
                      <p className="text-xl font-bold text-blue-600">9634877767</p>
                      <p className="text-sm text-gray-600">(Call & WhatsApp)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Phone className="w-5 h-5 text-gray-600" />
                    <div>
                      <p className="font-semibold text-gray-800">Other Contact</p>
                      <p className="text-lg font-bold text-gray-700">9720688000</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                    <Mail className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="font-semibold text-gray-800">Email</p>
                      <p className="text-blue-600">rohilagraphicsnakur@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                    <MapPin className="w-5 h-5 text-purple-600 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-800">Address</p>
                      <p className="text-gray-700">Rohila Graphics</p>
                      <p className="text-gray-700">Near SBI Main Branch</p>
                      <p className="text-gray-700">Tehsil Road, Nakur</p>
                      <p className="text-gray-700">Saharanpur, UP - 247342</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Payment Options */}
            <div className="space-y-6">
              <Card className="hover:shadow-xl transition-shadow bg-gradient-to-br from-green-50 to-blue-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-green-800">
                    <QrCode className="w-6 h-6" />
                    Digital Payment
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border-2 border-green-200">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold">PP</span>
                      </div>
                      <div>
                        <p className="font-bold text-gray-800">PhonePe</p>
                        <p className="text-sm text-gray-600">Scan QR at our location</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg border-2 border-blue-200">
                    <p className="font-semibold text-gray-800 mb-2">UPI Payment</p>
                    <p className="text-2xl font-mono text-blue-600 bg-blue-50 p-3 rounded-lg text-center">
                      9720688000@upi
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-shadow bg-gradient-to-br from-blue-50 to-indigo-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-blue-800">
                    <Building2 className="w-6 h-6" />
                    Bank Transfer
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border">
                    <p className="font-bold text-gray-800 text-lg mb-3">ROHILA GRAPHICS</p>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Account No:</span>
                        <span className="font-mono font-bold">41188246445</span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-gray-600">Bank:</span>
                        <span className="font-semibold">State Bank of India Nakur</span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-gray-600">IFSC Code:</span>
                        <span className="font-mono font-bold text-blue-600">SBIN0001145</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="text-center">
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-full">
                  <CreditCard className="w-5 h-5" />
                  <span className="font-semibold">Secure & Fast Payments</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Payment;
