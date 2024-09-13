import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
// eslint-disable-next-line
import "./bootstrap.css";
import "./topbar.virtual.css";
import "./virtual.css";
import "./minibar.virtual.css";
import "./themify-icons.css";
import "./style.css";
import ProjectDetail from "./pages/ProjectDetail";
import ProjectPage from "./pages/ProjectPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" Component={MainPage} />
        <Route path="/project/:projectname" Component={ProjectDetail} />
        <Route path="/project" Component={ProjectPage} />
      </Routes>
    </div>
  );
}

export default App;
