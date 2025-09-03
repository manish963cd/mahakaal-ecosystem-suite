import { Link } from "react-router-dom";
import { ArrowRight, Heart, Users, BookOpen, Stethoscope, Home } from "lucide-react";
import ngoHeroImage from "../../assets/ngo-hero.jpg";
import educationImage from "../../assets/education-program.jpg";
import Footer from "../../components/shared/Footer";

const NgoHome = () => {
  return (
    <div className="pt-16">{/* Account for fixed navbar */}
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={ngoHeroImage} 
            alt="Mahakaal NGO - Empowering Communities" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ngo-primary/90 via-ngo-primary/70 to-transparent"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="max-w-4xl">
            <div className="flex items-center space-x-2 mb-6">
              <Heart className="h-8 w-8 text-white" />
              <span className="text-white text-lg font-medium">Mahakaal Foundation</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Empowering Communities,
              <span className="block text-transparent bg-gradient-to-r from-white to-hope-light bg-clip-text">
                Transforming Lives
              </span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
              Through education, healthcare, and community development, we're building a brighter future 
              for underserved communities across India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/ngo/donate"
                className="inline-flex items-center px-8 py-4 bg-gradient-warm text-white rounded-lg hover:shadow-medium transition-all duration-300 font-medium"
              >
                <Heart className="mr-2 h-5 w-5" />
                Donate Now
              </Link>
              <Link
                to="/ngo/programs"
                className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 rounded-lg hover:bg-white hover:text-ngo-primary transition-all duration-300 font-medium"
              >
                Explore Our Programs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-2xl text-muted-foreground leading-relaxed mb-8">
              "To create sustainable change by providing quality education, accessible healthcare, 
              and livelihood opportunities to marginalized communities."
            </p>
            <Button variant="hope" asChild>
              <Link to="/ngo/about">Learn Our Story</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Core Programs */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Core Programs</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive initiatives addressing education, healthcare, and community development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Education */}
            <Card className="border-0 shadow-medium hover:shadow-strong transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="bg-gradient-impact p-4 rounded-2xl w-16 h-16 mb-6 group-hover:scale-110 transition-transform">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Education First</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Quality education programs, scholarships, and digital literacy initiatives for children in rural areas.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                  <li>• 500+ children enrolled</li>
                  <li>• 25 schools supported</li>
                  <li>• Digital learning centers</li>
                </ul>
                <Button variant="hope" size="sm" asChild>
                  <Link to="/ngo/programs">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Healthcare */}
            <Card className="border-0 shadow-medium hover:shadow-strong transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="bg-gradient-warm p-4 rounded-2xl w-16 h-16 mb-6 group-hover:scale-110 transition-transform">
                  <Stethoscope className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Healthcare Access</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Mobile clinics, health camps, and preventive care programs bringing healthcare to remote villages.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                  <li>• 50+ health camps conducted</li>
                  <li>• 10,000+ patients treated</li>
                  <li>• Mobile clinic services</li>
                </ul>
                <Button variant="compassion" size="sm" asChild>
                  <Link to="/ngo/programs">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Community Development */}
            <Card className="border-0 shadow-medium hover:shadow-strong transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="bg-gradient-hero p-4 rounded-2xl w-16 h-16 mb-6 group-hover:scale-110 transition-transform">
                  <Home className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Community Building</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Infrastructure development, skill training, and women empowerment programs for sustainable growth.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                  <li>• 15 communities served</li>
                  <li>• 200+ women trained</li>
                  <li>• Infrastructure projects</li>
                </ul>
                <Button variant="ngo-primary" size="sm" asChild>
                  <Link to="/ngo/programs">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Creating Lasting Impact</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Every donation, every volunteer hour, every program creates ripples of change 
                that transform entire communities. From providing school supplies to building 
                health centers, we're committed to sustainable development.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="text-3xl font-bold text-ngo-primary mb-2">1,000+</div>
                  <div className="text-muted-foreground">Lives Impacted</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-hope mb-2">15+</div>
                  <div className="text-muted-foreground">Villages Reached</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-compassion mb-2">500+</div>
                  <div className="text-muted-foreground">Children Educated</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-trust mb-2">25+</div>
                  <div className="text-muted-foreground">Programs Running</div>
                </div>
              </div>
              <Button variant="impact" size="lg" asChild>
                <Link to="/ngo/about">Read Success Stories</Link>
              </Button>
            </div>
            
            <div className="relative">
              <img 
                src={educationImage} 
                alt="Education program impact" 
                className="rounded-2xl shadow-strong w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ngo-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved CTA */}
      <section className="py-20 bg-gradient-impact">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Join Us in Making a Difference
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Whether through donations, volunteering, or partnerships, there are many ways 
              to be part of our mission to transform lives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="compassion" size="lg" asChild>
                <Link to="/ngo/donate">
                  <Heart className="mr-2 h-5 w-5" />
                  Donate Today
                </Link>
              </Button>
              <Button 
                variant="ngo-outline" 
                size="lg" 
                className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-ngo-primary"
                asChild
              >
                <Link to="/ngo/contact">
                  <Users className="mr-2 h-5 w-5" />
                  Volunteer With Us
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

export default NgoHome;