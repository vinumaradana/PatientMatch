// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Registration from "./components/Registration";
import ChartDrop from "./components/ChartDrop";
import Navigation from "./components/Navigation";
import Nav_FB from "./components/Nav_FB";
import About from "./components/About";
import Host from "./components/Host";

function App() {
  return (
    <Router>
      <Nav_FB />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Reg" element={<Registration />} />
        <Route path="/ChartDrop" element={<ChartDrop />} />
        <Route path="/About" element={<About />} />
        <Route path="/Host" element={<Host />} />
      </Routes>
    </Router>
  );
}

export default App;
