import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Award, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const NgoAbout = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-ngo-primary/10 via-background to-hope/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Heart className="h-8 w-8 text-ngo-primary" />
              <span className="text-ngo-primary text-lg font-medium">Our Story</span>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              Founded on Compassion,
              <span className="block text-ngo-primary">Driven by Impact</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              The Mahakaal Foundation was born from a simple belief: every person deserves 
              access to education, healthcare, and opportunities to thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Our Journey</h2>
            
            <div className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">The Beginning (2020)</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    What started as a small initiative to support local schools during the pandemic 
                    quickly grew into a comprehensive foundation. Seeing the urgent need for education 
                    and healthcare in underserved communities, we committed to making a lasting difference.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-ngo-primary/10 to-hope/5 p-8 rounded-2xl">
                  <div className="text-3xl font-bold text-ngo-primary mb-2">2020</div>
                  <div className="text-lg font-medium mb-2">Foundation Established</div>
                  <div className="text-muted-foreground">Started with 3 schools and a dream</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="bg-gradient-to-br from-hope/10 to-compassion/5 p-8 rounded-2xl md:order-1">
                  <div className="text-3xl font-bold text-hope mb-2">2022</div>
                  <div className="text-lg font-medium mb-2">Healthcare Initiative</div>
                  <div className="text-muted-foreground">Launched mobile clinics and health camps</div>
                </div>
                <div className="md:order-2">
                  <h3 className="text-2xl font-bold mb-4">Expanding Our Reach</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Recognizing that education alone wasn't enough, we expanded into healthcare and 
                    community development. Our mobile clinics began reaching remote villages, 
                    providing essential medical care where it was needed most.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Today & Beyond</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Today, we serve 15+ communities with comprehensive programs in education, 
                    healthcare, and livelihood development. Our impact continues to grow as we 
                    work towards our vision of empowered, self-sustaining communities.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-compassion/10 to-trust/5 p-8 rounded-2xl">
                  <div className="text-3xl font-bold text-compassion mb-2">2024</div>
                  <div className="text-lg font-medium mb-2">Sustainable Impact</div>
                  <div className="text-muted-foreground">1000+ lives transformed across 15+ villages</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every decision and action we take
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-medium text-center">
              <CardContent className="p-8">
                <div className="bg-gradient-impact p-4 rounded-full w-16 h-16 mx-auto mb-6">
                  <Heart className="h-8 w-8 text-white mx-auto mt-1" />
                </div>
                <h3 className="text-xl font-bold mb-3">Compassion</h3>
                <p className="text-muted-foreground text-sm">
                  Every action is driven by genuine care for the communities we serve
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-medium text-center">
              <CardContent className="p-8">
                <div className="bg-gradient-hero p-4 rounded-full w-16 h-16 mx-auto mb-6">
                  <Award className="h-8 w-8 text-white mx-auto mt-1" />
                </div>
                <h3 className="text-xl font-bold mb-3">Excellence</h3>
                <p className="text-muted-foreground text-sm">
                  We strive for the highest standards in all our programs and initiatives
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-medium text-center">
              <CardContent className="p-8">
                <div className="bg-gradient-warm p-4 rounded-full w-16 h-16 mx-auto mb-6">
                  <Users className="h-8 w-8 text-white mx-auto mt-1" />
                </div>
                <h3 className="text-xl font-bold mb-3">Community</h3>
                <p className="text-muted-foreground text-sm">
                  We believe in working with communities, not just for them
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-medium text-center">
              <CardContent className="p-8">
                <div className="bg-ngo-primary p-4 rounded-full w-16 h-16 mx-auto mb-6">
                  <Globe className="h-8 w-8 text-white mx-auto mt-1" />
                </div>
                <h3 className="text-xl font-bold mb-3">Sustainability</h3>
                <p className="text-muted-foreground text-sm">
                  Creating long-term solutions that communities can own and maintain
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Dedicated individuals working tirelessly to create positive change
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-medium">
              <CardContent className="p-12 text-center">
                <div className="w-24 h-24 bg-gradient-impact rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Leadership</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Our leadership team brings together decades of experience in social work, 
                  healthcare, education, and community development. Led by passionate individuals 
                  who believe in the power of grassroots change, we work closely with local 
                  communities to identify needs and develop sustainable solutions.
                </p>
                <Button variant="hope" asChild>
                  <Link to="/ngo/contact">Connect With Us</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-20 bg-gradient-impact">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Impact by Numbers
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Measurable results from our commitment to transforming lives
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">1000+</div>
              <div className="text-white/80">Lives Impacted</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">500+</div>
              <div className="text-white/80">Children Educated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">15+</div>
              <div className="text-white/80">Communities Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">25+</div>
              <div className="text-white/80">Active Programs</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Be Part of Our Story
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Every chapter of our journey is written with the support of people who believe 
              in our mission. Join us in creating the next chapter of positive change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="compassion" size="lg" asChild>
                <Link to="/ngo/donate">
                  <Heart className="mr-2 h-5 w-5" />
                  Support Our Mission
                </Link>
              </Button>
              <Button variant="ngo-outline" size="lg" asChild>
                <Link to="/ngo/programs">
                  Explore Our Programs
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

export default NgoAbout;