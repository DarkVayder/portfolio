import { TECH_GROUPS } from "../data/techstack";

// Every tool from the stack list, split across two rows that travel in opposite directions.
const TOOLS = TECH_GROUPS.filter((group) => group.label !== "Design").flatMap((group) => group.items);
const ROWS = [TOOLS.filter((_, i) => i % 2 === 0), TOOLS.filter((_, i) => i % 2 === 1)];

/** A tilted double marquee of the tech stack. Decorative: the same tools are listed in About. */
const Marquee = () => (
  <div aria-hidden="true" className="marquee">
    {ROWS.map((row, index) => (
      <div key={index} className={`marquee-row ${index === 1 ? "marquee-rev" : ""}`}>
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <ul key={copy} className="marquee-set">
              {row.map((tool) => (
                <li key={tool} className="marquee-chip">
                  <i />
                  {tool}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default Marquee;
