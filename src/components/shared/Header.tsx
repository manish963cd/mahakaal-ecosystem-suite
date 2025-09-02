import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Building2, Menu } from "lucide-react";

const Header = () => {
  const location = useLocation();
  const isNgoSection = location.pathname.startsWith('/ngo');

  return (
    <header className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-hero p-2 rounded-lg">
              <Building2 className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-lg text-group-primary">Mahakaal Group</h1>
              <p className="text-xs text-muted-foreground -mt-1">Building Tomorrow</p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* Group Navigation */}
            <div className="flex items-center space-x-6">
              <Link
                to="/"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === '/' ? 'text-primary' : 'text-foreground/80'
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === '/about' ? 'text-primary' : 'text-foreground/80'
                }`}
              >
                About
              </Link>
              <Link
                to="/estate"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === '/estate' ? 'text-primary' : 'text-foreground/80'
                }`}
              >
                Estate
              </Link>
            </div>

            {/* NGO Section Separator */}
            <div className="h-6 w-px bg-border"></div>

            {/* NGO Navigation */}
            <Link
              to="/ngo"
              className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all ${
                isNgoSection 
                  ? 'bg-ngo-primary text-ngo-primary-foreground' 
                  : 'text-ngo-primary hover:bg-ngo-primary/10'
              }`}
            >
              <Heart className="h-4 w-4" />
              <span className="text-sm font-medium">NGO</span>
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            {isNgoSection ? (
              <Button variant="compassion" size="sm" asChild>
                <Link to="/ngo/donate">Donate Now</Link>
              </Button>
            ) : (
              <Button variant="group-primary" size="sm">
                Contact Us
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;