import React, { useEffect, useState } from 'react';

const MouseEffect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed z-50 bg-orange">
      <div
        className="w-4 h-4 bg-red rounded-full"
        style={{
          position: 'absolute',
          top: position.y,
          left: position.x,
          transform: 'translate(-50%, -50%)',
        }}
      />
    </div>
  );
};

export default MouseEffect;
