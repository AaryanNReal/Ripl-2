import { useEffect, useRef, useState } from "react";
import { Award, Users, Building, Clock } from "lucide-react";
import SectionGoldBackground from "@/components/bg";

/* -------------------- DATA -------------------- */

const stats = [
  { icon: Clock, value: "50+", label: "Years Experience" },
  { icon: Building, value: "500+", label: "Projects Completed" },
  { icon: Users, value: "100+", label: "Team Members" },
  { icon: Award, value: "16+", label: "States Covered" },
];

/* -------------------- MOBILE SCROLL POP HOOK -------------------- */

function useMobilePopIn<T extends HTMLElement>(threshold = 0.3) {
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

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-20 lg:py-32 bg-cream"
    >
      {/* Gold ambient background */}
      <SectionGoldBackground />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* ---------- SECTION HEADER ---------- */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <p className="text-gold uppercase tracking-[0.35em] text-xs font-medium mb-4">
            Introducing
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-6 leading-tight">
            Building Dreams Into Reality
          </h2>

          <div className="w-24 h-1.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8" />

          <p className="text-black leading-relaxed text-lg">
            RIPL Interiors is a multi-disciplinary contracting company delivering
            turnkey interior solutions through decades of expertise, in-house
            manufacturing, and skilled craftsmanship across India.
          </p>
        </div>

        {/* ---------- KEY INFO GRID ---------- */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch">
          {stats.map((stat, index) => {
            const { ref, visible } = useMobilePopIn<HTMLDivElement>();

            return (
              <div
                key={index}
                ref={ref}
                className={`
                  group relative h-full rounded-2xl
                  bg-background/90 backdrop-blur-sm
                  border border-black/5
                  p-8 text-center

                  transition-all duration-700
                  ease-[cubic-bezier(0.16,1,0.3,1)]

                  ${
                    visible
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-8 scale-[0.92]"
                  }

                  lg:opacity-100 lg:translate-y-0 lg:scale-100
                  hover:shadow-xl
                `}
              >
                <stat.icon className="w-10 h-10 text-gold mx-auto mb-5 transition-transform duration-300 group-hover:scale-110" />

                <div className="text-4xl md:text-5xl font-serif text-foreground mb-2">
                  {stat.value}
                </div>

                <div className="text-muted-foreground text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
