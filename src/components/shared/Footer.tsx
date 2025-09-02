import { Link } from "react-router-dom";
import { Building2, Heart, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-group-primary text-group-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-white/10 p-2 rounded-lg">
                <Building2 className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Mahakaal Group</h3>
                <p className="text-sm text-white/80">Building Tomorrow</p>
              </div>
            </div>
            <p className="text-sm text-white/80 leading-relaxed">
              A diversified group committed to excellence in business and positive social impact through our various ventures.
            </p>
          </div>

          {/* Group Services */}
          <div>
            <h4 className="font-semibold mb-4">Group Services</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm text-white/80 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-white/80 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/estate" className="text-sm text-white/80 hover:text-white transition-colors">
                  Real Estate
                </Link>
              </li>
            </ul>
          </div>

          {/* NGO Section */}
          <div>
            <h4 className="font-semibold mb-4 flex items-center space-x-2">
              <Heart className="h-4 w-4" />
              <span>NGO Initiative</span>
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/ngo" className="text-sm text-white/80 hover:text-white transition-colors">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link to="/ngo/programs" className="text-sm text-white/80 hover:text-white transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/ngo/donate" className="text-sm text-white/80 hover:text-white transition-colors">
                  Donate
                </Link>
              </li>
              <li>
                <Link to="/ngo/contact" className="text-sm text-white/80 hover:text-white transition-colors">
                  Get Involved
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <p className="text-sm text-white/80">
                  Corporate Office<br />
                  Business District<br />
                  City, State - 123456
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <p className="text-sm text-white/80">+91 98765 43210</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <p className="text-sm text-white/80">info@mahakaalgroup.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-sm text-white/80">
            © 2024 Mahakaal Group. All rights reserved. | Building businesses, changing lives.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;