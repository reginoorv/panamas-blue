import { testimonials } from "@/lib/constants";
import { useEffect, useState, useRef } from "react";
import { Star, Quote, ChevronRight, ChevronLeft } from "lucide-react";

const Testimonials = () => {
  const [isInView, setIsInView] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(Array(testimonials.length).fill(false));
  const sectionRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);

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

  const handleHover = (index: number, hovering: boolean) => {
    const newState = [...isHovered];
    newState[index] = hovering;
    setIsHovered(newState);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // Floating star positions
  const renderStars = () => {
    return Array.from({ length: 8 }).map((_, i) => (
      <div
        key={i}
        className={`absolute animate-float text-primary/10 ${isInView ? 'opacity-100' : 'opacity-0'}`}
        style={{
          top: `${15 + Math.random() * 70}%`,
          left: `${5 + Math.random() * 90}%`,
          animationDelay: `${i * 0.5}s`,
          animationDuration: `${3 + Math.random() * 7}s`,
          scale: `${0.5 + Math.random() * 1}`,
          transition: 'opacity 0.5s ease',
          transitionDelay: `${i * 0.1}s`
        }}
      >
        <Star fill="currentColor" className="h-6 w-6" />
      </div>
    ));
  };

  return (
    <section 
      className="py-20 relative overflow-hidden bg-gradient-to-b from-white to-gray-50" 
      id="testimonials" 
      ref={sectionRef}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
      </div>

      {/* Floating stars */}
      {renderStars()}
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className={`inline-block px-4 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            TESTIMONI PELANGGAN
          </div>
          <h2 className={`text-4xl font-bold font-poppins mb-3 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Apa Kata <span className="text-primary relative">
              Pelanggan Kami
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary opacity-30"></span>
            </span>
          </h2>
          <div className={`w-24 h-1 bg-primary mx-auto mt-6 mb-4 transition-all duration-1000 relative overflow-hidden ${isInView ? 'opacity-100 w-24' : 'opacity-0 w-0'}`}>
            <span className={`absolute inset-0 bg-white/50 transition-all duration-1500 ${isInView ? 'translate-x-full' : '-translate-x-full'}`}></span>
          </div>
          <p className={`text-gray-600 max-w-2xl mx-auto transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Kami bangga dengan kepercayaan yang diberikan oleh klien kami. Lihat bagaimana pengalaman mereka bekerja dengan PT Panamas Multi Konstruksi.
          </p>
        </div>
        
        {/* Desktop testimonials card layout */}
        <div ref={testimonialsRef} className="hidden md:grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`bg-white p-8 rounded-2xl shadow-lg relative transition-all duration-700 hover:shadow-2xl group ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ 
                transitionDelay: `${index * 200}ms`,
                transform: isHovered[index] ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
                transition: 'transform 0.4s ease, box-shadow 0.4s ease, opacity 0.7s ease, translate 0.7s ease'
              }}
              onMouseEnter={() => handleHover(index, true)}
              onMouseLeave={() => handleHover(index, false)}
            >
              {/* Quote accent */}
              <div className="absolute -top-6 -left-6 bg-primary text-white h-12 w-12 rounded-lg flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:rotate-12">
                <Quote className="h-6 w-6" />
              </div>
              
              {/* Rating stars */}
              <div className="flex mb-4 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} fill="#FF5A1F" className="h-4 w-4 text-primary mr-1" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed relative z-10">{testimonial.text}</p>
              
              {/* Border accent that grows on hover */}
              <div className={`absolute bottom-0 left-0 h-1 bg-primary transition-all duration-500 ${isHovered[index] ? 'w-full' : 'w-24'}`}></div>
              
              <div className="flex items-center">
                <div className="h-16 w-16 mr-4 overflow-hidden rounded-full border-2 border-primary/20 p-1">
                  <div className="h-full w-full overflow-hidden rounded-full relative">
                    <img 
                      src={testimonial.image} 
                      alt={`${testimonial.name} portrait`} 
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                  <p className="text-primary text-sm">{testimonial.position}</p>
                </div>
              </div>
              
              {/* Background accent that appears on hover */}
              <div 
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              ></div>
            </div>
          ))}
        </div>
        
        {/* Mobile testimonials slider */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white p-6 rounded-2xl shadow-lg relative h-full">
                    <div className="absolute -top-4 -left-4 bg-primary text-white h-8 w-8 rounded-md flex items-center justify-center shadow-lg">
                      <Quote className="h-4 w-4" />
                    </div>
                    
                    <div className="flex mb-3 mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} fill="#FF5A1F" className="h-3 w-3 text-primary mr-1" />
                      ))}
                    </div>
                    
                    <p className="text-gray-700 text-sm mb-4 line-clamp-4">{testimonial.text}</p>
                    
                    <div className="flex items-center">
                      <div className="h-12 w-12 mr-3 overflow-hidden rounded-full border-2 border-primary/20 p-0.5">
                        <img 
                          src={testimonial.image} 
                          alt={`${testimonial.name} portrait`} 
                          className="h-full w-full rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm">{testimonial.name}</h4>
                        <p className="text-primary text-xs">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Mobile navigation controls */}
          <div className="flex justify-center items-center mt-6 space-x-3">
            <button 
              onClick={handlePrev} 
              className="h-10 w-10 rounded-full bg-white shadow-md flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${activeIndex === index ? 'w-6 bg-primary' : 'w-2 bg-gray-300'}`}
                ></button>
              ))}
            </div>
            <button 
              onClick={handleNext} 
              className="h-10 w-10 rounded-full bg-white shadow-md flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
