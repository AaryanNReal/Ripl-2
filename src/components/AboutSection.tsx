import { useEffect, useRef, useState } from "react";
import { Award, Users, Building, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SectionGoldBackground from "@/components/bg";

/* -------------------- DATA -------------------- */

const stats = [
  { icon: Clock, value: "50+", label: "Years Experience" },
  { icon: Building, value: "500+", label: "Projects Delivered" },
  { icon: Users, value: "100+", label: "Professionals" },
  { icon: Award, value: "16+", label: "Regions" },
];

/* -------------------- MOBILE SCROLL HOOK -------------------- */

function useMobilePopIn<T extends HTMLElement>(threshold = 0.3) {
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
      className="relative overflow-hidden py-12 lg:py-20 bg-cream"
    >
      <SectionGoldBackground />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* ---------- HEADER ---------- */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <p className="text-gold uppercase tracking-[0.35em] text-[11px] mb-3">
            About Us
          </p>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-foreground mb-4">
            Building Dreams Into Reality
          </h2>

          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
        </div>

        {/* ---------- CONTENT ---------- */}
        <div className="max-w-3xl mx-auto text-center space-y-4 text-black/75 text-[15px]">
          <p>
            <strong>Raghbir Interiors Pvt. Ltd.</strong> is a 45+ year interior
            contracting company delivering high-quality projects across India
            and international markets.
          </p>

          <p>
            With expertise in corporate offices, luxury hotels, retail and
            residential developments, RIPL is driven by precision, planning and
            timely execution.
          </p>
        </div>

        {/* ---------- CTA ---------- */}
        <div className="mt-6 text-center">
          <Link
            to="/about"
            className="
              inline-flex items-center gap-2
              px-6 py-2.5 rounded-full
              border border-gold text-gold
              hover:bg-gold hover:text-white
              transition-all duration-300
              text-xs uppercase tracking-wider
            "
          >
            Learn More
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* ---------- STATS ---------- */}
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {stats.map((stat, index) => {
            const { ref, visible } = useMobilePopIn<HTMLDivElement>();

            return (
              <div
                key={index}
                ref={ref}
                className={`
                  rounded-xl p-5 text-center
                  bg-white/80 backdrop-blur-sm
                  border border-black/5
                  transition-all duration-700 ease-out
                  ${
                    visible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-3"
                  }
                  lg:opacity-100 lg:translate-y-0
                `}
              >
                <stat.icon className="w-7 h-7 text-gold mx-auto mb-2" />
                <div className="text-2xl font-serif text-foreground">
                  {stat.value}
                </div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
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
