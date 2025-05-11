import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-black text-white py-16 md:py-24 relative">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins leading-tight">
            Engineering The <span className="text-primary">Extraordinary</span>
          </h1>
          <p className="text-gray-300 text-lg">
            We build world-class construction projects with uncompromised quality and safety standards.
          </p>
          <div className="pt-4">
            <Button className="bg-primary hover:bg-orange-600 text-white px-8 py-6 h-auto rounded-md font-medium transition">
              Get Started
            </Button>
          </div>
        </div>
        <div className="relative">
          {/* Construction workers image */}
          <img 
            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=900" 
            alt="Construction workers in safety gear" 
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
