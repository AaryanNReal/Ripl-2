import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import AnniversarySection from "@/components/AnniversarySection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import FactoriesSection from "@/components/FactoriesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import TeamSection from "@/components/team";

import PageReveal from "@/components/PageReveal";
import Reveal from "@/components/Reveal";

const Index = () => {
  return (
    <PageReveal>
      {/* IMPORTANT: no min-h-screen */}
      <div className="bg-neutral-950 text-white overflow-x-hidden">
        <Header />

        {/* Explicit scroll root */}
        <main id="page-root">
          <HeroCarousel />

          <Reveal>
            <AnniversarySection />
          </Reveal>

          <Reveal>
            <AboutSection />
          </Reveal>

          <Reveal>
            <ServicesSection />
          </Reveal>

          <Reveal>
            <ProjectsSection />
          </Reveal>

          <Reveal>
            <FactoriesSection />
          </Reveal>

          <Reveal>
            <TeamSection />
          </Reveal>

          <Reveal>
            <ContactSection />
          </Reveal>
        </main>

        <Footer />
      </div>
    </PageReveal>
  );
};

export default Index;
