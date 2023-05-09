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
        {projects.map(project => (
          <Link to={`/projects/${project.id}`} key={project.id}>
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <Card
                title={project.title}
                imageSrc={project.imageUrl}
                type={project.projectType}
              />
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PortfolioGrid;
