import {
  useEffect,
  useRef,
  useState,
  memo,
} from "react";

import { useNavigate } from "react-router-dom";

import SectionGoldBackground from "./bg";

import {
  Building2,
  ArrowUpRight,
} from "lucide-react";

import {
  getCategories,
  Category,
} from "@/firebase/projectService";

/* ==================== LIGHTWEIGHT IN VIEW ==================== */

function useInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

/* ==================== CATEGORY CARD ==================== */

const CategoryCard = memo(
  ({
    category,
  }: {
    category: Category;
  }) => {
    const navigate = useNavigate();

    return (
      <div
        onClick={() =>
          navigate(`/category/${category.id}`)
        }
        className="
          group
          relative
          cursor-pointer
          h-[340px]
          rounded-2xl
          overflow-hidden
          border border-white/10
          hover:border-white/20
        "
      >
        {/* IMAGE */}
        <img
          src={category.image}
          alt={category.name}
          loading="lazy"
          decoding="async"
          className="
            absolute inset-0
            w-full h-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

        {/* CONTENT */}
        <div className="relative h-full p-8 flex flex-col justify-between">
          <div
            className="
              w-14 h-14
              rounded-2xl
              bg-gold/20
              border border-gold/30
              flex items-center justify-center
            "
          >
            <Building2 className="w-7 h-7 text-gold" />
          </div>

          <div>
            <h3 className="text-3xl font-bold text-white mb-2">
              {category.name}
            </h3>

            <p className="text-xs uppercase tracking-[0.15em] text-gold mb-4">
    {category.tagline}
  </p>

            <div className="flex items-center justify-between">
              <span className="text-white/70 text-sm">
                View projects
              </span>

              <div
                className="
                  w-10 h-10
                  rounded-full
                  bg-white/10
                  border border-white/20
                  flex items-center justify-center
                "
              >
                <ArrowUpRight className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

CategoryCard.displayName = "CategoryCard";

/* ==================== ANIMATED WRAPPER ==================== */

const AnimatedCategory = ({
  category,
}: {
  category: Category;
}) => {
  const { ref, visible } =
    useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`
        transition-opacity duration-500
        ${
          visible
            ? "opacity-100"
            : "opacity-0"
        }
      `}
    >
      <CategoryCard category={category} />
    </div>
  );
};

/* ==================== MAIN SECTION ==================== */

const ProjectsSection = () => {
  const [categories, setCategories] = useState<
    Category[]
  >([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    let mounted = true;

    const loadCategories = async () => {
      try {
        const data =
          await getCategories();

        if (mounted) {
          setCategories(data);
        }
      } catch (error) {
        console.error(error);
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    loadCategories();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section
      id="projects"
      className="
        py-28
        relative
        overflow-hidden
        bg-gradient-to-b
        from-[#f2f2f2]
        via-white
        to-[#ededed]
      "
    >
      <SectionGoldBackground />

      {/* HEADER */}
      <div className="container mx-auto px-6 lg:px-12 text-center mb-20 relative z-10">
        <span className="inline-flex items-center px-5 py-2 rounded-full border border-gold/40 bg-gold/10 text-gold text-xs uppercase tracking-widest mb-8">
          Our Portfolio
        </span>

        <h2 className="text-5xl md:text-6xl font-bold text-charcoal mb-6">
          Our Expertise
        </h2>

        <p className="text-charcoal/60 max-w-2xl mx-auto">
          Industry-focused interior solutions crafted
          with precision and elegance
        </p>
      </div>

      {/* GRID */}
      <div
        className="
          container mx-auto
          px-6 lg:px-12
          grid gap-8
          sm:grid-cols-2
          lg:grid-cols-3
          relative z-10
        "
      >
        {loading
          ? Array.from({ length: 3 }).map(
              (_, index) => (
                <div
                  key={index}
                  className="
                    h-[340px]
                    rounded-2xl
                    bg-black/5
                    animate-pulse
                  "
                />
              )
            )
          : categories.map((category) => (
              <AnimatedCategory
                key={category.id}
                category={category}
              />
            ))}
      </div>
    </section>
  );
};

export default ProjectsSection;