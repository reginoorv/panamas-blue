import { Button } from "@/components/ui/button";
import { features } from "@/lib/constants";
import { Check, ArrowRight, ChevronRight, ArrowUpRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";

// Import gambar secara langsung sebagai modul
import imgConstruction from "../../assets/shane-mclendon-9jPJrfLTBi0-unsplash.jpg";
import imgAsphalt from "../../assets/1200px-Road_construction_in_progress.jpg";
import imgHighway from "../../assets/jamar-penny-ZgmGq_eFmUs-unsplash.jpg";

const BuildingDesign = () => {
  const [isInView, setIsInView] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isHoveringImage, setIsHoveringImage] = useState([false, false, false]);

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

  // Efek rotasi 3D untuk gambar
  const handleImageHover = (index: number, isHovering: boolean) => {
    const newState = [...isHoveringImage];
    newState[index] = isHovering;
    setIsHoveringImage(newState);
  };

  // Animasi fitur berganti secara otomatis
  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setActiveFeature((prev) => (prev + 1) % features.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isInView]);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50" id="projects" ref={sectionRef}>
      <div className="container mx-auto px-4">
        {/* Lingkaran dekoratif sebagai elemen desain */}
        <div className="absolute right-0 top-1/2 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute left-0 bottom-1/4 w-48 h-48 bg-primary/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
        
        <div className="max-w-2xl mx-auto text-center mb-16 relative">
          <div className={`inline-block px-4 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            TEKNOLOGI KONSTRUKSI JALAN
          </div>
          <h2 className={`text-4xl font-bold font-poppins mb-4 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Konstruksi Jalan Dengan <span className="text-primary relative">
              Teknologi Terdepan
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary opacity-30"></span>
            </span>
          </h2>
          <div className={`w-24 h-1 bg-primary mx-auto mt-4 mb-6 transition-all duration-1000 relative overflow-hidden ${isInView ? 'opacity-100 w-24' : 'opacity-0 w-0'}`}>
            <span className={`absolute inset-0 bg-white/50 transition-all duration-1500 ${isInView ? 'translate-x-full' : '-translate-x-full'}`}></span>
          </div>
          <p className={`text-gray-600 text-lg transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Kami memanfaatkan teknologi modern dan pendekatan inovatif untuk membangun infrastruktur jalan yang memaksimalkan kekuatan, ketahanan, dan keamanan.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <div className={`absolute -top-10 -left-10 w-20 h-20 border-t-4 border-l-4 border-primary opacity-30 transition-all duration-1000 ${isInView ? 'opacity-100' : 'opacity-0'}`}></div>
            
            <h3 className={`text-3xl font-semibold font-poppins mb-6 transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              Membangun Jalan <span className="text-primary">Menuju Kemajuan</span>
            </h3>
            <p className={`text-gray-600 mb-8 leading-relaxed transition-all duration-700 delay-400 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              Pendekatan kami menggabungkan keahlian tradisional dengan teknologi canggih untuk menciptakan infrastruktur jalan yang tahan lama. Kami berfokus pada praktik berkelanjutan dan solusi inovatif untuk setiap proyek.
            </p>
            
            <div className="flex flex-col space-y-6 mb-10">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className={`group flex items-start px-5 py-4 rounded-xl transition-all duration-500 cursor-pointer ${activeFeature === index ? 'bg-primary/10' : 'hover:bg-gray-100'} ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                  style={{ transitionDelay: `${500 + (index * 150)}ms` }}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className={`h-12 w-12 rounded-lg flex items-center justify-center mt-1 flex-shrink-0 transition-all duration-300 ${activeFeature === index ? 'bg-primary text-white' : 'bg-gray-100 text-primary group-hover:bg-primary/20'}`}>
                    <Check className={`transition-transform duration-300 ${activeFeature === index ? 'scale-110' : 'scale-100'}`} />
                  </div>
                  <div className="ml-4">
                    <h4 className={`text-lg font-semibold transition-colors duration-300 ${activeFeature === index ? 'text-primary' : ''}`}>{feature.title}</h4>
                    <p className={`text-gray-600 mt-1 transition-all duration-500 ${activeFeature === index ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0 overflow-hidden md:max-h-full md:opacity-100'}`}>
                      {feature.description}
                    </p>
                  </div>

                  <div className={`ml-auto self-center transition-opacity duration-300 ${activeFeature === index ? 'opacity-100' : 'opacity-0'}`}>
                    <ChevronRight className="text-primary h-5 w-5" />
                  </div>
                </div>
              ))}
            </div>
            
            <div className={`transition-all duration-700 delay-800 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <Button className="bg-primary text-white px-10 py-7 h-auto rounded-xl font-medium transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 group relative overflow-hidden">
                <span className="relative z-10">Lihat Detail Proyek</span>
                <ArrowUpRight className="ml-2 h-5 w-5 transition-all duration-300 group-hover:rotate-45 relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-orange-600 transition-transform duration-500 group-hover:translate-x-0 -translate-x-full"></div>
              </Button>
            </div>
            
            <div className={`absolute -bottom-10 -right-10 w-20 h-20 border-b-4 border-r-4 border-primary opacity-30 transition-all duration-1000 ${isInView ? 'opacity-100' : 'opacity-0'}`}></div>
          </div>
          
          <div className="grid grid-cols-12 gap-4 h-[400px] sm:h-[500px] relative">
            {/* Gambar Utama */}
            <div 
              className={`col-span-8 row-span-2 h-full relative overflow-hidden rounded-2xl transition-all duration-1000 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
              style={{ perspective: '1000px' }}
              onMouseEnter={() => handleImageHover(0, true)}
              onMouseLeave={() => handleImageHover(0, false)}
            >
              <div 
                className="h-full w-full transition-transform duration-700"
                style={{ transform: isHoveringImage[0] ? 'rotateY(-5deg) rotateX(5deg)' : 'rotateY(0) rotateX(0)' }}
              >
                <img 
                  src={imgConstruction} 
                  alt="Pekerja konstruksi jalan meninjau rencana" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h4 className="text-white text-xl font-bold mb-2">Teknologi Survey</h4>
                  <p className="text-gray-200 text-sm">Menggunakan teknologi survey modern untuk presisi terbaik</p>
                </div>
              </div>
              
              {/* Particle effect overlay */}
              {isHoveringImage[0] && (
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(10)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-primary rounded-full animate-ping"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 2}s`,
                        animationDuration: `${1 + Math.random() * 3}s`
                      }}
                    ></div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Gambar Sekunder 1 */}
            <div 
              className={`col-span-4 h-full rounded-2xl overflow-hidden transition-all duration-1000 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              onMouseEnter={() => handleImageHover(1, true)}
              onMouseLeave={() => handleImageHover(1, false)}
            >
              <div className="h-full relative overflow-hidden group">
                <div 
                  className="h-full transition-transform duration-700"
                  style={{ transform: isHoveringImage[1] ? 'scale(1.1)' : 'scale(1)' }}
                >
                  <img 
                    src={imgAsphalt} 
                    alt="Proses pengaspalan jalan" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-white text-sm font-bold">Proses Pengaspalan</h4>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Gambar Sekunder 2 */}
            <div 
              className={`col-span-4 h-full rounded-2xl overflow-hidden transition-all duration-1000 delay-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              onMouseEnter={() => handleImageHover(2, true)}
              onMouseLeave={() => handleImageHover(2, false)}
            >
              <div className="h-full relative overflow-hidden group">
                <div 
                  className="h-full transition-transform duration-700"
                  style={{ transform: isHoveringImage[2] ? 'scale(1.1)' : 'scale(1)' }}
                >
                  <img 
                    src={imgHighway} 
                    alt="Konstruksi jalan tol dengan alat berat"
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-white text-sm font-bold">Alat Berat Modern</h4>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Overlay decorative elements */}
            <div className={`absolute -bottom-5 -right-5 w-24 h-24 border-4 border-primary/20 rounded-3xl transition-all duration-1000 delay-700 ${isInView ? 'opacity-70' : 'opacity-0'}`}></div>
            <div className={`absolute -top-5 -left-5 w-16 h-16 border-4 border-primary/20 rounded-full transition-all duration-1000 delay-700 ${isInView ? 'opacity-70' : 'opacity-0'}`}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildingDesign;
