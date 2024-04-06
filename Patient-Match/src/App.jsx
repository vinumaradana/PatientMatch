// App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Registration from "./components/Registration";
import ChartDrop from "./components/ChartDrop";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Host from "./components/Host";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Reg" element={<Registration />} />
        <Route path="/ChartDrop" element={<ChartDrop />} />
        <Route path="/About" component={<About />} />
        <Route path="/Host" component={<Host />} />
      </Routes>
    </Router>
  );
}

export default App;
