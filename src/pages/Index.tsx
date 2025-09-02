import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { ArrowRight, Building2, Heart, Users, TrendingUp } from "lucide-react";
import groupHeroImage from "@/assets/group-hero.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={groupHeroImage} 
            alt="Mahakaal Group - Building Tomorrow" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-group-primary/90 via-group-primary/70 to-transparent"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Building Tomorrow,
              <span className="block text-transparent bg-gradient-to-r from-white to-white/80 bg-clip-text">
                Impacting Today
              </span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              A diversified group committed to excellence in business and positive social impact. 
              From real estate to humanitarian efforts, we're creating lasting value for communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/about">
                  Explore Our Ventures
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ngo-outline" size="lg" asChild>
                <Link to="/ngo" className="bg-white/10 backdrop-blur-sm">
                  <Heart className="mr-2 h-5 w-5" />
                  Our NGO Mission
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Business Verticals */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Business Verticals
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Diverse ventures united by a common vision of growth and social responsibility
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Real Estate */}
            <Card className="border-0 shadow-medium hover:shadow-strong transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="bg-gradient-hero p-4 rounded-2xl w-16 h-16 mb-6 group-hover:scale-110 transition-transform">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Real Estate</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Premium residential and commercial properties that redefine modern living and business spaces.
                </p>
                <Button variant="outline" asChild>
                  <Link to="/estate">
                    Explore Properties
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* NGO Initiative */}
            <Card className="border-0 shadow-medium hover:shadow-strong transition-all duration-300 group bg-gradient-to-br from-hope/5 to-compassion/5">
              <CardContent className="p-8">
                <div className="bg-gradient-impact p-4 rounded-2xl w-16 h-16 mb-6 group-hover:scale-110 transition-transform">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">NGO Initiative</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Dedicated to education, healthcare, and community development across underserved regions.
                </p>
                <Button variant="hope" asChild>
                  <Link to="/ngo">
                    Join Our Mission
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Future Ventures */}
            <Card className="border-0 shadow-medium hover:shadow-strong transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="bg-gradient-warm p-4 rounded-2xl w-16 h-16 mb-6 group-hover:scale-110 transition-transform">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Future Ventures</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Expanding into technology, sustainability, and innovative solutions for tomorrow's challenges.
                </p>
                <Button variant="secondary" disabled>
                  Coming Soon
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Measurable results across our business and humanitarian efforts
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">50+</div>
              <div className="text-white/80">Properties Developed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">1000+</div>
              <div className="text-white/80">Families Helped</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">15+</div>
              <div className="text-white/80">Communities Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">₹10Cr+</div>
              <div className="text-white/80">Social Investment</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Be Part of Something Bigger?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Whether you're looking for premium properties or want to contribute to meaningful change, 
              we invite you to join the Mahakaal Group family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="group-primary" size="lg" asChild>
                <Link to="/about">
                  Learn More About Us
                </Link>
              </Button>
              <Button variant="compassion" size="lg" asChild>
                <Link to="/ngo/donate">
                  <Heart className="mr-2 h-5 w-5" />
                  Support Our NGO
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

export default Index;