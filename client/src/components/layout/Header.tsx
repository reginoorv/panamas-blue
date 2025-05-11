import { useState, useEffect } from "react";
import { navLinks } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Effect for scroll animation
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`bg-black text-white sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'py-2 shadow-lg' : 'py-3'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          {/* Logo with PT Panamas Multi Konstruksi text */}
          <div className="h-10 bg-primary text-white flex items-center justify-center px-4 rounded transition-transform duration-300 hover:scale-105">
            <span className="font-bold text-lg">PT Panamas</span>
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.path} 
              className="text-white hover:text-primary transition duration-300 hover:-translate-y-1"
            >
              {link.name}
            </a>
          ))}
        </nav>
        
        {/* CTA Button */}
        <div className="hidden md:block">
          <Button className="bg-primary hover:bg-orange-600 text-white transition duration-300 hover:scale-105">
            Hubungi Kami
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu} 
            className="text-white transition duration-300 hover:text-primary"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black pb-4 px-4 animate-accordion-down">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.path} 
                className="text-white hover:text-primary transition py-2"
              >
                {link.name}
              </a>
            ))}
            <Button className="bg-primary hover:bg-orange-600 text-white w-full mt-2 transition duration-300">
              Hubungi Kami
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
