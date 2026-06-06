import { useEffect, useState } from "react";
import CategoryPage from "./CategoryPage";
import { getProjects } from "@/firebase/projectService";
import { Project } from "@/types/project";

const Hospitality = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const loadProjects = async () => {
      const allProjects = await getProjects();

      const hospitalityProjects = allProjects.filter(
        (p) => p.category === "Hospitality"
      );

      setProjects(hospitalityProjects);
    };

    loadProjects();
  }, []);

  return (
    <CategoryPage
      title="Hospitality"
      tagline="Unforgettable Stays"
      projects={projects}
    />
  );
};

export default Hospitality;