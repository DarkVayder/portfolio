import type { ReactNode } from "react";
import { PROFILE } from "../data/profile";

const LAST_UPDATED = "9 October 2026";

const Block = ({ title, children }: { title: string; children: ReactNode }) => (
  <section className="border-t border-line py-9">
    <h2 className="font-display text-xl font-medium text-paper">{title}</h2>
    <div className="mt-4 flex flex-col gap-4 leading-relaxed text-muted">{children}</div>
  </section>
);

const Privacy = () => (
  <article className="max-w-2xl pb-20 pt-32 lg:pt-40">
    <p className="eyebrow">Privacy &amp; legal</p>
    <h1 className="mt-3 font-display text-4xl font-medium text-paper sm:text-5xl">Privacy policy</h1>
    <p className="mt-5 text-lg leading-relaxed text-muted">
      This is a personal portfolio. It is built to collect as little as possible, and this page says exactly what that
      means.
    </p>
    <p className="mb-10 mt-4 font-mono text-xs text-muted">Last updated {LAST_UPDATED}</p>

    <Block title="What this site collects">
      <p>
        Nothing that identifies you. The site has no accounts, no contact form, no analytics, no advertising and no
        tracking pixels. It sets no cookies.
      </p>
      <p>
        One value is saved in your own browser's local storage: your light or dark theme choice, so the site looks the
        same on your next visit. It never leaves your device, and clearing your browser's site data removes it.
      </p>
    </Block>

    <Block title="Hosting and server logs">
      <p>
        The site is served by Vercel. Like any web host, Vercel processes technical request data such as your IP
        address, browser type and the page requested, in order to deliver the site and keep it secure. I do not use
        that data to identify visitors. Vercel's own privacy policy describes how it handles it.
      </p>
      <p>Fonts, scripts and styles are all served from this site's own domain. No third-party resources load.</p>
    </Block>

    <Block title="When you contact me">
      <p>
        If you email me, I receive your email address and whatever you choose to write. I use it only to reply and to
        continue that conversation. I do not add you to any list or pass your details to anyone else. Ask me to delete
        our correspondence and I will.
      </p>
    </Block>

    <Block title="Links to other sites">
      <p>
        Project links, LinkedIn and GitHub take you to sites I do not control. Their own privacy policies apply once
        you leave this one.
      </p>
    </Block>

    <Block title="Copyright">
      <p>
        © {PROFILE.name}. The text, design and source code of this site are my own work. All rights reserved. You are
        welcome to link to the site and to quote short passages with attribution.
      </p>
    </Block>

    <Block title="Trademarks and client work">
      <p>
        Spayce, TaxDone, VentureDirection, SabiTrack, Nicely Polished and other product or company names mentioned
        here are the property of their respective owners. They appear only to describe work I contributed to. Their
        appearance does not imply endorsement, and nothing on this site discloses confidential client information.
      </p>
    </Block>

    <Block title="Changes and contact">
      <p>
        If this policy changes, the date at the top changes with it. Questions or requests go to{" "}
        <a href={`mailto:${PROFILE.email}`} className="text-link text-paper">
          {PROFILE.email}
        </a>
        .
      </p>
    </Block>
  </article>
);

export default Privacy;
