import React from 'react';
import { Link } from 'react-router-dom';
import projects from './data';

const PortfolioGrid = () => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
      {projects.map(project => (
        <Link to={`/projects/${project.id}`} key={project.id}>
          <div className="relative h-full">
            <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-purple opacity-0 hover:opacity-70 flex items-center justify-center transition duration-300">
              <h3 className="text-white font-sans text-lg uppercase font-medium opacity-100">{project.title}</h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PortfolioGrid;

