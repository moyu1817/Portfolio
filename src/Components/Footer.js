import React from "react";
import { personalDetails } from "../Details";
function Footer() {
  return (
    <footer className="fixed bottom-0 inset-x-0 py-1 bg-white dark:bg-dark-mode">
      <p className="text-xs text-center text-dark-content dark:text-light-content w-full">
        Designed &amp; built by <span className="font-medium text-accent">{personalDetails.name}</span> · 2026 · All
        rights reserved
      </p>
    </footer>
  );
}
export default Footer;
