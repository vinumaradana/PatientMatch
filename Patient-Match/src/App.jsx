// App.js

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Registration from "./components/Registration.jsx";

function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/second" component={SecondPage} />
      </div>
    </Router>
  );
}

export default App;
