import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import AnniversarySection from "@/components/AnniversarySection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import FactoriesSection from "@/components/FactoriesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import TeamSection from "@/components/team";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroCarousel />
        <AnniversarySection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <FactoriesSection />
        <TeamSection/>
        
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
