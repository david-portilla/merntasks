import React, { useContext } from "react";
import projectContext from "../../context/projects/projectContext";
import taskContext from "../../context/tasks/taskContext";

const Project = ({ project }) => {
  const projectsContext = useContext(projectContext);
  const { currentProjectFN } = projectsContext;

  const tasksContext = useContext(taskContext);
  const { getTasks } = tasksContext;

  const selectProject = (id) => {
    currentProjectFN(id);
    getTasks(id);
  };

  return (
    <li key={project.name}>
      <button
        type="button"
        className="btn btn-blank"
        onClick={() => selectProject(project.id)}
      >
        {project.name}
      </button>
    </li>
  );
};

export default Project;
