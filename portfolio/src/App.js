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

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        
        <Routes>
          <Route path="/:profile" element={<HomePage/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contributors" element={<Contributors/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
