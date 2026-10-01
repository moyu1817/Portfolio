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
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
  </svg>
);

const MoonIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
  // Sliding switch: a solid track styled like .btn-secondary (border and track icons turn teal on hover), with a faint sun (left) and moon (right) on it;
  // the gradient knob (same colours as .btn-primary) slides over the active one
  return (
    <button
      type="button"
      role="switch"
      aria-checked={dark}
      onClick={toggle}
      aria-label={label}
      title={label}
      className="touch-target group relative h-8 w-[58px] shrink-0 rounded-full p-1 border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-dark-mode hover:border-teal-600 dark:hover:border-teal-300 transition-colors duration-150"
    >
      <span className="absolute inset-y-0 left-2 flex items-center text-zinc-400 dark:text-zinc-500 group-hover:text-teal-600 dark:group-hover:text-teal-300 transition-colors duration-150" aria-hidden="true">
        <SunIcon />
      </span>
      <span className="absolute inset-y-0 right-2 flex items-center text-zinc-400 dark:text-zinc-500 group-hover:text-teal-600 dark:group-hover:text-teal-300 transition-colors duration-150" aria-hidden="true">
        <MoonIcon />
      </span>
      <span
        className={`relative flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-teal-600 via-cyan-600 to-sky-600 text-white dark:from-teal-300 dark:via-cyan-300 dark:to-sky-400 dark:text-dark-mode shadow-sm transition-transform duration-[250ms] ease-out group-active:scale-90 ${
          dark ? "translate-x-6" : "translate-x-0"
        }`}
      >
        {dark ? <MoonIcon /> : <SunIcon />}
      </span>
    </button>
  );
}

export default ThemeToggle;
