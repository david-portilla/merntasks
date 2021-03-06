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

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case TASKS_PROJECT:
      return {
        ...state,
        projectTasks: state.tasks.filter(
          (task) => task.projectId === action.payload
        ),
      };

    case ADD_TASK:
      return {
        ...state,
        tasks: [action.payload, ...state.tasks],
        taskError: false,
      };

    case VALIDATE_TASK:
      return {
        ...state,
        taskError: true,
      };

    case REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    case TASK_STATUS:
    case UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        ),
      };

    case CURRENT_TASK:
      return {
        ...state,
        selectedTask: action.payload,
      };

    case RESET_TASK:
      return {
        ...state,
        selectedTask: null,
      };

    default:
      return state;
  }
};
