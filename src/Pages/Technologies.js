import React from "react";
import { techStackDetails } from "../Details";

function Technologies() {
  return (
    <section id="technologies" className="pt-24 scroll-mt-20">
      {React.Children.toArray(
        techStackDetails.map(({ heading, items }, index) => (
          <>
            <section>
              <h1
                className={`text-2xl ${
                  index > 0 ? "pt-10" : ""
                } text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold`}
              >
                {heading}
              </h1>
              {index === 0 && (
                <p className="text-content py-2 lg:max-w-3xl">
                  Technologies I've been working with recently
                </p>
              )}
            </section>
            <section className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 items-start gap-10 pt-6">
              {React.Children.toArray(
                items.map(({ name, img, invert }) => (
                  <figure className="flex flex-col items-center text-center" title={name}>
                    {img ? (
                      <img
                        className={`h-16 w-16 object-contain ${invert ? "dark:invert" : ""}`}
                        src={img}
                        alt={name}
                      />
                    ) : (
                      <div className="h-16 w-16 rounded-xl bg-accent flex items-center justify-center text-xl font-bold">
                        {name.charAt(0)}
                      </div>
                    )}
                    <figcaption className="text-content text-xs md:text-sm pt-2">{name}</figcaption>
                  </figure>
                ))
              )}
            </section>
          </>
        ))
      )}
    </section>
  );
}

export default Technologies;
