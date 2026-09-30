import React, { useEffect, useState } from "react";

const applyTheme = (isDark) => document.documentElement.classList.toggle("dark", isDark);

const readSaved = () => {
  try {
    return localStorage.getItem("theme");
  } catch {
    return null;
  }
};

const SunIcon = () => (
  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
  </svg>
);

const MoonIcon = () => (
  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
  </svg>
);

// Sun/moon button that switches light and dark mode. The initial theme is set in public/index.html
// (saved choice, else the system setting); a choice made here is remembered in localStorage.
function ThemeToggle() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains("dark"));

  // Until the visitor picks a theme themselves, keep following the system setting
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (e) => {
      if (readSaved()) return;
      applyTheme(e.matches);
      setDark(e.matches);
    };
    // Older Safari only has addListener/removeListener
    if (media.addEventListener) media.addEventListener("change", onChange);
    else media.addListener(onChange);
    return () => {
      if (media.removeEventListener) media.removeEventListener("change", onChange);
      else media.removeListener(onChange);
    };
  }, []);

  const toggle = () => {
    const next = !dark;
    applyTheme(next);
    setDark(next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      // Storage can be blocked (e.g. private mode); the switch still works for this visit
    }
  };

  const label = dark ? "Switch to light mode" : "Switch to dark mode";
  // Sliding switch: a tinted track with a gradient knob showing the current mode (sun = light, moon = dark)
  return (
    <button
      type="button"
      role="switch"
      aria-checked={dark}
      onClick={toggle}
      aria-label={label}
      title={label}
      className="group relative h-8 w-14 shrink-0 rounded-full p-1 bg-gradient-to-r from-teal-500/20 via-cyan-500/20 to-sky-500/20 dark:from-teal-400/20 dark:via-cyan-400/20 dark:to-sky-400/20 ring-1 ring-teal-600/20 dark:ring-teal-400/25 hover:ring-teal-500/50 dark:hover:ring-teal-400/50 transition"
    >
      <span
        className={`flex h-6 w-6 items-center justify-center rounded-full bg-accent shadow-sm transition-transform duration-300 ease-out group-active:scale-90 ${
          dark ? "translate-x-6" : "translate-x-0"
        }`}
      >
        {dark ? <MoonIcon /> : <SunIcon />}
      </span>
    </button>
  );
}

export default ThemeToggle;
