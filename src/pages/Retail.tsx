import CategoryPage, { Project } from "./CategoryPage";
import retail1 from "@/assets/hero-banking.jpg";
import retail2 from "@/assets/hero-banking.jpg";

const Retail = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Luxury Fashion Flagship",
      images: [retail1,retail2,retail1],
      location: "Mumbai",
      description:
        "An immersive luxury fashion flagship featuring bespoke furniture and curated customer journeys.",
      area: "12,000 sq.ft",
      duration: "4 months",
      year: "2024",
    },
    {
      id: 2,
      title: "High-Street Retail Store",
      images: [retail1,retail2,retail1],
      location: "Delhi",
      description:
        "A modern high-street retail outlet designed for maximum footfall and engagement.",
      area: "8,500 sq.ft",
      duration: "3 months",
      year: "2023",
    },
  ];

  return (
    <CategoryPage
      title="Retail"
      tagline="Captivating Experiences"
      projects={projects}
    />
  );
};

export default Retail;
