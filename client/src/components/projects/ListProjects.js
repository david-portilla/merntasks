import React, { useContext, useEffect } from "react";
import projectContext from "../../context/projects/projectContext";
import Project from "./Project";

const ListProjects = () => {
  // getting projects form initial state
  const projectsContext = useContext(projectContext);
  const { projects, getProjectsFN } = projectsContext;

  useEffect(() => {
    getProjectsFN();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (projects.length === 0)
    return "You don't have any projects. Add a new one!";

  return (
    <ul className="listado-proyectos">
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </ul>
  );
};

export default ListProjects;
