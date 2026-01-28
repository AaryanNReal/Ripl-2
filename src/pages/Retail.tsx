import CategoryPage, { Project } from "./CategoryPage";

const Retail = () => {
  const projects: Project[] = [
    /* ================= LOUIS VUITTON ================= */

    {
      id: 1,
      title: "Louis Vuitton – Hotel Oberoi",
      images: [],
      description: "Luxury boutique interior works.",
      client: "Louis Vuitton",
      location: "New Delhi",
      architect: "Orbit Designers",
      value: "INR 85 Lacs",
      duration: "3 Months",
      scope: "Interior / MEP Works",
      area: "-",
    },
    {
      id: 2,
      title: "Louis Vuitton – Hotel Taj Mahal",
      images: [],
      description: "Luxury boutique interior works.",
      client: "Louis Vuitton",
      location: "Mumbai",
      architect: "Bangkok (with Times Enterprise)",
      value: "INR 90 Lacs",
      duration: "3 Months",
      scope: "Interior / MEP Works",
      area: "-",
    },

    /* ================= BOSS – HUGO BOSS ================= */

    {
      id: 3,
      title: "BOSS – Hugo Boss – Hotel Oberoi",
      images: [],
      description: "Premium fashion boutique interiors.",
      client: "BOSS – Hugo Boss",
      location: "Mumbai",
      architect: "Baituti Designs, U.A.E.",
      value: "INR 90 Lacs",
      duration: "3 Months",
      scope: "Interior / MEP Works",
      area: "-",
    },
    {
      id: 4,
      title: "BOSS – Hugo Boss – Hotel Grand Hyatt",
      images: [],
      description: "Luxury retail boutique interiors.",
      client: "BOSS – Hugo Boss",
      location: "Mumbai",
      architect: "Design, Germany",
      value: "INR 135 Lacs",
      duration: "3 Months",
      scope: "Interior / MEP Works",
      area: "-",
    },
    {
      id: 5,
      title: "BOSS – Hugo Boss – Hotel Leela Palace",
      images: [],
      description: "High-end boutique interior execution.",
      client: "BOSS – Hugo Boss",
      location: "Bangalore",
      architect: "Design, Germany",
      value: "INR 80 Lacs",
      duration: "2 Months",
      scope: "Interior / MEP Works",
      area: "-",
    },

    /* ================= GUCCI ================= */

    {
      id: 6,
      title: "Gucci – Hotel Oberoi",
      images: [],
      description: "Luxury fashion boutique interiors.",
      client: "Gucci",
      location: "New Delhi",
      architect: "Arredoquattro Industries, Italy",
      value: "INR 65 Lacs",
      duration: "3 Months",
      scope: "Interior / MEP Works",
      area: "-",
    },
    {
      id: 7,
      title: "Gucci – Emporio Mall",
      images: [],
      description: "Luxury retail boutique interiors.",
      client: "Gucci",
      location: "New Delhi",
      architect: "Arredoquattro Industries, Italy",
      value: "INR 155 Lacs",
      duration: "3 Months",
      scope: "Interior / MEP Works",
      area: "-",
    },

    /* ================= J.C. VERSACE ================= */

    {
      id: 8,
      title: "J.C. Versace – CR-2",
      images: [],
      description: "Premium fashion boutique interiors.",
      client: "J.C. Versace",
      location: "Mumbai",
      architect: "Baituti Designs, U.A.E.",
      value: "INR 75 Lacs",
      duration: "3 Months",
      scope: "Interior / MEP Works",
      area: "-",
    },

    /* ================= ERMENEGILDO ZEGNA ================= */

    {
      id: 9,
      title: "Ermenegildo Zegna – Hotel Taj Mahal",
      images: [],
      description: "Luxury menswear boutique interiors.",
      client: "Ermenegildo Zegna",
      location: "Mumbai",
      architect: "Studio Architettura Deretta, Italy",
      value: "INR 135 Lacs",
      duration: "3 Months",
      scope: "Interior / MEP Works",
      area: "-",
    },

    /* ================= TOD’S ================= */

    {
      id: 10,
      title: "TOD’s – Emporio Mall",
      images: [],
      description: "Luxury footwear boutique interiors.",
      client: "TOD’s",
      location: "New Delhi",
      architect: "Asia Pacific Architects",
      value: "INR 60 Lacs",
      duration: "3 Months",
      scope: "Interior / MEP Works",
      area: "-",
    },
    {
      id: 11,
      title: "TOD’s – UB City",
      images: [],
      description: "Luxury retail boutique interiors.",
      client: "TOD’s",
      location: "Bangalore",
      architect: "Bangkok (with Times Enterprise)",
      value: "INR 40 Lacs",
      duration: "3 Months",
      scope: "Interior / MEP Works",
      area: "-",
    },
    {
      id: 12,
      title: "TOD’s – Palladium Mall",
      images: [],
      description: "Luxury fashion boutique interiors.",
      client: "TOD’s",
      location: "Mumbai",
      architect: "-",
      value: "INR 110 Lacs",
      duration: "3 Months",
      scope: "Interior Works",
      area: "-",
    },

    /* ================= PANASONIC CENTER ================= */

    {
      id: 13,
      title: "Panasonic Center",
      images: [],
      description: "Brand experience retail showroom.",
      client: "Panasonic",
      location: "Gurgaon",
      architect: "Thai Real Ventures Co. Ltd., Bangkok",
      value: "INR 165 Lacs",
      duration: "3 Months",
      scope: "Interior / MEP Works",
      area: "-",
    },

    /* ================= INTERNATIONAL BOUTIQUES ================= */

    {
      id: 14,
      title: "Xavier’s Showroom – Siam Paragon",
      images: [],
      description: "Jewellery outlet interior works.",
      client: "Xavier’s",
      location: "Bangkok",
      architect: "DWP City Space, Bangkok",
      value: "THB 1.6 Mn",
      duration: "3 Months",
      scope: "Interior Works – Jewellery Outlet",
      area: "-",
    },
    {
      id: 15,
      title: "Bvlgari – Siam Paragon",
      images: [],
      description: "Luxury jewellery boutique interiors.",
      client: "Bvlgari",
      location: "Bangkok",
      architect: "Studio Scalvi, Milan Rome",
      value: "THB 5.8 Mn",
      duration: "3 Months",
      scope: "Interior / MEP Works",
      area: "-",
    },
    {
      id: 16,
      title: "IWC Schaffhausen – Siam Paragon",
      images: [],
      description: "Luxury watch boutique interiors.",
      client: "IWC Schaffhausen",
      location: "Bangkok",
      architect: "MACH, Zurich, Switzerland",
      value: "THB 3.2 Mn",
      duration: "2 Months",
      scope: "Interior / MEP Works",
      area: "-",
    },
    {
      id: 17,
      title: "JLC – Jaeger Le Coultre – Siam Paragon",
      images: [],
      description: "Luxury watch boutique interiors.",
      client: "Jaeger Le Coultre",
      location: "Bangkok",
      architect: "Atelier Marika Chaumet, France",
      value: "THB 3.5 Mn",
      duration: "3 Months",
      scope: "Interior / MEP Works",
      area: "-",
    },
    {
      id: 18,
      title: "Nespresso – Siam Paragon",
      images: [],
      description: "Premium coffee brand boutique.",
      client: "Nespresso",
      location: "Bangkok",
      architect: "Goring & Straja Studio, Milan Rome",
      value: "THB 3.6 Mn",
      duration: "2 Months",
      scope: "Interior / MEP Works",
      area: "-",
    },
  ];

  return (
    <CategoryPage
      title="Boutiques"
      tagline="Captivating Experiences"
      projects={projects}
    />
  );
};

export default Retail;
