import React from "react";
import Project from "./Project";

const ListProjects = () => {
  const projects = [
    { name: "Ecommerce" },
    { name: "Learnig react" },
    { name: "Creating new portfolio" },
  ];

  return (
    <ul className="listado-proyectos">
      {projects.map((pp, idx) => (
        <Project key={idx} project={pp} />
      ))}
    </ul>
  );
};

export default ListProjects;
