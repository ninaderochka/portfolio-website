import React from 'react';

function Skills({ text, subText }) {
  return (
    <div className='flex justify-center items-center rounded-xl h-32 w-64 mb-10 mt-10 font-sans font-bold 2xl border-black border-2 shadow-custom hover:shadow-customHover'>
      <div className='text-center'>
        <h2 className='text-5xl'>{text}</h2>
        <p className='text-lg'>{subText}</p>
      </div>
    </div>
  );
}

export default Skills;
