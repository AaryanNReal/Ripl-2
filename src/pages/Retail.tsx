import CategoryPage, { Project } from "./CategoryPage";
import retail1 from "@/assets/hero-banking.jpg";
import retail2 from "@/assets/hero-banking.jpg";

const Retail = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Luxury Fashion Flagship",
      images: [retail1, retail2, retail1],
      description:
        "An immersive luxury fashion flagship featuring bespoke furniture and curated customer journeys.",

      client: "Maison Luxe",
      location: "Mumbai",
      architect: "Atelier Design Studio",
      value: "₹3.8 Cr",
      duration: "4 Months",
      scope: "Interior Design & Fit-Out",
      area: "12,000 sq.ft",
    },
    {
      id: 2,
      title: "High-Street Retail Store",
      images: [retail1, retail2, retail1],
      description:
        "A modern high-street retail outlet designed for maximum footfall and engagement.",

      client: "Urban Retail Co.",
      location: "Delhi",
      architect: "Form & Function Architects",
      value: "₹2.1 Cr",
      duration: "3 Months",
      scope: "Design & Execution",
      area: "8,500 sq.ft",
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
