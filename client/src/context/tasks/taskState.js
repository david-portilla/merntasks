import { useReducer } from "react";
import taskContext from "./taskContext";
import taskReducer from "./taskReducer";
import { TASKS_PROJECT } from "../../types";

const TaskState = (props) => {
  const initialState = {
    tasks: [
      { name: "Choose platform", status: true, projectId: 1 },
      { name: "Select colors", status: false, projectId: 2 },
      { name: "Choose pay platform", status: true, projectId: 3 },
      { name: "Choose carrier", status: false, projectId: 4 },
      { name: "Choose platform", status: true, projectId: 4 },
      { name: "Select colors", status: false, projectId: 3 },
      { name: "Choose pay platform", status: true, projectId: 2 },
      { name: "Choose carrier", status: false, projectId: 1 },
    ],
    projectTasks: null,
  };

  const [state, dispatch] = useReducer(taskReducer, initialState);

  const getTasks = (projectId) => {
    dispatch({
      type: TASKS_PROJECT,
      payload: projectId,
    });
  };

  return (
    <taskContext.Provider
      value={{
        tasks: state.tasks,
        projectTasks: state.projectTasks,
        getTasks,
      }}
    >
      {props.children}
    </taskContext.Provider>
  );
};

export default TaskState;
