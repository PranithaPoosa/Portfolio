import {Link, BrowserRouter, Routes, Route} from "react-router-dom";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Projects  from "./components/Projects";
import About from "./components/About";
import Contributors from "./components/Contributors";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import Reviewform from "./components/Reviewform";

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
          <Route path="/reviewform" element={<Reviewform/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
