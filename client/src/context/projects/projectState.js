import { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

import {
  FORM_PROJECT,
  GET_PROJECTS,
  ADD_PROJECT,
  VALIDATE_FORM,
  CURRENT_PROJECT,
} from "../../types";
import projectContext from "./projectContext";
import projectReducer from "./projectReducer";

const ProjectState = (props) => {
  const projects = [
    { id: 1, name: "Ecommerce state" },
    { id: 2, name: "Learnig react" },
    { id: 3, name: "Creating new portfolio" },
    { id: 4, name: "MERN" },
  ];

  const initialState = {
    formProject: false,
    projects: [],
    errorForm: false,
    selectedProject: null,
  };
  const [state, dispatch] = useReducer(projectReducer, initialState);
  const showFormFn = () => {
    dispatch({
      type: FORM_PROJECT,
    });
  };

  const getProjectsFN = () => {
    dispatch({
      type: GET_PROJECTS,
      payload: projects,
    });
  };

  const addProjectsFN = (project) => {
    project.id = uuidv4();
    dispatch({
      type: ADD_PROJECT,
      payload: project,
    });
  };

  const showErrorFN = () => {
    dispatch({
      type: VALIDATE_FORM,
    });
  };

  const currentProjectFN = (projectId) => {
    dispatch({
      type: CURRENT_PROJECT,
      payload: projectId,
    });
  };

  return (
    <projectContext.Provider
      value={{
        formProject: state.formProject,
        projects: state.projects,
        errorForm: state.errorForm,
        selectedProject: state.selectedProject,
        showFormFn,
        getProjectsFN,
        addProjectsFN,
        showErrorFN,
        currentProjectFN,
      }}
    >
      {props.children}
    </projectContext.Provider>
  );
};

export default ProjectState;
