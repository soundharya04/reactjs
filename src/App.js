import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Components/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">React JS</div>
      <Route path="/" component={Home} />
    </BrowserRouter>
  );
}

export default App;
