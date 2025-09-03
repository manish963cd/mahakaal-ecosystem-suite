import { Link } from 'react-router-dom';
import { MapPin, Calendar, Building2, Users } from 'lucide-react';
import groupHeroImage from '../../assets/group-hero.jpg';

const EstateProjects = () => {
  const projects = [
    {
      id: 1,
      name: 'Mahakaal Heights',
      location: 'Prime Location, City Center',
      type: 'Residential',
      status: 'Ready to Move',
      units: '2BHK, 3BHK Apartments',
      price: '₹45L - ₹80L',
      image: groupHeroImage,
      features: ['Swimming Pool', 'Gym', 'Garden', 'Security', 'Parking', 'Clubhouse']
    },
    {
      id: 2,
      name: 'Mahakaal Business Park',
      location: 'Business District',
      type: 'Commercial',
      status: 'Under Construction',
      units: 'Office Spaces',
      price: '₹25L - ₹2Cr',
      image: groupHeroImage,
      features: ['24/7 Security', 'Power Backup', 'Cafeteria', 'Parking', 'Conference Rooms', 'High-speed Internet']
    },
    {
      id: 3,
      name: 'Mahakaal Residency',
      location: 'Suburban Area',
      type: 'Residential',
      status: 'Launching Soon',
      units: '1BHK, 2BHK, 3BHK',
      price: '₹30L - ₹65L',
      image: groupHeroImage,
      features: ['Children Play Area', 'Jogging Track', 'Community Hall', 'Gardens', 'Security', 'Shopping Complex']
    },
    {
      id: 4,
      name: 'Mahakaal Villas',
      location: 'Gated Community',
      type: 'Luxury Residential',
      status: 'Pre-launch',
      units: '3BHK, 4BHK Villas',
      price: '₹1.2Cr - ₹2.5Cr',
      image: groupHeroImage,
      features: ['Private Garden', 'Home Automation', 'Swimming Pool', 'Car Parking', 'Premium Interiors', 'Gated Security']
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Ready to Move':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Under Construction':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Launching Soon':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Pre-launch':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="pt-16 min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Our Projects</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover our portfolio of premium residential and commercial developments
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-2xl shadow-medium hover:shadow-strong transition-all duration-300 overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                      <div className="flex items-center text-muted-foreground mb-2">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span className="text-sm">{project.location}</span>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div>
                      <span className="text-muted-foreground">Type:</span>
                      <div className="font-medium">{project.type}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Units:</span>
                      <div className="font-medium">{project.units}</div>
                    </div>
                    <div className="col-span-2">
                      <span className="text-muted-foreground">Price Range:</span>
                      <div className="font-bold text-lg text-primary">{project.price}</div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <span className="text-sm text-muted-foreground mb-2 block">Features:</span>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, index) => (
                        <span key={index} className="px-2 py-1 bg-secondary text-xs rounded-md">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Link
                      to="/estate/contact"
                      className="flex-1 px-4 py-2 bg-gradient-hero text-white rounded-lg hover:shadow-medium transition-all duration-300 text-sm font-medium text-center"
                    >
                      Get Details
                    </Link>
                    <Link
                      to="/estate/contact"
                      className="flex-1 px-4 py-2 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-300 text-sm font-medium text-center"
                    >
                      Schedule Visit
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Guide */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Why Invest With Mahakaal Estate?</h2>
            <p className="text-xl text-muted-foreground mb-12">
              Your trusted partner in real estate investment and development
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="bg-gradient-hero p-4 rounded-2xl w-16 h-16 mx-auto mb-4">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Quality Construction</h3>
                <p className="text-muted-foreground">Premium materials and expert craftsmanship in every project</p>
              </div>
              
              <div className="text-center p-6">
                <div className="bg-gradient-impact p-4 rounded-2xl w-16 h-16 mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Timely Delivery</h3>
                <p className="text-muted-foreground">Committed to delivering projects on schedule</p>
              </div>
              
              <div className="text-center p-6">
                <div className="bg-gradient-warm p-4 rounded-2xl w-16 h-16 mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Customer Support</h3>
                <p className="text-muted-foreground">Dedicated support throughout your investment journey</p>
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
              Ready to Invest?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Contact our experts for personalized investment advice and project details
            </p>
            <Link
              to="/estate/contact"
              className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 rounded-lg hover:bg-white hover:text-group-primary transition-all duration-300 font-medium"
            >
              <Building2 className="mr-2 h-5 w-5" />
              Contact Our Experts
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EstateProjects;