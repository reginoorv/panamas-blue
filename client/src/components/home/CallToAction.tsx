import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const CallToAction = () => {
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
    <section className="py-12 bg-primary relative overflow-hidden" ref={sectionRef}>
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="absolute h-20 w-20 rounded-full bg-white/10 -top-10 -left-10"></div>
        <div className="absolute h-16 w-16 rounded-full bg-white/10 bottom-0 right-10"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between text-white">
          <div className={`mb-6 md:mb-0 transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="text-2xl font-semibold font-poppins">Butuh bantuan? Hubungi kami sekarang!</h3>
            <p className="text-white/80 mt-2">Tim ahli kami siap memberikan solusi konstruksi jalan terbaik untuk proyek Anda.</p>
          </div>
          <div className={`flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="flex items-center">
              <div className="bg-white/20 rounded-full h-12 w-12 flex items-center justify-center mr-4 animate-pulse">
                <Phone className="text-white" />
              </div>
              <div>
                <p className="text-white/80 text-sm">Hubungi Kami</p>
                <p className="font-semibold">+62 21 5678 1234</p>
              </div>
            </div>
            <Button className="bg-white text-primary hover:bg-gray-100 px-6 h-auto py-3 rounded-md font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 group">
              <span>Dapatkan Penawaran</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
