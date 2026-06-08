import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "project-generation",
    title: "Exploration Targeting & Strategy",
    description:
      "Systematic targeting and area selection across all commodities and jurisdictions. We help clients identify and high-grade prospective ground through data-driven geological assessment.",
    icon: "Crosshair",
    bullets: [
      "Systematic targeting and area selection",
      "Data compilation, GIS, and prospectivity analysis",
      "Joint venture and partnership advisory",
      "Tenure and ground-acquisition strategy advice",
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
      "Board-level geological advisory and technical support. We help mining companies, investors, and funds make strategic decisions with technical clarity, providing independent input into transactions led by our clients.",
    icon: "TrendingUp",
    bullets: [
      "Technical support for client-led acquisitions and divestitures",
      "Independent technical valuation input",
      "Investor materials and technical presentations",
      "Board-level geological advisory",
    ],
  },
];
