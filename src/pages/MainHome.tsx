import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Building2, Heart, ArrowRight, Users, Award, Target } from 'lucide-react';
import MainNavbar from '../components/MainNavbar';
import Footer from '../components/shared/Footer';
import groupHeroImage from '../assets/group-hero.jpg';
import ngoHeroImage from '../assets/ngo-hero.jpg';

const MainHome = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 'estate',
      title: 'Mahakaal Group',
      subtitle: 'Building Tomorrow, Today',
      description: 'Premium real estate development with innovative architecture and sustainable design solutions for modern living.',
      image: groupHeroImage,
      cta: 'Explore Estate',
      link: '/estate',
      gradient: 'from-group-primary via-group-primary/90 to-group-primary/70'
    },
    {
      id: 'ngo',
      title: 'Mahakaal Foundation',
      subtitle: 'Empowering Communities',
      description: 'Creating lasting impact through education, healthcare, and community development programs across rural India.',
      image: ngoHeroImage,
      cta: 'Support Our Mission',
      link: '/ngo',
      gradient: 'from-ngo-primary via-ngo-primary/90 to-ngo-primary/70'
    }
  ];

  // Auto-rotate slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="min-h-screen bg-background">
      <MainNavbar />
      
      {/* Dynamic Hero Carousel */}
      <section className="relative h-screen overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide 
                ? 'opacity-100 translate-x-0' 
                : index < currentSlide 
                ? 'opacity-0 -translate-x-full' 
                : 'opacity-0 translate-x-full'
            }`}
          >
            <div className="absolute inset-0">
              <img 
                src={slide.image} 
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient}`}></div>
            </div>
            
            <div className="relative container mx-auto px-4 h-full flex items-center">
              <div className="max-w-3xl text-white">
                <div className="flex items-center space-x-2 mb-6 animate-fade-in">
                  {slide.id === 'estate' ? (
                    <Building2 className="h-8 w-8" />
                  ) : (
                    <Heart className="h-8 w-8" />
                  )}
                  <span className="text-lg font-medium">{slide.title}</span>
                </div>
                
                <h1 className="text-6xl lg:text-8xl font-bold mb-6 leading-tight animate-fade-in">
                  {slide.subtitle.split(' ').map((word, i) => (
                    <span key={i} className={i === slide.subtitle.split(' ').length - 1 ? 'block text-white/90' : ''}>
                      {word}{i < slide.subtitle.split(' ').length - 1 ? ' ' : ''}
                    </span>
                  ))}
                </h1>
                
                <p className="text-xl mb-8 leading-relaxed max-w-2xl text-white/90 animate-fade-in">
                  {slide.description}
                </p>
                
                <Link
                  to={slide.link}
                  className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-medium animate-fade-in"
                >
                  {slide.cta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        ))}
        
        {/* Navigation Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-all"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-all"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white' : 'bg-white/40'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Main Section Cards */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Discover Our Divisions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Two powerful divisions working together to create lasting impact in business and social development
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Estate Card */}
            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-strong hover:shadow-lg transition-all duration-500">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={groupHeroImage} 
                  alt="Mahakaal Estate Division"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-group-primary/60 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="flex items-center space-x-2 mb-4">
                  <Building2 className="h-6 w-6" />
                  <span className="font-medium">Real Estate</span>
                </div>
                <h3 className="text-3xl font-bold mb-4">Estate Division</h3>
                <p className="text-white/90 mb-6 leading-relaxed">
                  Premium residential and commercial developments with cutting-edge architecture and sustainable design.
                </p>
                <Link
                  to="/estate"
                  className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg hover:bg-white hover:text-group-primary transition-all duration-300"
                >
                  Explore Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* NGO Card */}
            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-strong hover:shadow-lg transition-all duration-500">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={ngoHeroImage} 
                  alt="Mahakaal Foundation"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ngo-primary/60 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="flex items-center space-x-2 mb-4">
                  <Heart className="h-6 w-6" />
                  <span className="font-medium">Social Impact</span>
                </div>
                <h3 className="text-3xl font-bold mb-4">NGO Foundation</h3>
                <p className="text-white/90 mb-6 leading-relaxed">
                  Empowering communities through education, healthcare, and sustainable development programs.
                </p>
                <Link
                  to="/ngo"
                  className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg hover:bg-white hover:text-ngo-primary transition-all duration-300"
                >
                  Join Our Mission
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Mahakaal Group */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">About Mahakaal Group</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A visionary conglomerate combining business excellence with social responsibility. 
              Since our inception, we've been committed to creating value for society through 
              innovative real estate solutions and meaningful community development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 rounded-2xl bg-gradient-hero text-white">
              <Target className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Our Vision</h3>
              <p className="text-white/90 leading-relaxed">
                To be a catalyst for positive change, building sustainable communities and 
                empowering lives through innovation and compassion.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-gradient-impact text-white">
              <Users className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Our Mission</h3>
              <p className="text-white/90 leading-relaxed">
                Creating exceptional living spaces while fostering social development 
                through education, healthcare, and community empowerment initiatives.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-gradient-warm text-white">
              <Award className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Our Values</h3>
              <p className="text-white/90 leading-relaxed">
                Integrity, innovation, and social responsibility guide everything we do. 
                We believe in building not just structures, but lasting relationships.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-hope mb-2">500+</div>
              <div className="text-muted-foreground">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-compassion mb-2">1000+</div>
              <div className="text-muted-foreground">Lives Impacted</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-trust mb-2">25+</div>
              <div className="text-muted-foreground">Communities Served</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MainHome;