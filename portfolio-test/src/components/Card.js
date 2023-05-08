import React from 'react';

const Card = ({ title, imageSrc, type }) => {
  return (
    <div className="relative">
      <div className="group overflow-hidden">
        <img src={imageSrc} alt={title} className="w-46 h-64 border-black border-2 object-cover mb-2" />
        <button type="button" className='rounded-full w-56 h-12 font-agrandir font-light text-xl border-black border-2 hover:bg-amber-500'>{type}</button>
        {/* <div className="absolute inset-0 bg-black bg-opacity-75 text-white text-xl font-medium flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {title}
        </div> */}
      </div>
    </div>
  );
};

export default Card;
