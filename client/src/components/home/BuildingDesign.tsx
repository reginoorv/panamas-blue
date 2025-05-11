import { Button } from "@/components/ui/button";
import { features } from "@/lib/constants";
import { Check } from "lucide-react";

const BuildingDesign = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold font-poppins mb-3">
            Construction Generation Of <span className="text-primary">Optimal Building Design</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 mb-6"></div>
          <p className="text-gray-600">
            We leverage modern technology and innovative approaches to create optimal building designs that maximize functionality, efficiency, and aesthetic appeal.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-semibold font-poppins mb-6">Building Dreams Brick By Stretch</h3>
            <p className="text-gray-600 mb-6">
              Our approach combines traditional craftsmanship with cutting-edge technology to create buildings that stand the test of time. We focus on sustainable practices and innovative solutions for every project.
            </p>
            
            <div className="flex flex-col space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-primary rounded-full h-6 w-6 flex items-center justify-center mt-1 flex-shrink-0">
                    <Check className="text-white text-sm" />
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Button className="bg-primary hover:bg-orange-600 text-white px-8 py-6 h-auto rounded-md font-medium transition">
              Discover More
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {/* Construction workers reviewing blueprints */}
            <img 
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=700" 
              alt="Construction workers reviewing blueprints" 
              className="rounded-lg h-full object-cover"
            />
            
            {/* Concrete foundation */}
            <img 
              src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=350" 
              alt="Concrete foundation pouring" 
              className="rounded-lg h-40 object-cover"
            />
            
            {/* Modern skyscraper */}
            <img 
              src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=350" 
              alt="Skyscraper construction with cranes" 
              className="rounded-lg h-40 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildingDesign;
