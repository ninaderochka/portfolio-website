import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ title, imageSrc, type, imageSize }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className={`relative ${imageSize === 'large' ? 'col-span-2' : 'col-span-1'}`}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="group overflow-hidden">
        <img src={imageSrc} alt={title} className={`w-full h-auto ${imageSize === 'large' ? 'h-96' : 'h-48'} border-black border-2 object-cover mb-2`} />
        <button type="button" className="rounded-full w-48 h-12 font-agrandir font-300 text-base border-black border-2 hover:bg-amber-500">
          {type}
        </button>
        <p className='font-agrandir mt-2 font-400 text-xl'>{title}</p>
      </div>
    </motion.div>
  );
};

export default Card;
