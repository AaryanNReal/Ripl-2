import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  {
    title: "Vision",
    text: "Every space begins with intent, mood, and proportion.",
  },
  {
    title: "Materiality",
    text: "Stone, timber, metal, and fabric curated for timeless elegance.",
  },
  {
    title: "Spatial Flow",
    text: "Movement, balance, and light engineered into the plan.",
  },
  {
    title: "Craft & Finish",
    text: "Precision execution, flawless detailing, enduring quality.",
  },
];

const InteriorJourney = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const items = ref.current?.querySelectorAll(".step");
    if (!items) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActive(Number(e.target.getAttribute("data-i")));
          }
        });
      },
      { threshold: 0.6 }
    );

    items.forEach((i) => observer.observe(i));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative bg-neutral-950 text-white">
      <div className="container mx-auto grid lg:grid-cols-2 gap-20 py-40">

        {/* STICKY VISUAL */}
        <div className="sticky top-32 h-[70vh] rounded-3xl bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center max-w-sm"
            >
              <h3 className="text-4xl font-light mb-6">
                {steps[active].title}
              </h3>
              <p className="text-neutral-400 leading-relaxed">
                {steps[active].text}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* SCROLL TRACK */}
        <div ref={ref} className="space-y-[50vh]">
          {steps.map((_, i) => (
            <div
              key={i}
              data-i={i}
              className="step h-[60vh]"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteriorJourney;
