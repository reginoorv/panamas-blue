import { Button } from "@/components/ui/button";
import { features } from "@/lib/constants";
import { Check, ArrowRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const BuildingDesign = () => {
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
    <section className="py-16 bg-white" id="projects" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className={`text-3xl font-bold font-poppins mb-3 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Konstruksi Jalan Dengan <span className="text-primary">Teknologi Terdepan</span>
          </h2>
          <div className={`w-20 h-1 bg-primary mx-auto mt-4 mb-6 transition-all duration-1000 ${isInView ? 'opacity-100 w-20' : 'opacity-0 w-0'}`}></div>
          <p className={`text-gray-600 transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Kami memanfaatkan teknologi modern dan pendekatan inovatif untuk membangun infrastruktur jalan yang memaksimalkan kekuatan, ketahanan, dan keamanan.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className={`text-2xl font-semibold font-poppins mb-6 transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              Membangun Jalan Menuju Kemajuan
            </h3>
            <p className={`text-gray-600 mb-6 transition-all duration-700 delay-400 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              Pendekatan kami menggabungkan keahlian tradisional dengan teknologi canggih untuk menciptakan infrastruktur jalan yang tahan lama. Kami berfokus pada praktik berkelanjutan dan solusi inovatif untuk setiap proyek.
            </p>
            
            <div className="flex flex-col space-y-4 mb-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className={`flex items-start transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                  style={{ transitionDelay: `${500 + (index * 150)}ms` }}
                >
                  <div className="bg-primary rounded-full h-6 w-6 flex items-center justify-center mt-1 flex-shrink-0">
                    <Check className="text-white text-sm" />
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className={`transition-all duration-700 delay-800 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <Button className="bg-primary hover:bg-orange-600 text-white px-8 py-6 h-auto rounded-md font-medium transition-all duration-300 hover:scale-105 group">
                <span>Lihat Detail Proyek</span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
          
          <div className={`grid grid-cols-2 gap-4 transition-all duration-1000 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* Road construction main image */}
            <img 
              src="https://images.unsplash.com/photo-1541474019392-1d7886d1bef2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=700" 
              alt="Pekerja konstruksi jalan meninjau rencana" 
              className="rounded-lg h-full object-cover shadow-lg"
            />
            
            {/* Asphalt laying */}
            <img 
              src="https://images.unsplash.com/photo-1589937187859-09b895d0aefc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=350" 
              alt="Proses pengaspalan jalan" 
              className="rounded-lg h-40 object-cover shadow-lg"
            />
            
            {/* Highway construction */}
            <img 
              src="https://images.unsplash.com/photo-1580400563505-839146e61df8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=350" 
              alt="Konstruksi jalan tol dengan alat berat" 
              className="rounded-lg h-40 object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildingDesign;
