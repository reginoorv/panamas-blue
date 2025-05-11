import { ChevronRight, Bolt, Award } from "lucide-react";

const FeaturedServices = () => {
  return (
    <section className="py-16 bg-white" id="services">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Building Construction Card */}
          <div className="bg-[#F7F7F7] group hover:bg-black transition duration-300 rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
              alt="Building construction" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6 group-hover:text-white">
              <h3 className="text-xl font-semibold mb-3 font-poppins group-hover:text-white">
                Building The A+ Construction
              </h3>
              <p className="text-gray-600 group-hover:text-gray-300 mb-4">
                Industry-leading building construction with precision and excellence.
              </p>
              <a href="#" className="inline-flex items-center text-primary group-hover:text-primary">
                Learn More
                <ChevronRight className="h-5 w-5 ml-2" />
              </a>
            </div>
          </div>
          
          {/* Years of Experience Card */}
          <div className="relative bg-primary text-white rounded-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold font-poppins">24+</h3>
                <div className="bg-white/20 rounded-full h-10 w-10 flex items-center justify-center">
                  <Bolt className="text-white" size={20} />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 font-poppins">Years of Experience</h3>
              <p className="text-gray-200 mb-4">
                Trusted experience delivering exceptional construction projects.
              </p>
              <a href="#" className="inline-flex items-center text-white">
                Learn More
                <ChevronRight className="h-5 w-5 ml-2" />
              </a>
            </div>
          </div>
          
          {/* Awards Card */}
          <div className="bg-black text-white rounded-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold font-poppins">40+</h3>
                <div className="bg-primary rounded-full h-10 w-10 flex items-center justify-center">
                  <Award className="text-white" size={20} />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 font-poppins">Awards & Honors</h3>
              <p className="text-gray-300 mb-4">
                Recognized excellence in construction and engineering.
              </p>
              <a href="#" className="inline-flex items-center text-primary">
                Learn More
                <ChevronRight className="h-5 w-5 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
