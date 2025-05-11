import { services } from "@/lib/constants";
import { Construction, Building, Hammer, HardHat, ChevronRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";

// Definisikan gambar untuk setiap layanan
const serviceImages = [
  "https://scaleocean.com/web/image/27597-d6a4a89d/masalah-umum-dalam-konstruksi-jalan.jpg?access_token=7974e78a-2173-4602-b565-f09937a9052e",
  "https://psualatberat.com/wp-content/uploads/2025/01/Jenis-Konstruksi-Jalan-Fungsi-dan-Tahap-Pengerjaannya.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrpFCIh1amT8-na46JsWgwmK7KU0sdYBQ4uEkLGj_6JrRQpLK8iYKFzfkJhnzVVAbH1as&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcfEtTm_AgnaBnqyCBoThB9SVcmvh_QN3zqdgyYr6DhmT6IhwUpOYqJOfd2WTcp6PlWys&usqp=CAU"
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
        
        {/* Grid yang responsif - 1 kolom di mobile, 2 di tablet, 4 di desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`relative overflow-hidden rounded-lg transition-all duration-700 transform hover:-translate-y-2 hover:shadow-xl shadow-lg ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              {/* Background image dengan overlay gradien - height yang adaptif */}
              <div className="relative h-[320px] sm:h-[350px] md:h-[280px] lg:h-[340px] xl:h-[380px]">
                <img 
                  src={serviceImages[index]} 
                  alt={service.title} 
                  className={`w-full h-full object-cover transition-transform duration-700 ${hoverStates[index] ? 'scale-110' : 'scale-100'}`}
                />
                {/* Overlay gradien yang beranimasi */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40 opacity-90"></div>
                
                {/* Garis aksen dengan animasi */}
                <div className={`absolute left-0 bottom-0 h-2 bg-primary transition-all duration-500 ${hoverStates[index] ? 'w-full' : 'w-1/3'}`}></div>
                
                {/* Konten - padding yang responsif */}
                <div className="absolute inset-0 p-4 sm:p-5 md:p-6 flex flex-col justify-end">
                  <div className={`bg-primary h-12 w-12 sm:h-14 sm:w-14 rounded-lg flex items-center justify-center mb-3 sm:mb-4 transition-all duration-500 ${hoverStates[index] ? 'translate-y-0 rotate-0 scale-110' : '-translate-y-0 rotate-0 scale-100'}`}>
                    <ServiceIcon name={service.icon} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 font-poppins text-white">{service.title}</h3>
                  
                  {/* Deskripsi dengan ukuran teks responsif dan baris yang terbatas */}
                  <p className="text-sm sm:text-base text-gray-200 mb-3 sm:mb-4 line-clamp-3 sm:line-clamp-4">
                    {service.description}
                  </p>
                  
                  {/* Tombol "Lihat Detail" selalu terlihat dengan animasi */}
                  <div className="transition-all duration-500 w-full flex justify-center sm:justify-start">
                    <a href="#" className={`inline-flex items-center text-sm sm:text-base text-primary bg-black/40 px-3 py-1.5 sm:px-4 sm:py-2 rounded-md ${hoverStates[index] ? 'bg-primary text-white' : 'bg-black/40 text-primary'} group transition-all duration-300`}>
                      <span>Lihat Detail</span>
                      <ChevronRight className={`ml-1 h-4 w-4 transition-all duration-300 ${hoverStates[index] ? 'translate-x-1' : 'translate-x-0'}`} />
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
