import { Link } from "react-router-dom";
import { Building2, Menu, X } from "lucide-react";
import { useState } from "react";

const MainNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-gradient-hero p-2 rounded-lg">
              <Building2 className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-lg text-group-primary">Mahakaal Group</h1>
              <p className="text-xs text-muted-foreground -mt-1">Building Tomorrow</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              to="/estate"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Estate Division
            </Link>
            <Link
              to="/ngo"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              NGO Foundation
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/ngo/donate"
              className="px-4 py-2 bg-gradient-impact text-white rounded-lg hover:shadow-medium transition-all duration-300 text-sm font-medium"
            >
              Support Our Cause
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
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="block text-sm font-medium text-foreground/80 hover:text-primary transition-colors py-2"
              >
                Home
              </Link>
              <Link
                to="/estate"
                onClick={() => setIsMenuOpen(false)}
                className="block text-sm font-medium text-foreground/80 hover:text-primary transition-colors py-2"
              >
                Estate Division
              </Link>
              <Link
                to="/ngo"
                onClick={() => setIsMenuOpen(false)}
                className="block text-sm font-medium text-foreground/80 hover:text-primary transition-colors py-2"
              >
                NGO Foundation
              </Link>
              <Link
                to="/ngo/donate"
                onClick={() => setIsMenuOpen(false)}
                className="inline-block px-4 py-2 bg-gradient-impact text-white rounded-lg text-sm font-medium"
              >
                Support Our Cause
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default MainNavbar;