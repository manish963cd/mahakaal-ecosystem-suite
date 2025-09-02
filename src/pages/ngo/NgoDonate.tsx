import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Heart, Users, BookOpen, Stethoscope, Home, CreditCard, QrCode, Building } from "lucide-react";
import { useState } from "react";

const NgoDonate = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");

  const donationAmounts = [500, 1000, 2500, 5000, 10000];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-compassion/10 via-background to-hope/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Heart className="h-16 w-16 text-compassion mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-6">
              Make a Difference Today
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Your donation directly impacts lives. Every rupee counts towards building 
              a better future for underserved communities across India.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Impact */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Your Impact</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card className="border-0 shadow-medium text-center hover:shadow-strong transition-all">
                <CardContent className="p-8">
                  <div className="bg-gradient-impact p-4 rounded-2xl w-16 h-16 mx-auto mb-6">
                    <BookOpen className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">₹500</h3>
                  <p className="text-muted-foreground">
                    Provides school supplies and books for one child for a month
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-medium text-center hover:shadow-strong transition-all">
                <CardContent className="p-8">
                  <div className="bg-gradient-warm p-4 rounded-2xl w-16 h-16 mx-auto mb-6">
                    <Stethoscope className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">₹2,500</h3>
                  <p className="text-muted-foreground">
                    Sponsors a complete health checkup for 10 families
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-medium text-center hover:shadow-strong transition-all">
                <CardContent className="p-8">
                  <div className="bg-gradient-hero p-4 rounded-2xl w-16 h-16 mx-auto mb-6">
                    <Home className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">₹10,000</h3>
                  <p className="text-muted-foreground">
                    Funds skill training program for 5 women entrepreneurs
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Donation Amount Selection */}
              <Card className="border-0 shadow-medium">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Heart className="h-6 w-6 text-compassion" />
                    <span>Choose Your Contribution</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Preset Amounts */}
                  <div>
                    <Label className="text-base font-medium mb-3 block">Select Amount</Label>
                    <div className="grid grid-cols-2 gap-3">
                      {donationAmounts.map((amount) => (
                        <Button
                          key={amount}
                          variant={selectedAmount === amount ? "compassion" : "outline"}
                          className="h-12 text-base"
                          onClick={() => {
                            setSelectedAmount(amount);
                            setCustomAmount("");
                          }}
                        >
                          ₹{amount.toLocaleString()}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Custom Amount */}
                  <div>
                    <Label htmlFor="custom-amount" className="text-base font-medium">
                      Or Enter Custom Amount
                    </Label>
                    <div className="mt-2">
                      <Input
                        id="custom-amount"
                        type="number"
                        placeholder="Enter amount in ₹"
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value);
                          setSelectedAmount(null);
                        }}
                        className="h-12 text-base"
                      />
                    </div>
                  </div>

                  {/* Program Selection */}
                  <div>
                    <Label className="text-base font-medium mb-3 block">Support a Specific Program</Label>
                    <div className="space-y-2">
                      <Button variant="outline" className="w-full justify-start h-auto p-4">
                        <BookOpen className="h-5 w-5 mr-3 text-hope" />
                        <div className="text-left">
                          <div className="font-medium">Education Program</div>
                          <div className="text-sm text-muted-foreground">School supplies, scholarships, digital learning</div>
                        </div>
                      </Button>
                      <Button variant="outline" className="w-full justify-start h-auto p-4">
                        <Stethoscope className="h-5 w-5 mr-3 text-compassion" />
                        <div className="text-left">
                          <div className="font-medium">Healthcare Initiative</div>
                          <div className="text-sm text-muted-foreground">Mobile clinics, health camps, medical supplies</div>
                        </div>
                      </Button>
                      <Button variant="outline" className="w-full justify-start h-auto p-4">
                        <Home className="h-5 w-5 mr-3 text-ngo-primary" />
                        <div className="text-left">
                          <div className="font-medium">Community Development</div>
                          <div className="text-sm text-muted-foreground">Infrastructure, skill training, women empowerment</div>
                        </div>
                      </Button>
                      <Button variant="outline" className="w-full justify-start h-auto p-4">
                        <Heart className="h-5 w-5 mr-3 text-trust" />
                        <div className="text-left">
                          <div className="font-medium">Where Needed Most</div>
                          <div className="text-sm text-muted-foreground">Let us direct your donation to urgent needs</div>
                        </div>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Donor Information */}
              <Card className="border-0 shadow-medium">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="h-6 w-6 text-ngo-primary" />
                    <span>Your Information</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="first-name">First Name</Label>
                      <Input id="first-name" placeholder="Enter first name" />
                    </div>
                    <div>
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input id="last-name" placeholder="Enter last name" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+91 98765 43210" />
                  </div>

                  <div>
                    <Label htmlFor="address">Address (Optional)</Label>
                    <Textarea id="address" placeholder="Your address for tax receipt" rows={3} />
                  </div>

                  <div>
                    <Label htmlFor="message">Message (Optional)</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Share why this cause is important to you..." 
                      rows={3} 
                    />
                  </div>

                  {/* Donation Methods */}
                  <div className="border-t pt-6">
                    <Label className="text-base font-medium mb-3 block">Payment Method</Label>
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full justify-start">
                        <CreditCard className="h-5 w-5 mr-3" />
                        Credit/Debit Card
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <QrCode className="h-5 w-5 mr-3" />
                        UPI / QR Code
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Building className="h-5 w-5 mr-3" />
                        Bank Transfer
                      </Button>
                    </div>
                  </div>

                  <Button 
                    variant="compassion" 
                    size="lg" 
                    className="w-full"
                    disabled={!selectedAmount && !customAmount}
                  >
                    <Heart className="mr-2 h-5 w-5" />
                    Donate {selectedAmount ? `₹${selectedAmount.toLocaleString()}` : customAmount ? `₹${customAmount}` : ''}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Help */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Other Ways to Help</h2>
            <p className="text-xl text-muted-foreground mb-12">
              Your contribution doesn't always have to be monetary. There are many ways to support our mission.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-medium text-center">
                <CardContent className="p-8">
                  <Users className="h-12 w-12 text-hope mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">Volunteer Your Time</h3>
                  <p className="text-muted-foreground mb-4">
                    Join our programs and directly impact communities with your skills and time.
                  </p>
                  <Button variant="hope" size="sm">
                    Become a Volunteer
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-medium text-center">
                <CardContent className="p-8">
                  <Heart className="h-12 w-12 text-compassion mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">Spread Awareness</h3>
                  <p className="text-muted-foreground mb-4">
                    Share our mission with friends and family to amplify our impact.
                  </p>
                  <Button variant="compassion" size="sm">
                    Share Our Story
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-medium text-center">
                <CardContent className="p-8">
                  <Building className="h-12 w-12 text-ngo-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">Corporate Partnership</h3>
                  <p className="text-muted-foreground mb-4">
                    Partner with us for CSR initiatives and employee engagement programs.
                  </p>
                  <Button variant="ngo-primary" size="sm">
                    Partner With Us
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Transparency */}
      <section className="py-20 bg-gradient-impact">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Your Trust, Our Transparency
            </h2>
            <p className="text-xl text-white/90 mb-8">
              We believe in complete transparency. Regular updates, impact reports, 
              and financial statements ensure your donation creates the maximum positive impact.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white/90">
              <div>
                <div className="text-3xl font-bold mb-2">100%</div>
                <div>Transparent Reporting</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">₹50L+</div>
                <div>Donations Received</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">1000+</div>
                <div>Lives Impacted</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NgoDonate;
