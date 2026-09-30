import React, { useState } from "react";
import { contactDetails } from "../Details";

// Small outline icons (24x24, stroke follows the text colour)
const icon = (paths, size = "h-5 w-5") => (
  <svg
    className={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {paths.map((d) => (
      <path key={d} d={d} />
    ))}
  </svg>
);
const MAIL = ["M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"];
const COPY = [
  "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z",
];
const CHECK = ["M5 13l4 4L19 7"];
const PHONE = [
  "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
];
const PIN = [
  "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z",
  "M15 11a3 3 0 11-6 0 3 3 0 016 0z",
];
const CLOCK = ["M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"];

const tileClass =
  "rounded-xl shadow-lg shadow-slate-200 dark:shadow-slate-900 dark:bg-dark-card p-5 flex flex-col items-center text-center border border-transparent";

// One small info tile under the email panel; becomes a link when href is given
function Tile({ icon: paths, label, value, href }) {
  const content = (
    <>
      <span className="bg-accent rounded-lg h-10 w-10 flex items-center justify-center">{icon(paths)}</span>
      <span className="text-xs uppercase tracking-wider text-content pt-3">{label}</span>
      <span className="text-dark-heading dark:text-light-heading font-medium pt-1">{value}</span>
    </>
  );
  if (!href) return <div className={tileClass}>{content}</div>;
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel="noreferrer noopener"
      className={`${tileClass} hover:border-teal-500 dark:hover:border-teal-400 transition-colors`}
    >
      {content}
    </a>
  );
}

function Contact() {
  const { heading, subheading, email, phone, location, availability } = contactDetails;
  const [copied, setCopied] = useState(false);
  // The last word of the heading gets the gradient ("Let's Work Together")
  const words = heading.split(" ");
  const lastWord = words.pop();

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be blocked (e.g. non-HTTPS); the address is still visible to copy by hand
    }
  };

  return (
    <section id="contact" className="pt-24 pb-28 scroll-mt-20 text-center">
      <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
        {words.join(" ")} <span className="text-accent">{lastWord}</span>
      </h1>
      {subheading && <p className="text-content md:text-lg pt-3">{subheading}</p>}

      <div className="max-w-3xl mx-auto pt-10">
        {/* Gradient border: the gradient fills the outer box, the inner box covers all but a 1px edge */}
        <div className="bg-accent rounded-2xl p-px">
          <div className="bg-white dark:bg-dark-card rounded-2xl px-6 py-10 md:px-12">
            <p className="text-xs uppercase tracking-widest text-content">The best way to reach me</p>
            <a
              href={`mailto:${email}`}
              className="block text-accent text-xl sm:text-3xl md:text-4xl font-bold pt-3 break-words hover:opacity-80 transition-opacity"
            >
              {email}
            </a>
            <div className="flex flex-wrap justify-center gap-3 pt-8">
              <a
                href={`mailto:${email}`}
                className="btn-motion inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent font-semibold"
              >
                {icon(MAIL)}
                Send an Email
              </a>
              {/* Gradient outline button, same style as "Get in Touch" in the intro; fills with the gradient on hover */}
              <button type="button" onClick={copyEmail} className="btn-motion bg-accent rounded-lg p-px group">
                <span className="inline-flex items-center gap-2 px-6 py-[11px] rounded-lg bg-white dark:bg-dark-card font-semibold text-dark-heading dark:text-light-heading group-hover:bg-transparent group-hover:text-white transition-colors">
                  {icon(copied ? CHECK : COPY)}
                  {copied ? "Copied!" : "Copy Email"}
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 pt-6">
          {phone && <Tile icon={PHONE} label="Phone" value={phone} href={`tel:${phone.replace(/\s+/g, "")}`} />}
          {location && (
            <Tile
              icon={PIN}
              label="Location"
              value={location}
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`}
            />
          )}
          {availability && <Tile icon={CLOCK} label="Availability" value={availability} />}
        </div>
      </div>
    </section>
  );
}

export default Contact;
