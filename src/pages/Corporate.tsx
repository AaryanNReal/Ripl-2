import { useEffect, useState } from "react";

import CategoryPage from "./CategoryPage";

import { getProjects } from "@/firebase/projectService";
import { Project } from "@/types/project";

const Corporate = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const allProjects = await getProjects();

        const corporateProjects = allProjects.filter(
          (p) => p.category === "corporate"
        );

        setProjects(corporateProjects);
      } catch (error) {
        console.error("Error loading corporate projects:", error);
      }
    };

    loadProjects();
  }, []);

  return (
    <CategoryPage
      title="Commercial"
      tagline="Inspiring Workspaces"
      projects={projects}
    />
  );
};

export default Corporate;