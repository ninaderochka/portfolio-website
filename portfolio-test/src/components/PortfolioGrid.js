import React from 'react';
import { Link } from 'react-router-dom';
import projects from './data';
import Card from './Card';

const PortfolioGrid = () => {
  return (
    <div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
        {projects.map(project => (
          <Link to={`/projects/${project.id}`} key={project.id}>
            <Card
              title={project.title}
              imageSrc={project.imageUrl}
              type={project.projectType}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PortfolioGrid;

