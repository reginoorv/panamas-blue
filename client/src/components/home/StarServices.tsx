import { services } from "@/lib/constants";
import { Home, Building, Hammer, HardHat } from "lucide-react";

const ServiceIcon = ({ name }: { name: string }) => {
  switch (name) {
    case "home":
      return <Home className="text-white text-2xl" />;
    case "building":
      return <Building className="text-white text-2xl" />;
    case "hammer":
      return <Hammer className="text-white text-2xl" />;
    case "hard-hat":
      return <HardHat className="text-white text-2xl" />;
    default:
      return null;
  }
};

const StarServices = () => {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-poppins mb-3">
            OUR 4-STAR SERVICE <span className="text-primary">CONSTRUCTION</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-[#111111] p-6 rounded-lg transition hover:shadow-lg hover:shadow-primary/20"
            >
              <div className="bg-primary h-16 w-16 rounded-lg flex items-center justify-center mb-4">
                <ServiceIcon name={service.icon} />
              </div>
              <h3 className="text-xl font-semibold mb-3 font-poppins">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StarServices;
