import { 
  quickLinks, 
  pageLinks, 
  contactInfo, 
  socialLinks 
} from "@/lib/constants";
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail, Clock } from "lucide-react";

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
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            {/* Logo placeholder with TeamBuild text */}
            <div className="h-10 bg-primary text-white flex items-center justify-center px-4 rounded mb-6 w-36">
              <span className="font-bold text-lg">TeamBuild</span>
            </div>
            <p className="text-gray-400 mb-6">
              TeamBuild is a premier construction company delivering exceptional building solutions with a focus on quality, safety, and innovation.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index} 
                  href="#" 
                  aria-label={link.name}
                  className="bg-[#333333] hover:bg-primary transition h-10 w-10 rounded-full flex items-center justify-center"
                >
                  <SocialIcon name={link.icon} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold font-poppins mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.path} className="text-gray-400 hover:text-primary transition">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold font-poppins mb-6">Pages</h4>
            <ul className="space-y-3">
              {pageLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.path} className="text-gray-400 hover:text-primary transition">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold font-poppins mb-6">Contact Info</h4>
            <ul className="space-y-3">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start">
                  <ContactIcon name={item.icon} />
                  <span className="text-gray-400">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} TeamBuild. All Rights Reserved.</p>
          <p className="mt-2 text-sm">Design By <a href="#" className="text-primary">TeamBuild Studios</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
