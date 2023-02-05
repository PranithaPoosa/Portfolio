import {BrowserRouter, Routes, Route} from "react-router-dom";
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Projects  from "./components/Projects";
import About from "./components/About";
import Contributors from "./components/Contributors";
import HomePage from "./components/HomePage";
import Reviewform from "./components/Reviewform";
import Resume from "./components/Resume";
import Layout from "./components/Layout";

function App() {
  const [profile, setProfile] = React.useState();
  
  const handleCallback = (prof) =>{
    setProfile(prof)
  }

  const handleCallback1 = () =>{
    console.log('default profile')
  }

  return (
      <BrowserRouter>
        <Routes>
            <Route element={<Layout/>} >
            <Route path="/default" element={<HomePage formData = {handleCallback1}/>} />
            <Route path="/:profile" element={<HomePage formData = {handleCallback}/>} />
            <Route path="/:profile/projects" element={<Projects/>} />
            <Route path="/:profile/about" element={<About/>} />
            <Route path="/:profile/resume" element={<Resume/>} />
            <Route path="/contributors" element={<Contributors/>} />
            <Route path="/reviewform" element={<Reviewform/>} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
