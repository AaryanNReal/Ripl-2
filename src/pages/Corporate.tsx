import CategoryPage, { Project } from "./CategoryPage";
import corporate1 from "@/assets/hero-banking.jpg";
import corporate2 from "@/assets/hero-banking.jpg";

const Corporate = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Tech Park Headquarters",
      images: [corporate1, corporate2, corporate1],
      description:
        "A state-of-the-art corporate headquarters designed to foster collaboration, innovation, and productivity.",

      client: "Global Tech Solutions Ltd.",
      location: "Pune",
      architect: "Axis Design Studio",
      value: "₹14.2 Cr",
      duration: "8 Months",
      scope: "Design & Build",
      area: "85,000 sq.ft",
    },
    {
      id: 2,
      title: "Financial Services Office",
      images: [corporate1, corporate2, corporate1],
      description:
        "A premium corporate workspace featuring executive cabins, meeting suites, and modern workstations.",

      client: "FinServe Holdings",
      location: "Gurgaon",
      architect: "Urban Space Architects",
      value: "₹9.6 Cr",
      duration: "6 Months",
      scope: "Interior Design & Execution",
      area: "42,000 sq.ft",
    },
  ];

  return (
    <CategoryPage
      title="Corporate"
      tagline="Inspiring Workspaces"
      projects={projects}
    />
  );
};

export default Corporate;
