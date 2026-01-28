import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import corporateImg from "@/assets/project-commercial.jpg";
import retailImg from "@/assets/project-retail.jpg";
import hospitalityImg from "@/assets/hero-hospitality.jpg";

import SectionGoldBackground from "./bg";

import {
  Building2,
  Store,
  Hotel,
  ArrowUpRight,
} from "lucide-react";

/* ==================== TYPES ==================== */

interface CategoryData {
  id: string;            // route id (DO NOT CHANGE)
  name: string;          // UI name
  tagline: string;
  icon: typeof Building2;
  image: string;
}

/* ==================== DATA ==================== */

const categories: CategoryData[] = [
  {
    id: "corporate",
    name: "Corporate",
    tagline: "Inspiring Workspaces",
    icon: Building2,
    image: corporateImg,
  },
  {
    id: "retail", // route remains /projects/retail
    name: "Boutiques",
    tagline: "Captivating Experiences",
    icon: Store,
    image: retailImg,
  },
  {
    id: "hospitality", // route remains /projects/hospitality
    name: "Hotels & Resorts",
    tagline: "Unforgettable Stays",
    icon: Hotel,
    image: hospitalityImg,
  },
];

/* ==================== SCROLL ANIMATION ==================== */

function useInView<T extends HTMLElement>(
  options: IntersectionObserverInit = { threshold: 0.25 }
) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      options
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);

  return { ref, visible };
}

/* ==================== CATEGORY CARD ==================== */

const CategoryCard = ({ category }: { category: CategoryData }) => {
  const navigate = useNavigate();
  const Icon = category.icon;

  return (
    <div
      onClick={() => navigate(`/${category.id}`)}
      className="
        group relative cursor-pointer
        h-[340px]
        rounded-2xl overflow-hidden
        border border-white/10 hover:border-white/20
        transition-all duration-500
      "
    >
      {/* IMAGE */}
      <img
        src={category.image}
        alt={category.name}
        className="
          absolute inset-0 w-full h-full object-cover
          transition-transform duration-700
          group-hover:scale-110
        "
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

      {/* GOLD GLOW */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.35),transparent_60%)]" />

      {/* CONTENT */}
      <div className="relative h-full p-8 flex flex-col justify-between">
        {/* ICON */}
        <div className="w-14 h-14 rounded-2xl bg-gold/20 backdrop-blur-md border border-gold/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-7 h-7 text-gold" />
        </div>

        {/* TEXT */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-2">
            {category.name}
          </h3>

          <p className="text-sm uppercase tracking-[0.3em] text-gold mb-6">
            {category.tagline}
          </p>

          <div className="flex items-center justify-between">
            <span className="text-white/70 text-sm">
              View projects
            </span>

            <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
              <ArrowUpRight className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ==================== ANIMATED WRAPPER ==================== */

const AnimatedCategory = ({ category }: { category: CategoryData }) => {
  const { ref, visible } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`
        transition-all duration-700 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        lg:opacity-100 lg:translate-y-0
      `}
    >
      <CategoryCard category={category} />
    </div>
  );
};

/* ==================== MAIN SECTION ==================== */

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="py-28 relative overflow-hidden bg-gradient-to-b from-[#f2f2f2] via-white to-[#ededed]"
    >
      <SectionGoldBackground />

      {/* HEADING */}
      <div className="container mx-auto px-6 lg:px-12 text-center mb-20 relative z-10">
        <span className="inline-flex items-center px-5 py-2 rounded-full border border-gold/40 bg-gold/10 text-gold text-xs uppercase tracking-widest mb-8">
          Our Portfolio
        </span>

        <h2 className="text-5xl md:text-6xl font-bold text-charcoal mb-6">
          Our Expertise
        </h2>

        <p className="text-charcoal/60 max-w-2xl mx-auto">
          Industry-focused interior solutions crafted with precision and elegance
        </p>
      </div>

      {/* GRID (FIXED) */}
      <div
        className="
          container mx-auto px-6 lg:px-12
          grid gap-8
          sm:grid-cols-2
          lg:grid-cols-3
          relative z-10
        "
      >
        {categories.map((category) => (
          <AnimatedCategory key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
