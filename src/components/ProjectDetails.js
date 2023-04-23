import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails = ({ projects }) => {
  const { projectId } = useParams();
  const project = projects.find((project) => project.id === parseInt(projectId, 10));
  return (
    <div>
      <h1>Project Details</h1>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <img src={project.image} alt={project.title} />
    </div>
  );
};

export default ProjectDetails;
