import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Employee from "./Employees/Employees";
import Navbar from "./Navbar/Navbar";
const App = () => {
  return (
    <div>
      <h4>App component</h4>
      <hr />
      <button className="btn btn-success">Test</button>
      <Navbar />
      <Employee />
    </div>
  );
};

export default App;
