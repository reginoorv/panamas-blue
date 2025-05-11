import { services } from "@/lib/constants";
import { Construction, Building, Hammer, HardHat } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const ServiceIcon = ({ name }: { name: string }) => {
  switch (name) {
    case "road":
      return <Construction className="text-white text-2xl" />;
    case "building":
      return <Building className="text-white text-2xl" />;
    case "hammer":
      return <Hammer className="text-white text-2xl" />;
    case "hard-hat":
      return <HardHat className="text-white text-2xl" />;
    default:
      return null;
  }
};

const StarServices = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 bg-black text-white" id="services" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-bold font-poppins mb-3 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            LAYANAN UNGGULAN <span className="text-primary">KONSTRUKSI JALAN</span>
          </h2>
          <div className={`w-20 h-1 bg-primary mx-auto mt-4 transition-all duration-1000 ${isInView ? 'opacity-100 w-20' : 'opacity-0 w-0'}`}></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`bg-[#111111] p-6 rounded-lg transition-all duration-700 hover:shadow-lg hover:shadow-primary/20 transform hover:-translate-y-2 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="bg-primary h-16 w-16 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 hover:rotate-12">
                <ServiceIcon name={service.icon} />
              </div>
              <h3 className="text-xl font-semibold mb-3 font-poppins">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StarServices;
