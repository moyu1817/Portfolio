import React from "react";

// Grid-coloured technical drawings that sketch themselves on the blueprint background (styles: .bp-* in index.css).
// Every stroke is a <path> with pathLength="1", so the draw-in animation needs no measured lengths.
// Fixed behind the page (-z-10), only from 1440px (below that the side margins are too narrow), never clickable.

// Gear outline: 12 teeth around a 55px radius, built as one path
const gearPath = (() => {
  const cx = 100, cy = 95, rOut = 62, rIn = 52, teeth = 12;
  const pts = [];
  for (let i = 0; i < teeth; i++) {
    const a = (i / teeth) * Math.PI * 2;
    const step = (Math.PI * 2) / teeth;
    [
      [a, rIn],
      [a + step * 0.15, rOut],
      [a + step * 0.45, rOut],
      [a + step * 0.6, rIn],
    ].forEach(([ang, r]) => pts.push(`${(cx + r * Math.cos(ang)).toFixed(1)},${(cy + r * Math.sin(ang)).toFixed(1)}`));
  }
  return `M${pts.join(" L")} Z`;
})();

const circle = (cx, cy, r) => `M${cx - r},${cy} a${r},${r} 0 1,0 ${r * 2},0 a${r},${r} 0 1,0 ${-r * 2},0`;

const drawings = [
  {
    // Gear with centre lines and a dimension line
    pos: "top-28 left-8",
    paths: [
      gearPath,
      circle(100, 95, 22),
      circle(100, 95, 6),
      "M100,20 V170 M25,95 H175",
      "M38,185 H162 M38,179 V191 M162,179 V191",
    ],
    labels: [{ x: 100, y: 200, text: "Ø 124" }],
  },
  {
    // Client -> API -> database
    pos: "top-40 right-8",
    paths: [
      "M10,30 h56 v36 h-56 Z",
      "M72,48 H96 M90,43 L96,48 L90,53",
      "M102,30 h56 v36 h-56 Z",
      "M130,72 V104 M125,98 L130,104 L135,98",
      "M104,116 a26,8 0 1,0 52,0 a26,8 0 1,0 -52,0 M104,116 V160 a26,8 0 0,0 52,0 V116",
      "M10,190 H190",
    ],
    labels: [
      { x: 38, y: 52, text: "CLIENT" },
      { x: 130, y: 52, text: "API" },
      { x: 130, y: 145, text: "DB" },
    ],
  },
  {
    // Neural network: 3 -> 4 -> 2 nodes
    pos: "bottom-24 left-10",
    paths: (() => {
      const layers = [
        [60, 100, 140],
        [40, 80, 120, 160],
        [80, 120],
      ].map((ys, i) => ys.map((y) => [30 + i * 70, y]));
      const lines = [];
      for (let l = 0; l < layers.length - 1; l++)
        layers[l].forEach(([x1, y1]) => layers[l + 1].forEach(([x2, y2]) => lines.push(`M${x1 + 7},${y1} L${x2 - 7},${y2}`)));
      return [lines.join(" "), ...layers.flat().map(([x, y]) => circle(x, y, 7))];
    })(),
    labels: [{ x: 100, y: 192, text: "INPUT · HIDDEN · OUTPUT" }],
  },
  {
    // Line chart with axes and ticks
    pos: "bottom-32 right-10",
    paths: [
      "M25,20 V170 H185",
      "M21,50 H29 M21,90 H29 M21,130 H29 M65,166 V174 M105,166 V174 M145,166 V174",
      "M25,150 L55,128 L85,136 L115,96 L145,104 L175,56",
      circle(115, 96, 4),
      circle(175, 56, 4),
    ],
    labels: [{ x: 105, y: 192, text: "t →" }],
  },
];

function BlueprintDrawings() {
  return (
    <div className="bp-layer fixed inset-0 -z-10 pointer-events-none" aria-hidden="true">
      {drawings.map(({ pos, paths, labels }, d) => (
        <svg
          key={d}
          className={`bp-drawing absolute w-52 h-52 ${pos}`}
          viewBox="0 0 200 210"
          fill="none"
          style={{ "--d": d }}
        >
          {paths.map((p, i) => (
            <path key={i} d={p} pathLength="1" className="bp-stroke" style={{ "--i": i }} />
          ))}
          {labels.map(({ x, y, text }) => (
            <text key={text} x={x} y={y} textAnchor="middle" className="bp-label">
              {text}
            </text>
          ))}
        </svg>
      ))}
    </div>
  );
}

export default BlueprintDrawings;
