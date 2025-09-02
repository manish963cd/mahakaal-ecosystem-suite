import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Users, Award, TrendingUp, Heart, Target, Eye, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import groupHeroImage from "@/assets/group-hero.jpg";

const GroupAbout = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={groupHeroImage} 
            alt="Mahakaal Group Corporate Building" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-group-primary/90 via-group-primary/70 to-transparent"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Building Excellence,
              <span className="block text-transparent bg-gradient-to-r from-white to-white/80 bg-clip-text">
                Creating Value
              </span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
              Since our inception, Mahakaal Group has been synonymous with quality, integrity, 
              and innovation across diverse business verticals while maintaining our commitment 
              to social responsibility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/estate">
                  Explore Our Ventures
                </Link>
              </Button>
              <Button variant="ngo-outline" size="lg" asChild>
                <Link to="/ngo" className="bg-white/10 backdrop-blur-sm">
                  <Heart className="mr-2 h-5 w-5" />
                  Our Social Impact
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">Our Story</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Founded with a vision to create sustainable business solutions while contributing 
                  positively to society, Mahakaal Group has grown from a single venture into a 
                  diversified conglomerate spanning real estate, social initiatives, and emerging 
                  technology sectors.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Our journey reflects our core belief that business success and social responsibility 
                  are not mutually exclusive. Every project we undertake, every community we serve, 
                  and every partnership we forge is guided by our commitment to excellence and 
                  ethical practices.
                </p>
                <Button variant="group-primary" asChild>
                  <Link to="/estate">View Our Projects</Link>
                </Button>
              </div>
              <div className="space-y-6">
                <Card className="border-0 shadow-medium">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-4">
                      <div className="bg-gradient-hero p-3 rounded-lg">
                        <Building2 className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">50+</h3>
                        <p className="text-muted-foreground">Projects Completed</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-medium">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-4">
                      <div className="bg-gradient-impact p-3 rounded-lg">
                        <Users className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">1000+</h3>
                        <p className="text-muted-foreground">Happy Customers</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-medium">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-4">
                      <div className="bg-gradient-warm p-3 rounded-lg">
                        <Award className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">15+</h3>
                        <p className="text-muted-foreground">Years of Excellence</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our Foundation</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                The principles that guide every decision and drive our continued success
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Mission */}
              <Card className="border-0 shadow-medium text-center">
                <CardContent className="p-8">
                  <div className="bg-gradient-hero p-4 rounded-full w-20 h-20 mx-auto mb-6">
                    <Target className="h-12 w-12 text-white mx-auto mt-2" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To deliver exceptional value through innovative business solutions while 
                    fostering sustainable development and positive social impact in every 
                    community we serve.
                  </p>
                </CardContent>
              </Card>

              {/* Vision */}
              <Card className="border-0 shadow-medium text-center">
                <CardContent className="p-8">
                  <div className="bg-gradient-impact p-4 rounded-full w-20 h-20 mx-auto mb-6">
                    <Eye className="h-12 w-12 text-white mx-auto mt-2" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To be recognized as a leading diversified group that sets benchmarks 
                    in business excellence while being a catalyst for positive social change 
                    across India and beyond.
                  </p>
                </CardContent>
              </Card>

              {/* Values */}
              <Card className="border-0 shadow-medium text-center">
                <CardContent className="p-8">
                  <div className="bg-gradient-warm p-4 rounded-full w-20 h-20 mx-auto mb-6">
                    <Zap className="h-12 w-12 text-white mx-auto mt-2" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Values</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Integrity, Innovation, Excellence, and Social Responsibility form the 
                    cornerstone of everything we do, ensuring sustainable growth and 
                    meaningful impact.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Business Verticals */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Business Verticals</h2>
            
            <div className="space-y-12">
              {/* Real Estate */}
              <Card className="border-0 shadow-medium overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="p-12">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="bg-gradient-hero p-3 rounded-lg">
                          <Building2 className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-3xl font-bold">Real Estate Division</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        Our flagship division specializes in premium residential and commercial 
                        developments that redefine modern living and working spaces. With a 
                        focus on sustainable architecture and customer-centric designs, we've 
                        delivered over 50 successful projects across key metropolitan areas.
                      </p>
                      <ul className="space-y-2 text-muted-foreground mb-8">
                        <li>• Premium residential complexes</li>
                        <li>• Commercial office spaces</li>
                        <li>• Mixed-use developments</li>
                        <li>• Sustainable building practices</li>
                      </ul>
                      <Button variant="group-primary" asChild>
                        <Link to="/estate">Explore Properties</Link>
                      </Button>
                    </div>
                    <div className="bg-gradient-to-br from-group-primary/10 to-ngo-primary/5 flex items-center justify-center p-12">
                      <div className="text-center">
                        <Building2 className="h-24 w-24 text-group-primary mx-auto mb-6" />
                        <div className="grid grid-cols-2 gap-6 text-center">
                          <div>
                            <div className="text-2xl font-bold text-group-primary">50+</div>
                            <div className="text-sm text-muted-foreground">Projects</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-group-primary">₹500Cr+</div>
                            <div className="text-sm text-muted-foreground">Revenue</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-group-primary">1000+</div>
                            <div className="text-sm text-muted-foreground">Families</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-group-primary">10+</div>
                            <div className="text-sm text-muted-foreground">Cities</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Initiative */}
              <Card className="border-0 shadow-medium overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="bg-gradient-to-br from-hope/10 to-compassion/5 flex items-center justify-center p-12 lg:order-1">
                      <div className="text-center">
                        <Heart className="h-24 w-24 text-compassion mx-auto mb-6" />
                        <div className="grid grid-cols-2 gap-6 text-center">
                          <div>
                            <div className="text-2xl font-bold text-compassion">1000+</div>
                            <div className="text-sm text-muted-foreground">Lives Impacted</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-hope">15+</div>
                            <div className="text-sm text-muted-foreground">Villages</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-ngo-primary">25+</div>
                            <div className="text-sm text-muted-foreground">Programs</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-trust">₹10Cr+</div>
                            <div className="text-sm text-muted-foreground">Investment</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-12 lg:order-2">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="bg-gradient-impact p-3 rounded-lg">
                          <Heart className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-3xl font-bold">Social Impact Division</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        Our NGO initiative, Mahakaal Foundation, demonstrates our commitment 
                        to giving back to society. Through comprehensive programs in education, 
                        healthcare, and community development, we're creating lasting positive 
                        change in underserved communities.
                      </p>
                      <ul className="space-y-2 text-muted-foreground mb-8">
                        <li>• Educational scholarships and support</li>
                        <li>• Mobile healthcare clinics</li>
                        <li>• Women empowerment programs</li>
                        <li>• Community infrastructure development</li>
                      </ul>
                      <Button variant="compassion" asChild>
                        <Link to="/ngo">
                          <Heart className="mr-2 h-5 w-5" />
                          Learn About Our NGO
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Building the Future
            </h2>
            <p className="text-xl text-white/90 mb-12 leading-relaxed">
              As we look ahead, Mahakaal Group continues to evolve, exploring new sectors 
              and opportunities while staying true to our core values of excellence, 
              innovation, and social responsibility.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white/90">
              <div>
                <TrendingUp className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Technology Integration</h3>
                <p className="text-sm">
                  Embracing digital transformation across all business verticals
                </p>
              </div>
              <div>
                <Award className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Sustainable Practices</h3>
                <p className="text-sm">
                  Leading the industry in environmental responsibility and green initiatives
                </p>
              </div>
              <div>
                <Users className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Community Focus</h3>
                <p className="text-sm">
                  Expanding our social impact through strategic partnerships and programs
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Partner With Us
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join us in our journey of excellence, innovation, and positive impact. 
              Whether you're looking for premium properties or meaningful partnerships, 
              we're here to create value together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="group-primary" size="lg">
                Contact Our Team
              </Button>
              <Button variant="ngo-outline" size="lg" asChild>
                <Link to="/ngo/contact">
                  <Heart className="mr-2 h-5 w-5" />
                  Support Our Cause
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GroupAbout;