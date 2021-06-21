import React, { useState } from "react";

const NewProject = () => {
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
  };

  return (
    <>
      <button type="button" className="btn btn-block btn-primario">
        Add new project
      </button>
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
    </>
  );
};

export default NewProject;
