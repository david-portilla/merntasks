import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./components/auth/Login";
import NewAccount from "./components/auth/NewAccount";
import Projects from "./components/projects/Projects";

import ProjectState from "./context/projects/projectState";
import TaskState from "./context/tasks/taskState";

function App() {
  return (
    <ProjectState>
      <TaskState>
        <Router>
          <Switch>
            Login
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={NewAccount} />
            <Route exact path="/projects" component={Projects} />
          </Switch>
        </Router>
      </TaskState>
    </ProjectState>
  );
}

export default App;
