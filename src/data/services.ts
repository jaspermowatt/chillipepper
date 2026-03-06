import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "project-generation",
    title: "Project Generation",
    description:
      "Systematic targeting and land positioning across all commodities and jurisdictions. We identify, evaluate, and secure high-quality exploration opportunities before the market catches on.",
    icon: "Crosshair",
    bullets: [
      "Systematic targeting and land positioning",
      "Data compilation, GIS, and prospectivity analysis",
      "Alliance/JV structuring",
      "Staking and tenure management",
    ],
  },
  {
    id: "due-diligence",
    title: "Due Diligence & Technical Appraisal",
    description:
      "Independent, rigorous technical reviews that give you confidence in your investment decisions. We evaluate geological models, resource estimates, and operational risks with unbiased precision.",
    icon: "FileSearch",
    bullets: [
      "Independent technical reviews (JORC, NI 43-101, SAMREC compliant)",
      "Geological model and resource estimate review",
      "Site visits and operational assessments",
      "Risk identification and mitigation frameworks",
    ],
  },
  {
    id: "exploration-management",
    title: "Exploration Management",
    description:
      "Hands-on exploration program design and execution. From drill targeting to data management, we bring the technical leadership your project needs to advance efficiently.",
    icon: "Compass",
    bullets: [
      "Program design and budgeting",
      "Drilling supervision and QA/QC",
      "Data management and reporting",
      "Regulatory compliance",
    ],
  },
  {
    id: "strategic-advisory",
    title: "Strategic & Corporate Advisory",
    description:
      "Board-level geological advisory and transaction support. We help mining companies, investors, and funds navigate acquisitions, divestitures, and strategic decisions with technical clarity.",
    icon: "TrendingUp",
    bullets: [
      "Project acquisition and divestiture support",
      "Valuation and transaction advisory",
      "Investor materials and technical presentations",
      "Board-level geological advisory",
    ],
  },
];
