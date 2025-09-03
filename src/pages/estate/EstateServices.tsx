import { Link } from 'react-router-dom';
import { Building2, Users, Award, TrendingUp, MapPin, Calculator, FileText, CheckCircle } from 'lucide-react';

const EstateServices = () => {
  return (
    <div className="pt-16 min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Comprehensive real estate solutions tailored to your needs
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Development Services */}
            <div className="bg-white rounded-2xl shadow-medium hover:shadow-strong transition-all duration-300 p-8">
              <div className="bg-gradient-hero p-4 rounded-2xl w-16 h-16 mb-6">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Development Services</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                End-to-end property development from concept to completion
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Residential & Commercial Development</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Architectural Design & Planning</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Construction Management</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Quality Assurance</span>
                </li>
              </ul>
            </div>

            {/* Investment Consultation */}
            <div className="bg-white rounded-2xl shadow-medium hover:shadow-strong transition-all duration-300 p-8">
              <div className="bg-gradient-impact p-4 rounded-2xl w-16 h-16 mb-6">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Investment Consultation</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Expert guidance for smart real estate investment decisions
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Market Analysis & Research</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Investment Portfolio Planning</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">ROI Calculation & Projections</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Risk Assessment</span>
                </li>
              </ul>
            </div>

            {/* Property Management */}
            <div className="bg-white rounded-2xl shadow-medium hover:shadow-strong transition-all duration-300 p-8">
              <div className="bg-gradient-warm p-4 rounded-2xl w-16 h-16 mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Property Management</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Complete property management and maintenance services
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Facility Management</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Tenant Management</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Maintenance & Repairs</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Legal & Documentation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Additional Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive support services for all your real estate needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Legal Services */}
            <div className="text-center p-6 bg-white rounded-2xl shadow-medium">
              <div className="bg-gradient-hero p-3 rounded-xl w-14 h-14 mx-auto mb-4">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">Legal Services</h3>
              <p className="text-sm text-muted-foreground">
                Documentation, registration, and legal compliance
              </p>
            </div>

            {/* Valuation */}
            <div className="text-center p-6 bg-white rounded-2xl shadow-medium">
              <div className="bg-gradient-impact p-3 rounded-xl w-14 h-14 mx-auto mb-4">
                <Calculator className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">Property Valuation</h3>
              <p className="text-sm text-muted-foreground">
                Professional property assessment and valuation
              </p>
            </div>

            {/* Site Selection */}
            <div className="text-center p-6 bg-white rounded-2xl shadow-medium">
              <div className="bg-gradient-warm p-3 rounded-xl w-14 h-14 mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">Site Selection</h3>
              <p className="text-sm text-muted-foreground">
                Strategic location analysis and site selection
              </p>
            </div>

            {/* Awards & Recognition */}
            <div className="text-center p-6 bg-white rounded-2xl shadow-medium">
              <div className="bg-gradient-hero p-3 rounded-xl w-14 h-14 mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">Quality Assurance</h3>
              <p className="text-sm text-muted-foreground">
                Award-winning quality and customer satisfaction
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A streamlined approach to deliver exceptional results
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Step 1 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-hero text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                  1
                </div>
                <h3 className="text-lg font-bold mb-2">Consultation</h3>
                <p className="text-sm text-muted-foreground">
                  Understanding your requirements and objectives
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-impact text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                  2
                </div>
                <h3 className="text-lg font-bold mb-2">Planning</h3>
                <p className="text-sm text-muted-foreground">
                  Strategic planning and market analysis
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-warm text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                  3
                </div>
                <h3 className="text-lg font-bold mb-2">Execution</h3>
                <p className="text-sm text-muted-foreground">
                  Professional implementation and management
                </p>
              </div>

              {/* Step 4 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-hero text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                  4
                </div>
                <h3 className="text-lg font-bold mb-2">Delivery</h3>
                <p className="text-sm text-muted-foreground">
                  Timely delivery with quality assurance
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Contact our experts for a free consultation and personalized service plan
            </p>
            <Link
              to="/estate/contact"
              className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 rounded-lg hover:bg-white hover:text-group-primary transition-all duration-300 font-medium"
            >
              <Users className="mr-2 h-5 w-5" />
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EstateServices;