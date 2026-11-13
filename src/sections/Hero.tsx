import type { CSSProperties } from "react";
import HeroScene from "../components/HeroScene";
import CountUp from "../components/CountUp";
import Icon from "../components/Icon";
import Portrait from "../components/Portrait";
import TiltCard from "../components/TiltCard";
import { FACTS, PROFILE } from "../data/profile";
import { portraitSrc } from "../lib/portrait";

/** Staggers the entrance once the loading screen lifts. */
const enter = (delay: number): CSSProperties => ({ "--d": `${delay}s` }) as CSSProperties;

const Hero = () => (
  <section id="top" aria-labelledby="hero-title" className="relative pb-16 pt-32 lg:pt-40">
    <HeroScene />

    <div className={portraitSrc ? "grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16" : ""}>
      <div>
        <p
          style={enter(0.05)}
          className="hero-in flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-sm text-muted"
        >
          <span className="text-paper">{PROFILE.name}</span>
          <span aria-hidden="true">·</span>
          <span>
            {PROFILE.role}, {PROFILE.roleDetail.toLowerCase()}
          </span>
        </p>

        <h1
          id="hero-title"
          style={enter(0.18)}
          className="hero-in mt-6 max-w-3xl text-balance font-display text-4xl font-medium leading-[1.08] text-paper sm:text-5xl lg:text-6xl"
        >
          {PROFILE.headline}
        </h1>

        <p style={enter(0.32)} className="hero-in mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          {PROFILE.tagline}
        </p>

        <div style={enter(0.46)} className="hero-in mt-9 flex flex-wrap items-center gap-3">
          <a href="#work" className="btn-primary">
            See the work
          </a>
          <a href={PROFILE.cv.path} download={PROFILE.cv.filename} className="btn-secondary">
            <Icon name="download" />
            Download CV
          </a>
          <a href={`mailto:${PROFILE.email}`} className="btn px-3 text-muted hover:text-paper">
            <Icon name="mail" />
            {PROFILE.email}
          </a>
        </div>

        <p style={enter(0.6)} className="hero-in mt-8 inline-flex items-center gap-2 font-mono text-xs text-muted">
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          {PROFILE.availability} · {PROFILE.location} ({PROFILE.utcOffset})
        </p>
      </div>

      <div style={enter(0.3)} className="hero-in order-first flex justify-center lg:order-none lg:block">
        <Portrait className="w-44 sm:w-56 lg:w-[21rem]" />
      </div>
    </div>

    <dl className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4">
      {FACTS.map((fact, index) => (
        <TiltCard
          key={fact.label}
          style={enter(0.7 + index * 0.08)}
          className="hero-in flex flex-col-reverse gap-2 rounded-2xl border border-line bg-surface/70 p-5 backdrop-blur-sm sm:p-6"
        >
          <dt className="text-sm leading-snug text-muted">{fact.label}</dt>
          <dd className="font-display text-4xl font-medium text-paper sm:text-5xl">
            <CountUp value={fact.value} />
          </dd>
        </TiltCard>
      ))}
    </dl>
  </section>
);

export default Hero;
