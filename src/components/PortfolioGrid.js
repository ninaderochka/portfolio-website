import React from 'react';
import { Link } from 'react-router-dom';
import CrossRoads from '../projects/CrossRoads.jpg'
import MadLibz from '../projects/MadlibzCover.jpg'
import Muggles from '../projects/MugglesCover.jpg'

const projects = [
  {
    id: 'project1',
    title: 'CrossRoads',
    imageUrl: CrossRoads,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    id: 'project2',
    title: 'Alice is Mad',
    imageUrl: MadLibz,
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: 'project2',
    title: 'Fancy a Movie?',
    imageUrl: Muggles,
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  // Add more projects here
];

const PortfolioGrid = () => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
      {projects.map(project => (
        <Link to={`/projects/${project.id}`} key={project.id}>
          <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
        </Link>
      ))}
    </div>
  );
};

export default PortfolioGrid;