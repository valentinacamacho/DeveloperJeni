import { Route, Routes, Navigate } from "react-router-dom";
import React from "react";
import Home from "./Pages/Home";
import Aboutme from "./Pages/Aboutme";
import Services from "./Pages/Services";
import Proyects from "./Pages/Proyects";
import Skills from "./Pages/Skills";
import Contact from "./Pages/Contact";
import Sidebar from "./Layout/Sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Navigate to="/Aboutme" />} />
        <Route path="/Aboutme" element={<Aboutme />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Proyects" element={<Proyects />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
