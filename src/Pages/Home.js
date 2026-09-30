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
  useEffect(() => {
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
      "<"
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
        "<"
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
        "<"
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
        "<"
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
            Hi, I'm{" "}
            <span className="whitespace-nowrap">
              <span className="text-accent">{name}</span> 👋
            </span>
          </h1>
          <h2
            ref={h12}
            className="text-2xl text-dark-heading dark:text-light-heading md:text-3xl xl:text-4xl xl:leading-tight font-bold pt-3"
          >
            <RoleTyper roles={roles} />
          </h2>
          <div ref={h13}>
            {intro && <p className="text-content md:text-lg pt-5 lg:max-w-xl">{intro}</p>}
            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href={resume}
                target="_blank"
                rel="noreferrer"
                className="btn-motion inline-block px-6 py-3 rounded-lg bg-accent font-semibold"
              >
                View Resume
              </a>
              {/* Gradient outline button (1px gradient edge around the page background) */}
              <a href="#contact" className="btn-motion inline-block bg-accent rounded-lg p-px group">
                <span className="inline-flex items-center gap-2 px-6 py-[11px] rounded-lg bg-white dark:bg-dark-mode font-semibold text-dark-heading dark:text-light-heading group-hover:bg-transparent group-hover:text-white transition-colors">
                  Get in Touch
                  <span className="btn-arrow" aria-hidden="true">
                    →
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 md:mt-0 md:w-2/5">
          <img ref={myimageref} className="w-1/2 md:w-3/4 md:ml-auto" src={img} alt={name} />
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
