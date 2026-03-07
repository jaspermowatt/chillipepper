export interface Project {
  id: string;
  name: string;
  location: string;
  commodity: string;
  commodityTag: string;
  stage: "Divested" | "Active" | "Investment";
  partner: string;
  description: string;
  imageUrl: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  linkedinUrl?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  bullets: string[];
}

export interface NavLink {
  label: string;
  href: string;
}
