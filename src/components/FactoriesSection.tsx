import { useEffect, useRef, useState } from "react";
import { Factory, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

import SectionGoldBackgroundLight from "./bg_black";

const factories = [
  {
    name: "Kandivali Workshop",
    location: "Kandivali, Mumbai",
    shortDescription:
      "A city-based workshop focused on precision detailing, fast turnaround, and seamless client coordination.",

    image: "/src/assets/hero-banking.jpg",

    images: [
      "/src/assets/hero-banking.jpg",
      "/src/assets/hero-commercial.jpg",
      "/src/assets/hero-hospitality.jpg",
      "/src/assets/hero-banking.jpg",
    ],
  },
];

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

const FactoryCard = ({
  factory,
  onClick,
}: {
  factory: (typeof factories)[0];
  onClick: () => void;
}) => {
  const { ref, visible } = useMobilePopIn<HTMLDivElement>();

  return (
    <div
      ref={ref}
      onClick={onClick}
      className={`
        group relative h-full rounded-2xl overflow-hidden
        bg-gradient-to-br from-charcoal to-charcoal/80
        border border-white/5 cursor-pointer

        transition-all duration-700
        ease-[cubic-bezier(0.16,1,0.3,1)]

        ${
          visible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-10 scale-[0.94]"
        }

        lg:opacity-100 lg:translate-y-0 lg:scale-100
        hover:border-white/10
      `}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative h-[400px] sm:h-[450px] lg:h-[500px] overflow-hidden">
        <img
          src={factory.image}
          alt={factory.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
          <div className="group-hover:-translate-y-2 transition-transform duration-300">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gold/20 flex items-center justify-center border border-gold/30">
                <MapPin className="w-4 h-4 text-gold" />
              </div>

              <span className="text-sm text-white font-medium">
                {factory.location}
              </span>
            </div>

            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-2">
              {factory.name}
            </h3>

            <p className="text-white/70 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Explore Facility →
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const FactoriesSection = () => {
  const navigate = useNavigate();

  return (
    <section
      id="factories"
      className="relative overflow-hidden py-20 lg:py-28 bg-charcoal"
    >
      <SectionGoldBackgroundLight />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/10 backdrop-blur-md mb-6">
            <Factory className="w-4 h-4 text-gold" />

            <span className="text-gold uppercase tracking-widest text-xs font-medium">
              Manufacturing Excellence
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-cream mb-6">
            Our Production Facilities
          </h2>

          <div className="w-24 h-1.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8" />

          <p className="text-cream/70 max-w-2xl mx-auto text-lg">
            Strategically located facilities designed to deliver quality,
            efficiency, and precision across every project.
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-8 lg:gap-12">
          {factories.map((factory, index) => (
            <FactoryCard
              key={index}
              factory={factory}
              onClick={() =>
                navigate("/factory-detail", {
                  state: { factory },
                })
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FactoriesSection;