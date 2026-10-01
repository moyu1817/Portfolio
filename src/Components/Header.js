import React, { useEffect, useState } from "react";
import { personalDetails, socialMediaUrl } from "../Details";
import { GithubIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from "./SocialIcons";
import ThemeToggle from "./ThemeToggle";

// Nav links scroll to the section with the matching id on the single page (see Pages/Home.js)
const sections = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "technologies", label: "Technologies" },
  { id: "contact", label: "Contact" },
];

const iconClass = "dark:fill-light-heading fill-dark-heading";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { linkdein, github, twitter, instagram } = socialMediaUrl;
  const closeMenu = () => setIsOpen(false);

  // Scroll-spy: the current section is the last one whose top has passed 40% of the screen height,
  // so About stays current through About Me / Experience / Education (they have no nav link of their own)
  const [active, setActive] = useState(sections[0].id);
  useEffect(() => {
    let frame;
    const update = () => {
      frame = null;
      const line = window.innerHeight * 0.4;
      let current = sections[0].id;
      sections.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      });
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  // Escape closes the phone menu
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  const socials = [
    // Sizes are tuned so the three glyphs look equally heavy inside their boxes
    { url: linkdein, label: "LinkedIn", Icon: LinkedinIcon, size: 15 },
    { url: github, label: "GitHub", Icon: GithubIcon, size: 18 },
    { url: instagram, label: "Instagram", Icon: InstagramIcon, size: 16 },
    { url: twitter, label: "Twitter", Icon: TwitterIcon, size: 20 },
  ].filter(({ url }) => url);

  // Desktop tabs (the current section keeps its gradient and underline, see .nav-link[aria-current] in index.css)
  const navLinks = sections.map(({ id, label }) => (
    <li key={id}>
      <a href={`#${id}`} onClick={closeMenu} className="nav-link" aria-current={active === id ? "location" : undefined}>
        {label}
      </a>
    </li>
  ));

  const socialLinks = socials.map(({ url, label, Icon, size }) => (
    <li key={label}>
      <a
        href={url}
        target="_blank"
        rel="noreferrer noopener"
        aria-label={label}
        title={label}
        className="social-link btn-motion"
      >
        <Icon className={iconClass} size={size} />
      </a>
    </li>
  ));

  return (
    <header className="sticky top-0 z-50">
      {/* Page dim behind the phone menu. Painted first so the bar and the menu panel (both positioned,
          later in the DOM) sit above it. Always rendered; .menu-fade fades it from data-open (index.css) */}
      <div
        className="menu-fade md:hidden fixed inset-0 bg-black/30 dark:bg-black/60"
        data-open={isOpen}
        onClick={closeMenu}
        aria-hidden="true"
      />
      <div className="relative bg-white dark:bg-dark-mode blueprint">
        <div className="container mx-auto max-width">
          <div className="flex justify-between items-center py-4 md:py-7">
            <a href="#about" onClick={closeMenu} className="inline-block py-2 -my-2">
              <span className="text-accent text-xl font-bold tracking-tight">{personalDetails.name}</span>
            </a>
            <div className="flex items-center gap-3 md:gap-0">
              {/* Desktop: links and social icons inline */}
              <nav className="hidden md:flex items-center">
                <ul className="dark:text-light-content font-medium flex items-center space-x-5 mr-10">{navLinks}</ul>
                <ul className="flex items-center gap-2 mr-4">{socialLinks}</ul>
              </nav>
              <ThemeToggle />
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-3 -mr-3"
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
              >
                {/* ☰ and × are both drawn; each line is erased or drawn with a dash (.menu-icon in index.css).
                    pathLength="1" lets the CSS use the same dash numbers for every line. */}
                <svg
                  className="menu-icon stroke-dark-heading dark:stroke-white"
                  data-open={isOpen}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path className="menu-icon-bar" pathLength="1" d="M4 7h16" />
                  <path className="menu-icon-bar" pathLength="1" d="M4 12h16" />
                  <path className="menu-icon-bar" pathLength="1" d="M4 17h16" />
                  <path className="menu-icon-stroke" pathLength="1" d="M6 6l12 12" />
                  <path className="menu-icon-stroke" pathLength="1" d="M18 6L6 18" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Phone: the menu is a pop-over card under the menu button that grows from its corner (.menu-card);
          tapping the dimmed page closes it. The full-width wrapper lets the card align with the container edge. */}
      <div className="md:hidden absolute inset-x-0 top-full pointer-events-none">
        <div className="container mx-auto max-width flex justify-end">
          <nav
            className="menu-card pointer-events-auto w-56 -mt-1 p-2 rounded-xl border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-dark-mode shadow-lg"
            data-open={isOpen}
          >
            <ul className="font-medium text-dark-heading dark:text-light-heading">
              {sections.map(({ id, label }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={closeMenu}
                    className="hover-accent block px-3 py-2.5"
                    aria-current={active === id ? "location" : undefined}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="flex items-center gap-2 px-3 pt-3 pb-2 mt-2 border-t border-zinc-200 dark:border-zinc-700">
              {socialLinks}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
