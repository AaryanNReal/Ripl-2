import CategoryPage, { Project } from "./CategoryPage";
import corporate1 from "@/assets/hero-banking.jpg"
import corporate2 from "@/assets/hero-banking.jpg";

const Corporate = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Tech Park Headquarters",
      images: [corporate1,corporate1,corporate1],
      location: "Pune",
      description:
        "A state-of-the-art corporate headquarters designed to foster collaboration, innovation, and productivity.",
      area: "85,000 sq.ft",
      duration: "8 months",
      year: "2023",
    },
    {
      id: 2,
      title: "Financial Services Office",
      images: [corporate1,corporate1,corporate1],
      location: "Gurgaon",
      description:
        "A premium corporate workspace featuring executive cabins, meeting suites, and modern workstations.",
      area: "42,000 sq.ft",
      duration: "6 months",
      year: "2024",
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
