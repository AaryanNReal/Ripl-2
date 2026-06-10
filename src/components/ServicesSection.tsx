import { useEffect, useRef, useState } from "react";
import {
  Building2,
  Paintbrush,
  HardHat,
  Factory,
  Sparkles,
} from "lucide-react";
import SectionGoldBackgroundLight from "./bg_black";

/* ---------------- DATA ---------------- */

const services = [
  {
    number: "01",
    icon: Building2,
    title: "Turnkey Contractors",
    description:
      "We expertise in Civil, Interiors and Fitout Works with turnkey interior solutions including joinery and finishes for hotels, hospitals, commercial, retail & mixed-use developments.",
  },
  {
    number: "02",
    icon: Paintbrush,
    title: "Interior Fit Outs",
    description:
      "Perfected the art of skilled craftsmanship with in-house manufacturing capabilities.",
  },
  
  {
    number: "03",
    icon: Factory,
    title: "In House State-of-the-art Manufacturing",
    description:
      "Advanced manufacturing using latest technology and premium materials for exceptional furniture.",
  },
];

/* ---------------- ANIMATION ---------------- */

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      setVisible(true);
      return;
    }

    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

/* ---------------- COMPONENT ---------------- */

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-charcoal py-16 lg:py-24"
    >
      <SectionGoldBackgroundLight />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* HEADER */}

        <div className="text-center mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2 mb-5">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="uppercase tracking-[0.3em] text-xs text-gold">
              What We Offer
            </span>
            <Sparkles className="w-4 h-4 text-gold" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Our Services
          </h2>

          <div className="w-24 h-px bg-gold mx-auto my-6" />

          <p className="max-w-2xl mx-auto text-white/65 text-base lg:text-lg">
            Crafting Furniture for Exceptional Hospitality. Elegant, durable,
            and custom-built furniture solutions for hotels and luxury spaces.
          </p>
        </div>

        {/* SERVICES GRID */}

        <div className="grid md:grid-cols-3 gap-6 lg:gap-3">
          {services.map((service, index) => {
            const { ref, visible } = useReveal<HTMLDivElement>();

            return (
              <div
                key={index}
                ref={ref}
                className={`
                  group
                  relative
                  overflow-hidden

                  border border-white/10
                  bg-white/[0.03]
                  backdrop-blur-sm

                  rounded-2xl
                  p-6 lg:p-7

                  transition-all duration-500

                  ${
                    visible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-6"
                  }

                  lg:opacity-100 lg:translate-y-0

                  hover:border-gold/30
                  hover:-translate-y-1
                `}
              >
                {/* Number */}

                <span className="absolute top-4 right-4 text-5xl font-bold text-white/5">
                  {service.number}
                </span>

                {/* Icon */}

                <div
                  className="
                    w-12 h-12
                    rounded-xl
                    bg-gold/10
                    border border-gold/20

                    flex items-center justify-center
                    mb-5

                    transition-all duration-300
                    group-hover:scale-110
                  "
                >
                  <service.icon className="w-5 h-5 text-gold" />
                </div>

                {/* Content */}

                <h3 className="text-xl lg:text-2xl font-semibold text-white mb-3">
                  {service.title}
                </h3>

                <p className="text-white/65 leading-relaxed text-sm lg:text-base">
                  {service.description}
                </p>

                {/* Gold Accent */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-0

                    h-[2px]
                    w-0

                    bg-gold

                    transition-all duration-500
                    group-hover:w-full
                  "
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;