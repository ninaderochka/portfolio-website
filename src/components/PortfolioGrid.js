import React from 'react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 'project1',
    title: 'Project 1',
    imageUrl: 'https://source.unsplash.com/random/800x800',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    id: 'project2',
    title: 'Project 2',
    imageUrl: 'https://source.unsplash.com/random/800x800',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  // Add more projects here
];

const PortfolioGrid = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {projects.map(project => (
        <Link to={`/projects/${project.id}`} key={project.id}>
          <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
        </Link>
      ))}
    </div>
  );
};

export default PortfolioGrid;