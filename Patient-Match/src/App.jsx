// App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Registration from "./components/Registration";
import ChartDrop from "./components/ChartDrop";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Reg" element={<Registration />} />
        <Route path="/ChartDrop" element={<ChartDrop />} />
      </Routes>
    </Router>
  );
}

export default App;
