// App.js
import React from "react";
import { createRoot } from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Registration from "./components/Registration";
import ChartDrop from "./components/ChartDrop";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Host from "./components/Host";
import Submit from "./components/Submit";
import Directory from "./components/Directory"

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Reg" element={<Registration />} />
        <Route path="/ChartDrop" element={<ChartDrop />} />
        <Route path="/About" element={<About />} />
        <Route path="/Host" element={<Host />} />
        <Route path="/Submit" element={<Submit />} />
        <Route path="/Directory" element={<Directory />} />
      </Routes>
    </Router>
  );
}

createRoot(document.getElementById("root")).render(<App />);

export default App;
