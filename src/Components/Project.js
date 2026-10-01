import React, { useState } from "react";

// Outline icons at 16px / 1.75 stroke, the same family as the rest of the UI icons
const outline = {
  className: "h-4 w-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};
const LinkIcon = () => (
  <svg {...outline}>
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);
const GithubOutlineIcon = () => (
  <svg {...outline}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const TrendIcon = () => (
  <svg {...outline} className="h-4 w-4 shrink-0 mt-0.5">
    <path d="M22 7l-8.5 8.5-5-5L2 17" />
    <path d="M16 7h6v6" />
  </svg>
);
const ChevronIcon = ({ open }) => (
  <svg {...outline} className={`h-4 w-4 transition-transform duration-[250ms] ${open ? "rotate-180" : ""}`}>
    <path d="M6 9l6 6 6-6" />
  </svg>
);

// One project link: icon + label, both clickable; turns to the theme accent on hover.
// Heading-coloured so it reads as a link on phones (no hover there), and 44px tall for touch.
const linkRow =
  "group inline-flex items-center gap-2 min-h-[44px] text-sm font-medium whitespace-nowrap text-dark-heading dark:text-light-heading";
function ProjectLink({ href, label, children }) {
  return (
    <a href={href} target="_blank" rel="noreferrer noopener" className={linkRow}>
      <span className="group-hover:text-teal-600 dark:group-hover:text-teal-300 transition-colors">{children}</span>
      <span className="group-hover-accent">{label}</span>
    </a>
  );
}

function Project({
  title,
  image,
  imageInvert,
  description,
  highlight,
  details,
  techstack,
  previewLink,
  previewLabel,
  githubLink,
}) {
  const [open, setOpen] = useState(false);
  const detailsId = `${title.replace(/\W+/g, "-").toLowerCase()}-details`;
  return (
    <article className="flex flex-col rounded-xl mt-10 overflow-hidden border border-zinc-200 dark:border-zinc-700">
      {image && (
        // A short 12:5 strip rather than 16:9 keeps the cards compact in the 2-column grid.
        // Dark mode: grayscale mockups are inverted (white turns dark, hues kept), photos are dimmed, so nothing glares
        <img
          className={`w-full aspect-[12/5] object-cover ${
            imageInvert ? "dark:invert dark:hue-rotate-180 dark:brightness-90" : "dark:brightness-75"
          }`}
          src={image}
          alt={title}
          loading="lazy"
        />
      )}
      <div className="flex flex-col flex-1 bg-white dark:bg-dark-card p-4">
        <h3 className="dark:text-light-heading font-semibold text-lg pt-1">{title}</h3>
        <p className="text-content text-sm pt-3">{description}</p>
        {/* The one result worth remembering, in heading colour with a small trend icon */}
        {highlight && (
          <p className="flex gap-2 pt-3 text-sm font-medium text-dark-heading dark:text-light-heading">
            <span className="text-teal-600 dark:text-teal-300">
              <TrendIcon />
            </span>
            {highlight}
          </p>
        )}
        <p className="text-dark-heading dark:text-light-heading text-sm font-medium pt-3">
          Tech Stack: <span className="font-normal text-content">{techstack}</span>
        </p>
        {/* Optional case-study bullets behind a toggle that sits right above them */}
        {details && (
          <>
            <button
              type="button"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-controls={detailsId}
              className={`${linkRow} self-start mt-1 -mb-2`}
            >
              <span className="group-hover-accent">{open ? "Hide details" : "Show details"}</span>
              <span className="group-hover:text-teal-600 dark:group-hover:text-teal-300 transition-colors">
                <ChevronIcon open={open} />
              </span>
            </button>
            <ul
              id={detailsId}
              hidden={!open}
              className="list-disc pl-5 pt-3 space-y-1.5 text-sm text-content marker:text-zinc-400"
            >
              {details.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </>
        )}
        {/* Link row under a hairline */}
        <div className="flex flex-wrap items-center gap-x-6 mt-auto pt-5">
          <div className="w-full border-t border-zinc-200 dark:border-zinc-700 mb-1" />
          {previewLink && (
            <ProjectLink href={previewLink} label={previewLabel || "Live Preview"}>
              <LinkIcon />
            </ProjectLink>
          )}
          {githubLink && (
            <ProjectLink href={githubLink} label="View Code">
              <GithubOutlineIcon />
            </ProjectLink>
          )}
        </div>
      </div>
    </article>
  );
}

export default Project;
