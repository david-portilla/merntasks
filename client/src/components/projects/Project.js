import React from "react";

const Project = ({ project }) => {
  return (
    <li key={project.name}>
      <button type="button" className="btn btn-blank">
        {project.name}
      </button>
    </li>
  );
};

export default Project;
