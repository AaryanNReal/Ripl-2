
import { useEffect, useRef, useState } from "react";
import {
  Award,
  Users,
  Building,
  Clock,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import SectionGoldBackground from "@/components/bg";

/* -------------------- DATA -------------------- */

const stats = [
  {
    icon: Clock,
    count: 50,
    suffix: "+",
    label: "Years Experience",
  },
  {
    icon: Building,
    count: 500,
    suffix: "+",
    label: "Projects Delivered",
  },
  {
    icon: Users,
    count: 100,
    suffix: "+",
    label: "Professionals",
  },
  {
    icon: Award,
    count: 16,
    suffix: "+",
    label: "Regions",
  },
];

/* -------------------- STAT CARD -------------------- */

function StatCard({
  icon: Icon,
  count,
  suffix,
  label,
}: {
  icon: any;
  count: number;
  suffix: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = useState(false);
  const [currentValue, setCurrentValue] = useState(0);

  /* Detect scroll in/out */

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
          setCurrentValue(0);
        }
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  /* Count animation */

  useEffect(() => {
    if (!isVisible) return;

    let animationFrame: number;

    const duration = 1800;
    const startTime = performance.now();

    const animate = (time: number) => {
      const progress = Math.min(
        (time - startTime) / duration,
        1
      );

      const eased = 1 - Math.pow(1 - progress, 3);

      setCurrentValue(Math.floor(eased * count));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCurrentValue(count);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, count]);

  return (
    <div
      ref={ref}
      className={`
        rounded-xl p-5 text-center
        bg-white/80 backdrop-blur-sm
        border border-black/5
        transition-all duration-700 ease-out
        ${
          isVisible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-10 scale-95"
        }
      `}
    >
      <Icon className="w-7 h-7 text-gold mx-auto mb-3" />

      <div className="text-3xl font-serif text-foreground">
        {currentValue}
        {suffix}
      </div>

      <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">
        {label}
      </div>
    </div>
  );
}

/* -------------------- ABOUT SECTION -------------------- */

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-12 lg:py-20 bg-cream"
    >
      <SectionGoldBackground />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}

        <div className="text-center max-w-2xl mx-auto mb-8">
          <p className="text-gold uppercase tracking-[0.35em] text-[11px] mb-3">
            About Us
          </p>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-foreground mb-4">
            Building Dreams Into Reality
          </h2>

          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
        </div>

        {/* Content */}

        <div className="max-w-3xl mx-auto text-center space-y-4 text-black/75 text-[15px]">
          <p>
            <strong>Raghbir Interiors Pvt. Ltd.</strong> is a
            50+ year interior contracting company delivering
            high-quality projects across India and international
            markets.
          </p>

          <p>
            With expertise in corporate offices, luxury hotels,
            retail and residential developments, RIPL is driven
            by precision, planning and timely execution.
          </p>
        </div>

        {/* CTA */}

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

        {/* Stats */}

        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              count={stat.count}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

