import React from "react";
import { personalDetails } from "../Details";
function Footer() {
  // Desktop: pinned to the bottom of the screen. Phone/tablet: at the end of the page, so it never covers content
  return (
    <footer className="py-6 lg:py-1 lg:fixed lg:bottom-0 lg:inset-x-0 lg:bg-white lg:dark:bg-dark-mode blueprint">
      <p className="text-xs text-center text-dark-content dark:text-light-content w-full">
        Designed &amp; built by <span className="font-medium text-accent">{personalDetails.name}</span> · 2026 · All
        rights reserved
      </p>
    </footer>
  );
}
export default Footer;
