import { Button } from "@/components/ui/button";
import { stats } from "@/lib/constants";
import { ArrowRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const AboutSection = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const statsObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (statsRef.current) {
      statsObserver.observe(statsRef.current);
    }
    
    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }
    
    return () => {
      statsObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, [hasAnimated]);

  return (
    <section className="py-16 bg-[#F7F7F7]" id="about" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="bg-black text-white rounded-lg p-8 md:p-12 shadow-xl overflow-hidden relative">
          {/* Background particles */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute h-2 w-2 bg-primary rounded-full top-1/4 left-1/4 animate-ping" style={{animationDuration: "3s"}}></div>
            <div className="absolute h-2 w-2 bg-primary rounded-full top-3/4 left-2/3 animate-ping" style={{animationDuration: "5s"}}></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
            <div className={`transition-all duration-1000 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <h2 className="text-3xl font-bold font-poppins mb-6">
                TENTANG KAMI: <span className="text-primary">PT Panamas Multi Konstruksi</span>
              </h2>
              <p className="text-gray-300 mb-8">
                PT Panamas Multi Konstruksi adalah perusahaan konstruksi jalan yang mengedepankan profesionalisme, kualitas, dan inovasi dalam setiap proyek. Dengan dukungan tim ahli berpengalaman dan teknologi terkini, kami berkomitmen untuk membangun infrastruktur jalan yang kokoh, aman, dan berstandar tinggi, demi menunjang konektivitas dan kemajuan pembangunan di berbagai daerah Indonesia.
              </p>
              <Button className="bg-primary hover:bg-orange-600 text-white px-8 py-6 h-auto rounded-md font-medium transition-all duration-300 hover:scale-105 group">
                <span>Pelajari Lebih Lanjut</span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
            
            <div 
              className={`grid grid-cols-2 gap-6 transition-all duration-1000 delay-300 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} 
              ref={statsRef}
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center bg-[#111111] p-6 rounded-lg hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl font-bold text-primary mb-2 transform transition-all duration-700">
                    {hasAnimated ? stat.value : "0+"}
                  </div>
                  <p className="text-gray-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
