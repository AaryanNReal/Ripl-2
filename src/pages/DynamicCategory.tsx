import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import CategoryPage from "./CategoryPage";

import {
  getProjects,
  getCategories,
  Category,
} from "@/firebase/projectService";

import { Project } from "@/types/project";

const DynamicCategory = () => {
  const { category } = useParams();

  const [projects, setProjects] = useState<Project[]>([]);
  const [categoryData, setCategoryData] =
    useState<Category | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [allProjects, allCategories] =
          await Promise.all([
            getProjects(),
            getCategories(),
          ]);

        const filteredProjects =
          allProjects.filter(
            (p) => p.category === category
          );

        const currentCategory =
          allCategories.find(
            (c) => c.id === category
          ) || null;

        setProjects(filteredProjects);
        setCategoryData(currentCategory);
      } catch (error) {
        console.error(error);
      }
    };

    loadData();
  }, [category]);

  return (
    <CategoryPage
      title={categoryData?.name || ""}
      tagline={categoryData?.tagline || ""}
      projects={projects}
    />
  );
};

export default DynamicCategory;