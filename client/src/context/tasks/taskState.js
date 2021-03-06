import { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import taskContext from "./taskContext";
import taskReducer from "./taskReducer";
import {
  TASKS_PROJECT,
  ADD_TASK,
  VALIDATE_TASK,
  REMOVE_TASK,
  TASK_STATUS,
  CURRENT_TASK,
  UPDATE_TASK,
  RESET_TASK,
} from "../../types";

const TaskState = (props) => {
  const initialState = {
    tasks: [
      { id: 1, name: "Choose platform", status: true, projectId: 1 },
      { id: 2, name: "Select colors", status: false, projectId: 2 },
      { id: 3, name: "Choose pay platform", status: true, projectId: 3 },
      { id: 4, name: "Choose carrier", status: false, projectId: 4 },
      { id: 5, name: "Choose platform", status: true, projectId: 4 },
      { id: 6, name: "Select colors", status: false, projectId: 3 },
      { id: 7, name: "Choose pay platform", status: true, projectId: 2 },
      { id: 8, name: "Choose carrier", status: false, projectId: 1 },
    ],
    projectTasks: null,
    taskError: false,
    selectedTask: null,
  };

  const [state, dispatch] = useReducer(taskReducer, initialState);

  // Getting task from clicked project
  const getTasks = (projectId) => {
    dispatch({
      type: TASKS_PROJECT,
      payload: projectId,
    });
  };

  // Add new task to selected project
  const addTask = (task) => {
    task.id = uuidv4();
    dispatch({
      type: ADD_TASK,
      payload: task,
    });
  };

  // Validate task
  const validateTask = () => {
    dispatch({
      type: VALIDATE_TASK,
    });
  };

  // Remove task by ID
  const removeTask = (id) => {
    dispatch({
      type: REMOVE_TASK,
      payload: id,
    });
  };

  // Change task status
  const updateTaskStatus = (task) => {
    dispatch({
      type: TASK_STATUS,
      payload: task,
    });
  };

  // Get task for edit
  const getCurrentTask = (task) => {
    dispatch({
      type: CURRENT_TASK,
      payload: task,
    });
  };

  // Edit a task
  const updateTask = (task) => {
    dispatch({
      type: UPDATE_TASK,
      payload: task,
    });
  };

  // Remove previous selected task
  const cleanTask = () => {
    dispatch({
      type: RESET_TASK,
    });
  };

  return (
    <taskContext.Provider
      value={{
        tasks: state.tasks,
        projectTasks: state.projectTasks,
        taskError: state.taskError,
        selectedTask: state.selectedTask,
        getTasks,
        addTask,
        validateTask,
        removeTask,
        updateTaskStatus,
        getCurrentTask,
        updateTask,
        cleanTask,
      }}
    >
      {props.children}
    </taskContext.Provider>
  );
};

export default TaskState;
