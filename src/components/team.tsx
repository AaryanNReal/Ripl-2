import { useEffect, useRef, useState } from "react";
import { Users, Briefcase } from "lucide-react";
import SectionGoldBackground from "@/components/bg";

/* -------------------- DATA -------------------- */

/* Key Personnel (highlighted) */
const leadership = [
  {
    name: "Balvinder Singh",
    role: "Managing Director",
    experience: "27+ Years Experience",
  },
  {
    name: "Narendra Singh",
    role: "Director",
    experience: "24+ Years Experience",
  },
  {
    name: "Rakesh More",
    role: "Director – Projects (India)",
    experience: "27+ Years Experience",
  },
  {
    name: "Tushar Urumkar",
    role: "Director – Projects (Thailand)",
    experience: "33+ Years Experience",
  },
];

/* Core Team (standard) */
const teamMembers = [
  { name: "Shruti Palav", role: "Senior Project Coordinator" },
  { name: "Riya Sawant", role: "Project Coordinator" },
  { name: "Sharda Jadhav", role: "Senior Manager – Accounts" },
  { name: "Namrata Palav", role: "Senior Manager – Accounts" },
  { name: "Vikas Padave", role: "Accounts Assistant" },
  { name: "Harshada Chachad", role: "Accounts Assistant" },
  { name: "Reshma D’Souza", role: "Senior Manager – Procurement" },
  { name: "Geeta Likhite", role: "Senior Manager – Procurement" },
  { name: "Dharma Narvekar", role: "Factory Manager" },
];

/* -------------------- MOBILE SCROLL POP HOOK -------------------- */

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
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

/* -------------------- SECTION -------------------- */

const TeamSection = () => {
  return (
    <section
      id="team"
      className="relative overflow-hidden py-20 lg:py-32 bg-cream"
    >
      {/* Gold ambient background */}
      <SectionGoldBackground />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* ---------- SECTION HEADER ---------- */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <p className="text-gold uppercase tracking-[0.4em] text-sm sm:text-base lg:text-lg font-semibold mb-5">
            Our Team
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-charcoal mb-6 leading-tight">
            The People Behind Our Work
          </h2>

          <div className="w-24 h-1.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8" />

          <p className="text-charcoal/70 leading-relaxed text-lg">
            Our leadership and core team bring decades of experience, technical
            expertise, and a shared commitment to excellence.
          </p>
        </div>

        {/* ---------- KEY PERSONNEL ---------- */}
        <div className="mb-16">
          <h3 className="text-center text-2xl font-serif text-charcoal mb-10">
            Key Personnel
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {leadership.map((person, index) => {
              const { ref, visible } = useMobilePopIn<HTMLDivElement>();

              return (
                <div
                  key={index}
                  ref={ref}
                  className={`
                    group relative rounded-2xl
                    bg-[#FEF3C7]/90 backdrop-blur-sm
                    border border-gold/30
                    p-8 text-center

                    transition-all duration-700
                    ease-[cubic-bezier(0.16,1,0.3,1)]

                    ${
                      visible
                        ? "opacity-100 translate-y-0 scale-100"
                        : "opacity-0 translate-y-8 scale-[0.94]"
                    }

                    lg:opacity-100 lg:translate-y-0 lg:scale-100
                    hover:shadow-2xl
                  `}
                >
                  <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-gold/20 border border-gold/40 flex items-center justify-center">
                    <Briefcase className="w-7 h-7 text-gold" />
                  </div>

                  <h4 className="text-xl font-serif text-charcoal mb-1">
                    {person.name}
                  </h4>

                  <p className="text-gold font-medium text-sm mb-2">
                    {person.role}
                  </p>

                  <p className="text-charcoal/70 text-sm">
                    {person.experience}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ---------- CORE TEAM ---------- */}
        <div>
          <h3 className="text-center text-2xl font-serif text-charcoal mb-10">
            Core Team
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {teamMembers.map((member, index) => {
              const { ref, visible } = useMobilePopIn<HTMLDivElement>();

              return (
                <div
                  key={index}
                  ref={ref}
                  className={`
                    group relative rounded-2xl
                    bg-[#FAF8F2]/90 backdrop-blur-sm
                    border border-black/5
                    p-6

                    transition-all duration-700
                    ease-[cubic-bezier(0.16,1,0.3,1)]

                    ${
                      visible
                        ? "opacity-100 translate-y-0 scale-100"
                        : "opacity-0 translate-y-8 scale-[0.92]"
                    }

                    lg:opacity-100 lg:translate-y-0 lg:scale-100
                    hover:shadow-xl
                  `}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-gold/15 border border-gold/30 flex items-center justify-center">
                      <Users className="w-5 h-5 text-gold" />
                    </div>

                    <div>
                      <h4 className="text-lg font-serif text-charcoal mb-1">
                        {member.name}
                      </h4>
                      <p className="text-charcoal/70 text-sm">
                        {member.role}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
