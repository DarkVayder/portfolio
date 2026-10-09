export type Experience = {
  period: string;
  role: string;
  company: string;
  /** Roles with highlights render in full; the rest render as a compact row. */
  highlights?: string[];
  technologies: string[];
};

export const EXPERIENCES: Experience[] = [
  {
    period: "2026",
    role: "Software Engineer",
    company: "Finclusion",
    highlights: [
      "Full-stack work on fintech and real-estate products: escrow and payment flows, multi-role dashboards, KYC, and internal admin tooling.",
      "Built on React, Next.js and NestJS behind the company's central single sign-on.",
    ],
    technologies: ["TypeScript", "React", "Next.js", "NestJS", "Node.js"],
  },
  {
    period: "2023 — Present",
    role: "Freelance Software Engineer",
    company: "Self-employed",
    highlights: [
      "Delivered production platforms end to end for clients in fintech, e-commerce and real estate, including SabiTrack, Nicely Polished and Spayce.",
      "Translated Figma designs into accurate, responsive UI and integrated REST APIs on every build.",
    ],
    technologies: ["React", "Next.js", "NestJS", "Node.js", "TypeScript", "Tailwind CSS", "Firebase", "MongoDB"],
  },
  {
    period: "2025",
    role: "Software Engineer",
    company: "SparkStrand",
    highlights: [
      "Shipped two production products: TaxDone, a tax-filing platform in three languages, and VentureDirection, a multi-tenant business platform.",
      "Built a shared component layer used across web, React Native and desktop.",
      "Partnered directly with design and backend to ship features end to end.",
    ],
    technologies: ["Next.js", "React", "React Native", "NestJS", "Tailwind CSS", "Medusa", "Docker", "PostgreSQL"],
  },
  {
    period: "2026",
    role: "Frontend Developer",
    company: "Mindgrid Technologies",
    technologies: ["TypeScript", "Next.js", "React"],
  },
  {
    period: "2025",
    role: "Software Developer",
    company: "Camie",
    technologies: ["TypeScript", "Next.js", "React", "Node.js"],
  },
  {
    period: "2025",
    role: "Web Developer",
    company: "Isaac Consolidates",
    technologies: ["JavaScript", "Next.js", "React", "Python"],
  },
  {
    period: "2024",
    role: "Frontend Developer (Internship)",
    company: "HNG",
    technologies: ["React", "JavaScript", "Figma"],
  },
];
