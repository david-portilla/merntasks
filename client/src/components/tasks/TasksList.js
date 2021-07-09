import React, { useContext } from "react";
import Task from "./Task";
import projectContext from "../../context/projects/projectContext";

const TasksList = () => {
  const projectsContext = useContext(projectContext);
  const { selectedProject, removeProjectFN } = projectsContext;

  if (!selectedProject) return <h2>Select a project from sidebar</h2>;
  const [currentProject] = selectedProject;

  const tasks = [
    { name: "Choose platform", status: true },
    { name: "Select colors", status: false },
    { name: "Choose pay platform", status: true },
    { name: "Choose carrier", status: false },
  ];

  const removeProject = () => {
    removeProjectFN(currentProject.id);
  };

  return (
    <>
      <h2>Project: {currentProject.name}</h2>
      <ul className="listado-tareas">
        {tasks.length === 0 ? (
          <li className="tarea">
            <p> There are not task</p>
          </li>
        ) : (
          tasks.map((task, idx) => <Task key={idx} task={task} />)
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
