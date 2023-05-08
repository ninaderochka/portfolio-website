import React from 'react';

const Card = ({ title, imageSrc }) => {
  return (
    <div className="relative">
      <div className="group overflow-hidden">
        <img src={imageSrc} alt={title} className="w-96 h-96 object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-75 text-white text-xl font-medium flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {title}
        </div>
      </div>
    </div>
  );
};

export default Card;
