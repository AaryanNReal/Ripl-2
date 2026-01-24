  import { useState,useEffect,useRef } from "react";
  import {
    ChevronLeft,
    ChevronRight,
    Building2,
    Landmark,
    Store,
    Hotel,
    MapPin,
    Clock,
    Ruler,
    Calendar,
    ArrowUpRight,
    X,
  } from "lucide-react";

  import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselApi,
  } from "@/components/ui/carousel";

  import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
  } from "@/components/ui/dialog";

  import projectHospitality from "@/assets/project-hospitality.jpg";
  import projectCommercial from "@/assets/project-commercial.jpg";
  import projectBanking from "@/assets/project-banking.jpg";
  import projectRetail from "@/assets/project-retail.jpg";

  /* -------------------- TYPES -------------------- */


  interface Project {
    id: number;
    image: string;
    gallery: string[];
    title: string;
    location: string;
    shortDescription: string;
    fullDescription: string;
    features: string[];
    area: string;
    duration: string;
    year: string;
  }

  interface CategoryData {
    id: string;
    name: string;
    icon: typeof Building2;
    tagline: string;
    projects: Project[];
  }


function useInView<T extends HTMLElement>(
  options: IntersectionObserverInit = {
    threshold: 0.25,
  }
) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      options
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);

  return { ref, visible };
}



const AnimatedCategory = ({
  category,
  onProjectClick,
}: {
  category: CategoryData;
  onProjectClick: (p: Project, c: CategoryData) => void;
}) => {
  const { ref, visible } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`
        transition-all duration-700 ease-out

        /* Scroll-in (mobile) */
        ${visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-6"}

        /* Glow on scroll-in */
        ${visible
          ? "shadow-[0_0_0_1px_rgba(212,175,55,0.25),0_20px_60px_rgba(212,175,55,0.25)]"
          : ""}

        /* Desktop hover glow */
        lg:hover:shadow-[0_0_0_1px_rgba(212,175,55,0.35),0_25px_80px_rgba(212,175,55,0.35)]
        lg:hover:-translate-y-1

        /* Always visible on desktop */
        lg:opacity-100
        lg:translate-y-0
      `}
    >
      <CategoryCard
        category={category}
        onProjectClick={onProjectClick}
      />
    </div>
  );
};

  /* -------------------- CATEGORY STYLES -------------------- */

  const categoryStyles: Record<
    string,
    { overlay: string; accent: string; hoverScale: string; badgeBg: string; glowColor: string }
  > = {
    corporate: {
      overlay: "from-charcoal via-charcoal/70 to-transparent",
      accent: "text-gold",
      hoverScale: "group-hover:scale-110",
      badgeBg: "bg-gradient-to-br from-gold/20 to-gold/5",
      glowColor: "group-hover:shadow-gold/20",
    },
    banking: {
      overlay: "from-black via-black/70 to-transparent",
      accent: "text-emerald-400",
      hoverScale: "group-hover:scale-105",
      badgeBg: "bg-gradient-to-br from-emerald-400/20 to-emerald-400/5",
      glowColor: "group-hover:shadow-emerald-400/20",
    },
    retail: {
      overlay: "from-charcoal via-charcoal/50 to-transparent",
      accent: "text-pink-400",
      hoverScale: "group-hover:scale-115",
      badgeBg: "bg-gradient-to-br from-pink-400/20 to-pink-400/5",
      glowColor: "group-hover:shadow-pink-400/20",
    },
    hospitality: {
      overlay: "from-black via-black/50 to-transparent",
      accent: "text-sky-400",
      hoverScale: "group-hover:scale-110",
      badgeBg: "bg-gradient-to-br from-sky-400/20 to-sky-400/5",
      glowColor: "group-hover:shadow-sky-400/20",
    },
  };

  /* -------------------- DATA -------------------- */

  const categories: CategoryData[] = [
    {
  id: "corporate",
  name: "Corporate",
  icon: Building2,
  tagline: "Inspiring Workspaces",
  projects: [
    {
      id: 1,
      image: projectCommercial,
      gallery: [projectCommercial, projectCommercial],
      title: "Tech Park Headquarters",
      location: "Mumbai, Maharashtra",
      shortDescription: "Modern 5-floor corporate campus",
      fullDescription:
        "A state-of-the-art corporate headquarters designed for collaboration and productivity.",
      features: ["Boardrooms", "Cafeteria", "VC Rooms", "Recreation Zones"],
      area: "85,000 sq.ft",
      duration: "8 months",
      year: "2023",
    },
    {
      id: 2,
      image: projectCommercial,
      gallery: [projectCommercial, projectCommercial],
      title: "Financial Services Office",
      location: "Bengaluru, Karnataka",
      shortDescription: "High-performance corporate workspace",
      fullDescription:
        "A premium corporate office designed for efficiency, privacy, and seamless client interaction.",
      features: ["Trading Floors", "Executive Cabins", "Meeting Suites"],
      area: "42,000 sq.ft",
      duration: "6 months",
      year: "2024",
    },
  ],
}
,
    {
      id: "banking",
      name: "Banking & Finance",
      icon: Landmark,
      tagline: "Trust & Elegance",
      projects: Array.from({ length: 4 }).map((_, i) => ({
        id: i + 1,
        image: projectBanking,
        gallery: [projectBanking, projectRetail],
        title: "National Bank Flagship",
        location: "Nariman Point, Mumbai",
        shortDescription: "Prestigious flagship banking branch",
        fullDescription:
          "A premium banking branch with VIP lounges and secure vaults.",
        features: ["VIP Lounge", "Vault Room", "Service Pods"],
        area: "25,000 sq.ft",
        duration: "6 months",
        year: "2023",
      })),
    },
    {
      id: "retail",
      name: "Retail",
      icon: Store,
      tagline: "Captivating Experiences",
      projects: Array.from({ length: 4 }).map((_, i) => ({
        id: i + 1,
        image: projectRetail,
        gallery: [projectRetail, projectRetail],
        title: "Luxury Fashion Flagship",
        location: "Mumbai",
        shortDescription: "Immersive luxury fashion retail",
        fullDescription:
          "A high-end fashion flagship with bespoke furniture and dramatic lighting.",
        features: ["VIP Fitting Rooms", "Custom Displays", "Customer Lounge"],
        area: "12,000 sq.ft",
        duration: "4 months",
        year: "2024",
      })),
    },
    {
      id: "hospitality",
      name: "Hospitality",
      icon: Hotel,
      tagline: "Unforgettable Stays",
      projects: Array.from({ length: 4 }).map((_, i) => ({
        id: i + 1,
        image: projectHospitality,
        gallery: [projectHospitality, projectHospitality],
        title: "5-Star Beach Resort",
        location: "Goa",
        shortDescription: "Luxury beachfront hospitality",
        fullDescription:
          "A luxury resort blending local architecture with modern hospitality interiors.",
        features: ["220 Rooms", "Spa", "Restaurants", "Pool Bar"],
        area: "2,50,000 sq.ft",
        duration: "18 months",
        year: "2023",
      })),
    },
  ];

  /* -------------------- MODAL GALLERY -------------------- */

  const ProjectGallery = ({ images }: { images: string[] }) => {
    const [api, setApi] = useState<CarouselApi>();

    return (
      <div className="relative w-full bg-gradient-to-br from-black via-charcoal to-black flex items-center justify-center">
        <Carousel setApi={setApi} opts={{ loop: true }} className="w-full">
          <CarouselContent>
            {images.map((img, i) => (
              <CarouselItem key={i} className="flex justify-center">
                <img
                  src={img}
                  alt=""
                  className="max-h-[40vh] lg:max-h-[90vh] max-w-full object-contain rounded-lg"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <button
          onClick={() => api?.scrollPrev()}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/70 backdrop-blur-sm hover:bg-black/90 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-gold/20"
        >
          <ChevronLeft className="text-gold w-5 h-5" />
        </button>
        <button
          onClick={() => api?.scrollNext()}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/70 backdrop-blur-sm hover:bg-black/90 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-gold/20"
        >
          <ChevronRight className="text-gold w-5 h-5" />
        </button>
      </div>
    );
  };

  /* -------------------- CATEGORY CARD -------------------- */

  const CategoryCard = ({
    category,
    onProjectClick,
  }: {
    category: CategoryData;
    onProjectClick: (p: Project, c: CategoryData) => void;
  }) => {
    const [api, setApi] = useState<CarouselApi>();
    const Icon = category.icon;
    const styles = categoryStyles[category.id];

    return (
      <div className="group/card relative bg-gradient-to-br from-charcoal to-charcoal/80 p-5 md:p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-500 overflow-hidden">
        {/* Background glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
        
        {/* Header */}
        <div className="relative flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
          <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl ${styles.badgeBg} backdrop-blur-sm flex items-center justify-center transition-transform duration-300 group-hover/card:scale-110 border border-white/10`}>
            <Icon className={`w-6 h-6 md:w-7 md:h-7 ${styles.accent}`} />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-header-foreground tracking-tight">
              {category.name}
            </h3>
            <p className={`text-xs uppercase tracking-[0.25em] ${styles.accent} font-medium mt-1`}>
              {category.tagline}
            </p>
          </div>
        </div>

        {/* Slideshow */}
        <div className="relative -mx-6 md:mx-0 px-3 md:px-0">
          <Carousel setApi={setApi} opts={{ loop: true }}>
            <CarouselContent className="-ml-1 md:-ml-4">
              {category.projects.map((project) => (
                <CarouselItem key={project.id} className="pl-1 md:pl-4 basis-[99%] md:basis-[85%] lg:basis-[80%]">
                                <div
                  onClick={() => onProjectClick(project, category)}
                  className="relative cursor-pointer group
                    h-[380px] sm:h-[420px]
                    md:h-auto md:aspect-[3.2/3]
                    overflow-hidden rounded-xl
                    border border-white/10 hover:border-white/20
                    transition-all duration-500"
                >
                    {/* Image */}
                    <img
                      src={project.image}
                      className={`w-full h-full object-cover transition-transform duration-700 ${styles.hoverScale}`}
                    />

                    {/* Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${styles.overlay} opacity-90 group-hover:opacity-80 transition-opacity duration-300`} />

                    {/* Hover indicator */}
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 border border-white/20">
                      <ArrowUpRight className="w-5 h-5 text-white" />
                    </div>

                    {/* Text */}
                    <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6 pb-6 md:pb-6">
                      <div className="transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-300">
                        <div className="flex items-center gap-2 mb-3">
                          <MapPin className="w-4 h-4 text-white" />
                          <span className="text-sm text-white font-medium">
                            {project.location}
                          </span>
                        </div>
                        <h4 className="text-3xl md:text-xl font-bold text-white mb-3 leading-tight">
                          {project.title}
                        </h4>
                        <p className="text-base md:text-sm text-white/90 transition-opacity duration-300 leading-relaxed">
                          {project.shortDescription}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Arrows */}
          <button
  onClick={() => api?.scrollPrev()}
  className="hidden md:flex absolute left-1 md:left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/70 backdrop-blur-sm hover:bg-black/90 rounded-full items-center justify-center transition-all duration-300 hover:scale-110 border border-white/10 z-10"
>
  <ChevronLeft className="text-gold w-5 h-5" />
</button>

<button
  onClick={() => api?.scrollNext()}
  className="hidden md:flex absolute right-1 md:right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/70 backdrop-blur-sm hover:bg-black/90 rounded-full items-center justify-center transition-all duration-300 hover:scale-110 border border-white/10 z-10"
>
  <ChevronRight className="text-gold w-5 h-5" />
</button>

        </div>
      </div>
    );
  };

  /* -------------------- MAIN SECTION -------------------- */

  const ProjectsSection = () => {
    const [focusedId, setFocusedId] = useState<string | null>(null);

    const [selected, setSelected] = useState<{
      project: Project;
      category: CategoryData;
    } | null>(null);

    return (
      <>
        {/* Projects Section */}
  <section
    id="projects"
    className="
      py-28 relative overflow-hidden
      bg-gradient-to-b from-[#f2f2f2] via-white to-[#ededed]
    "
  >
    {/* ===== MODERN GOLD AMBIENCE LAYER ===== */}
    <div className="absolute inset-0 pointer-events-none">
      {/* Strong center light wash */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.32),transparent_60%)]" />

      {/* Hero glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-gold/35 rounded-full blur-[220px]" />

      {/* Depth glows */}
      <div className="absolute bottom-24 right-24 w-[700px] h-[700px] bg-gold/25 rounded-full blur-[200px]" />
      <div className="absolute top-1/3 left-16 w-[360px] h-[360px] bg-gold/45 rounded-full blur-[150px]" />

      {/* Vertical light rays */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(212,175,55,0.12)_50%,transparent_100%)] opacity-40" />
    </div>

    {/* ===== PREMIUM GRID / ARCHITECTURAL TEXTURE ===== */}
    <div
      className="absolute inset-0 opacity-[0.15]"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(0,0,0,0.45) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0,0,0,0.45) 1px, transparent 1px)
        `,
        backgroundSize: "56px 56px",
      }}
    />

    {/* ===== HEADING ===== */}
    <div className="container mx-auto px-6 lg:px-12 text-center mb-20 relative z-10">
    <div
    className="
      inline-flex items-center gap-2 px-5 py-2.5 rounded-full
      border border-gold/40 bg-gold/10 backdrop-blur-md mb-8
      shadow-[0_10px_40px_rgba(212,175,55,0.25)]
      animate-[bounce_1s_ease-in-out_infinite]
    "
  >
    <span className="text-gold uppercase tracking-widest text-xs font-medium">
      Our Portfolio
    </span>
  </div>



      <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-charcoal mb-6 tracking-tight">
        Featured Projects
      </h2>

      <div className="w-24 h-1.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8" />

      <p className="text-charcoal/60 text-lg max-w-2xl mx-auto">
        Explore our diverse portfolio of exceptional interior solutions across industries
      </p>
    </div>

    {/* ===== PROJECT GRID ===== */}
   <div className="container mx-auto px-6 lg:px-12 grid gap-8 lg:grid-cols-2 relative z-10">
  {categories.map((cat) => (
    <AnimatedCategory
      key={cat.id}
      category={cat}
      onProjectClick={(p, c) =>
        setSelected({ project: p, category: c })
      }
    />
  ))}
</div>



  </section>


        {/* Modal */}
        <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
          <DialogContent className="max-w-6xl max-h-[90vh] bg-gradient-to-br from-charcoal to-charcoal/95 p-0 overflow-hidden border border-white/10">
            {/* Close button */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-black/70 backdrop-blur-sm hover:bg-black/90 flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/20"
            >
              <X className="w-5 h-5 text-white" />
            </button>
            
            {selected && (
              <div className="flex flex-col lg:grid lg:grid-cols-2 max-h-[90vh]">
                <ProjectGallery images={selected.project.gallery} />

                <div className="p-8 lg:p-10 overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="font-bold text-3xl mb-3 text-white tracking-tight">
                      {selected.project.title}
                    </DialogTitle>
                    <DialogDescription className="text-header-foreground/70 text-base mb-8 leading-relaxed">
                      {selected.project.fullDescription}
                    </DialogDescription>
                  </DialogHeader>

                  <div className="grid grid-cols-2 gap-4 mb-8 mt-6">
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                      <div className="w-8 h-8 rounded-lg bg-gold/20 flex items-center justify-center">
                        <MapPin className="w-4 h-4 text-gold" />
                      </div>
                      <div>
                        <p className="text-xs text-header-foreground/50 mb-0.5">Location</p>
                        <p className="text-sm text-header-foreground font-medium">{selected.project.location}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                      <div className="w-8 h-8 rounded-lg bg-gold/20 flex items-center justify-center">
                        <Ruler className="w-4 h-4 text-gold" />
                      </div>
                      <div>
                        <p className="text-xs text-header-foreground/50 mb-0.5">Area</p>
                        <p className="text-sm text-header-foreground font-medium">{selected.project.area}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                      <div className="w-8 h-8 rounded-lg bg-gold/20 flex items-center justify-center">
                        <Clock className="w-4 h-4 text-gold" />
                      </div>
                      <div>
                        <p className="text-xs text-header-foreground/50 mb-0.5">Duration</p>
                        <p className="text-sm text-header-foreground font-medium">{selected.project.duration}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                      <div className="w-8 h-8 rounded-lg bg-gold/20 flex items-center justify-center">
                        <Calendar className="w-4 h-4 text-gold" />
                      </div>
                      <div>
                        <p className="text-xs text-header-foreground/50 mb-0.5">Year</p>
                        <p className="text-sm text-header-foreground font-medium">{selected.project.year}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-header-foreground/50 mb-3 font-medium">Key Features</p>
                    <div className="flex flex-wrap gap-2">
                      {selected.project.features.map((f, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 text-sm rounded-full bg-gold/10 text-gold border border-gold/20 font-medium hover:bg-gold/20 transition-colors duration-300"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </>
    );
  };
  export default ProjectsSection; 
