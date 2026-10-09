export const PROFILE = {
  name: "Rabiu Muhammad",
  role: "Software Engineer",
  roleDetail: "Full-stack",
  location: "Abuja, Nigeria",
  timeZone: "Africa/Lagos",
  utcOffset: "UTC+1",
  availability: "Open to software engineering roles",
  headline: "I build production web platforms that move real money for real users.",
  tagline:
    "Tax filing in Switzerland, escrow-backed property transactions in Nigeria, e-commerce checkout in the UK. I design and build features across the stack, from architecture to production, and stay with them after launch.",
  bio: [
    "I'm a software engineer who ships things people actually use. Over the last few years that has meant the client app for a Swiss tax-filing platform, the operational dashboard for an escrow-backed project management tool, a real estate marketplace end to end, and the shared UI layer for a multi-tenant business platform spanning web, native and desktop.",
    "I work across the whole stack: React and Next.js on the client, Node.js and NestJS on the server, and the architecture that connects them. That means data models, API contracts, authentication and role boundaries, and payment and escrow flows. I care more about whether the thing holds up under real users than whether the demo looks good.",
  ],
  email: "mrabiu321@gmail.com",
  social: {
    linkedin: "https://www.linkedin.com/in/rabiu-muhammad-b17a452b1/",
    github: "https://github.com/DarkVayder",
  },
  cv: {
    path: "/Rabiu_Muhammad_CV.pdf",
    filename: "Rabiu_Muhammad_CV.pdf",
  },
};

export type Fact = { value: string; label: string };

/** Countable claims only. Every number here is traceable to a project in projects.ts. */
export const FACTS: Fact[] = [
  { value: "5", label: "production platforms shipped" },
  { value: "3", label: "markets served: Switzerland, UK, Nigeria" },
  { value: "3", label: "languages from one tax-filing codebase" },
  { value: "3", label: "targets from one component layer: web, native, desktop" },
];

export type Principle = { title: string; body: string };

export const PRINCIPLES: Principle[] = [
  {
    title: "Own it end to end",
    body: "I take a feature from the first architecture sketch to production and keep it after launch. On Spayce I audited every role's journey and fixed the dead ends I found, without waiting for a ticket.",
  },
  {
    title: "Start from the user",
    body: "TaxDone replaces tax forms with plain-language questions. Spayce shows the full cost before anyone commits. If a step can be removed, I remove it before I try to explain it.",
  },
  {
    title: "Earn trust in the details",
    body: "When a product holds someone's money or identity, the edge cases are the product: escrow release conditions, verification states, audit history, role boundaries.",
  },
  {
    title: "Build once, use everywhere",
    body: "One component layer serving web, native and desktop on VentureDirection. One codebase serving three languages on TaxDone. Reuse is a design decision made early.",
  },
];
