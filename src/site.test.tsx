import { describe, expect, it } from "vitest";
import { EXPERIENCES } from "./data/experience";
import { FACTS, PROFILE } from "./data/profile";
import { PROJECTS } from "./data/projects";
import { render } from "./entry-server";
import { ROUTES, resolveRoute } from "./routes";

describe("content", () => {
  it("gives every project a unique slug, a problem and at least one contribution", () => {
    const slugs = PROJECTS.map((project) => project.slug);
    expect(new Set(slugs).size).toBe(slugs.length);

    for (const project of PROJECTS) {
      expect(project.problem.length, project.slug).toBeGreaterThan(40);
      expect(project.contribution.length, project.slug).toBeGreaterThan(0);
      expect(project.links.length, project.slug).toBeGreaterThan(0);
    }
  });

  it("only links out over https", () => {
    const urls = [...PROJECTS.flatMap((project) => project.links.map((link) => link.url)), ...Object.values(PROFILE.social)];
    for (const url of urls) expect(url).toMatch(/^https:\/\//);
  });

  it("keeps the headline count in step with the project list", () => {
    expect(FACTS[0].value).toBe(String(PROJECTS.length));
  });

  it("never repeats an experience description", () => {
    const highlights = EXPERIENCES.flatMap((item) => item.highlights ?? []);
    expect(new Set(highlights).size).toBe(highlights.length);
  });
});

describe("routing", () => {
  it("resolves known paths, with or without a trailing slash", () => {
    expect(resolveRoute("/").id).toBe("home");
    expect(resolveRoute("/privacy").id).toBe("privacy");
    expect(resolveRoute("/privacy/").id).toBe("privacy");
    expect(resolveRoute("/index.html").id).toBe("home");
  });

  it("falls back to the 404 page", () => {
    expect(resolveRoute("/nope").id).toBe("not-found");
  });
});

describe("prerender", () => {
  it("renders the home page with one h1 and every project", () => {
    const html = render("/");
    expect(html.match(/<h1/g)).toHaveLength(1);
    expect(html).toContain(PROFILE.headline);
    for (const project of PROJECTS) expect(html).toContain(`id="${project.slug}"`);
  });

  it("renders the privacy and 404 pages", () => {
    expect(render(ROUTES.privacy.path!)).toContain("Privacy policy");
    expect(render("/nope")).toContain("That page doesn");
  });

  it("opens every external link safely", () => {
    const anchors = render("/").match(/<a [^>]*target="_blank"[^>]*>/g) ?? [];
    expect(anchors.length).toBeGreaterThan(0);
    for (const anchor of anchors) expect(anchor).toContain('rel="noopener noreferrer"');
  });
});
