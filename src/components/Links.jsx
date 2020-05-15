import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import projects from "../data/projects";

const Links = () => {
  let match = useRouteMatch();

  return (
    <>
      <ul>
        {projects.map(project => (
          <div className="link-class">
            <li>
              <Link
                to={`${match.url}/${project.slug}`}
                className="link links-projects"
              >
                {project.name}
              </Link>
            </li>
          </div>
        ))}
      </ul>
    </>
  );
};
export default Links;
