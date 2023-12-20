import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import projects from './data';
import Card from './Card';

const PortfolioGrid = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
      {projects.map((project, index) => (
  <Link to={`/projects/${project.id}`} key={project.id}>
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`relative ${index === 0 ? 'col-span-2' : 'col-span-1'}`}
    >
      <Card
        title={project.title}
        imageSrc={project.imageUrl}
        type={project.projectType}
        imageSize={index === 0 ? 'large' : 'small'}
      />
    </motion.div>
  </Link>
))}
      </div>
    </div>
  );
};

export default PortfolioGrid;
