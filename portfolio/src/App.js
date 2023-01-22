import {Link, BrowserRouter, Routes, Route} from "react-router-dom";
import React from "react";
import Projects  from "./components/Projects";
import About from "./components/About";
import Contributors from "./components/Contributors";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contributors" element={<Contributors/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
