import React, { useContext } from "react";
import Task from "./Task";
import projectContext from "../../context/projects/projectContext";
import taskContext from "../../context/tasks/taskContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const TasksList = () => {
  const projectsContext = useContext(projectContext);
  const { selectedProject, removeProjectFN } = projectsContext;

  const tasksContext = useContext(taskContext);
  const { projectTasks } = tasksContext;

  if (!selectedProject) return <h2>Select a project from sidebar</h2>;
  const [currentProject] = selectedProject;

  const removeProject = () => {
    removeProjectFN(currentProject.id);
  };

  return (
    <>
      <h2>Project: {currentProject.name}</h2>
      <ul className="listado-tareas">
        {projectTasks.length === 0 ? (
          <li className="tarea">
            <p> There are not task for this project</p>
          </li>
        ) : (
          <TransitionGroup>
            {projectTasks.map((task) => (
              <CSSTransition key={task.id} timeout={200} classNames="tarea">
                <Task task={task} />
              </CSSTransition>
            ))}
          </TransitionGroup>
        )}
      </ul>

      <button
        type="button"
        className="btn btn-eliminar"
        onClick={removeProject}
      >
        Remove this project &times;
      </button>
    </>
  );
};

export default TasksList;
