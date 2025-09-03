import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Users, Award, MapPin, Phone, Mail } from 'lucide-react';
import groupHeroImage from '../../assets/group-hero.jpg';

const EstateHome = () => {
  return (
    <div className="pt-16"> {/* Account for fixed navbar */}
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img 
            src={groupHeroImage} 
            alt="Mahakaal Estate - Premium Real Estate Development" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-group-primary/90 via-group-primary/70 to-transparent"></div>
        </div>
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center space-x-2 mb-6">
              <Building2 className="h-8 w-8 text-white" />
              <span className="text-white text-lg font-medium">Mahakaal Estate</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Building Tomorrow,
              <span className="block text-transparent bg-gradient-to-r from-white to-blue-200 bg-clip-text">
                Today
              </span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
              Premium residential and commercial developments with innovative architecture, 
              sustainable design, and modern amenities for the future of living.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/estate/projects"
                className="inline-flex items-center px-8 py-4 bg-gradient-hero text-white rounded-lg hover:shadow-medium transition-all duration-300 font-medium"
              >
                <Building2 className="mr-2 h-5 w-5" />
                View Projects
              </Link>
              <Link
                to="/estate/contact"
                className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 rounded-lg hover:bg-white hover:text-group-primary transition-all duration-300 font-medium"
              >
                Get Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive real estate solutions from concept to completion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Residential */}
            <div className="bg-white rounded-2xl shadow-medium hover:shadow-strong transition-all duration-300 group border-0 p-8">
              <div className="bg-gradient-hero p-4 rounded-2xl w-16 h-16 mb-6 group-hover:scale-110 transition-transform">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Residential Projects</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Modern apartments, luxury villas, and gated communities designed for contemporary living.
              </p>
              <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                <li>• Premium apartments & villas</li>
                <li>• Gated communities</li>
                <li>• Modern amenities</li>
              </ul>
              <Link
                to="/estate/projects"
                className="inline-flex items-center px-4 py-2 bg-gradient-hero text-white rounded-lg hover:shadow-medium transition-all duration-300 text-sm font-medium"
              >
                View Projects
              </Link>
            </div>

            {/* Commercial */}
            <div className="bg-white rounded-2xl shadow-medium hover:shadow-strong transition-all duration-300 group border-0 p-8">
              <div className="bg-gradient-impact p-4 rounded-2xl w-16 h-16 mb-6 group-hover:scale-110 transition-transform">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Commercial Spaces</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Office complexes, retail spaces, and mixed-use developments for business growth.
              </p>
              <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                <li>• Office complexes</li>
                <li>• Retail spaces</li>
                <li>• Mixed-use developments</li>
              </ul>
              <Link
                to="/estate/projects"
                className="inline-flex items-center px-4 py-2 bg-gradient-impact text-white rounded-lg hover:shadow-medium transition-all duration-300 text-sm font-medium"
              >
                Learn More
              </Link>
            </div>

            {/* Consultation */}
            <div className="bg-white rounded-2xl shadow-medium hover:shadow-strong transition-all duration-300 group border-0 p-8">
              <div className="bg-gradient-warm p-4 rounded-2xl w-16 h-16 mb-6 group-hover:scale-110 transition-transform">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Consultation Services</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Expert real estate consultation, investment advice, and project management services.
              </p>
              <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                <li>• Investment consultation</li>
                <li>• Project management</li>
                <li>• Market analysis</li>
              </ul>
              <Link
                to="/estate/services"
                className="inline-flex items-center px-4 py-2 bg-gradient-warm text-white rounded-lg hover:shadow-medium transition-all duration-300 text-sm font-medium"
              >
                Get Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our latest developments and upcoming projects
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Project 1 */}
            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-strong">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={groupHeroImage} 
                  alt="Mahakaal Heights - Premium Residential Complex"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-group-primary/60 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="flex items-center space-x-2 mb-2">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">Prime Location, City Center</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Mahakaal Heights</h3>
                <p className="text-white/90 mb-4 text-sm">
                  Luxury residential complex with modern amenities and panoramic city views.
                </p>
                <Link
                  to="/estate/projects"
                  className="inline-flex items-center text-sm font-medium hover:underline"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-strong">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={groupHeroImage} 
                  alt="Mahakaal Business Park - Commercial Complex"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-group-primary/60 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="flex items-center space-x-2 mb-2">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">Business District</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Mahakaal Business Park</h3>
                <p className="text-white/90 mb-4 text-sm">
                  State-of-the-art commercial complex designed for modern businesses.
                </p>
                <Link
                  to="/estate/projects"
                  className="inline-flex items-center text-sm font-medium hover:underline"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/estate/projects"
              className="inline-flex items-center px-8 py-4 bg-gradient-hero text-white rounded-lg hover:shadow-medium transition-all duration-300 font-medium"
            >
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Build Your Dream?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let us help you find the perfect property or bring your development vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/estate/contact"
                className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 rounded-lg hover:bg-white hover:text-group-primary transition-all duration-300 font-medium"
              >
                <Phone className="mr-2 h-5 w-5" />
                Get Quote
              </Link>
              <Link
                to="/estate/contact"
                className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 rounded-lg hover:bg-white hover:text-group-primary transition-all duration-300 font-medium"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EstateHome;