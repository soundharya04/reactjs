import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Components/Home";
import AddProject from "./Components/AddProject";
import Profile from "./Components/Profile";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        React JS
        <Route exact path="/" component={Home} />
        <Route path="/AddProject" component={AddProject}></Route>
        <Route path="/:prof_id" component={Profile}></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
