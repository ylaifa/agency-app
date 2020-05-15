import React from "react";
import { FormattedMessage } from "react-intl";

const Project = project => {
  const { name, slug } = project.project;

  return (
    <>
      <h1>{name}</h1>
      <h3>
        <FormattedMessage id={`${slug}.title`} />
      </h3>
      <p>
        <FormattedMessage id={`${slug}.text`} />
      </p>
    </>
  );
};
export default Project;
