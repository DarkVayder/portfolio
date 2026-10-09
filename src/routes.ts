import { PROFILE } from "./data/profile";

export type RouteId = "home" | "privacy" | "not-found";

export type Route = {
  id: RouteId;
  /** Canonical path, or null for pages that should not be indexed. */
  path: string | null;
  title: string;
  description: string;
};

export const ROUTES: Record<RouteId, Route> = {
  home: {
    id: "home",
    path: "/",
    title: `${PROFILE.name} — ${PROFILE.role}`,
    description: `${PROFILE.name} is a full-stack software engineer building production web platforms in fintech, real estate and SaaS: tax filing, escrow payments, marketplaces and e-commerce.`,
  },
  privacy: {
    id: "privacy",
    path: "/privacy",
    title: `Privacy & legal — ${PROFILE.name}`,
    description: `What this site does and does not collect, plus copyright and trademark notices for ${PROFILE.name}'s portfolio.`,
  },
  "not-found": {
    id: "not-found",
    path: null,
    title: `Page not found — ${PROFILE.name}`,
    description: "That page does not exist.",
  },
};

export const resolveRoute = (pathname: string): Route => {
  const normalised = pathname.replace(/\/index\.html$/, "/").replace(/(.)\/+$/, "$1");
  return Object.values(ROUTES).find((route) => route.path === normalised) ?? ROUTES["not-found"];
};
