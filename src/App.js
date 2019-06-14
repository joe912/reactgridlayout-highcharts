import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Dashboard from "./Components/Dashboard";

function App() {
  return (
    <div className="container">
      <h1>React grid layout test </h1>
      <div className="layout-container">
        <nav role="navigation" className="left-nav-container">
          <div>this is left nav</div>
          <div>this is left nav</div>
          <div>this is left nav</div>
          <div>this is left nav</div>
          <div>this is left nav</div>
          <div>this is left nav</div>
          <div>this is left nav</div>
          <div>this is left nav</div>
          <div>this is left nav</div>
        </nav>
        <div className="content-container scrollbar">
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default App;
