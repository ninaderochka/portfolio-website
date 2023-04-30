import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import projects from './data';

const PortfolioGrid = () => {
  const [selectedTypes, setSelectedTypes] = useState([]);

  const filteredProjects = selectedTypes.length > 0
    ? projects.filter(project => selectedTypes.includes(project.type))
    : projects;

  const handleTypeClick = (type) => {
    setSelectedTypes(selectedTypes.includes(type)
      ? selectedTypes.filter(t => t !== type)
      : [...selectedTypes, type]);
  };

  return (
    <div>
      <div className="flex flex-wrap mb-4 justify-center">
        {['Development', 'Design'].map((type) => (
          <button
            key={type}
            className={`mr-2 mb-2 rounded-full px-4 py-2 font-sans ${selectedTypes.includes(type) ? 'bg-orange text-white' : 'bg-purple text-white'}`}
            onClick={() => handleTypeClick(type)}
          >
            {type}
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
        {filteredProjects.map(project => (
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
    </div>
  );
};

export default PortfolioGrid;