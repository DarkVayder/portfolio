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
      "On Spayce, a real estate marketplace: built role-specific journeys for six user types, escrow-held payments for viewings, short stays and sales, and KYC/KYB verification with listing verification badges.",
      "Audited every role's journey and closed the gaps found (unguarded routes, missing notifications, incomplete payment flows), then built an activity and error monitor so the admin team sees failures before users report them.",
    ],
    technologies: ["TypeScript", "React", "Next.js", "NestJS", "Node.js"],
  },
  {
    period: "2026",
    role: "Frontend Developer",
    company: "Mindgrid Technologies",
    highlights: [
      "Built the B2B dashboard for SabiTrack, an escrow-backed project management platform: the surface enterprises and vendors use for milestone tracking, approvals and audit history.",
      "Integrated the dashboard with the platform's REST APIs as a pure client, with no server routes of its own.",
    ],
    technologies: ["TypeScript", "Next.js", "React", "Tailwind CSS"],
  },
  {
    period: "2025",
    role: "Software Engineer",
    company: "SparkStrand",
    highlights: [
      "Shipped three production products: TaxDone, a tax-filing platform in three languages; VentureDirection, a multi-tenant business platform; and the Nicely Polished storefront.",
      "Built a shared component layer used across web, React Native and desktop.",
      "Built the Nicely Polished storefront end to end for a UK retailer: catalogue, cart and checkout, multi-currency pricing and a loyalty points system.",
      "Partnered directly with design and backend to ship features end to end.",
    ],
    technologies: ["Next.js", "React", "React Native", "NestJS", "Tailwind CSS", "Medusa", "Docker", "PostgreSQL"],
  },
  {
    period: "2022 — Present",
    role: "Freelance Software Engineer",
    company: "Self-employed",
    highlights: [
      "Built and shipped web applications for clients, from Figma designs to production.",
      "Translated Figma designs into accurate, responsive UI and integrated REST APIs on every build.",
    ],
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS", "Firebase", "MongoDB"],
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
