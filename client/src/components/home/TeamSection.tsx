import { teamMembers } from "@/lib/constants";
import { ChevronRight, Play, Plus } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const TeamSection = () => {
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
    <section className="py-16 bg-white" id="team" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className={`bg-black text-white p-8 rounded-lg relative overflow-hidden mb-12 shadow-lg transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="grid md:grid-cols-3 gap-6 items-center">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-semibold font-poppins mb-3">Tim Ahli Kami</h3>
                <p className="text-gray-300 mb-4">Fondasi Kokoh Untuk Membangun Masa Depan Infrastruktur Indonesia</p>
                <a href="#" className="inline-flex items-center text-primary group">
                  <span>Pelajari Lebih Lanjut</span>
                  <ChevronRight className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-primary opacity-20 rounded-full animate-pulse"></div>
                <div className="flex justify-center">
                  <button 
                    className="bg-primary h-16 w-16 rounded-full flex items-center justify-center z-10 relative transition-transform duration-300 hover:scale-110"
                    aria-label="Putar video"
                  >
                    <Play className="text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className={`bg-[#F7F7F7] p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 300}ms` }}
              >
                <div className="overflow-hidden rounded-lg mb-4">
                  <img 
                    src={member.image} 
                    alt={`Tim ahli - ${member.name}`} 
                    className="w-full h-64 object-cover rounded-lg transition-transform duration-700 hover:scale-110"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-xl font-semibold font-poppins">{member.name}</h4>
                    <p className="text-gray-600">{member.position}</p>
                  </div>
                  <div className="bg-primary h-10 w-10 rounded-full flex items-center justify-center transition-transform duration-300 hover:rotate-45">
                    <Plus className="text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
