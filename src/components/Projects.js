import React, { useState } from "react";
import projectapi from "../API/projectApi";

const Projects = () => {
  const [projectData, setProjectData] = useState(projectapi);

  return (
    <>
      <main className="container">
        <section className="row">
          <h1 className="main-head">
            Projects&nbsp;<i class="fas fa-code"></i>
          </h1>
          {projectData.map((projEle) => {
            const { name, description, link, date } = projEle;
            return (
              <>
                <div
                  className="col-12 col-lg-4 project-body d-flex justify-content-space-between flex-column"
                  onClick={() => window.open(link)}
                >
                  <h1 className="project-name">{name}</h1>
                  <p className="project-para">{description}</p>
                  <h4 className="project-date">{date}</h4>
                </div>
              </>
            );
          })}
        </section>

        <h4><a className="projects edu-branch" href="https://github.com/chaitanya-24?tab=repositories" target="_blank" rel="noreferrer">More Projects...</a></h4>
      </main>
    </>
  );
};

export default Projects;
