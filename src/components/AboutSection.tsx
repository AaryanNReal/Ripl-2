import { useEffect, useRef, useState } from "react";
import { Award, Users, Building, Clock } from "lucide-react";
import SectionGoldBackground from "@/components/bg";

/* -------------------- DATA -------------------- */

const stats = [
  { icon: Clock, value: "50+", label: "Years of Experience" },
  { icon: Building, value: "500+", label: "Projects Delivered" },
  { icon: Users, value: "100+", label: "Skilled Professionals" },
  { icon: Award, value: "16+", label: "States & Regions" },
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
      className="relative overflow-hidden py-24 lg:py-36 bg-cream"
    >
      <SectionGoldBackground />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* ---------- HEADER ---------- */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <p className="text-gold uppercase tracking-[0.35em] text-xs font-medium mb-5">
            About Us
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-8 leading-tight">
            Building Dreams Into Reality
          </h2>

          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-10" />
        </div>

        {/* ---------- CONTENT ---------- */}
        <div className="max-w-5xl mx-auto space-y-8 text-black/80 text-[17px] leading-relaxed">
          <p>
            <strong>Raghbir Interiors Private Limited (RIPL)</strong> is a
            45-year-old organization built on experience, integrity, and a
            commitment to delivering quality work on time. Headquartered in
            Mumbai, India, with a strong presence in Bangkok, Thailand, RIPL is
            recognized as one of the leading interior contracting firms in the
            region.
          </p>

          <p>
            The driving force behind RIPL has been its Founder Chairman,
            <strong> Mr. Raghbir Singh</strong>, whose experience and vision laid
            the foundation of the company. Under the leadership of
            <strong> Mr. Balvinder Singh (Managing Director)</strong> and
            <strong> Mr. Narendra Singh (Director)</strong>, RIPL has
            successfully executed numerous prestigious projects across India
            and internationally.
          </p>

          <p>
            With operations in Thailand led by
            <strong> Mr. Tushar Urumkar (Director – Projects)</strong>, the
            company continues to expand its international footprint. RIPL’s
            expertise spans corporate offices for multinational companies,
            global software centers, luxury hotels, resorts, premium retail
            brands, residential developments, and mixed-use projects.
          </p>

          <p>
            RIPL’s strength lies in its{" "}
            <strong>customer-need–based approach</strong>, realistic project
            planning, and strict adherence to timelines. Backed by strong
            infrastructure, skilled manpower, and an in-house factory at
            Kandivali (Mumbai), the company consistently delivers quality and
            precision, even under demanding conditions.
          </p>
        </div>

        {/* ---------- STATS ---------- */}
        <div className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => {
            const { ref, visible } = useMobilePopIn<HTMLDivElement>();

            return (
              <div
                key={index}
                ref={ref}
                className={`
                  relative rounded-2xl p-8 text-center
                  bg-white/80 backdrop-blur-sm
                  border border-black/5

                  transition-all duration-700 ease-out
                  ${
                    visible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-6"
                  }

                  lg:opacity-100 lg:translate-y-0
                `}
              >
                <stat.icon className="w-9 h-9 text-gold mx-auto mb-4" />

                <div className="text-4xl font-serif text-foreground mb-1">
                  {stat.value}
                </div>

                <div className="text-xs uppercase tracking-wider text-muted-foreground">
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
