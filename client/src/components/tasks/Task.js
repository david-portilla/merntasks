import React from "react";

const Task = ({ task }) => {
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
        <button type="button" className="btn btn-secundario">
          Delete task
        </button>
      </div>
    </li>
  );
};

export default Task;
