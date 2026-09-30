import React, { useState } from "react";
import { contactDetails } from "../Details";

// Small outline icons (24x24, 1.75 stroke like every UI icon on the site; stroke follows the text colour)
const icon = (paths, size = "h-5 w-5") => (
  <svg
    className={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {paths.map((d) => (
      <path key={d} d={d} />
    ))}
  </svg>
);
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

// One detail in the row under the email (three equal columns, each as wide as the longest value); links take the accent gradient on hover (.hover-accent): small gray icon + label, value below; a link when href is given
function Detail({ icon: paths, label, value, href }) {
  const external = href && href.startsWith("http");
  return (
    <div className="px-6 py-5">
      <dt className="flex items-center justify-center gap-1.5 text-xs uppercase tracking-wider text-content">
        {icon(paths, "h-4 w-4")}
        {label}
      </dt>
      <dd className="text-dark-heading dark:text-light-heading font-medium pt-2 lg:whitespace-nowrap">
        {href ? (
          <a
            href={href}
            target={external ? "_blank" : undefined}
            rel="noreferrer noopener"
            className="hover-accent inline-block py-1 -my-1"
          >
            {value}
          </a>
        ) : (
          value
        )}
      </dd>
    </div>
  );
}

function Contact() {
  const { heading, subheading, email, phone, location, availability } = contactDetails;
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be blocked (e.g. non-HTTPS); the address is still visible to copy by hand
    }
  };

  // At least one screen tall (minus the 5rem scroll offset), so jumping to #contact leaves no Technologies content above it.
  // Content is top-aligned so the gap above it matches every other section (pt-24); spare height falls below.
  return (
    <section
      id="contact"
      className="pt-24 pb-16 lg:pb-28 scroll-mt-20 min-h-[calc(100vh-5rem)] text-center"
    >
      <h2 className="section-title">
        {heading}
      </h2>
      {subheading && <p className="text-content md:text-lg pt-3">{subheading}</p>}

      {/* The email is the centrepiece; the details sit below in one outlined "title block" panel */}
      <div className="max-w-4xl mx-auto pt-14">
        <p className="text-xs uppercase tracking-widest text-content">The best way to reach me</p>
        {/* The address itself opens the mail app, so the only button is Copy Email.
            inline-block so the gradient spans the text, not the full column */}
        <a
          href={`mailto:${email}`}
          className="inline-block max-w-full text-accent text-xl sm:text-3xl md:text-4xl font-bold pt-3 break-words hover:brightness-125 transition duration-150"
        >
          {email}
        </a>
        <div className="flex justify-center pt-6">
          <button type="button" onClick={copyEmail} className="btn-motion btn-secondary">
            {icon(copied ? CHECK : COPY, "h-[18px] w-[18px]")}
            {copied ? "Copied!" : "Copy Email"}
          </button>
        </div>

        <dl className="grid sm:grid-cols-3 sm:w-fit mx-auto mt-14 rounded-xl border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-dark-mode divide-y sm:divide-y-0 sm:divide-x divide-zinc-300 dark:divide-zinc-600">
          {phone && <Detail icon={PHONE} label="Phone" value={phone} href={`tel:${phone.replace(/\s+/g, "")}`} />}
          {location && (
            <Detail
              icon={PIN}
              label="Location"
              value={location}
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`}
            />
          )}
          {availability && <Detail icon={CLOCK} label="Availability" value={availability} />}
        </dl>
      </div>
    </section>
  );
}

export default Contact;
