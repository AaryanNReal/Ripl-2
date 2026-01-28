import CategoryPage, { Project } from "./CategoryPage";
import banking1 from "@/assets/project-banking.jpg";
import banking2 from "@/assets/hero-banking.jpg";

const Banking = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "National Bank Flagship Branch",
      images: [banking1, banking2, banking1],
      description:
        "A premium flagship banking branch designed with high-security zones, VIP lounges, and elegant customer service areas.",

      client: "National Bank of India",
      location: "Mumbai",
      architect: "In-house Design Team",
      value: "₹8.5 Cr",
      duration: "6 Months",
      scope: "Design & Turnkey Execution",
      area: "25,000 sq.ft",
    },
    {
      id: 2,
      title: "Corporate Banking Office",
      images: [banking1, banking2, banking1],
      description:
        "A modern corporate banking office optimized for privacy, efficiency, and client trust.",

      client: "Private Banking Corporation",
      location: "Bengaluru",
      architect: "Urban Studio Architects",
      value: "₹5.2 Cr",
      duration: "5 Months",
      scope: "Interior Fit-Out & Execution",
      area: "18,000 sq.ft",
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
