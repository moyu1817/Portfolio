import React from "react";
import Work from "../Components/Work";
import { personalDetails, workDetails, eduDetails } from "../Details";

function About() {
  return (
    <div className="pt-20">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          About Me
        </h1>
        <p className="text-content py-8 lg:max-w-3xl">{personalDetails.about}</p>
      </section>
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Work Experience
        </h1>
        <ol className="timeline mt-10">
          {React.Children.toArray(
            workDetails.map(({ Position, Company, Location, Type, Duration, Summary }) => (
              <Work
                position={Position}
                company={Company}
                location={Location}
                type={Type}
                duration={Duration}
                summary={Summary}
              />
            ))
          )}
        </ol>
      </section>
      <section>
        <h1 className="text-2xl pt-16 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Education
        </h1>
        <ol className="timeline mt-10">
          {React.Children.toArray(
            eduDetails.map(({ Position, Company, Location, Type, Duration }) => (
              <Work
                position={Position}
                company={Company}
                location={Location}
                type={Type}
                duration={Duration}
              />
            ))
          )}
        </ol>
      </section>
    </div>
  );
}

export default About;
