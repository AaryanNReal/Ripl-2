import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import heroImage1 from "@/assets/hero-commercial.jpg";
import heroImage2 from "@/assets/hero-hospitality.jpg";
import heroImage3 from "@/assets/hero-banking.jpg";

const slides = [
  { image: heroImage1 },
  { image: heroImage2 },
  { image: heroImage3 },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrev = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + slides.length) % slides.length
    );
  };

  const goToNext = () => {
    setCurrentSlide(
      (prev) => (prev + 1) % slides.length
    );
  };

  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide
              ? "opacity-100"
              : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="hero-overlay" />
        </div>
      ))}

      {/* Previous Button */}
      <button
        onClick={goToPrev}
        className="
          absolute left-4 md:left-8
          top-1/2 -translate-y-1/2
          w-12 h-12
          flex items-center justify-center
          text-header-foreground/70
          hover:text-gold
          transition-colors
          z-20
        "
      >
        <ChevronLeft className="w-8 h-8" />
      </button>

      {/* Next Button */}
      <button
        onClick={goToNext}
        className="
          absolute right-4 md:right-8
          top-1/2 -translate-y-1/2
          w-12 h-12
          flex items-center justify-center
          text-header-foreground/70
          hover:text-gold
          transition-colors
          z-20
        "
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      {/* Dots */}
      <div
        className="
          absolute bottom-8
          left-1/2 -translate-x-1/2
          flex gap-3
          z-20
        "
      >
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-8 bg-gold"
                : "w-3 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;

