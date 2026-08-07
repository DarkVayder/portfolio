export type ProjectLink = { label: string; url: string };

export type Project = {
  slug: string;
  title: string;
  category: string;
  role: string;
  summary: string;
  description: string;
  stack: string[];
  links: ProjectLink[];
  accent: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "taxdone",
    title: "TaxDone",
    category: "Fintech / Tax",
    role: "Full-stack Engineer",
    summary: "Tax filing, without the paperwork.",
    description:
      "A tax-filing platform originally built for Switzerland and expanding into Nigeria. Users get a real accountant behind an automated flow — upload documents, answer plain-language questions, get a complete return ready to file. I worked across the stack: the multi-language client app and the Nigeria market-entry site.",
    stack: ["Next.js", "React", "Node.js", "Express", "i18n (EN/DE/FR)", "Tailwind CSS"],
    links: [
      { label: "Swiss App", url: "https://app.taxdone.ch" },
      { label: "Taxdone Site", url: "https://taxdone-site-sparkstrand-web-sparkstrand.vercel.app/en" },
    ],
    accent: "#3d7bff",
  },
  {
    slug: "venturedirection",
    title: "VentureDirection",
    category: "Enterprise SaaS",
    role: "Frontend Engineer",
    summary: "One dashboard to run the whole business.",
    description:
      "A multi-tenant business platform — CRM, finance, invoicing, time tracking, and an AI assistant — that teams use to run their operations from a single workspace. I built shared UI components designed to work identically across web, React Native, and desktop, plus the role-based views enterprise customers depend on.",
    stack: ["React", "React Native", "NativeWind", "TypeScript", "RBAC"],
    links: [{ label: "Visit site", url: "https://venturedirection.com" }],
    accent: "#6c5ce7",
  },
  {
    slug: "sabitrack",
    title: "SabiTrack",
    category: "Project Management",
    role: "Frontend Engineer",
    summary: "Escrow-backed trust for project delivery.",
    description:
      "A project management platform that gives sponsors, vendors, and project managers a shared source of truth — verified milestones, documented proof, and protected escrow payments. I built the B2B dashboard: the operational surface enterprises and vendors use to track approvals and audit history.",
    stack: ["React", "Next.js", "Tailwind CSS", "REST APIs"],
    links: [{ label: "Visit site", url: "https://business.sabitrack.com" }],
    accent: "#17b897",
  },
  {
    slug: "nicelypolished",
    title: "Nicely Polished",
    category: "E-commerce",
    role: "Full-stack Engineer",
    summary: "A full storefront for professional nail products.",
    description:
      "A UK-based e-commerce storefront for professional nail products. Built end to end — product catalog, cart and checkout, multi-currency pricing, and a loyalty points system for repeat customers.",
    stack: ["React", "Node.js", "Tailwind CSS", "E-commerce"],
    links: [{ label: "Visit site", url: "https://www.nicelypolished.com/en/gb" }],
    accent: "#ff5c9d",
  },
  {
    slug: "spayce",
    title: "Spayce",
    category: "Real Estate",
    role: "Full-stack Engineer",
    summary: "Buy, rent, or book — one marketplace.",
    description:
      "A real estate marketplace for the Nigerian market covering sales, rentals, short-lets, and hotel bookings, with distinct flows for tenants, buyers, agents, hosts, and legal reviewers, plus KYC/KYB verification. Built with a React + Vite frontend and a NestJS API.",
    stack: ["React", "Vite", "NestJS", "TypeScript"],
    links: [{ label: "Visit site", url: "https://spayce.ai" }],
    accent: "#ffb020",
  },
];
