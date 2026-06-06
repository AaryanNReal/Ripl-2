import CategoryPage from "./CategoryPage";
import { corporateProjects } from "@/data/corporate";

const Corporate = () => {
  return (
    <CategoryPage
      title="Commercial"
      tagline="Inspiring Workspaces"
      projects={corporateProjects}
    />
  );
};

export default Corporate;