import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, MapPin, Calendar, Users, Car, TreePine, Zap, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Estate = () => {
  const featuredProjects = [
    {
      id: 1,
      name: "Mahakaal Heights",
      type: "Residential",
      location: "Bandra West, Mumbai",
      status: "Ready to Move",
      units: "2 & 3 BHK Apartments",
      startingPrice: "₹2.5 Cr",
      completionDate: "2024",
      image: "/api/placeholder/600/400",
      features: ["Premium Amenities", "Sea View", "Parking", "24/7 Security"]
    },
    {
      id: 2,
      name: "Corporate Plaza",
      type: "Commercial",
      location: "BKC, Mumbai", 
      status: "Under Construction",
      units: "Office Spaces",
      startingPrice: "₹1.8 Cr",
      completionDate: "Q4 2024",
      image: "/api/placeholder/600/400",
      features: ["Prime Location", "Modern Design", "High-speed Elevators", "LEED Certified"]
    },
    {
      id: 3,
      name: "Green Valley Residences",
      type: "Residential",
      location: "Pune",
      status: "Upcoming",
      units: "1, 2 & 3 BHK",
      startingPrice: "₹75 Lakh",
      completionDate: "2025",
      image: "/api/placeholder/600/400",
      features: ["Eco-friendly", "Gated Community", "Club House", "Green Spaces"]
    }
  ];

  const amenities = [
    {
      icon: Shield,
      title: "24/7 Security",
      description: "Advanced security systems with trained personnel"
    },
    {
      icon: Car,
      title: "Ample Parking",
      description: "Covered parking spaces for residents and visitors"
    },
    {
      icon: TreePine,
      title: "Green Spaces",
      description: "Landscaped gardens and eco-friendly environments"
    },
    {
      icon: Zap,
      title: "Modern Amenities",
      description: "Swimming pool, gym, clubhouse, and more"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-group-primary/10 via-background to-ngo-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Building2 className="h-16 w-16 text-group-primary mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-6">
              Premium Real Estate
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Discover exceptional residential and commercial properties that redefine modern living 
              and business spaces. Quality construction, prime locations, and customer satisfaction 
              are at the heart of every Mahakaal Group development.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-4xl font-bold text-group-primary mb-2">50+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-ngo-primary mb-2">1000+</div>
              <div className="text-muted-foreground">Happy Families</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-hope mb-2">15+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-compassion mb-2">₹500Cr+</div>
              <div className="text-muted-foreground">Properties Delivered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Explore our flagship developments that showcase our commitment to quality and innovation
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
                <Card key={project.id} className="border-0 shadow-medium hover:shadow-strong transition-all duration-300 overflow-hidden group">
                  <div className="aspect-video bg-gradient-hero relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-group-primary/70 to-ngo-primary/50 flex items-center justify-center">
                      <div className="text-center text-white">
                        <Building2 className="h-16 w-16 mx-auto mb-4" />
                        <div className="text-lg font-medium">{project.type} Project</div>
                      </div>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl group-hover:text-group-primary transition-colors">
                          {project.name}
                        </CardTitle>
                        <div className="flex items-center text-muted-foreground mt-2">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span className="text-sm">{project.location}</span>
                        </div>
                      </div>
                      <Badge 
                        variant="secondary" 
                        className={
                          project.status === "Ready to Move" 
                            ? "bg-hope text-white" 
                            : project.status === "Under Construction"
                            ? "bg-compassion text-white"
                            : "bg-ngo-primary text-white"
                        }
                      >
                        {project.status}
                      </Badge>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Type:</span>
                          <div className="font-medium">{project.units}</div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Starting:</span>
                          <div className="font-bold text-group-primary">{project.startingPrice}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>Completion: {project.completionDate}</span>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.features.map((feature, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex gap-2 pt-4">
                        <Button variant="group-primary" size="sm" className="flex-1">
                          View Details
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1">
                          Book Visit
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Why Choose Mahakaal Group</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our commitment to excellence and customer satisfaction sets us apart in the real estate industry
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {amenities.map((amenity, index) => (
                <Card key={index} className="border-0 shadow-medium text-center hover:shadow-strong transition-all">
                  <CardContent className="p-8">
                    <div className="bg-gradient-hero p-4 rounded-2xl w-16 h-16 mx-auto mb-6">
                      <amenity.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold mb-3">{amenity.title}</h3>
                    <p className="text-muted-foreground text-sm">{amenity.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our Process</h2>
              <p className="text-xl text-muted-foreground">
                Simple and transparent steps to find your perfect property
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-gradient-hero rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Consultation</h3>
                <p className="text-muted-foreground text-sm">
                  Share your requirements and budget with our expert team
                </p>
              </div>

              <div className="text-center">
                <div className="bg-gradient-impact rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Site Visit</h3>
                <p className="text-muted-foreground text-sm">
                  Visit shortlisted properties with our dedicated relationship manager
                </p>
              </div>

              <div className="text-center">
                <div className="bg-gradient-warm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Documentation</h3>
                <p className="text-muted-foreground text-sm">
                  Complete legal formalities with our support and guidance
                </p>
              </div>

              <div className="text-center">
                <div className="bg-group-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Possession</h3>
                <p className="text-muted-foreground text-sm">
                  Get your keys and start your new chapter with us
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Find Your Dream Property?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Connect with our expert team to explore exclusive properties and 
              investment opportunities that match your lifestyle and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="compassion" size="lg">
                <Users className="mr-2 h-5 w-5" />
                Schedule Site Visit
              </Button>
              <Button 
                variant="ngo-outline" 
                size="lg" 
                className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-group-primary"
              >
                Download Brochure
              </Button>
            </div>
            
            <div className="mt-8 text-white/80">
              <p className="text-sm">
                Call us: <span className="font-semibold">+91 98765 43210</span> | 
                Email: <span className="font-semibold">properties@mahakaalgroup.com</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Estate;