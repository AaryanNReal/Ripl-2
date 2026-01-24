import { useEffect, useRef, useState } from "react";
import {
  Factory,
  MapPin,
  Users,
  Package,
  Clock,
  X,
} from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

import SectionGoldBackgroundLight from "./bg_black";

/* -------------------- DATA -------------------- */

const factories = [
  {
    name: "Wada Manufacturing Unit",
    location: "Wada, Near Mumbai",
    shortDescription:
      "A large-scale, eco-conscious manufacturing facility equipped with modern machinery and skilled craftsmanship.",
    fullDescription:
      "Our Wada facility represents the pinnacle of modern manufacturing excellence. Spanning over 50,000 sq.ft., this state-of-the-art unit combines cutting-edge technology with traditional craftsmanship. We've invested in eco-friendly processes and sustainable practices, ensuring that quality and environmental responsibility go hand in hand.",
    image: "/src/assets/hero-banking.jpg",
    features: [
      "CNC Machinery",
      "Eco-Friendly Process",
      "Quality Control Lab",
      "Large Scale Production",
    ],
    capacity: "500+ units/month",
    workforce: "100+ skilled workers",
    established: "2015",
  },
  {
    name: "Kandivali Workshop",
    location: "Kandivali, Mumbai",
    shortDescription:
      "A city-based workshop focused on precision detailing, fast turnaround, and seamless client coordination.",
    fullDescription:
      "Strategically located in the heart of Mumbai, our Kandivali workshop serves as the perfect bridge between design and execution. This facility specializes in custom work, intricate detailing, and rapid prototyping.",
    image: "/src/assets/hero-banking.jpg",
    features: [
      "Custom Fabrication",
      "Rapid Prototyping",
      "Client Showroom",
      "Express Delivery",
    ],
    capacity: "200+ units/month",
    workforce: "50+ craftsmen",
    established: "2010",
  },
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

const FactoriesSection = () => {
  const [selectedFactory, setSelectedFactory] =
    useState<(typeof factories)[0] | null>(null);

  return (
    <>
      <section
        id="factories"
        className="relative overflow-hidden py-20 lg:py-28 bg-charcoal"
      >
        {/* Gold ambient background (CONSISTENT ACROSS SITE) */}
        <SectionGoldBackgroundLight />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          {/* ---------- HEADER ---------- */}
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

          {/* ---------- FACTORY CARDS ---------- */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {factories.map((factory, index) => {
              const { ref, visible } = useMobilePopIn<HTMLDivElement>();

              return (
                <div
                  key={index}
                  ref={ref}
                  onClick={() => setSelectedFactory(factory)}
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
                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Image */}
                  <div className="relative h-[400px] sm:h-[450px] lg:h-[500px] overflow-hidden">
                    <img
                      src={factory.image}
                      alt={factory.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                    {/* Location + Title */}
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
                          Click to learn more about this facility
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- MODAL ---------- */}
      <Dialog
        open={!!selectedFactory}
        onOpenChange={() => setSelectedFactory(null)}
      >
        <DialogContent className="max-w-5xl max-h-[90vh] bg-gradient-to-br from-charcoal to-charcoal/95 p-0 overflow-hidden border border-white/10">
          <button
            onClick={() => setSelectedFactory(null)}
            className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-black/70 hover:bg-black/90 flex items-center justify-center border border-white/20"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          {selectedFactory && (
            <div className="flex flex-col lg:grid lg:grid-cols-5 max-h-[90vh]">
              <div className="lg:col-span-3 p-8 flex items-center justify-center">
                <img
                  src={selectedFactory.image}
                  alt={selectedFactory.name}
                  className="max-h-full max-w-full object-contain rounded-lg"
                />
              </div>

              <div className="lg:col-span-2 p-8 overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-3xl font-bold text-white mb-3">
                    {selectedFactory.name}
                  </DialogTitle>
                  <DialogDescription className="text-cream/70 leading-relaxed">
                    {selectedFactory.fullDescription}
                  </DialogDescription>
                </DialogHeader>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FactoriesSection;
