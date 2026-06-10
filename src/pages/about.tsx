import { Link } from "react-router-dom";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";
import SectionGoldBackgroundLight from "@/components/bg_black";

/* -------------------- TEAM DATA -------------------- */

const team = [
  {
    category: "Directors",
    members: [
      { name: "Mr. Balvinder Singh", designation: "Managing Director", exp: "30 Years" },
      { name: "Mr. Narendra Singh", designation: "Joint Mamaging Director", exp: "27 Years" },
      { name: "Mr. Rakesh More", designation: "Director – Project (India)", exp: "27 Years" },
      { name: "Mr. Tushar Urumkar", designation: "Director – Project (Thailand)", exp: "35 years" },
      { name: "Mr. Kishanlal Suthar", designation: "Head of Poduction", exp: "45 years" },
      { name: "Mr. Vikas Jadhav", designation: "Team Leader-Projects", exp: "20 Years" },
      { name: "Mr. Santosh Dhamapurkar", designation: "Team Leader-Projects", exp: "19 Years" },
      { name: "Mr. Amit Shelar", designation: "Team Leader-Projects", exp: "18 Years" },
    ],
  },
 
];

/* -------------------- PAGE -------------------- */

const AboutPage = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <section className="relative overflow-hidden py-12 lg:py-12 bg-cream">
      <SectionGoldBackgroundLight />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* ---------- BACK BUTTON (OUTSIDE LAYER) ---------- */}
        <div className="mb-8">
  <div
    className="
      inline-block
      rounded-xl
      bg-[radial-gradient(circle_at_left,rgba(212,175,55,0.06),transparent_70%)]
      bg-white/90
      border border-gold/10
      backdrop-blur-sm
      px-4 py-2
    "
  >
    <button
      onClick={() => window.history.back()}
      className="text-sm text-gold hover:text-gold/80 transition"
    >
      ← Back
    </button>
  </div>
</div>


        {/* ---------- FOREGROUND LAYER ---------- */}
        <div className="max-w-6xl mx-auto rounded-3xl bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.04),transparent_60%)] bg-white/97 backdrop-blur-md border border-gold/10 shadow-xl px-8 py-12 lg:px-14 lg:py-16">

          {/* ---------- HEADER ---------- */}
          <div className="max-w-4xl mx-auto text-center mb-14">
            <p className="text-gold uppercase tracking-[0.35em] text-xs mb-4">
              About Us
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-6">
              Raghbir Interiors Private Limited
            </h1>
            <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
          </div>

          {/* ---------- ABOUT CONTENT ---------- */}
          <div className="max-w-5xl mx-auto space-y-6 text-black/80 text-[16px] leading-relaxed">
            <p>
              <strong>RAGHBIR INTERIORS PRIVATE LIMITED (RIPL)</strong> is a 50
              years old turnkey Interior Contracting company rich in experience and committed to quality work
              on time. We are one of the leading Interior Contracting firms with
              headquarters in Mumbai (India) and presence in Bangkok (Thailand).
            </p>

            <p>
              The driving force behind RIPL has been the Founder Chairman
              <strong> Late Mr. Raghbir Singh</strong>, a great inspiration with his
              magnitude of experience and incredible energy.
              <strong> Mr. Balvinder Singh (Managing Director)</strong> and
              <strong> Mr. Narendra Singh ( Joint Managing Director)</strong> have successfully
              established and proved themselves by executing prestigious
              projects. Our Thailand operations are headed by
              <strong> Mr. Tushar Urumkar (Director – Projects)</strong>.
            </p>

            <p>
              RIPL’s ever-growing strength is its experience, which becomes
              richer with every completed project. Our expertise is evident from
              the diverse nature of projects executed for Indian and
              international clients, including corporate offices for
              multinationals, global software centers, ultra-deluxe hotels,
              resorts, luxury brands, residential, and mixed-use developments.
            </p>

            <p>
              Knowledge gained over years of working across multiple locations
              in India and Thailand has enabled us to take proactive initiatives
              towards achieving goals and maintaining a continuous process of
              improvement. The biggest strength of RIPL is its
              <strong> customer-need-based attitude</strong>, delivering exactly
              as per client expectations.
            </p>

            <p>
              RIPL believes that the key to business growth lies in quality
              service and time management. We have successfully executed some of
              the toughest projects with undefined demands and completed them on
              time through realistic project planning, efficient resource
              management, and strict adherence to schedules.
            </p>

            <p>
              Our workmen are trained to perform under taxing conditions, guided
              by experienced supervisors and project coordinators. RIPL is
              supported by strong infrastructure in terms of machinery and
              skilled manpower. Our well-equipped factory at Kandivali (Mumbai)
              enables off-site works along with on-site execution, ensuring
              quality and timely delivery of projects.
            </p>
          </div>

          {/* ---------- LEADERSHIP ---------- */}
          <div className="max-w-5xl mx-auto mt-14">
            <h2 className="text-3xl  font-serif text-foreground mb-6 text-center">
              Leadership
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team[0].members.map((m, idx) => (
                <div
                  key={idx}
                  className="rounded-xl p-5 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.04),transparent_70%)] bg-white border border-gold/10 shadow-sm text-center"
                >
                  <div className="text-sm font-medium text-foreground">
                    {m.name}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {m.designation}
                  </div>
                  <div className="mt-2 text-[11px] uppercase tracking-wider text-gold">
                    {m.exp}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ---------- PROJECT LINKS ---------- */}
          

        
        </div>
      </div>
    </section>
  );
};

export default AboutPage;