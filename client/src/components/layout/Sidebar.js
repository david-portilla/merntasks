import React from "react";
import NewProject from "../projects/NewProject";

const Sidebar = () => {
  return (
    <aside>
      <h1>
        MERN test <span>Task</span>
      </h1>
      <NewProject />
      <div className="proyectos">
        <h2>Your projects</h2>
      </div>
    </aside>
  );
};

export default Sidebar;
