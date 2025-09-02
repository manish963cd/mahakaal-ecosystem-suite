import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock, ArrowRight, Users, Award, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const NgoNews = () => {
  const newsArticles = [
    {
      id: 1,
      title: "500+ Children Receive Educational Support in Rural Maharashtra",
      excerpt: "Our latest education initiative has reached remote villages, providing school supplies, uniforms, and digital learning resources to children who previously had limited access to quality education.",
      category: "Education",
      date: "2024-01-15",
      readTime: "3 min read",
      featured: true,
      image: "/api/placeholder/600/300"
    },
    {
      id: 2,
      title: "Mobile Health Clinic Completes 50th Village Visit",
      excerpt: "A milestone achievement as our mobile health clinic program reaches its 50th village, providing free medical checkups and treatments to over 10,000 patients across underserved communities.",
      category: "Healthcare",
      date: "2024-01-10",
      readTime: "4 min read",
      featured: true,
      image: "/api/placeholder/600/300"
    },
    {
      id: 3,
      title: "Women Entrepreneurs Graduate from Skill Development Program",
      excerpt: "200 women from 15 villages have successfully completed our comprehensive skill development and entrepreneurship training, with 80% now running their own micro-businesses.",
      category: "Community Development",
      date: "2024-01-05",
      readTime: "5 min read",
      featured: false,
      image: "/api/placeholder/600/300"
    },
    {
      id: 4,
      title: "New Water Wells Bring Clean Water to 5 Villages",
      excerpt: "Infrastructure development continues with the completion of 5 new water wells, providing clean drinking water access to over 2,000 residents in previously water-scarce regions.",
      category: "Infrastructure",
      date: "2023-12-28",
      readTime: "3 min read",
      featured: false,
      image: "/api/placeholder/600/300"
    },
    {
      id: 5,
      title: "Digital Learning Centers: Bridging the Technology Gap",
      excerpt: "15 schools now have fully equipped computer labs with internet connectivity, preparing rural students for the digital future with basic computer skills and online learning resources.",
      category: "Education",
      date: "2023-12-20",
      readTime: "4 min read",
      featured: false,
      image: "/api/placeholder/600/300"
    },
    {
      id: 6,
      title: "Annual Health Camp Treats 1,000+ Patients",
      excerpt: "Our largest annual health camp provided comprehensive medical services, including specialized consultations, free medicines, and health awareness sessions to over 1,000 community members.",
      category: "Healthcare",
      date: "2023-12-15",
      readTime: "3 min read",
      featured: false,
      image: "/api/placeholder/600/300"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Education":
        return "bg-hope text-white";
      case "Healthcare":
        return "bg-compassion text-white";
      case "Community Development":
        return "bg-ngo-primary text-white";
      case "Infrastructure":
        return "bg-trust text-white";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  const featuredArticles = newsArticles.filter(article => article.featured);
  const regularArticles = newsArticles.filter(article => !article.featured);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-ngo-primary/10 via-background to-hope/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              News & Impact Stories
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Stay updated with our latest initiatives, success stories, and the positive 
              impact we're creating together in communities across India.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12">Featured Stories</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {featuredArticles.map((article) => (
                <Card key={article.id} className="border-0 shadow-medium hover:shadow-strong transition-all duration-300 group overflow-hidden">
                  <div className="aspect-video bg-gradient-impact relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-ngo-primary/80 to-hope/60 flex items-center justify-center">
                      <div className="text-center text-white">
                        <Heart className="h-16 w-16 mx-auto mb-4" />
                        <div className="text-lg font-medium">Impact Story</div>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <Badge className={getCategoryColor(article.category)}>
                        {article.category}
                      </Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <CalendarDays className="h-4 w-4 mr-1" />
                        {new Date(article.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" />
                        {article.readTime}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-ngo-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {article.excerpt}
                    </p>
                    <Button variant="ngo-outline" size="sm">
                      Read Full Story
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-4xl font-bold">All News & Updates</h2>
              <div className="flex items-center space-x-4">
                <Badge variant="outline">Education</Badge>
                <Badge variant="outline">Healthcare</Badge>
                <Badge variant="outline">Community</Badge>
                <Badge variant="outline">All</Badge>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularArticles.map((article) => (
                <Card key={article.id} className="border-0 shadow-medium hover:shadow-strong transition-all duration-300 group">
                  <div className="aspect-video bg-gradient-warm relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-compassion/70 to-hope/50 flex items-center justify-center">
                      <div className="text-center text-white">
                        <Award className="h-12 w-12 mx-auto mb-2" />
                        <div className="text-sm font-medium">Success Story</div>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge className={getCategoryColor(article.category)} variant="secondary">
                        {article.category}
                      </Badge>
                      <div className="text-xs text-muted-foreground">
                        {article.readTime}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-3 group-hover:text-ngo-primary transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-xs text-muted-foreground">
                        <CalendarDays className="h-3 w-3 mr-1" />
                        {new Date(article.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </div>
                      <Button variant="ghost" size="sm" className="h-auto p-0 text-ngo-primary">
                        Read More
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="ngo-primary" size="lg">
                Load More Articles
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Summary */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">This Month's Impact</h2>
            <p className="text-xl text-muted-foreground mb-12">
              Here's a snapshot of the positive change we've created together this month
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-hope mb-2">150+</div>
                <div className="text-muted-foreground">Children Reached</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-compassion mb-2">8</div>
                <div className="text-muted-foreground">Health Camps</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-ngo-primary mb-2">25</div>
                <div className="text-muted-foreground">Women Trained</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-trust mb-2">3</div>
                <div className="text-muted-foreground">New Villages</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-impact">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Subscribe to our newsletter to receive the latest updates, impact stories, 
              and volunteer opportunities directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 bg-white/10 backdrop-blur-sm text-white placeholder-white/70"
              />
              <Button variant="compassion" size="lg">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NgoNews;