import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Bio from './Bio';
import Contact from './Contact';
import Navbar from './Navbar';
import Works from './Works';

function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Bio" element={<Bio />} />
        <Route path="/Works" element={<Works />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
