import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroImage1 from "@/assets/hero-commercial.jpg";
import heroImage2 from "@/assets/hero-hospitality.jpg";
import heroImage3 from "@/assets/hero-banking.jpg";

const slides = [
  {
    image: heroImage1,
    title: "A World-Class Design",
    subtitle: "Complemented With The World-Class Execution",
  },
  {
    image: heroImage2,
    title: "Crafted Better",
    subtitle: "With Creativity And Dedication",
  },
  {
    image: heroImage3,
    title: "Perfection Guaranteed",
    subtitle: "Perfection Delivered",
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="hero-overlay" />
          
          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-6 max-w-4xl">
              <h1
                className={`text-4xl md:text-6xl lg:text-7xl font-serif text-header-foreground mb-6 transition-all duration-700 ${
                  index === currentSlide ? "animate-slide-up" : ""
                }`}
              >
                {slide.title}
              </h1>
              <p
                className={`text-lg md:text-xl text-header-foreground/80 font-light tracking-wide transition-all duration-700 delay-200 ${
                  index === currentSlide ? "animate-fade-in" : ""
                }`}
              >
                {slide.subtitle}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={goToPrev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-header-foreground/70 hover:text-gold transition-colors"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-header-foreground/70 hover:text-gold transition-colors"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-gold w-8"
                : "bg-header-foreground/40 hover:bg-header-foreground/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
