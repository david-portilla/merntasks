import {
  FORM_PROJECT,
  GET_PROJECTS,
  ADD_PROJECT,
  VALIDATE_FORM,
} from "../../types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case FORM_PROJECT:
      return {
        ...state,
        formProject: true,
      };
    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload,
      };
    case ADD_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.payload],
        formProject: false,
        errorForm: false
      };
    case VALIDATE_FORM:
      return {
        ...state,
        errorForm: true
      };
    default:
      return state;
  }
};
