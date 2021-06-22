import React from "react";
import Sidebar from "../layout/Sidebar";
import Header from "../layout/Header";
import TaskForm from "../tasks/TaskForm";
import TasksList from "../tasks/TasksList";

const Projects = () => {
  return (
    <div className="contenedor-app">
      <Sidebar />
      <div className="seccion-principal">
        <Header />
        <TaskForm />
        <main>
          <div className="contenedor-tareas">
            <TasksList />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Projects;
