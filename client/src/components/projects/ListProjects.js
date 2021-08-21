import React, { useContext, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
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
      <TransitionGroup>
        {projects.map((project) => (
          <CSSTransition key={project.id} timeout={200} classNames="proyecto">
            <Project project={project} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};

export default ListProjects;
