import React, { useContext } from "react";
import projectContext from "../../context/projects/projectContext";
import taskContext from "../../context/tasks/taskContext";

const Task = ({ task }) => {
  const projectsContext = useContext(projectContext);
  const { selectedProject } = projectsContext;

  const tasksContext = useContext(taskContext);
  const { removeTask, getTasks } = tasksContext;

  const [currentProyect] = selectedProject;

  const removeTaskFn = (id) => {
    removeTask(id);
    getTasks(currentProyect.id);
  };

  return (
    <li className="tarea sombra" key={task.name}>
      <p>{task.name}</p>

      <div className="estado">
        {task.status ? (
          <button type="button" className="completo">
            Completed
          </button>
        ) : (
          <button type="button" className="incompleto">
            Incompleted
          </button>
        )}
      </div>

      <div className="acciones">
        <button type="button" className="btn btn-primario">
          Edit task
        </button>
        <button
          type="button"
          className="btn btn-secundario"
          onClick={() => removeTaskFn(task.id)}
        >
          Delete task
        </button>
      </div>
    </li>
  );
};

export default Task;
