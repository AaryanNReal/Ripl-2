import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  MapPin,
  X,
} from "lucide-react";

import { getProjects } from "@/firebase/projectService";
import { Project } from "@/types/project";


const ProjectDetail = () => {
  const navigate = useNavigate();
  const { category, slug } = useParams();

  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  const [selectedImage, setSelectedImage] =
    useState<string | null>(null);
useEffect(() => {
  if (project) {
    console.log(
      "PROJECT IMAGES:",
      project.images
    );
  }
}, [project]);
  useEffect(() => {
    const loadProject = async () => {
      try {
        const projects = await getProjects();

        const foundProject =
          projects.find(
            (p) =>
              p.category === category &&
              p.slug === slug
          ) || null;

        setProject(foundProject);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadProject();
  }, [category, slug]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener(
        "keydown",
        handleEsc
      );
    };
  }, []);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedImage]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <section className="min-h-screen bg-[#f7f7f7]">
        {project.images?.[0] && (
          <div className="relative h-[40vh] md:h-[60vh]">
            <img
              src={`${project.images[0]}?hero`}
              alt={project.title}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/40" />

            <div className="absolute bottom-10 left-0 right-0">
              <div className="container mx-auto px-6 lg:px-12">
                <h1 className="text-white text-4xl md:text-6xl font-bold">
                  {project.title}
                </h1>

                <div className="flex items-center gap-2 text-white mt-3">
                  <MapPin className="w-4 h-4" />
                  {project.location}
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="container mx-auto px-6 lg:px-12 py-12">
          <button
            onClick={() => navigate(-1)}
            className="
              inline-flex items-center gap-2
              px-4 py-2 mb-10
              rounded-full
              border border-black/10
              bg-white
              hover:shadow-md
              transition
            "
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>

          {!project.images?.length && (
            <>
              <h1 className="text-4xl md:text-5xl font-bold mb-3">
                {project.title}
              </h1>

              <div className="flex items-center gap-2 text-black/60 mb-12">
                <MapPin className="w-4 h-4" />
                {project.location}
              </div>
            </>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
            <InfoCard title="Client" value={project.client} />
            <InfoCard title="Architect" value={project.architect} />
            <InfoCard title="Area" value={project.area} />
            <InfoCard title="Duration" value={project.duration} />
            <InfoCard title="Value" value={project.value} />
            <InfoCard title="Scope" value={project.scope} />
          </div>

          {project.images?.length > 0 && (
            <>
              <h2 className="text-3xl font-semibold mb-8">
                Gallery
              </h2>

              <div
  className="
    grid
    grid-cols-1
    md:grid-cols-2
    lg:grid-cols-3
    gap-6
  "
>
                {project.images.map((image, index) => (
                  <img
                    key={`${index}-${image}`}
                   src={`${image}?v=${index}`}
                    alt={`Project ${index + 1}`}
                    onClick={() =>
                      setSelectedImage(image)
                    }
                    className="
                      w-full
                      rounded-2xl
                     
                      cursor-pointer
                      transition
                      duration-300
                      hover:scale-[1.02]
                    "
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Fullscreen Modal */}
      {selectedImage && (
        <div
          className="
            fixed inset-0 z-[9999]
            bg-black/90
            backdrop-blur-sm
            flex items-center justify-center
            p-4 md:p-8
          "
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() =>
              setSelectedImage(null)
            }
            className="
              absolute
              top-5
              right-5
              text-white
              bg-white/10
              hover:bg-white/20
              rounded-full
              p-3
              transition
            "
          >
            <X className="w-6 h-6" />
          </button>

          <img
            src={selectedImage}
            alt="Fullscreen"
            onClick={(e) =>
              e.stopPropagation()
            }
            className="
              max-w-full
              max-h-[90vh]
              object-contain
              rounded-xl
              shadow-2xl
              animate-in
              fade-in
              zoom-in-95
              duration-300
            "
          />
        </div>
      )}
    </>
  );
};

const InfoCard = ({
  title,
  value,
}: {
  title: string;
  value: string;
}) => (
  <div className="bg-white rounded-2xl p-6 border border-black/5 shadow-sm">
    <p className="text-sm text-black/50 mb-2">
      {title}
    </p>

    <p className="font-semibold break-words">
      {value}
    </p>
  </div>
);

export default ProjectDetail;