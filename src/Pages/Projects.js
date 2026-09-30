import React from "react";
import Project from "../Components/Project";
import { projectDetails } from "../Details";

function Projects() {
  return (
    <section id="projects" className="pt-24 scroll-mt-20">
      <div>
        <h2 className="section-title">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
          {React.Children.toArray(
            projectDetails.map(
              ({ title, image, description, techstack, previewLink, previewLabel, githubLink }) => (
                <Project
                  title={title}
                  image={image}
                  description={description}
                  techstack={techstack}
                  previewLink={previewLink}
                  previewLabel={previewLabel}
                  githubLink={githubLink}
                />
              )
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default Projects;
