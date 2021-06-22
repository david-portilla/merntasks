import React from "react";

const TaskForm = () => {
  return (
    <div className="formulario">
      <form>
        add form here
        <div className="contenedor-input">
          <input
            type="text"
            name="name"
            className="input-text"
            placeholder="Task name"
          />
        </div>
        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-submit btn-block"
            value="Add task"
          />
        </div>
      </form>
    </div>
  );
};

export default TaskForm;