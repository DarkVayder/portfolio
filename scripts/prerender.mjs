// Renders every route to static HTML after `vite build`, so the content is in the
// document before any JavaScript runs. Also writes sitemap.xml and the robots.txt
// sitemap line when the site URL is known.
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const ssrDir = path.join(root, "dist-ssr");

// SITE_URL wins; on Vercel the production domain is provided automatically.
const siteUrl = (
  process.env.SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "")
).replace(/\/+$/, "");

const { render, ROUTES, PROFILE } = await import(pathToFileURL(path.join(ssrDir, "entry-server.js")).href);

const escapeHtml = (value) =>
  value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: PROFILE.name,
  jobTitle: PROFILE.role,
  email: `mailto:${PROFILE.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Abuja", addressCountry: "NG" },
  sameAs: Object.values(PROFILE.social),
  ...(siteUrl ? { url: siteUrl } : {}),
};

const headFor = (route) => {
  const tags = [
    `<meta property="og:title" content="${escapeHtml(route.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(route.description)}" />`,
  ];

  if (route.path === null) tags.push(`<meta name="robots" content="noindex" />`);

  if (siteUrl) {
    tags.push(`<meta property="og:image" content="${siteUrl}/og.png" />`);
    tags.push(`<meta property="og:image:width" content="1200" />`);
    tags.push(`<meta property="og:image:height" content="630" />`);
    if (route.path !== null) {
      tags.push(`<link rel="canonical" href="${siteUrl}${route.path}" />`);
      tags.push(`<meta property="og:url" content="${siteUrl}${route.path}" />`);
    }
  }

  if (route.id === "home") {
    tags.push(`<script type="application/ld+json">${JSON.stringify(personSchema).replace(/</g, "\\u003c")}</script>`);
  }

  return tags.join("\n    ");
};

const template = await readFile(path.join(dist, "index.html"), "utf8");

const pageFor = (route) =>
  template
    .replace(/<title>[\s\S]*?<\/title>/, () => `<title>${escapeHtml(route.title)}</title>`)
    .replace(
      /<meta name="description"[\s\S]*?\/>/,
      () => `<meta name="description" content="${escapeHtml(route.description)}" />`,
    )
    .replace("<!--head-->", () => headFor(route))
    .replace('<div id="root"></div>', () => `<div id="root">${render(route.path ?? "/404")}</div>`);

const outputs = {
  home: "index.html",
  privacy: "privacy.html",
  "not-found": "404.html",
};

for (const route of Object.values(ROUTES)) {
  const file = path.join(dist, outputs[route.id]);
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, pageFor(route));
  console.log(`prerendered ${path.relative(root, file)}`);
}

if (siteUrl) {
  const urls = Object.values(ROUTES)
    .filter((route) => route.path !== null)
    .map((route) => `  <url><loc>${siteUrl}${route.path}</loc></url>`)
    .join("\n");
  await writeFile(
    path.join(dist, "sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
  );
  const robots = await readFile(path.join(dist, "robots.txt"), "utf8");
  await writeFile(path.join(dist, "robots.txt"), `${robots.trimEnd()}\n\nSitemap: ${siteUrl}/sitemap.xml\n`);
  console.log(`site URL: ${siteUrl}`);
} else {
  console.warn("SITE_URL not set: skipped canonical links, og:image and sitemap.xml.");
}

await rm(ssrDir, { recursive: true, force: true });
