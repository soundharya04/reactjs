import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Components/Home";
import AddProject from "./Components/AddProject";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        React JS
        <Route path="/" component={Home} />
        <Route path="/AddProject" component={AddProject}></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
