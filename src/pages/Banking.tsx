import CategoryPage, { Project } from "./CategoryPage";
import banking1 from "@/assets/project-banking.jpg";
import banking2 from "@/assets/hero-banking.jpg";

const Banking = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "National Bank Flagship Branch",
      images: [banking1,banking1,banking1],
      location: "Mumbai",
      description:
        "A premium flagship banking branch designed with high-security zones, VIP lounges, and elegant customer service areas.",
      area: "25,000 sq.ft",
      duration: "6 months",
      year: "2023",
    },
    {
      id: 2,
      title: "Corporate Banking Office",
      images: [banking1,banking1,banking1],
      location: "Bengaluru",
      description:
        "A modern corporate banking office optimized for privacy, efficiency, and client trust.",
      area: "18,000 sq.ft",
      duration: "5 months",
      year: "2024",
    },
  ];

  return (
    <CategoryPage
      title="Banking & Finance"
      tagline="Trust & Elegance"
      projects={projects}
    />
  );
};

export default Banking;
