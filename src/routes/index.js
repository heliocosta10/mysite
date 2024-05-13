import React from "react";
// import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Resumo from "../pages/Resume";
import Projeto from "../pages/Projeto";
import Contact from "../pages/Contact";
import NoPage from "../pages/NoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resumo />} />
        <Route path="/projeto" element={<Projeto />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
