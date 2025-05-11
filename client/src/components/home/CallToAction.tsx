import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-12 bg-primary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between text-white">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-semibold font-poppins">Need any help? Contact us today!</h3>
            <p className="text-white/80 mt-2">Our expert team is ready to provide you with the best construction solutions.</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <div className="bg-white/20 rounded-full h-12 w-12 flex items-center justify-center mr-4">
                <Phone className="text-white" />
              </div>
              <div>
                <p className="text-white/80 text-sm">Call Us Today</p>
                <p className="font-semibold">+1 (555) 123-4567</p>
              </div>
            </div>
            <Button className="bg-white text-primary hover:bg-gray-100 px-6 h-auto py-3 rounded-md font-medium transition">
              Get a Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
