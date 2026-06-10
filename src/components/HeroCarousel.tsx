import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { getProjects } from "@/firebase/projectService";
import { Project } from "@/types/project";

const HeroCarousel = () => {
  const navigate = useNavigate();

  const [slides, setSlides] = useState<Project[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  /* ================= LOAD FROM FIREBASE ================= */

  useEffect(() => {
    const loadSlides = async () => {
      try {
        const projects = await getProjects();

        const featuredProjects = projects.filter(
          (project) => project.featured
        );

        setSlides(featuredProjects);
      } catch (error) {
        console.error("Error loading featured projects:", error);
      }
    };

    loadSlides();
  }, []);

  /* ================= AUTOPLAY ================= */

  useEffect(() => {
    if (slides.length === 0) return;

    const interval = setInterval(() => {
      setCurrentSlide(
        (prev) => (prev + 1) % slides.length
      );
    }, 6000);

    return () => clearInterval(interval);
  }, [slides]);

  /* ================= NAVIGATION ================= */

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrev = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + slides.length) % slides.length
    );
  };

  const goToNext = () => {
    setCurrentSlide(
      (prev) => (prev + 1) % slides.length
    );
  };

  /* ================= LOADING ================= */

  if (slides.length === 0) {
    return (
      <section
        id="home"
        className="relative h-screen w-full bg-black"
      />
    );
  }

  /* ================= RENDER ================= */

  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden"
    >
      {slides.map((slide, index) => (
        <div
          key={slide.slug}
          onClick={() =>
            navigate(
              `/projects/${slide.category}/${slide.slug}`
            )
          }
          className={`
            absolute inset-0 cursor-pointer
            transition-opacity duration-1000
            ${
              index === currentSlide
                ? "opacity-100"
                : "opacity-0"
            }
          `}
        >
       <div className="absolute inset-0 overflow-hidden">
  <img
    src={slide.images?.[0]}
    alt={slide.title}
    className="
      w-full
      h-full
      object-cover
      object-center
      scale-105
    "
  />
</div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30" />

          {/* Content */}
          <div
            className="
              absolute
              bottom-20
              right-6
              md:right-12
              z-10
              text-right
            "
          >
            <h1
              className="
                text-white
                text-3xl
                md:text-5xl
                lg:text-6xl
                font-bold
                leading-tight
                drop-shadow-lg
                max-w-4xl
              "
            >
              {slide.title}
            </h1>

            <p
              className="
                mt-3
                text-white/80
                text-sm
                md:text-base
                tracking-wide
                uppercase
              "
            >
              Explore Project →
            </p>
          </div>
        </div>
      ))}

      {/* Previous */}
      <button
        onClick={goToPrev}
        className="
          absolute left-4 md:left-8
          top-1/2 -translate-y-1/2
          z-20
          text-white/70
          hover:text-gold
          transition-colors
        "
      >
        <ChevronLeft className="w-10 h-10" />
      </button>

      {/* Next */}
      <button
        onClick={goToNext}
        className="
          absolute right-4 md:right-8
          top-1/2 -translate-y-1/2
          z-20
          text-white/70
          hover:text-gold
          transition-colors
        "
      >
        <ChevronRight className="w-10 h-10" />
      </button>

      {/* Dots */}
      <div
        className="
          absolute bottom-6
          left-1/2 -translate-x-1/2
          flex gap-3
          z-20
        "
      >
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`
              h-3 rounded-full
              transition-all duration-300
              ${
                index === currentSlide
                  ? "w-8 bg-gold"
                  : "w-3 bg-white/40 hover:bg-white/60"
              }
            `}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;