import { useEffect, useRef, useState } from "react";
import {
  Building2,
  Paintbrush,
  HardHat,
  Factory,
  Sparkles,
} from "lucide-react";
import SectionGoldBackgroundLight from "./bg_black";

/* -------------------- DATA -------------------- */

const services = [
  {
    number: "01",
    icon: Building2,
    title: "General Contract Execution",
    description:
      "Expertise in Civil, Interiors and Fitout Works with turnkey interior solutions including joinery and finishes for hotels, hospitals, commercial, retail & mixed-use developments.",
  },
  {
    number: "02",
    icon: Paintbrush,
    title: "Interior Fit Outs",
    description:
      "Perfected the art of skilled craftsmanship with in-house manufacturing capabilities across 16+ states.",
  },
  {
    number: "03",
    icon: HardHat,
    title: "Civil Interior Execution",
    description:
      "Civil interior execution contractors for residential and commercial spaces with precision and excellence.",
  },
  {
    number: "04",
    icon: Factory,
    title: "State-of-the-art Manufacturing",
    description:
      "Advanced manufacturing using German technology and premium materials for exceptional furniture.",
  },
];

/* -------------------- MOBILE SCROLL POP HOOK (REPEATABLE) -------------------- */

function useMobilePopIn<T extends HTMLElement>(threshold = 0.25) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Desktop: no scroll animation
    if (window.innerWidth >= 1024) {
      setVisible(true);
      return;
    }

    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

/* -------------------- SECTION -------------------- */

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-charcoal py-20 lg:py-32"
    >
      {/* Background */}
      <SectionGoldBackgroundLight />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* ---------- HEADER ---------- */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gold/40 bg-gold/10 backdrop-blur-md mb-8">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-gold uppercase tracking-widest text-xs font-medium">
              What We Offer
            </span>
            <Sparkles className="w-4 h-4 text-gold" />
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-header-foreground mb-6">
            Our Services
          </h2>

          <div className="w-24 h-1.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8" />

          <p className="max-w-2xl mx-auto text-lg text-header-foreground/70">
            Comprehensive interior solutions powered by innovation,
            craftsmanship, and decades of expertise
          </p>
        </div>

        {/* ---------- GRID ---------- */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {services.map((service, index) => {
            const { ref, visible } = useMobilePopIn<HTMLDivElement>();

            return (
              <div
                key={index}
                ref={ref}
                className={`
                  group relative h-full rounded-2xl overflow-hidden
                  bg-gradient-to-br from-charcoal to-charcoal/80
                  border border-white/5
                  p-8 lg:p-10

                  transition-all duration-700
                  ease-[cubic-bezier(0.16,1,0.3,1)]

                  ${
                    visible
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-8 scale-[0.92]"
                  }

                  lg:opacity-100 lg:translate-y-0 lg:scale-100
                  hover:border-gold/30
                `}
              >
                {/* Large Number */}
                <span className="pointer-events-none absolute -top-6 -left-4 text-8xl lg:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-gold/10 to-gold/5">
                  {service.number}
                </span>

                {/* Content (equal height) */}
                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gold/10 border border-gold/20 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <service.icon className="w-8 h-8 text-gold" />
                  </div>

                  <h3 className="mb-4 text-2xl lg:text-3xl font-bold text-header-foreground">
                    {service.title}
                  </h3>

                  <p className="flex-1 leading-relaxed text-header-foreground/70">
                    {service.description}
                  </p>
                </div>

                {/* Accent Borders */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-gold via-yellow-400 to-gold group-hover:w-full transition-all duration-700" />
                <div className="absolute top-0 right-0 h-0 w-1 bg-gradient-to-b from-gold via-yellow-400 to-gold group-hover:h-full transition-all duration-700 delay-100" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
