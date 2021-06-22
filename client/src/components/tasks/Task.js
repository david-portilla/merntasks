import React from "react";

const Task = ({ task }) => {
  return (
    <li key={task.name}>
      <p>{task.name}</p>
    </li>
  );
};

export default Task;
