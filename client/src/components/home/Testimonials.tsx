import { testimonials } from "@/lib/constants";

const Testimonials = () => {
  return (
    <section className="py-16 bg-[#F7F7F7]" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-poppins mb-3">
            What Our Customers <span className="text-primary">Saying About Us</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md relative">
              <div className="text-primary text-5xl absolute -top-5 left-8">"</div>
              <p className="text-gray-600 mb-6 pt-4">{testimonial.text}</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={`${testimonial.name} portrait`} 
                  className="h-12 w-12 rounded-full object-cover mr-4"
                />
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
