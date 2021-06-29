import { useReducer } from "react";
import { FORM_PROJECT } from "../../types";
import projectContext from "./projectContext";
import projectReducer from "./projectReducer";

const ProjectState = (props) => {
  const initialState = {
    formProject: false,
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
        showFormFn,
      }}
    >
      {props.children}
    </projectContext.Provider>
  );
};

export default ProjectState;
