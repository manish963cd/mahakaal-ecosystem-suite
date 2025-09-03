import { Link, useLocation } from "react-router-dom";
import { Building2, Menu, X, ArrowLeft } from "lucide-react";
import { useState } from "react";

const EstateNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Back to Main + Logo */}
          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className="flex items-center space-x-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="hidden sm:inline">Back to Main</span>
            </Link>
            <div className="h-6 w-px bg-border"></div>
            <Link to="/estate" className="flex items-center space-x-3">
              <div className="bg-gradient-hero p-2 rounded-lg">
                <Building2 className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="font-bold text-lg text-group-primary">Mahakaal Estate</h1>
                <p className="text-xs text-muted-foreground -mt-1">Building Tomorrow</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="/estate"
              className={`text-sm font-medium transition-colors ${
                isActive('/estate') ? 'text-primary' : 'text-foreground/80 hover:text-primary'
              }`}
            >
              Home
            </Link>
            <Link
              to="/estate/projects"
              className={`text-sm font-medium transition-colors ${
                isActive('/estate/projects') ? 'text-primary' : 'text-foreground/80 hover:text-primary'
              }`}
            >
              Projects
            </Link>
            <Link
              to="/estate/services"
              className={`text-sm font-medium transition-colors ${
                isActive('/estate/services') ? 'text-primary' : 'text-foreground/80 hover:text-primary'
              }`}
            >
              Services
            </Link>
            <Link
              to="/estate/contact"
              className={`text-sm font-medium transition-colors ${
                isActive('/estate/contact') ? 'text-primary' : 'text-foreground/80 hover:text-primary'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Contact CTA */}
          <div className="hidden md:block">
            <Link
              to="/estate/contact"
              className="px-4 py-2 bg-gradient-hero text-white rounded-lg hover:shadow-medium transition-all duration-300 text-sm font-medium"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-accent rounded-lg transition-colors"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-border animate-fade-in">
            <nav className="container mx-auto px-4 py-4 space-y-4">
              <Link
                to="/estate"
                onClick={() => setIsMenuOpen(false)}
                className={`block text-sm font-medium transition-colors py-2 ${
                  isActive('/estate') ? 'text-primary' : 'text-foreground/80'
                }`}
              >
                Home
              </Link>
              <Link
                to="/estate/projects"
                onClick={() => setIsMenuOpen(false)}
                className={`block text-sm font-medium transition-colors py-2 ${
                  isActive('/estate/projects') ? 'text-primary' : 'text-foreground/80'
                }`}
              >
                Projects
              </Link>
              <Link
                to="/estate/services"
                onClick={() => setIsMenuOpen(false)}
                className={`block text-sm font-medium transition-colors py-2 ${
                  isActive('/estate/services') ? 'text-primary' : 'text-foreground/80'
                }`}
              >
                Services
              </Link>
              <Link
                to="/estate/contact"
                onClick={() => setIsMenuOpen(false)}
                className={`block text-sm font-medium transition-colors py-2 ${
                  isActive('/estate/contact') ? 'text-primary' : 'text-foreground/80'
                }`}
              >
                Contact
              </Link>
              <Link
                to="/estate/contact"
                onClick={() => setIsMenuOpen(false)}
                className="inline-block px-4 py-2 bg-gradient-hero text-white rounded-lg text-sm font-medium"
              >
                Get Quote
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default EstateNavbar;