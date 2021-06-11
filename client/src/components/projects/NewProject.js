import React from "react";

const NewProject = () => {
  return (
    <>
      <button type="button" className="btn btn-block btn-primario">
        Add new project
      </button>
      <form className="formulario-nuevo-proyecto">
        <input
          type="text"
          className="input-text"
          name="nombre"
          placeholder="Project name"
        />
        <input
          type="submit"
          className="btn btn-block btn-primario"
          value="Add project"
        />
      </form>
    </>
  );
};

export default NewProject;
