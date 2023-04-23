import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Bio from './Bio';
import Contact from './Contact';
import Navbar from './Navbar';
import Works from './Works';
import PortfolioGrid from './PortfolioGrid';
import ProjectDetails from './ProjectDetails';

function AppRouter() {
  const projects = [
    { id: 1, title: 'Project 1', description: 'This is project 1', image: 'project1.jpg' },
    { id: 2, title: 'Project 2', description: 'This is project 2', image: 'project2.jpg' },
    { id: 3, title: 'Project 3', description: 'This is project 3', image: 'project3.jpg' },
  ];

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Bio" element={<Bio />} />
        <Route path="/Works" element={<Works />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/" element={<PortfolioGrid projects={projects} />} />
        <Route path="/projects/:projectId" element={<ProjectDetails projects={projects} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
