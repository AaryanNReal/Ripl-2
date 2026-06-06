import { useEffect, useState } from "react";

import CategoryPage from "./CategoryPage";

import { getProjects } from "@/firebase/projectService";
import { Project } from "@/types/project";

const Retail = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const allProjects = await getProjects();

        const retailProjects = allProjects.filter(
          (p) => p.category === "retail"
        );

        setProjects(retailProjects);
      } catch (error) {
        console.error("Error loading retail projects:", error);
      }
    };

    loadProjects();
  }, []);

  return (
    <CategoryPage
      title="Boutiques"
      tagline="Captivating Experiences"
      projects={projects}
    />
  );
};

export default Retail;