import React, { useContext } from "react";
import projectContext from "../../context/projects/projectContext";
import Project from "./Project";

const ListProjects = () => {
  // getting projects form initial state
  const projectsContext = useContext(projectContext);
  const { projects } = projectsContext;

  if (projects.length === 0) return "You don't have any current projects";

  return (
    <ul className="listado-proyectos">
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </ul>
  );
};

export default ListProjects;
