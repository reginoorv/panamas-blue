import { useState } from "react";
import { navLinks } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-black text-white">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          {/* Logo placeholder with TeamBuild text */}
          <div className="h-10 bg-primary text-white flex items-center justify-center px-4 rounded">
            <span className="font-bold text-lg">TeamBuild</span>
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.path} 
              className="text-white hover:text-primary transition"
            >
              {link.name}
            </a>
          ))}
        </nav>
        
        {/* CTA Button */}
        <div className="hidden md:block">
          <Button className="bg-primary hover:bg-orange-600 text-white transition">
            Get a Quote
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu} 
            className="text-white"
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
        <div className="md:hidden bg-black pb-4 px-4">
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
            <Button className="bg-primary hover:bg-orange-600 text-white w-full mt-2">
              Get a Quote
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
