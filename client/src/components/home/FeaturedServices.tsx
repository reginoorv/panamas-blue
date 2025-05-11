import { ChevronRight, Bolt, Award } from "lucide-react";
import { useState, useEffect } from "react";

const FeaturedServices = () => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    const target = document.querySelector('#featured-services');
    if (target) {
      observer.observe(target);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 bg-white" id="featured-services">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Konstruksi Jalan Card */}
          <div 
            className={`bg-[#F7F7F7] group hover:bg-black transition duration-500 rounded-lg overflow-hidden shadow-md hover:shadow-xl ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '100ms', transitionDuration: '700ms' }}
          >
            <div className="relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?q=80&w=1173&auto=format&fit=crop" 
                alt="Konstruksi jalan tol" 
                className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/40"></div>
            </div>
            <div className="p-6 group-hover:text-white">
              <h3 className="text-xl font-semibold mb-3 font-poppins group-hover:text-white">
                Membangun Jalan Berkualitas
              </h3>
              <p className="text-gray-600 group-hover:text-gray-300 mb-4">
                Konstruksi jalan modern dengan standar kualitas tertinggi dan teknologi terdepan.
              </p>
              <a href="#projects" className="inline-flex items-center text-primary group-hover:text-primary group">
                <span>Lihat Proyek</span>
                <ChevronRight className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
          
          {/* Pengalaman Card */}
          <div 
            className={`relative bg-primary text-white rounded-lg overflow-hidden shadow-md hover:shadow-xl ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '300ms', transitionDuration: '700ms' }}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold font-poppins">24+</h3>
                <div className="bg-white/20 rounded-full h-10 w-10 flex items-center justify-center animate-pulse">
                  <Bolt className="text-white" size={20} />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 font-poppins">Tahun Pengalaman</h3>
              <p className="text-gray-200 mb-4">
                Dipercaya untuk mengerjakan proyek-proyek infrastruktur jalan strategis di seluruh Indonesia.
              </p>
              <a href="#about" className="inline-flex items-center text-white group">
                <span>Tentang Kami</span>
                <ChevronRight className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
          
          {/* Penghargaan Card */}
          <div 
            className={`bg-black text-white rounded-lg overflow-hidden shadow-md hover:shadow-xl ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '500ms', transitionDuration: '700ms' }}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold font-poppins">40+</h3>
                <div className="bg-primary rounded-full h-10 w-10 flex items-center justify-center">
                  <Award className="text-white animate-[spin_3s_linear_infinite]" size={20} />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 font-poppins">Penghargaan & Sertifikasi</h3>
              <p className="text-gray-300 mb-4">
                Diakui keunggulannya dalam konstruksi jalan dan infrastruktur.
              </p>
              <a href="#" className="inline-flex items-center text-primary group">
                <span>Selengkapnya</span>
                <ChevronRight className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
