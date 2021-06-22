import Task from "./Task";

const TasksList = () => {
  const tasks = [
    { name: "Choose platform", status: true },
    { name: "Select colors", status: false },
    { name: "Choose pay platform", status: true },
    { name: "Choose carrier", status: false },
  ];

  return (
    <>
      <h2>Project: Ecommerce</h2>
      <ul className="listado-tareas">
        {tasks.length === 0 ? (
          <li className="tarea">
            <p> There are not task</p>{" "}
          </li>
        ) : (
          tasks.map((task, idx) => <Task key={idx} task={task} />)
        )}
      </ul>

      <button type="button" className="btn btn-eliminar">
        Remove project &times;
      </button>
    </>
  );
};

export default TasksList;
