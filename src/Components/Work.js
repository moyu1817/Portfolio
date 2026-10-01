import React from "react";

// Small outline icons (stroke follows the text colour), matching the ones in Pages/Contact.js
const BUILDING =
  "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4";
const PIN = [
  "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z",
  "M15 11a3 3 0 11-6 0 3 3 0 016 0z",
];
const CALENDAR = ["M8 2v4M16 2v4", "M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z", "M3 10h18"];
const Icon = ({ paths }) => (
  <svg
    className="h-4 w-4 min-w-fit"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {[].concat(paths).map((d) => (
      <path key={d} d={d} />
    ))}
  </svg>
);

// One entry on the experience/education timeline (rendered inside an <ol className="timeline">)
function Work({ position, company, location, type, duration, summary }) {
  return (
    <li className="relative pl-8 md:pl-10 pb-10 last:pb-0">
      {/* Gradient dot sitting on the timeline's vertical line */}
      <span
        className="absolute -left-[7px] top-1.5 h-4 w-4 rounded-full bg-accent ring-4 ring-white dark:ring-dark-mode"
        aria-hidden="true"
      />
      {/* Title leads the entry; on phones the badge drops below it instead of squeezing it */}
      <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="text-dark-heading dark:text-light-heading font-medium md:text-lg">{position}</h3>
        {/* Soft badge in the theme gradient: faint teal→sky tint, gradient dot, gradient text */}
        <span className="inline-flex items-center gap-1.5 min-w-fit rounded-full px-3 py-1 text-xs font-semibold bg-gradient-to-r from-teal-500/10 via-cyan-500/10 to-sky-500/10 dark:from-teal-400/10 dark:via-cyan-400/10 dark:to-sky-400/10">
          <span
            className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-teal-500 to-sky-500 dark:from-teal-300 dark:to-sky-400"
            aria-hidden="true"
          />
          <span className="text-accent">{type}</span>
        </span>
      </div>
      {/* Company, location and dates: stacked one per line on phones (so long names never get squeezed),
          one row with the dates pushed right from md up */}
      <div className="flex flex-col gap-1 pt-2 text-content text-sm md:flex-row md:justify-between md:gap-4">
        <div className="flex flex-col gap-1 md:flex-row md:gap-5">
          <span className="flex items-center gap-1.5">
            <Icon paths={BUILDING} />
            {company}
          </span>
          {location && (
            <span className="flex items-center gap-1.5">
              <Icon paths={PIN} />
              {location}
            </span>
          )}
        </div>
        <span className="flex items-center gap-1.5 min-w-fit">
          <span className="md:hidden">
            <Icon paths={CALENDAR} />
          </span>
          {duration}
        </span>
      </div>
      {summary && <p className="pt-3 text-content text-sm md:text-base lg:max-w-4xl">{summary}</p>}
    </li>
  );
}

export default Work;
