import CategoryPage from "./CategoryPage";
import { hospitalityProjects } from "@/data/hospitality";

const Hospitality = () => {
  return (
    <CategoryPage
      title="Hospitality"
      tagline="Unforgettable Stays"
      projects={hospitalityProjects}
    />
  );
};

export default Hospitality;