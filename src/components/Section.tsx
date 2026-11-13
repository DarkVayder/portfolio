import type { ReactNode } from "react";

type Props = {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  /** Large section number shown behind the heading, e.g. "01". */
  index?: string;
  /** Decorative layers (floating shapes) rendered behind the content. */
  decor?: ReactNode;
  children: ReactNode;
};

const Section = ({ id, eyebrow, title, intro, index, decor, children }: Props) => (
  <section id={id} aria-labelledby={`${id}-title`} className="section relative py-20 sm:py-28">
    <div aria-hidden="true" className="section-rule" />
    {decor}
    {index && (
      <span aria-hidden="true" className="section-num">
        {index}
      </span>
    )}
    <div data-reveal="up" className="relative mb-14 max-w-2xl">
      <p className="eyebrow">
        <span aria-hidden="true" className="eyebrow-dash" />
        {eyebrow}
      </p>
      <h2 id={`${id}-title`} className="title-reveal mt-3 font-display text-3xl font-medium text-paper sm:text-5xl">
        {title}
      </h2>
      {intro && <p className="mt-5 leading-relaxed text-muted">{intro}</p>}
    </div>
    {children}
  </section>
);

export default Section;
