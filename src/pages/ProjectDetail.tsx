import { Navigate, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, MapPin } from "lucide-react";

import { allProjects } from "@/data/projects";

const ProjectDetail = () => {
  const navigate = useNavigate();

  const { category, id } = useParams();

  const project = allProjects.find(
    (p) =>
      p.category === category &&
      p.id === Number(id)
  );

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <section className="min-h-screen bg-[#f7f7f7]">
      {/* HERO IMAGE */}
      {project.images?.[0] && (
        <div className="relative h-[40vh] md:h-[60vh]">
          <img
            src={project.images[0]}
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
        {/* BACK */}
        <button
          onClick={() => navigate(-1)}
          className="
            inline-flex items-center gap-2
            px-4 py-2 mb-10
            rounded-full
            border border-black/10
            bg-white
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

        {/* INFO GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">

          <InfoCard
            title="Client"
            value={project.client}
          />

          <InfoCard
            title="Architect"
            value={project.architect}
          />

          <InfoCard
            title="Area"
            value={project.area}
          />

          <InfoCard
            title="Duration"
            value={project.duration}
          />

          <InfoCard
            title="Value"
            value={project.value}
          />

          <InfoCard
            title="Scope"
            value={project.scope}
          />
        </div>

        {/* DESCRIPTION */}
        <div className="max-w-4xl mb-16">
          <h2 className="text-3xl font-semibold mb-4">
            Project Overview
          </h2>

          <p className="text-black/70 leading-8">
            {project.description}
          </p>
        </div>

        {/* GALLERY */}
        {project.images?.length > 0 && (
          <>
            <h2 className="text-3xl font-semibold mb-8">
              Gallery
            </h2>

            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">

              {project.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt=""
                  className="
                    w-full
                    rounded-2xl
                    break-inside-avoid
                  "
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

const InfoCard = ({
  title,
  value,
}: {
  title: string;
  value: string;
}) => (
  <div className="bg-white rounded-2xl p-6 border border-black/5">
    <p className="text-sm text-black/50 mb-2">
      {title}
    </p>

    <p className="font-semibold">
      {value}
    </p>
  </div>
);

export default ProjectDetail;