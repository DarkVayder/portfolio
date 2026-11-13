import type { CSSProperties } from "react";

// One colour per project, as r g b channels.
const COLOURS = ["255 106 61", "99 102 241", "20 184 166", "236 72 153", "245 158 11"];

/**
 * An isometric stack of translucent layers, one per tool in the project's stack. It floats,
 * and the layers fan apart when the card is hovered. Decorative.
 */
const StackVisual = ({ items, index }: { items: string[]; index: number }) => {
  const layers = items.slice(0, 5);

  return (
    <div
      aria-hidden="true"
      className="stackviz"
      style={{ "--c": COLOURS[index % COLOURS.length] } as CSSProperties}
    >
      <div className="stackviz-scene">
        {[...layers].reverse().map((tool, i) => (
          <div key={tool} className="stackviz-layer" style={{ "--i": i } as CSSProperties}>
            <span>{tool}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StackVisual;
