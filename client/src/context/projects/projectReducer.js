import { FORM_PROJECT } from "../../types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case FORM_PROJECT:
      return {
        ...state,
        formProject: true,
      };
    default:
      return state;
  }
};
