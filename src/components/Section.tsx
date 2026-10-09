import type { ReactNode } from "react";

type Props = {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
};

const Section = ({ id, eyebrow, title, intro, children }: Props) => (
  <section id={id} aria-labelledby={`${id}-title`} className="border-t border-line py-20 sm:py-24">
    <div data-reveal className="mb-12 max-w-2xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={`${id}-title`} className="mt-3 font-display text-3xl font-medium text-paper sm:text-4xl">
        {title}
      </h2>
      {intro && <p className="mt-4 leading-relaxed text-muted">{intro}</p>}
    </div>
    {children}
  </section>
);

export default Section;
