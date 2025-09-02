import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, Users, Heart, MessageSquare, Building } from "lucide-react";

const NgoContact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-ngo-primary/10 via-background to-hope/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Get Involved
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ready to make a difference? Connect with us to volunteer, partner, or learn more 
              about how you can contribute to our mission of transforming lives.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {/* Contact Details */}
              <Card className="border-0 shadow-medium">
                <CardHeader className="text-center">
                  <MapPin className="h-12 w-12 text-ngo-primary mx-auto mb-4" />
                  <CardTitle>Visit Our Office</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-muted-foreground">
                    Mahakaal Foundation<br/>
                    123 Community Center Road<br/>
                    Social Sector, Mumbai - 400001<br/>
                    Maharashtra, India
                  </p>
                  <Button variant="ngo-outline" size="sm">
                    Get Directions
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-medium">
                <CardHeader className="text-center">
                  <Phone className="h-12 w-12 text-hope mx-auto mb-4" />
                  <CardTitle>Call Us</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div>
                    <p className="font-medium">Main Office</p>
                    <p className="text-muted-foreground">+91 98765 43210</p>
                  </div>
                  <div>
                    <p className="font-medium">Volunteer Coordinator</p>
                    <p className="text-muted-foreground">+91 87654 32109</p>
                  </div>
                  <Button variant="hope" size="sm">
                    Call Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-medium">
                <CardHeader className="text-center">
                  <Mail className="h-12 w-12 text-compassion mx-auto mb-4" />
                  <CardTitle>Email Us</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div>
                    <p className="font-medium">General Inquiries</p>
                    <p className="text-muted-foreground">info@mahakaalfoundation.org</p>
                  </div>
                  <div>
                    <p className="font-medium">Volunteer Opportunities</p>
                    <p className="text-muted-foreground">volunteer@mahakaalfoundation.org</p>
                  </div>
                  <Button variant="compassion" size="sm">
                    Send Email
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Office Hours */}
            <Card className="border-0 shadow-medium mb-16">
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-6">
                  <Clock className="h-8 w-8 text-ngo-primary mr-3" />
                  <h3 className="text-2xl font-bold">Office Hours</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div>
                    <h4 className="font-semibold mb-2">Monday - Friday</h4>
                    <p className="text-muted-foreground">9:00 AM - 6:00 PM</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Saturday</h4>
                    <p className="text-muted-foreground">10:00 AM - 4:00 PM</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Sunday</h4>
                    <p className="text-muted-foreground">Closed (Emergency: 24/7)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Forms */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">How Can We Help You?</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Choose the option that best describes your interest, and we'll get back to you soon
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Volunteer Form */}
              <Card className="border-0 shadow-medium">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="h-6 w-6 text-hope" />
                    <span>Volunteer With Us</span>
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Join our team of dedicated volunteers and make a direct impact in communities
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="vol-first-name">First Name</Label>
                      <Input id="vol-first-name" placeholder="Enter first name" />
                    </div>
                    <div>
                      <Label htmlFor="vol-last-name">Last Name</Label>
                      <Input id="vol-last-name" placeholder="Enter last name" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="vol-email">Email Address</Label>
                    <Input id="vol-email" type="email" placeholder="your@email.com" />
                  </div>

                  <div>
                    <Label htmlFor="vol-phone">Phone Number</Label>
                    <Input id="vol-phone" type="tel" placeholder="+91 98765 43210" />
                  </div>

                  <div>
                    <Label htmlFor="vol-area">Area of Interest</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your preferred area" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="education">Education Programs</SelectItem>
                        <SelectItem value="healthcare">Healthcare Initiatives</SelectItem>
                        <SelectItem value="community">Community Development</SelectItem>
                        <SelectItem value="admin">Administrative Support</SelectItem>
                        <SelectItem value="fundraising">Fundraising & Events</SelectItem>
                        <SelectItem value="any">Open to Any Role</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="vol-availability">Availability</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="How much time can you commit?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="weekends">Weekends Only</SelectItem>
                        <SelectItem value="evenings">Weekday Evenings</SelectItem>
                        <SelectItem value="flexible">Flexible Schedule</SelectItem>
                        <SelectItem value="fulltime">Full-time Availability</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="vol-experience">Previous Experience (Optional)</Label>
                    <Textarea 
                      id="vol-experience" 
                      placeholder="Tell us about any relevant experience or skills..." 
                      rows={3}
                    />
                  </div>

                  <Button variant="hope" size="lg" className="w-full">
                    <Heart className="mr-2 h-5 w-5" />
                    Join as Volunteer
                  </Button>
                </CardContent>
              </Card>

              {/* General Contact Form */}
              <Card className="border-0 shadow-medium">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MessageSquare className="h-6 w-6 text-ngo-primary" />
                    <span>General Inquiries</span>
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Have questions about our programs, partnerships, or how to get involved?
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="gen-first-name">First Name</Label>
                      <Input id="gen-first-name" placeholder="Enter first name" />
                    </div>
                    <div>
                      <Label htmlFor="gen-last-name">Last Name</Label>
                      <Input id="gen-last-name" placeholder="Enter last name" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="gen-email">Email Address</Label>
                    <Input id="gen-email" type="email" placeholder="your@email.com" />
                  </div>

                  <div>
                    <Label htmlFor="gen-organization">Organization (Optional)</Label>
                    <Input id="gen-organization" placeholder="Company or organization name" />
                  </div>

                  <div>
                    <Label htmlFor="inquiry-type">Type of Inquiry</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="What's this regarding?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="partnership">Corporate Partnership</SelectItem>
                        <SelectItem value="donation">Donation Information</SelectItem>
                        <SelectItem value="programs">Program Details</SelectItem>
                        <SelectItem value="media">Media Inquiry</SelectItem>
                        <SelectItem value="research">Research/Academic</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="gen-subject">Subject</Label>
                    <Input id="gen-subject" placeholder="Brief subject line" />
                  </div>

                  <div>
                    <Label htmlFor="gen-message">Message</Label>
                    <Textarea 
                      id="gen-message" 
                      placeholder="Please provide details about your inquiry..." 
                      rows={4}
                    />
                  </div>

                  <Button variant="ngo-primary" size="lg" className="w-full">
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Building className="h-16 w-16 text-ngo-primary mx-auto mb-6" />
              <h2 className="text-4xl font-bold mb-4">Corporate Partnerships</h2>
              <p className="text-xl text-muted-foreground">
                Partner with us for meaningful CSR initiatives and employee engagement programs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-medium text-center">
                <CardContent className="p-8">
                  <Heart className="h-12 w-12 text-compassion mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">CSR Programs</h3>
                  <p className="text-muted-foreground mb-4">
                    Align your CSR goals with our impactful programs for maximum community benefit
                  </p>
                  <Button variant="compassion" size="sm">
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-medium text-center">
                <CardContent className="p-8">
                  <Users className="h-12 w-12 text-hope mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">Employee Engagement</h3>
                  <p className="text-muted-foreground mb-4">
                    Organize team volunteering activities that build skills and strengthen bonds
                  </p>
                  <Button variant="hope" size="sm">
                    Get Started
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-medium text-center">
                <CardContent className="p-8">
                  <Building className="h-12 w-12 text-ngo-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">Funding Partnerships</h3>
                  <p className="text-muted-foreground mb-4">
                    Support specific programs or initiatives with targeted funding and expertise
                  </p>
                  <Button variant="ngo-primary" size="sm">
                    Discuss Options
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-gradient-impact">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Emergency Support
            </h2>
            <p className="text-xl text-white/90 mb-8">
              For urgent medical emergencies in our service areas, our 24/7 helpline 
              connects you with immediate assistance and emergency transport services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="compassion" size="lg">
                <Phone className="mr-2 h-5 w-5" />
                Emergency Hotline: 1800-XXX-HELP
              </Button>
              <Button 
                variant="ngo-outline" 
                size="lg" 
                className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-ngo-primary"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                WhatsApp Support
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NgoContact;