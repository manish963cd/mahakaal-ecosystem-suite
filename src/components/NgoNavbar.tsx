import { Link, useLocation } from "react-router-dom";
import { Heart, Menu, X, ArrowLeft } from "lucide-react";
import { useState } from "react";

const NgoNavbar = () => {
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
            <Link to="/ngo" className="flex items-center space-x-3">
              <div className="bg-gradient-impact p-2 rounded-lg">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="font-bold text-lg text-ngo-primary">Mahakaal Foundation</h1>
                <p className="text-xs text-muted-foreground -mt-1">Empowering Communities</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="/ngo"
              className={`text-sm font-medium transition-colors ${
                isActive('/ngo') ? 'text-ngo-primary' : 'text-foreground/80 hover:text-ngo-primary'
              }`}
            >
              Home
            </Link>
            <Link
              to="/ngo/about"
              className={`text-sm font-medium transition-colors ${
                isActive('/ngo/about') ? 'text-ngo-primary' : 'text-foreground/80 hover:text-ngo-primary'
              }`}
            >
              About
            </Link>
            <Link
              to="/ngo/programs"
              className={`text-sm font-medium transition-colors ${
                isActive('/ngo/programs') ? 'text-ngo-primary' : 'text-foreground/80 hover:text-ngo-primary'
              }`}
            >
              Programs
            </Link>
            <Link
              to="/ngo/news"
              className={`text-sm font-medium transition-colors ${
                isActive('/ngo/news') ? 'text-ngo-primary' : 'text-foreground/80 hover:text-ngo-primary'
              }`}
            >
              News
            </Link>
            <Link
              to="/ngo/contact"
              className={`text-sm font-medium transition-colors ${
                isActive('/ngo/contact') ? 'text-ngo-primary' : 'text-foreground/80 hover:text-ngo-primary'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Donate CTA */}
          <div className="hidden md:block">
            <Link
              to="/ngo/donate"
              className="flex items-center space-x-2 px-4 py-2 bg-gradient-warm text-white rounded-lg hover:shadow-medium transition-all duration-300 text-sm font-medium"
            >
              <Heart className="h-4 w-4" />
              <span>Donate Now</span>
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
                to="/ngo"
                onClick={() => setIsMenuOpen(false)}
                className={`block text-sm font-medium transition-colors py-2 ${
                  isActive('/ngo') ? 'text-ngo-primary' : 'text-foreground/80'
                }`}
              >
                Home
              </Link>
              <Link
                to="/ngo/about"
                onClick={() => setIsMenuOpen(false)}
                className={`block text-sm font-medium transition-colors py-2 ${
                  isActive('/ngo/about') ? 'text-ngo-primary' : 'text-foreground/80'
                }`}
              >
                About
              </Link>
              <Link
                to="/ngo/programs"
                onClick={() => setIsMenuOpen(false)}
                className={`block text-sm font-medium transition-colors py-2 ${
                  isActive('/ngo/programs') ? 'text-ngo-primary' : 'text-foreground/80'
                }`}
              >
                Programs
              </Link>
              <Link
                to="/ngo/news"
                onClick={() => setIsMenuOpen(false)}
                className={`block text-sm font-medium transition-colors py-2 ${
                  isActive('/ngo/news') ? 'text-ngo-primary' : 'text-foreground/80'
                }`}
              >
                News
              </Link>
              <Link
                to="/ngo/contact"
                onClick={() => setIsMenuOpen(false)}
                className={`block text-sm font-medium transition-colors py-2 ${
                  isActive('/ngo/contact') ? 'text-ngo-primary' : 'text-foreground/80'
                }`}
              >
                Contact
              </Link>
              <Link
                to="/ngo/donate"
                onClick={() => setIsMenuOpen(false)}
                className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-warm text-white rounded-lg text-sm font-medium"
              >
                <Heart className="h-4 w-4" />
                <span>Donate Now</span>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default NgoNavbar;