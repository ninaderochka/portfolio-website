import React from 'react';
import { motion } from 'framer-motion';

const LogoList = ({ logos }) => {
  const logoVariants = {
    initial: { opacity: 0, scale: 0 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div>
      {logos.map((logo, index) => (
        <motion.img
          key={index}
          src={logo.imageUrl}
          alt={logo.name}
          variants={logoVariants}
          initial='initial'
          animate='animate'
          style={{ display: 'block', margin: '10px' }}
        />
      ))}
    </div>
  );
};

export default LogoList;
