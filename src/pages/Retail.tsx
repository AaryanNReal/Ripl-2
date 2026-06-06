import CategoryPage from "./CategoryPage";
import { retailProjects } from "@/data/retail";

const Retail = () => {
  return (
    <CategoryPage
      title="Boutiques"
      tagline="Captivating Experiences"
      projects={retailProjects}
    />
  );
};

export default Retail;