import React, { useEffect, useState } from "react";

const TYPE_MS = 90;
const DELETE_MS = 45;
const PAUSE_MS = 1800;

// Types each role, pauses, deletes it, then moves on to the next one (looping forever)
function RoleTyper({ roles }) {
  const [reduceMotion] = useState(
    () => window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduceMotion) return;
    const role = roles[index];
    const finishedTyping = !deleting && text === role;
    const timer = setTimeout(
      () => {
        if (finishedTyping) {
          setDeleting(true);
        } else if (deleting && text === "") {
          setDeleting(false);
          setIndex((index + 1) % roles.length);
        } else {
          setText(role.slice(0, text.length + (deleting ? -1 : 1)));
        }
      },
      finishedTyping ? PAUSE_MS : deleting ? DELETE_MS : TYPE_MS
    );
    return () => clearTimeout(timer);
  }, [text, deleting, index, roles, reduceMotion]);

  if (reduceMotion) {
    // inline-block keeps short roles like "AI Engineer" together but lets a role longer
    // than the screen wrap; separators sit outside so the line can break between roles
    return roles.map((role, i) => (
      <React.Fragment key={role}>
        {i > 0 && " · "}
        <span className="inline-block">{role}</span>
      </React.Fragment>
    ));
  }

  const longest = roles.reduce((a, b) => (b.length > a.length ? b : a), "");
  return (
    <>
      {/* Screen readers get the full list once instead of every keystroke */}
      <span className="sr-only">{roles.join(", ")}</span>
      {/* An invisible copy of the longest role reserves its height, so content below
          doesn't jump when a role wraps onto a second line */}
      <span className="grid" aria-hidden="true">
        <span className="invisible col-start-1 row-start-1">{longest}|</span>
        <span className="col-start-1 row-start-1">
          {text}
          <span className="type-cursor text-accent">|</span>
        </span>
      </span>
    </>
  );
}

export default RoleTyper;
