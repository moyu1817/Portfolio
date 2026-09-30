import React, { useState } from "react";
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

  const socials = [
    // Sizes are tuned so the three glyphs look equally heavy inside their boxes
    { url: linkdein, label: "LinkedIn", Icon: LinkedinIcon, size: 15 },
    { url: github, label: "GitHub", Icon: GithubIcon, size: 18 },
    { url: instagram, label: "Instagram", Icon: InstagramIcon, size: 16 },
    { url: twitter, label: "Twitter", Icon: TwitterIcon, size: 20 },
  ].filter(({ url }) => url);

  const navLinks = sections.map(({ id, label }) => (
    <li key={id} className="py-1 md:py-0">
      <a href={`#${id}`} onClick={closeMenu} className="nav-link">
        {label}
      </a>
    </li>
  ));

  const socialLinks = socials.map(({ url, label, Icon, size }) => (
    <li key={label}>
      <a href={url} target="_blank" rel="noreferrer noopener" aria-label={label} title={label} className="social-link btn-motion">
        <Icon className={iconClass} size={size} />
      </a>
    </li>
  ));

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-dark-mode blueprint">
      <div className="container mx-auto max-width">
        <div className="flex justify-between items-center py-4 md:py-7">
          <a href="#about" onClick={closeMenu}>
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
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <svg
                className="stroke-dark-heading dark:stroke-white"
                width="25"
                height="20"
                viewBox="0 0 16 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.4375 1.3125H14.5625M1.4375 11.3125H14.5625H1.4375ZM1.4375 6.3125H14.5625H1.4375Z"
                  strokeWidth="1.875"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* Phone: links and social icons drop down under the bar */}
        {isOpen && (
          <nav className="md:hidden text-center pb-4">
            <ul className="dark:text-light-content font-medium">{navLinks}</ul>
            <ul className="flex justify-center items-center gap-3 mt-5">{socialLinks}</ul>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
