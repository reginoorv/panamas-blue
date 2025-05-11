import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isInView, setIsInView] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission would go here
    console.log("Form submitted:", formData);
    // Simulate submission success
    setIsSubmitted(true);
    
    // Reset form and submission state after delay
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section className="py-16 bg-white" id="contact" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-bold font-poppins mb-3 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Membangun <span className="text-primary">Komunikasi Yang Kuat</span>
          </h2>
          <div className={`w-20 h-1 bg-primary mx-auto mt-4 transition-all duration-1000 ${isInView ? 'opacity-100 w-20' : 'opacity-0 w-0'}`}></div>
          <p className={`text-gray-600 max-w-xl mx-auto mt-4 transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Hubungi kami untuk konsultasi, informasi proyek, atau kerjasama. Tim kami siap membantu mewujudkan proyek infrastruktur jalan Anda.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className={`transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Nama Anda"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#F7F7F7] border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email Anda"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#F7F7F7] border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
              </div>
              <div>
                <Input
                  type="text"
                  name="subject"
                  placeholder="Subjek"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#F7F7F7] border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  required
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  rows={6}
                  placeholder="Pesan Anda"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#F7F7F7] border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  required
                />
              </div>
              <Button 
                type="submit" 
                className={`relative overflow-hidden bg-primary hover:bg-orange-600 text-white px-8 py-6 h-auto rounded-md font-medium transition-all duration-300 hover:scale-105 group ${isSubmitted ? 'bg-green-600 hover:bg-green-700' : ''}`}
                disabled={isSubmitted}
              >
                <span className={`flex items-center transition-all duration-300 ${isSubmitted ? 'opacity-0' : 'opacity-100'}`}>
                  <span>Kirim Pesan</span>
                  <Send className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <span className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${isSubmitted ? 'opacity-100' : 'opacity-0'}`}>
                  <CheckCircle className="mr-2 h-5 w-5" />
                  <span>Terkirim!</span>
                </span>
              </Button>
            </form>
          </div>
          
          {/* Map */}
          <div className={`bg-[#F7F7F7] rounded-lg overflow-hidden h-[400px] shadow-lg transition-all duration-700 delay-500 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3104637982697!2d106.82100491485946!3d-6.218665962665769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f40f1eb20ae1%3A0xe4b9db6d649900f1!2sJl.%20Ahmad%20Yani%2C%20Jakarta!5e0!3m2!1sid!2sid!4v1643890271392!5m2!1sid!2sid" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi PT Panamas Multi Konstruksi"
              className="transition-transform duration-700 hover:scale-105 origin-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
