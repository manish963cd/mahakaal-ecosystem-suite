import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Stethoscope, Home, Users, GraduationCap, Laptop } from "lucide-react";
import { Link } from "react-router-dom";
import educationImage from "@/assets/education-program.jpg";

const NgoPrograms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-ngo-primary/10 via-background to-hope/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Our Programs
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive initiatives designed to create sustainable change in education, 
              healthcare, and community development across underserved regions.
            </p>
          </div>
        </div>
      </section>

      {/* Education Programs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="bg-gradient-impact p-4 rounded-2xl w-20 h-20 mx-auto mb-6">
                <BookOpen className="h-12 w-12 text-white mx-auto mt-1" />
              </div>
              <h2 className="text-4xl font-bold mb-4">Education First Initiative</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Ensuring every child has access to quality education and the tools they need to succeed
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <img 
                  src={educationImage} 
                  alt="Education program in action" 
                  className="rounded-2xl shadow-strong w-full"
                />
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-3">Primary Education Support</h3>
                  <p className="text-muted-foreground">
                    Providing books, uniforms, and school supplies to children from low-income families, 
                    ensuring financial barriers don't prevent access to education.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Digital Literacy Centers</h3>
                  <p className="text-muted-foreground">
                    Setting up computer labs and internet access in rural schools, preparing students 
                    for the digital future with basic computer skills and online learning resources.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Teacher Training Programs</h3>
                  <p className="text-muted-foreground">
                    Enhancing teaching quality through regular training sessions, workshops, and 
                    providing teachers with modern educational resources and methodologies.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-medium">
                <CardHeader className="text-center">
                  <GraduationCap className="h-12 w-12 text-hope mx-auto mb-4" />
                  <CardTitle>Scholarship Program</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Merit-based scholarships for bright students from disadvantaged backgrounds to pursue higher education.
                  </p>
                  <div className="text-sm text-hope font-medium">
                    • 50+ scholarships awarded<br/>
                    • ₹2L+ in scholarship funds<br/>
                    • 90% graduation rate
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-medium">
                <CardHeader className="text-center">
                  <Laptop className="h-12 w-12 text-ngo-primary mx-auto mb-4" />
                  <CardTitle>Digital Learning</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Tablets and educational software provided to students for enhanced learning experiences.
                  </p>
                  <div className="text-sm text-ngo-primary font-medium">
                    • 200+ devices distributed<br/>
                    • 15 schools connected<br/>
                    • Interactive content library
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-medium">
                <CardHeader className="text-center">
                  <Users className="h-12 w-12 text-compassion mx-auto mb-4" />
                  <CardTitle>Adult Literacy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Evening classes for adults who missed formal education, focusing on basic reading and writing.
                  </p>
                  <div className="text-sm text-compassion font-medium">
                    • 300+ adults enrolled<br/>
                    • 8 learning centers<br/>
                    • 80% completion rate
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Programs */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="bg-gradient-warm p-4 rounded-2xl w-20 h-20 mx-auto mb-6">
                <Stethoscope className="h-12 w-12 text-white mx-auto mt-1" />
              </div>
              <h2 className="text-4xl font-bold mb-4">Healthcare Access Program</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Bringing quality healthcare to rural communities through mobile clinics and health awareness campaigns
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-medium">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Mobile Health Clinics</h3>
                  <p className="text-muted-foreground mb-6">
                    Fully equipped mobile units visiting remote villages monthly, providing basic healthcare, 
                    vaccinations, and health screenings where hospitals are hours away.
                  </p>
                  <div className="bg-compassion/10 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-compassion">Impact Statistics</h4>
                    <ul className="text-sm space-y-1">
                      <li>• 50+ health camps conducted</li>
                      <li>• 10,000+ patients treated</li>
                      <li>• 25+ villages covered monthly</li>
                      <li>• 95% patient satisfaction rate</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-medium">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Maternal & Child Health</h3>
                  <p className="text-muted-foreground mb-6">
                    Specialized care for pregnant women and newborns, including prenatal checkups, 
                    delivery assistance, and postnatal care to reduce maternal and infant mortality.
                  </p>
                  <div className="bg-hope/10 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-hope">Key Services</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Prenatal care and nutrition support</li>
                      <li>• Safe delivery assistance</li>
                      <li>• Newborn care and vaccination</li>
                      <li>• Family planning counseling</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-medium">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Health Awareness Campaigns</h3>
                  <p className="text-muted-foreground mb-6">
                    Community education programs focusing on preventive healthcare, hygiene practices, 
                    and early disease detection to improve overall community health outcomes.
                  </p>
                  <div className="bg-trust/10 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-trust">Focus Areas</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Water, sanitation & hygiene (WASH)</li>
                      <li>• Nutrition and healthy eating</li>
                      <li>• Disease prevention education</li>
                      <li>• Mental health awareness</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-medium">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Emergency Medical Support</h3>
                  <p className="text-muted-foreground mb-6">
                    24/7 emergency medical assistance and ambulance services for critical cases, 
                    ensuring timely medical intervention when every minute counts.
                  </p>
                  <div className="bg-ngo-primary/10 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-ngo-primary">Emergency Services</h4>
                    <ul className="text-sm space-y-1">
                      <li>• 24/7 emergency hotline</li>
                      <li>• Ambulance services</li>
                      <li>• Critical care transport</li>
                      <li>• Hospital coordination</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Community Development */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="bg-gradient-hero p-4 rounded-2xl w-20 h-20 mx-auto mb-6">
                <Home className="h-12 w-12 text-white mx-auto mt-1" />
              </div>
              <h2 className="text-4xl font-bold mb-4">Community Development Program</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Building sustainable communities through infrastructure development, skill training, and women empowerment initiatives
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-medium">
                <CardContent className="p-8 text-center">
                  <div className="bg-gradient-impact p-4 rounded-2xl w-16 h-16 mx-auto mb-6">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Women Empowerment</h3>
                  <p className="text-muted-foreground mb-4">
                    Skill development programs for women including tailoring, handicrafts, and small business training.
                  </p>
                  <div className="text-sm text-hope">
                    200+ women trained<br/>
                    50+ micro-businesses started
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-medium">
                <CardContent className="p-8 text-center">
                  <div className="bg-gradient-warm p-4 rounded-2xl w-16 h-16 mx-auto mb-6">
                    <Home className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Infrastructure Development</h3>
                  <p className="text-muted-foreground mb-4">
                    Building wells, community centers, and improving road connectivity in rural areas.
                  </p>
                  <div className="text-sm text-compassion">
                    15 water wells built<br/>
                    3 community centers established
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-medium">
                <CardContent className="p-8 text-center">
                  <div className="bg-gradient-hero p-4 rounded-2xl w-16 h-16 mx-auto mb-6">
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Skill Development</h3>
                  <p className="text-muted-foreground mb-4">
                    Vocational training programs in agriculture, technology, and traditional crafts.
                  </p>
                  <div className="text-sm text-ngo-primary">
                    500+ people trained<br/>
                    80% employment rate
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-20 bg-gradient-impact">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Support Our Programs
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Your contribution directly impacts the lives of those we serve. Choose a program 
              close to your heart and help us create lasting change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="compassion" size="lg" asChild>
                <Link to="/ngo/donate">Donate to Programs</Link>
              </Button>
              <Button 
                variant="ngo-outline" 
                size="lg" 
                className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-ngo-primary"
                asChild
              >
                <Link to="/ngo/contact">Volunteer With Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NgoPrograms;