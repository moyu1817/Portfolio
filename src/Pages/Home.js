import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { personalDetails } from "../Details";
import RoleTyper from "../Components/RoleTyper";
import About from "./About";
import Technologies from "./Technologies";
import Projects from "./Projects";
import Contact from "./Contact";

function Home() {
  const { name, roles, intro, img, resume } = personalDetails;
  const h11 = useRef();
  const h12 = useRef();
  const h13 = useRef();
  const myimageref = useRef();
  // Intro: heading lines slide in from the left and the photo from the right (skipped under reduced motion)
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const tl = gsap.timeline();
    tl.from(
      h11.current,
      {
        x: "-100%",
        delay: 0.8,
        opacity: 0,
        duration: 2,
        ease: "Power3.easeOut",
      },
      "<",
    )
      .from(
        h12.current,
        {
          x: "-100%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<",
      )
      .from(
        h13.current,
        {
          x: "-100%",
          delay: 0.1,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<",
      )
      .from(
        myimageref.current,
        {
          x: "200%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<",
      );
  }, []);

  // The whole site is this one scrolling page; section ids match the nav links in Header.js
  return (
    <main className="container mx-auto max-width">
      {/* On desktop the intro fills one screen below the sticky header (~6rem), so "About Me" starts after the first scroll */}
      <section
        id="about"
        className="pt-8 pb-4 md:py-8 md:min-h-[calc(100vh-6rem)] scroll-mt-28 md:flex justify-between items-center"
      >
        <div className="md:w-3/5 md:pr-10">
          <h1
            ref={h11}
            className="text-3xl text-dark-heading dark:text-light-heading md:text-5xl xl:text-6xl xl:leading-tight font-bold"
          >
            Hi, I'm <span className="text-accent whitespace-nowrap">{name}</span>
          </h1>
          <p ref={h12} className="text-xl md:text-2xl font-medium text-content pt-4">
            <RoleTyper roles={roles} />
          </p>
          <div ref={h13}>
            {intro && <p className="text-content md:text-lg pt-5 lg:max-w-xl">{intro}</p>}
            {/* Phones: both buttons start from the same 160px and grow equally, so they share a row at equal widths or
                stack at full width (under ~370px); never two different widths. From sm they keep their natural size */}
            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href={resume}
                target="_blank"
                rel="noreferrer"
                className="btn-motion btn-primary grow basis-40 justify-center whitespace-nowrap !px-4 sm:grow-0 sm:basis-auto sm:!px-6"
              >
                View Resume
              </a>
              <a
                href="#contact"
                className="btn-motion btn-secondary group grow basis-40 justify-center whitespace-nowrap !px-4 sm:grow-0 sm:basis-auto sm:!px-6"
              >
                Get in Touch
                <span className="btn-arrow" aria-hidden="true">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
        {/* overflow-hidden: the photo slides in from 200% to the right; without clipping, that briefly makes the page
            wider than the screen and iPhone Safari zooms the whole page out to fit it */}
        <div className="mt-10 md:mt-0 md:w-2/5 overflow-hidden">
          {/* Phones: a 192px square crop (face kept in frame) so the photo doesn't fill a whole screen;
              from md the full portrait. Rounded like the cards */}
          <img
            ref={myimageref}
            className="w-48 sm:w-56 aspect-square object-cover mx-auto rounded-xl md:aspect-auto md:w-3/4 md:mr-0 md:ml-auto"
            style={{ objectPosition: "50% 30%" }}
            src={img}
            alt={name}
          />
        </div>
      </section>
      <About />
      <Projects />
      <Technologies />
      <Contact />
    </main>
  );
}

export default Home;
