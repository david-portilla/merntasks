import React, { useContext } from "react";
import projectContext from "../../context/projects/projectContext";

const Project = ({ project }) => {
  const projectsContext = useContext(projectContext);
  const { currentProjectFN } = projectsContext;

  return (
    <li key={project.name}>
      <button
        type="button"
        className="btn btn-blank"
        onClick={() => currentProjectFN(project.id)}
      >
        {project.name}
      </button>
    </li>
  );
};

export default Project;
