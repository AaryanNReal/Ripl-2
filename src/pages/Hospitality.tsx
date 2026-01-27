import CategoryPage, { Project } from "./CategoryPage";
import hospitality1 from "@/assets/hero-banking.jpg";
import hospitality2 from "@/assets/hero-banking.jpg";

const Hospitality = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "5-Star Beach Resort",
      images: [hospitality1,hospitality1,hospitality1],
      location: "Goa",
      description:
        "A luxury beachfront resort blending local architectural elements with modern hospitality interiors.",
      area: "2,50,000 sq.ft",
      duration: "18 months",
      year: "2023",
    },
    {
      id: 2,
      title: "Business Hotel & Convention Center",
      images: [hospitality1,hospitality1,hospitality1],
      location: "Hyderabad",
      description:
        "A contemporary business hotel featuring conference halls, premium rooms, and fine-dining spaces.",
      area: "1,40,000 sq.ft",
      duration: "14 months",
      year: "2024",
    },
  ];

  return (
    <CategoryPage
      title="Hospitality"
      tagline="Unforgettable Stays"
      projects={projects}
    />
  );
};

export default Hospitality;
