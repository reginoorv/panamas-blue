import Hero from "@/components/home/Hero";
import FeaturedServices from "@/components/home/FeaturedServices";
import StarServices from "@/components/home/StarServices";
import BuildingDesign from "@/components/home/BuildingDesign";
import AboutSection from "@/components/home/AboutSection";
import TeamSection from "@/components/home/TeamSection";
import Testimonials from "@/components/home/Testimonials";
import ContactSection from "@/components/home/ContactSection";
import CallToAction from "@/components/home/CallToAction";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <FeaturedServices />
        <StarServices />
        <BuildingDesign />
        <AboutSection />
        <TeamSection />
        <Testimonials />
        <ContactSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
