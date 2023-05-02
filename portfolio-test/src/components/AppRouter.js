import React from "react";
import CustomCursor from './CustomCursor';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Bio from './Bio';
import Navbar from './Navbar';
import Works from './Works';
import PortfolioGrid from './PortfolioGrid';
import ProjectDetails from './ProjectDetails';
import projects from "./data";

function AppRouter() {
 
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Bio" element={<Bio />} />
        <Route path="/Works" element={<Works />} />
        <Route path="/" element={<PortfolioGrid projects={projects} />} />
        <Route path="/projects/:id" element={<ProjectDetails projects={projects} />} />
      </Routes>
      <CustomCursor />
    </BrowserRouter>
  );
}

export default AppRouter;
