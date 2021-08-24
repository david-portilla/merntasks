import React, { useContext, useState, useEffect } from "react";
import projectContext from "../../context/projects/projectContext";
import taskContext from "../../context/tasks/taskContext";

const TaskForm = () => {
  const projectsContext = useContext(projectContext);
  const { selectedProject } = projectsContext;

  const tasksContext = useContext(taskContext);
  const {
    selectedTask,
    addTask,
    validateTask,
    taskError,
    getTasks,
    updateTask,
    cleanTask
  } = tasksContext;

  useEffect(() => {
    if (selectedTask !== null) {
      setTaskName(selectedTask);
    } else {
      setTaskName({ name: "" });
    }
  }, [selectedTask]);

  // Form state
  const [task, setTaskName] = useState({
    name: "",
  });
  const { name } = task;

  if (!selectedProject) return null;

  const [currentProject] = selectedProject;

  const handleChange = (e) => {
    setTaskName({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "") {
      validateTask();
      return;
    }

    if (selectedTask === null) {
      task.projectId = currentProject.id;
      task.status = false;
      addTask(task);
    } else {
      updateTask(task);
      // reset task state
      cleanTask()
    }

    getTasks(task.projectId);

    setTaskName({
      name: "",
    });
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
            value={selectedTask !== null ? "Update task" : "Add task"}
          />
        </div>
      </form>
      {taskError ? (
        <p className="mensaje error">Task name is mandatory</p>
      ) : null}
    </div>
  );
};

export default TaskForm;
