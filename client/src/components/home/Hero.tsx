import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animasi ketika komponen di-mount
    setIsVisible(true);
  }, []);

  return (
    <section className="bg-black text-white py-16 md:py-24 relative overflow-hidden">
      {/* Particle effect background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute h-2 w-2 bg-primary rounded-full top-1/4 left-1/4 animate-ping" style={{ animationDuration: "3s" }}></div>
        <div className="absolute h-3 w-3 bg-primary rounded-full top-1/2 left-1/3 animate-ping" style={{ animationDuration: "5s" }}></div>
        <div className="absolute h-2 w-2 bg-primary rounded-full top-3/4 left-1/2 animate-ping" style={{ animationDuration: "4s" }}></div>
        <div className="absolute h-4 w-4 bg-primary rounded-full top-1/4 left-2/3 animate-ping" style={{ animationDuration: "6s" }}></div>
        <div className="absolute h-3 w-3 bg-primary rounded-full top-1/2 left-3/4 animate-ping" style={{ animationDuration: "7s" }}></div>
      </div>

      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center relative z-10">
        <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          <h1 className="text-4xl md:text-5xl font-bold font-poppins leading-tight">
            Membangun Jalan <span className="text-primary">Menuju Masa Depan</span>
          </h1>
          <p className="text-gray-300 text-lg">
            PT Panamas Multi Konstruksi adalah perusahaan konstruksi jalan yang mengedepankan profesionalisme, kualitas, dan inovasi dalam setiap proyek.
          </p>
          <div className="pt-4">
            <Button className="bg-primary hover:bg-orange-600 text-white px-8 py-6 h-auto rounded-md font-medium transition duration-300 hover:scale-105 group">
              <span>Mulai Konsultasi</span>
              <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Button>
          </div>
        </div>
        <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
          {/* Road construction image */}
          <img 
            src="/src/assets/Road-Contruction-Banner.jpg" 
            alt="Konstruksi jalan modern dengan pekerja dan alat berat" 
            className="rounded-lg w-full h-auto object-cover shadow-2xl"
          />
          <div className="absolute -bottom-4 -right-4 bg-primary text-white px-6 py-3 rounded-lg shadow-lg animate-pulse">
            <span className="font-bold">24+ Tahun</span> 
            <span className="block text-sm">Pengalaman Industri</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
