export type ProjectLink = { label: string; url: string };

export type Project = {
  slug: string;
  title: string;
  category: string;
  role: string;
  summary: string;
  problem: string;
  contribution: string[];
  /** Measured results. Leave empty until there is a real number to put here. */
  outcomes?: string[];
  stack: string[];
  links: ProjectLink[];
};

export const PROJECTS: Project[] = [
  {
    slug: "spayce",
    title: "Spayce",
    category: "Real estate marketplace",
    role: "Full-stack Engineer",
    summary: "Buy, rent or book property, with escrow between strangers.",
    problem:
      "Renting, buying or booking property in Nigeria means trusting strangers with large upfront payments. Spayce puts sales, long-term rentals, short-lets and hotel bookings in one marketplace, with verification and escrow between the parties.",
    contribution: [
      "Built role-specific journeys for tenants, buyers, landlords, agents, hosts and legal reviewers on a React + Vite client and a NestJS API, with route guarding so each role reaches only its own surface.",
      "Implemented escrow-held payments for viewings, short stays and sales, so funds release only when the agreed step is confirmed.",
      "Added the trust layer: KYC/KYB verification, verification badges on listings, and an upfront cost calculator that shows the full price before anyone commits.",
      "Audited every user journey role by role and closed the dead ends: unguarded routes, missing notifications, payment flows that stopped short.",
      "Built an activity and error monitor for the admin team so client-side failures surface before users report them.",
    ],
    stack: ["React", "Vite", "TypeScript", "NestJS", "REST APIs"],
    links: [{ label: "spayce.ai", url: "https://spayce.ai" }],
  },
  {
    slug: "taxdone",
    title: "TaxDone",
    category: "Fintech / Tax",
    role: "Full-stack Engineer",
    summary: "Tax filing, without the paperwork.",
    problem:
      "Filing a tax return is paperwork-heavy and intimidating. TaxDone pairs a real accountant with an automated flow: upload documents, answer plain-language questions, receive a complete return ready to file. It launched in Switzerland and is expanding into Nigeria.",
    contribution: [
      "Worked across the stack on the client app: Next.js and React in front, Node.js and Express behind it.",
      "Shipped the app in English, German and French from a single codebase.",
      "Built the market-entry site for the Nigeria launch.",
    ],
    stack: ["Next.js", "React", "Node.js", "Express", "i18n (EN/DE/FR)", "Tailwind CSS"],
    links: [
      { label: "app.taxdone.ch", url: "https://app.taxdone.ch" },
      { label: "Nigeria site", url: "https://taxdone-site-sparkstrand-web-sparkstrand.vercel.app/en" },
    ],
  },
  {
    slug: "venturedirection",
    title: "VentureDirection",
    category: "Enterprise SaaS",
    role: "Frontend Engineer",
    summary: "One workspace to run the whole business.",
    problem:
      "Small teams run their business across a pile of disconnected tools. VentureDirection brings CRM, finance, invoicing, time tracking and an AI assistant into one multi-tenant workspace.",
    contribution: [
      "Built shared UI components that render identically on web, React Native and desktop from a single NativeWind-based layer.",
      "Built the role-based views that decide what each member of an enterprise tenant can see and do.",
    ],
    stack: ["React", "React Native", "NativeWind", "TypeScript", "RBAC"],
    links: [{ label: "venturedirection.com", url: "https://venturedirection.com" }],
  },
  {
    slug: "sabitrack",
    title: "SabiTrack",
    category: "Project management",
    role: "Frontend Engineer",
    summary: "Escrow-backed trust for project delivery.",
    problem:
      "On funded projects, sponsors, vendors and project managers rarely share one version of the truth, and payments go out on trust. SabiTrack ties escrow payments to verified milestones and documented proof.",
    contribution: [
      "Built the B2B dashboard: the operational surface enterprises and vendors use for milestone tracking, approvals and audit history.",
      "Integrated the dashboard with the platform's REST APIs as a pure client, with no server routes of its own.",
    ],
    stack: ["React", "Next.js", "Tailwind CSS", "REST APIs"],
    links: [
      { label: "sabitrack.com", url: "https://sabitrack.com" },
      { label: "Dashboard (login required)", url: "https://business.sabitrack.com" },
    ],
  },
  {
    slug: "nicelypolished",
    title: "Nicely Polished",
    category: "E-commerce",
    role: "Full-stack Engineer",
    summary: "A full storefront for professional nail products.",
    problem:
      "A UK retailer of professional nail products needed a storefront that handles the whole purchase journey for customers paying in different currencies.",
    contribution: [
      "Built the storefront end to end: catalogue, cart and checkout.",
      "Added multi-currency pricing and a loyalty points system for repeat customers.",
    ],
    stack: ["React", "Node.js", "Tailwind CSS"],
    links: [{ label: "nicelypolished.com", url: "https://www.nicelypolished.com/en/gb" }],
  },
];
