import { 
  quickLinks, 
  pageLinks, 
  contactInfo, 
  socialLinks 
} from "@/lib/constants";
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail, Clock, ChevronRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const SocialIcon = ({ name }: { name: string }) => {
  switch (name) {
    case "facebook":
      return <Facebook size={18} />;
    case "twitter":
      return <Twitter size={18} />;
    case "linkedin":
      return <Linkedin size={18} />;
    case "instagram":
      return <Instagram size={18} />;
    default:
      return null;
  }
};

const ContactIcon = ({ name }: { name: string }) => {
  switch (name) {
    case "map-pin":
      return <MapPin size={18} className="text-primary mt-1 mr-3 flex-shrink-0" />;
    case "phone":
      return <Phone size={18} className="text-primary mt-1 mr-3 flex-shrink-0" />;
    case "mail":
      return <Mail size={18} className="text-primary mt-1 mr-3 flex-shrink-0" />;
    case "clock":
      return <Clock size={18} className="text-primary mt-1 mr-3 flex-shrink-0" />;
    default:
      return null;
  }
};

export const Footer = () => {
  const [isInView, setIsInView] = useState(false);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer className="bg-black text-white relative overflow-hidden" ref={footerRef}>
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute h-40 w-40 rounded-full bg-primary/5 -top-20 -left-20"></div>
        <div className="absolute h-60 w-60 rounded-full bg-primary/5 bottom-0 right-0 translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Logo with PT Panamas Multi Konstruksi text */}
            <div className="h-10 bg-primary text-white flex items-center justify-center px-4 rounded mb-6 w-48 shadow-lg transition-transform duration-300 hover:scale-105">
              <span className="font-bold text-lg">PT Panamas</span>
            </div>
            <p className="text-gray-400 mb-6">
              PT Panamas Multi Konstruksi adalah perusahaan konstruksi jalan yang mengedepankan profesionalisme, kualitas, dan inovasi dalam setiap proyek.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index} 
                  href="#" 
                  aria-label={link.name}
                  className="bg-[#333333] hover:bg-primary transition-all duration-300 h-10 w-10 rounded-full flex items-center justify-center hover:scale-110"
                >
                  <SocialIcon name={link.icon} />
                </a>
              ))}
            </div>
          </div>
          
          <div className={`transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h4 className="text-xl font-semibold font-poppins mb-6">Link Cepat</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index} className="group">
                  <a href={link.path} className="text-gray-400 hover:text-primary transition-all duration-300 flex items-center">
                    <ChevronRight className="h-4 w-0 opacity-0 group-hover:w-4 group-hover:opacity-100 transition-all duration-300 mr-0 group-hover:mr-1 text-primary" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className={`transition-all duration-700 delay-400 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h4 className="text-xl font-semibold font-poppins mb-6">Halaman</h4>
            <ul className="space-y-3">
              {pageLinks.map((link, index) => (
                <li key={index} className="group">
                  <a href={link.path} className="text-gray-400 hover:text-primary transition-all duration-300 flex items-center">
                    <ChevronRight className="h-4 w-0 opacity-0 group-hover:w-4 group-hover:opacity-100 transition-all duration-300 mr-0 group-hover:mr-1 text-primary" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className={`transition-all duration-700 delay-600 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h4 className="text-xl font-semibold font-poppins mb-6">Informasi Kontak</h4>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start group">
                  <ContactIcon name={item.icon} />
                  <span className="text-gray-400 group-hover:text-gray-300 transition-all duration-300">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} PT Panamas Multi Konstruksi. Hak Cipta Dilindungi.</p>
          <p className="mt-2 text-sm">Didesain oleh <a href="#" className="text-primary hover:text-primary/80 transition-colors duration-300">Panamas Digital Studio</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
