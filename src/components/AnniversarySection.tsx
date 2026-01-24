import { Sparkles, PartyPopper } from "lucide-react";
import SectionGoldBackground from "./bg";

const AnniversarySection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-charcoal relative overflow-hidden">
    <SectionGoldBackground/>
     

      <div className="container mx-auto px-5 sm:px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-4xl mx-auto">


          {/* Milestone Label */}
         <p
  className="
    text-white uppercase font-semibold
    tracking-[0.4em]
    text-sm sm:text-base lg:text-lg
    mb-5 sm:mb-6
  "
>
  A <span className="text-gold">Golden</span> Milestone
</p>



          {/* Big 50 */}
          <div className="relative inline-block mb-4 sm:mb-6">
            <span className="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] xl:text-[12rem] font-serif font-bold text-white bg-clip-text bg-gradient-to-b from-gold via-gold-light to-gold leading-none">
              50
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-header-foreground mb-3 sm:mb-4">
            Years of Excellence
          </h2>

          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6 sm:mb-8" />

          <p className="text-lg sm:text-xl md:text-2xl text-header-foreground/80 font-light mb-6 sm:mb-8 px-2">
            Celebrating{" "}
            <span className="text-black font-medium">Five Decades</span> &{" "}
            <span className="text-black font-medium">Three Generations</span> of Crafting Dreams Into Reality
          </p>

          <p className="text-header-foreground/60 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-6 px-2">
            From our humble beginnings to becoming India's trusted name in interior excellence —
            thank you for being part of our incredible journey!
          </p>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 mt-8">
            <Stat value="3" label="Generations" />
            <Divider />
            <Stat value="50" label="Years" />
            <Divider />
            <Stat value="2" label="Manufacturing Units" />
          </div>

          {/* Decorative line */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <div className="w-12 sm:w-16 h-px bg-gold/30" />
            <span className="text-gold text-xl sm:text-2xl">✦</span>
            <div className="w-12 sm:w-16 h-px bg-gold/30" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Stat = ({ value, label }) => (
  <div className="text-center">
    <span className="text-3xl sm:text-4xl md:text-5xl font-serif text-black font-bold">
      {value}
    </span>
    <p className="text-header-foreground/70 text-sm mt-2">{label}</p>
  </div>
);

const Divider = () => (
  <div className="hidden sm:block w-px h-16 bg-gold/30" />
);

export default AnniversarySection;
