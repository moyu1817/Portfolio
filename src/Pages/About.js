import React from "react";
import Work from "../Components/Work";
import { personalDetails, workDetails, eduDetails } from "../Details";

function About() {
  return (
    <div className="pt-24">
      <section>
        <h2 className="section-title">
          About Me
        </h2>
        {/* Paragraphs are split on blank lines in Details.js; max-w-2xl keeps lines around 70 characters */}
        <div className="text-content max-w-2xl pt-6 space-y-4">
          {personalDetails.about.split(/\n\s*\n/).map((para) => (
            <p key={para.slice(0, 20)}>{para.trim()}</p>
          ))}
        </div>
      </section>
      <section>
        <h2 className="section-title pt-16">
          Work Experience
        </h2>
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
        <h2 className="section-title pt-16">
          Education
        </h2>
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
