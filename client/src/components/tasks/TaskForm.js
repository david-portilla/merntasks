import React, { useContext, useState } from "react";
import projectContext from "../../context/projects/projectContext";
import taskContext from "../../context/tasks/taskContext";

const TaskForm = () => {
  const projectsContext = useContext(projectContext);
  const { selectedProject } = projectsContext;

  const tasksContext = useContext(taskContext);
  const { addTask } = tasksContext;

  // Form state
  const [task, setTask] = useState({
    name: "",
  });
  const { name } = task;

  if (!selectedProject) return null;

  const [currentProject] = selectedProject;

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    task.projectId = currentProject.id;
    task.status = false;
    addTask(task);
  };

  return (
    <div className="formulario">
      <form onSubmit={onSubmit}>
        <div className="contenedor-input">
          <input
            type="text"
            name="name"
            className="input-text"
            placeholder="Task name"
            onChange={handleChange}
            value={name}
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
