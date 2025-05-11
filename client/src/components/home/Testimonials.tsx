import { testimonials } from "@/lib/constants";
import { useEffect, useState, useRef } from "react";

const Testimonials = () => {
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
    <section className="py-16 bg-[#F7F7F7]" id="testimonials" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-bold font-poppins mb-3 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Apa Kata <span className="text-primary">Pelanggan Kami</span>
          </h2>
          <div className={`w-20 h-1 bg-primary mx-auto mt-4 transition-all duration-1000 ${isInView ? 'opacity-100 w-20' : 'opacity-0 w-0'}`}></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`bg-white p-8 rounded-lg shadow-md relative transition-all duration-700 hover:shadow-xl transform hover:-translate-y-2 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="text-primary text-5xl absolute -top-5 left-8 animate-pulse">"</div>
              <p className="text-gray-600 mb-6 pt-4">{testimonial.text}</p>
              <div className="flex items-center">
                <div className="h-12 w-12 mr-4 overflow-hidden rounded-full">
                  <img 
                    src={testimonial.image} 
                    alt={`${testimonial.name} portrait`} 
                    className="h-12 w-12 rounded-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
