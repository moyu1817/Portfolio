import React from "react";
import { personalDetails } from "../Details";
function Footer() {
  // Desktop: pinned to the bottom of the screen. Phone/tablet: at the end of the page, so it never covers content
  return (
    <footer className="py-6 lg:py-1 lg:fixed lg:bottom-0 lg:inset-x-0 lg:bg-white lg:dark:bg-dark-mode blueprint">
      {/* Same 20px side gutter as the page. On phones the credit and the year sit on two lines instead of
          running edge to edge; from sm they share one line */}
      <p className="px-5 text-sm lg:text-xs text-center text-dark-content dark:text-light-content">
        <span className="block sm:inline">
          Designed &amp; built by <span className="font-medium text-accent">{personalDetails.name}</span>
        </span>
        <span className="hidden sm:inline"> · </span>
        <span className="block sm:inline">© 2026 · All rights reserved</span>
      </p>
    </footer>
  );
}
export default Footer;
