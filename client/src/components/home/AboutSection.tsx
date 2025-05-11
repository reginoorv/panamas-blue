import { Button } from "@/components/ui/button";
import { stats } from "@/lib/constants";
import { useEffect, useState, useRef } from "react";

const AboutSection = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (statsRef.current) {
      observer.observe(statsRef.current);
    }
    
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section className="py-16 bg-[#F7F7F7]" id="about">
      <div className="container mx-auto px-4">
        <div className="bg-black text-white rounded-lg p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold font-poppins mb-6">
                WHO WE ARE: The Digital <span className="text-primary">Construction & Industrial</span> Agency
              </h2>
              <p className="text-gray-300 mb-8">
                TeamBuild is a forward-thinking construction company that combines traditional expertise with digital innovation. We specialize in delivering exceptional construction projects across commercial, industrial, and residential sectors.
              </p>
              <Button className="bg-primary hover:bg-orange-600 text-white px-8 py-6 h-auto rounded-md font-medium transition">
                Discover More
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-6" ref={statsRef}>
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">
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
