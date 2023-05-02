import React, { useState, useEffect } from 'react';
import customCursorImage from '../custom-cursor.png';
import CursorPointer from '../cursor-pointer.png';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isCursorPointer, setIsCursorPointer] = useState(false);

  useEffect(() => {
    const onMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseEnter = () => {
        setIsCursorPointer(true);
      };
      
      const onMouseLeave = () => {
        setIsCursorPointer(false);
      };
      
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseenter", onMouseEnter);
      window.addEventListener("mouseleave", onMouseLeave);
      
      return () => {
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("mouseenter", onMouseEnter);
        window.removeEventListener("mouseleave", onMouseLeave);
      };
      
  }, []);

  const cursorStyle = {
    position: 'fixed',
    top: mousePosition.y,
    left: mousePosition.x,
    width: '40px',
    height: '40px',
    backgroundImage: `url(${isCursorPointer ? CursorPointer : customCursorImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    zIndex: 99999,
    pointerEvents: 'none',
  };

  return <div style={cursorStyle}></div>;
};

export default CustomCursor;
