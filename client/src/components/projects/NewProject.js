import React, { useState, useContext } from "react";
import projectContext from "../../context/projects/projectContext";

const NewProject = () => {
  const projectsContext = useContext(projectContext);
  const { formProject, errorForm, showFormFn, addProjectsFN, showErrorFN } =
    projectsContext;

  const [project, setProject] = useState({
    name: "",
  });

  const { name } = project;

  const onChange = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "") {
      showErrorFN();
      return
    }

    addProjectsFN(project);
    setProject({
      name: "",
    });
  };

  const handleClick = () => {
    showFormFn();
  };

  return (
    <>
      <button
        onClick={handleClick}
        type="button"
        className="btn btn-block btn-primario"
      >
        Add new project
      </button>

      {formProject ? (
        <form onSubmit={handleSubmit} className="formulario-nuevo-proyecto">
          <input
            type="text"
            className="input-text"
            name="name"
            value={name}
            placeholder="Project name"
            onChange={onChange}
          />
          <input
            type="submit"
            className="btn btn-block btn-primario"
            value="Add project"
          />
        </form>
      ) : null}

      {errorForm ? (
        <p className="mensaje error">Project name is mandatory</p>
      ) : null}
    </>
  );
};

export default NewProject;
