import Icon from "../components/Icon";
import Portrait from "../components/Portrait";
import { FACTS, PROFILE } from "../data/profile";
import { portraitSrc } from "../lib/portrait";

const Hero = () => (
  <section id="top" aria-labelledby="hero-title" className="pb-16 pt-32 lg:pt-40">
    <div className={portraitSrc ? "grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16" : ""}>
      <div>
        <p className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-sm text-muted">
          <span className="text-paper">{PROFILE.name}</span>
          <span aria-hidden="true">·</span>
          <span>
            {PROFILE.role}, {PROFILE.roleDetail.toLowerCase()}
          </span>
        </p>

        <h1
          id="hero-title"
          className="mt-6 max-w-3xl text-balance font-display text-4xl font-medium leading-[1.08] text-paper sm:text-5xl lg:text-6xl"
        >
          {PROFILE.headline}
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{PROFILE.tagline}</p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
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

        <p className="mt-8 inline-flex items-center gap-2 font-mono text-xs text-muted">
          <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
          {PROFILE.availability} · {PROFILE.location} ({PROFILE.utcOffset})
        </p>
      </div>

      <Portrait className="order-first w-28 sm:w-36 lg:order-none lg:w-64" />
    </div>

    <dl className="mt-16 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-line pt-10 lg:grid-cols-4">
      {FACTS.map((fact) => (
        <div key={fact.label} className="flex flex-col-reverse gap-2">
          <dt className="text-sm leading-snug text-muted">{fact.label}</dt>
          <dd className="font-display text-4xl font-medium text-paper sm:text-5xl">{fact.value}</dd>
        </div>
      ))}
    </dl>
  </section>
);

export default Hero;
