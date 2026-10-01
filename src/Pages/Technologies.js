import React from "react";
import { techStackDetails } from "../Details";

function Technologies() {
  return (
    <section id="technologies" className="pt-16 md:pt-24 scroll-mt-20">
      <h2 className="section-title">Technologies</h2>
      <p className="text-content pt-2 lg:max-w-3xl">What I've been working with recently</p>

      {/* One quiet uppercase label per group; a dense grid keeps each group to about one row on desktop.
          Phones: as many 64px+ columns as fit (5 at 390px, 4 at 320px), so labels like "JavaScript" never collide */}
      {techStackDetails.map(({ heading, items, chips }) => (
        <div key={heading} className="pt-10">
          <h3 className="text-xs uppercase tracking-widest text-content">{heading}</h3>
          {chips ? (
            // Supporting tools as quiet outlined text chips (same border and fill as .btn-secondary)
            <ul className="flex flex-wrap gap-2 pt-5">
              {items.map(({ name }) => (
                <li
                  key={name}
                  className="rounded-full border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-dark-mode px-3 py-1 text-sm text-content"
                >
                  {name}
                </li>
              ))}
            </ul>
          ) : (
            <ul className="grid grid-cols-[repeat(auto-fill,minmax(64px,1fr))] sm:grid-cols-6 lg:grid-cols-9 items-start gap-x-2 sm:gap-x-4 gap-y-6 pt-5">
              {items.map(({ name, img, invert }) => (
                <li key={name} className="flex flex-col items-center text-center" title={name}>
                  {img ? (
                    <img
                      // invert: dark logos turn light in dark mode; hue-rotate keeps their colours roughly the same
                      className={`h-10 w-10 object-contain ${invert ? "dark:invert dark:hue-rotate-180" : ""}`}
                      src={img}
                      alt=""
                      loading="lazy"
                    />
                  ) : (
                    <div className="h-10 w-10 rounded-lg bg-accent flex items-center justify-center font-bold">
                      {name.charAt(0)}
                    </div>
                  )}
                  <span className="text-content text-xs pt-2">{name}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </section>
  );
}

export default Technologies;
