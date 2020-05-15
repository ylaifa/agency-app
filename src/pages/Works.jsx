import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import Links from "../components/Links";
import Project from "../components/Project";
import projects from "../data/projects";

const Works = () => {
  let { projectSlug } = useParams();
  const [currentProject, setCurrentProject] = useState(null);

  useEffect(() => {
    setCurrentProject(projects.find(project => project.slug === projectSlug));
  });

  return (
    <div className="project">
      {currentProject ? (
        <Project project={currentProject} />
      ) : (
        <div className="page-container">
          <h1>
            <FormattedMessage id="works.title" />
          </h1>
          <p>
            <FormattedMessage id="works.text" />
          </p>
          <Links />
        </div>
      )}
    </div>
  );
};

export default Works;
