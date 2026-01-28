import CategoryPage, { Project } from "./CategoryPage";
import hospitality1 from "@/assets/hero-banking.jpg";
import hospitality2 from "@/assets/hero-banking.jpg";

const Hospitality = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "5-Star Beach Resort",
      images: [hospitality1, hospitality2, hospitality1],
      description:
        "A luxury beachfront resort blending local architectural elements with modern hospitality interiors.",

      client: "Azure Resorts & Hotels",
      location: "Goa",
      architect: "Coastal Design Collective",
      value: "₹120 Cr",
      duration: "18 Months",
      scope: "Master Planning, Design & Execution",
      area: "2,50,000 sq.ft",
    },
    {
      id: 2,
      title: "Business Hotel & Convention Center",
      images: [hospitality1, hospitality2, hospitality1],
      description:
        "A contemporary business hotel featuring conference halls, premium rooms, and fine-dining spaces.",

      client: "Metro Hospitality Group",
      location: "Hyderabad",
      architect: "Urban Axis Architects",
      value: "₹85 Cr",
      duration: "14 Months",
      scope: "Design & Turnkey Construction",
      area: "1,40,000 sq.ft",
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
