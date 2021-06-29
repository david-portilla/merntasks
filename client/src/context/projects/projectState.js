import { useReducer } from "react";
import { FORM_PROJECT } from "../../types";
import projectContext from "./projectContext";
import projectReducer from "./projectReducer";

const ProjectState = (props) => {
  const initialState = {
    formProject: false,
    projects: [
      { id: 1, name: "Ecommerce state" },
      { id: 2, name: "Learnig react" },
      { id: 3, name: "Creating new portfolio" },
      { id: 4, name: "MERN" },
    ],
  };
  const [state, dispatch] = useReducer(projectReducer, initialState);
  const showFormFn = () => {
    dispatch({
      type: FORM_PROJECT,
    });
  };

  return (
    <projectContext.Provider
      value={{
        formProject: state.formProject,
        projects: state.projects,
        showFormFn,
      }}
    >
      {props.children}
    </projectContext.Provider>
  );
};

export default ProjectState;
