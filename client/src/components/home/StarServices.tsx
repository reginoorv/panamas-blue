import { services } from "@/lib/constants";
import { Construction, Building, Hammer, HardHat, ChevronRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";

// Definisikan gambar untuk setiap layanan
const serviceImages = [
  "/src/assets/Emulsions-in-Road-Construction.jpg",
  "/src/assets/Road-Contruction-Banner.jpg",
  "/src/assets/1200px-Road_construction_in_progress.jpg",
  "/src/assets/jamar-penny-ZgmGq_eFmUs-unsplash.jpg"
];

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
  const [hoverStates, setHoverStates] = useState(Array(services.length).fill(false));

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

  const handleMouseEnter = (index: number) => {
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = true;
    setHoverStates(newHoverStates);
  };

  const handleMouseLeave = (index: number) => {
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = false;
    setHoverStates(newHoverStates);
  };

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
              className={`relative overflow-hidden rounded-lg transition-all duration-700 transform hover:-translate-y-2 hover:shadow-xl shadow-lg ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              {/* Background image dengan overlay gradien */}
              <div className="relative h-64">
                <img 
                  src={serviceImages[index]} 
                  alt={service.title} 
                  className={`w-full h-full object-cover transition-transform duration-700 ${hoverStates[index] ? 'scale-110' : 'scale-100'}`}
                />
                {/* Overlay gradien yang beranimasi */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent transition-opacity duration-500 ${hoverStates[index] ? 'opacity-90' : 'opacity-70'}`}></div>
                
                {/* Garis aksen dengan animasi */}
                <div className={`absolute left-0 bottom-0 h-1 bg-primary transition-all duration-500 ${hoverStates[index] ? 'w-full' : 'w-16'}`}></div>
                
                {/* Konten */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className={`bg-primary h-14 w-14 rounded-lg flex items-center justify-center mb-4 transition-all duration-500 ${hoverStates[index] ? 'translate-y-0 rotate-0' : '-translate-y-2 rotate-12'}`}>
                    <ServiceIcon name={service.icon} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 font-poppins text-white">{service.title}</h3>
                  <p className={`text-gray-200 transition-all duration-500 ${hoverStates[index] ? 'opacity-100 max-h-24' : 'opacity-80 max-h-16 overflow-hidden'}`}>
                    {service.description}
                  </p>
                  
                  {/* Tombol "Lihat Detail" dengan animasi */}
                  <div className={`mt-4 overflow-hidden transition-all duration-500 ${hoverStates[index] ? 'h-8 opacity-100' : 'h-0 opacity-0'}`}>
                    <a href="#" className="inline-flex items-center text-primary group">
                      <span>Lihat Detail</span>
                      <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StarServices;
