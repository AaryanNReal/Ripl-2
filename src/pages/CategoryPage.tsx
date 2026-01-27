import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import SectionChampagneGlow from "@/components/bg_glow";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  MapPin,
  Clock,
  Ruler,
  Calendar,
  ChevronLeft,
  ChevronRight,
  X,
  ArrowLeft,
} from "lucide-react";

/* ================= TYPES ================= */

export interface Project {
  id: number;
  title: string;
  images: string[];
  location: string;
  description: string;
  area: string;
  duration: string;
  year: string;
}

export interface CategoryPageProps {
  title: string;
  tagline: string;
  projects: Project[];
}

/* ================= SCROLL HOOK ================= */

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

/* ================= COMPONENT ================= */

const CategoryPage = ({ title, tagline, projects }: CategoryPageProps) => {
  const navigate = useNavigate();

  /* FORCE PAGE TO TOP */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, []);

  const [selected, setSelected] = useState<{
    project: Project;
    imageIndex: number;
  } | null>(null);

  const [modalApi, setModalApi] = useState<CarouselApi>();

  useEffect(() => {
    if (modalApi && selected) {
      modalApi.scrollTo(selected.imageIndex, true);
    }
  }, [modalApi, selected]);

  const header = useInView<HTMLDivElement>(0.4);

  return (
    <section className="relative py-28 overflow-hidden bg-gradient-to-b from-[#f2f2f2] via-white to-[#ededed]">
      <SectionChampagneGlow />

      <div className="relative z-10">
        {/* ================= HEADER ================= */}
        <div
          ref={header.ref}
          className={`
            container mx-auto px-6 lg:px-12 text-center mb-20
            transition-all duration-700 ease-out
            ${header.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          `}
        >
          <div className="flex justify-start mb-6">
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

          <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-4">
            {title}
          </h1>
          <p className="text-gold uppercase tracking-[0.3em] text-sm">
            {tagline}
          </p>
        </div>

        {/* ================= PROJECTS ================= */}
        <div className="container mx-auto px-6 lg:px-12 space-y-20">
          {projects.map((project, i) => (
            <AnimatedProject
              key={project.id}
              project={project}
              index={i}
              onImageClick={(imageIndex) =>
                setSelected({ project, imageIndex })
              }
            />
          ))}
        </div>
      </div>

      {/* ================= MODAL ================= */}
      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="max-w-6xl w-[95vw] max-h-[95vh] bg-charcoal border border-white/10 p-0 overflow-hidden">
          {selected && (
            <>
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-black/70 border border-white/20 flex items-center justify-center"
              >
                <X className="w-4 h-4 text-white" />
              </button>

              <div className="flex flex-col lg:grid lg:grid-cols-2 max-h-[95vh]">
                <div className="relative bg-black">
                  <Carousel setApi={setModalApi} opts={{ loop: true }}>
                    <CarouselContent>
                      {selected.project.images.map((img, i) => (
                        <CarouselItem key={i}>
                          <img
                            src={img}
                            className="w-full h-[50vh] lg:h-[90vh] object-contain"
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                  </Carousel>

                  <ArrowBtnLeft onClick={() => modalApi?.scrollPrev()} />
                  <ArrowBtnRight onClick={() => modalApi?.scrollNext()} />
                </div>

                <div className="p-6 lg:p-10 text-white overflow-y-auto">
                  <h2 className="text-3xl font-bold mb-4">
                    {selected.project.title}
                  </h2>
                  <p className="text-white/70 mb-6">
                    {selected.project.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <Info icon={MapPin} label="Location" value={selected.project.location} />
                    <Info icon={Ruler} label="Area" value={selected.project.area} />
                    <Info icon={Clock} label="Duration" value={selected.project.duration} />
                    <Info icon={Calendar} label="Year" value={selected.project.year} />
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

/* ================= ANIMATED PROJECT ================= */

const AnimatedProject = ({
  project,
  index,
  onImageClick,
}: {
  project: Project;
  index: number;
  onImageClick: (index: number) => void;
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
      <ProjectBlock project={project} onImageClick={onImageClick} />
    </div>
  );
};

/* ================= PROJECT BLOCK ================= */

const ProjectBlock = ({
  project,
  onImageClick,
}: {
  project: Project;
  onImageClick: (index: number) => void;
}) => {
  const [api, setApi] = useState<CarouselApi>();

  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div className="relative">
        <Carousel setApi={setApi} opts={{ loop: true }}>
          <CarouselContent>
            {project.images.map((img, i) => (
              <CarouselItem key={i}>
                <div
                  onClick={() => onImageClick(i)}
                  className="relative h-[420px] rounded-2xl overflow-hidden cursor-pointer group"
                >
                  <img
                    src={img}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="lg:hidden absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  <div className="lg:hidden absolute bottom-0 p-5 text-white">
                    <h3 className="text-xl font-bold mb-1">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-white/80">
                      <MapPin className="w-4 h-4" />
                      {project.location}
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <ArrowBtnLeft onClick={() => api?.scrollPrev()} />
        <ArrowBtnRight onClick={() => api?.scrollNext()} />
      </div>

      <div className="hidden lg:block">
        <h3 className="text-3xl font-bold text-charcoal mb-4">
          {project.title}
        </h3>
        <p className="text-charcoal/60 mb-6">
          {project.description}
        </p>
        <div className="flex items-center gap-2 text-sm text-charcoal/70">
          <MapPin className="w-4 h-4 text-gold" />
          {project.location}
        </div>
      </div>
    </div>
  );
};

/* ================= HELPERS ================= */

const ArrowBtnLeft = ({ onClick }: { onClick: () => void }) => (
  <button
    onClick={onClick}
    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 border border-white/20 flex items-center justify-center"
  >
    <ChevronLeft className="w-5 h-5 text-white" />
  </button>
);

const ArrowBtnRight = ({ onClick }: { onClick: () => void }) => (
  <button
    onClick={onClick}
    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 border border-white/20 flex items-center justify-center"
  >
    <ChevronRight className="w-5 h-5 text-white" />
  </button>
);

const Info = ({
  icon: Icon,
  label,
  value,
}: {
  icon: any;
  label: string;
  value: string;
}) => (
  <div className="flex items-center gap-3">
    <Icon className="w-4 h-4 text-gold" />
    <div>
      <p className="text-xs text-white/50">{label}</p>
      <p className="text-white">{value}</p>
    </div>
  </div>
);

export default CategoryPage;
