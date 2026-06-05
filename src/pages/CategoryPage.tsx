import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import SectionChampagneGlow from "@/components/bg_glow";


import {
  MapPin,
  ChevronRight,
  ArrowLeft,
} from "lucide-react";
/* ================= TYPES ================= */

export interface Project {
  id: number;
  title: string;
  images: string[];
  description: string;
  client: string;
  location: string;
  architect: string;
  value: string;
  duration: string;
  scope: string;
  area: string;
}

export interface CategoryPageProps {
  title: string;
  tagline: string;
  projects: Project[];
}

/* ================= IN VIEW HOOK ================= */

function useInView<T extends HTMLElement>(threshold = 0.25) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
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

/* ================= MAIN PAGE ================= */

const CategoryPage = ({ title, tagline, projects }: CategoryPageProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, []);

  const projectsWithImages = projects.filter(
    (p) => p.images && p.images.length > 0
  );



  const header = useInView<HTMLDivElement>(0.4);

  return (
    <section className="relative py-10 overflow-hidden bg-gradient-to-b from-[#f2f2f2] via-white to-[#ededed]">
      <SectionChampagneGlow />

      <div className="relative z-10">
        {/* ================= HEADER ================= */}
        <div
          ref={header.ref}
          className={`
            container mx-auto px-6 lg:px-12 text-center mb-16
            transition-all duration-700 ease-out
            ${header.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          `}
        >
          <div className="flex justify-start mb-4">
            <button
              onClick={() => navigate(-1)}
              className="
                inline-flex items-center gap-2
                px-4 py-2 rounded-full
                border border-gold/30
                bg-white/70 backdrop-blur-md
                text-charcoal text-sm font-medium
                hover:bg-white transition
              "
            >
              <ArrowLeft className="w-4 h-4 text-gold" />
              Back
            </button>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-3">
            {title}
          </h1>

          <p className="text-gold uppercase tracking-[0.3em] text-sm">
            {tagline}
          </p>
        </div>

        {/* ================= PROJECTS WITH IMAGES ================= */}
       <div className="container mx-auto px-6 lg:px-12">

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {projectsWithImages.map((project, index) => (
      <AnimatedProject
        key={project.id}
        project={project}
        index={index}
      />
    ))}
  </div>

  {/* ================= TABLE PROJECTS ================= */}
  <NoImageProjectsTable projects={projects} />

</div>
      </div>

      {/* ================= IMAGE MODAL ================= */}
        
    </section>
  );
};

/* ================= ANIMATED PROJECT ================= */

/* ================= ANIMATED PROJECT ================= */

const AnimatedProject = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const { ref, visible } = useInView<HTMLDivElement>(0.25);

  return (
    <div
      ref={ref}
      className={`
        transition-all duration-700 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <ProjectBlock project={project} />
    </div>
  );
};

/* ================= PROJECT BLOCK ================= */

const ProjectBlock = ({
  project,
}: {
  project: Project;
}) => {
  const navigate = useNavigate();

  return (
    <div
  onClick={() => navigate(`/project/${project.id}`)}
  className="
    rounded-2xl
    overflow-hidden
    cursor-pointer
    group
    bg-[#111111]
  "
>
  {/* IMAGE */}
  <div className="h-[380px] overflow-hidden">
    <img
      src={project.images[0]}
      alt={project.title}
      className="
        w-full
        h-full
        object-cover
        transition-transform
        duration-700
        group-hover:scale-110
      "
    />
  </div>

  {/* INFO LINE BELOW IMAGE */}
  <div className="px-4 py-4 flex items-center bg-white justify-between">
    <h3 className="text-xl font-semibold text-black tracking-wide">
      {project.title}
    </h3>

    <div className="flex items-center gap-2 text-black text-sm">
      <MapPin className="w-4 h-4" />
      <span>{project.location}</span>
    </div>
  </div>
</div>
  );
};
/* ================= TABLE SECTION ================= */
const NoImageProjectsTable = ({ projects }: { projects: Project[] }) => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  if (projects.length === 0) return null;

  const filteredProjects = projects.filter((p) => {
    const q = query.toLowerCase();
    return (
      p.title.toLowerCase().includes(q) ||
      p.client.toLowerCase().includes(q) ||
      p.location.toLowerCase().includes(q)
    );
  });

  return (
    <div className="pt-20">
      {/* HEADER */}
      <button
        onClick={() => setOpen(!open)}
        className="
          w-full flex items-center justify-between
          px-6 py-5 rounded-2xl
          bg-white/70 backdrop-blur-md
          border border-black/10
          text-charcoal font-semibold text-lg
          hover:bg-white transition
        "
      >
        <span>All Completed Projects</span>
        <ChevronRight
          className={`w-5 h-5 transition-transform ${
            open ? "rotate-90" : ""
          }`}
        />
      </button>

      {/* CONTENT */}
      {open && (
        <div className="mt-6 rounded-2xl bg-white/80 backdrop-blur-md border border-black/10">
          {/* SEARCH (non-scrolling) */}
          <div className="p-4 border-b border-black/10">
            <input
              type="text"
              placeholder="Search project, client or location…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="
                w-full px-4 py-3 rounded-xl
                border border-black/10
                bg-white
                text-sm
                focus:outline-none focus:ring-2 focus:ring-gold/40
              "
            />
          </div>

          {/* ================= MOBILE SCROLL CONTAINER ================= */}
          <div
            className="
              lg:hidden
              max-h-[65vh]
              overflow-y-auto
              overscroll-contain
              touch-pan-y
              p-4
              space-y-4
            "
          >
            {filteredProjects.length === 0 && (
              <p className="text-center text-charcoal/50 py-6">
                No matching projects found
              </p>
            )}

            {filteredProjects.map((p) => (
              <div
                key={p.id}
                className="rounded-xl border border-black/10 bg-white p-4"
              >
                <h4 className="font-semibold text-charcoal mb-2">
                  {p.title}
                </h4>

                <div className="text-sm text-charcoal/70 space-y-1">
                  <p><strong>Client:</strong> {p.client}</p>
                  <p><strong>Location:</strong> {p.location}</p>
                  <p><strong>Architect:</strong> {p.architect}</p>
                  <p><strong>Area:</strong> {p.area}</p>
                  <p><strong>Duration:</strong> {p.duration}</p>
                  <p><strong>Value:</strong> {p.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ================= DESKTOP TABLE ================= */}
          <div className="hidden lg:block max-h-[60vh] overflow-y-auto">
            <table className="w-full text-sm">
              <thead className="sticky top-0 bg-white z-10 border-b border-black/10">
                <tr>
                  {[
                    "Project",
                    "Client",
                    "Location",
                    "Architect",
                    "Area",
                    "Duration",
                    "Value",
                  ].map((h) => (
                    <th
                      key={h}
                      className="px-5 py-4 text-left font-medium text-charcoal/70"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {filteredProjects.map((p) => (
                  <tr
                    key={p.id}
                    className="border-t border-black/5 hover:bg-black/5 transition"
                  >
                    <td className="px-5 py-4 font-semibold">{p.title}</td>
                    <td className="px-5 py-4">{p.client}</td>
                    <td className="px-5 py-4">{p.location}</td>
                    <td className="px-5 py-4">{p.architect}</td>
                    <td className="px-5 py-4">{p.area}</td>
                    <td className="px-5 py-4">{p.duration}</td>
                    <td className="px-5 py-4">{p.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
