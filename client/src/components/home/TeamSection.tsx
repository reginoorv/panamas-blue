import { teamMembers } from "@/lib/constants";
import { ChevronRight, Play, Plus } from "lucide-react";

const TeamSection = () => {
  return (
    <section className="py-16 bg-white" id="team">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-black text-white p-8 rounded-lg relative overflow-hidden mb-12">
            <div className="grid md:grid-cols-3 gap-6 items-center">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-semibold font-poppins mb-3">Our Team Building</h3>
                <p className="text-gray-300 mb-4">Strong Foundation For Building Stronger Future</p>
                <a href="#" className="inline-flex items-center text-primary">
                  Explore
                  <ChevronRight className="h-5 w-5 ml-2" />
                </a>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-primary opacity-20 rounded-full"></div>
                <div className="flex justify-center">
                  <button 
                    className="bg-primary h-16 w-16 rounded-full flex items-center justify-center z-10 relative"
                    aria-label="Play video"
                  >
                    <Play className="text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-[#F7F7F7] p-6 rounded-lg">
                <img 
                  src={member.image} 
                  alt={`Team member - ${member.name}`} 
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-xl font-semibold font-poppins">{member.name}</h4>
                    <p className="text-gray-600">{member.position}</p>
                  </div>
                  <div className="bg-primary h-10 w-10 rounded-full flex items-center justify-center">
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
