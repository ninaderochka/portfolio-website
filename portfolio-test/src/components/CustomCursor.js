import React, { useState, useEffect } from 'react';
import { useMotionValue, motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const scale = useMotionValue(1);
  const position = useMotionValue('fixed');

  useEffect(() => {
    const onMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  useEffect(() => {
    const updateScaleAndPosition = () => {
      const { innerHeight } = window;
      const { y } = mousePosition;

      scale.set(1 - y / innerHeight * 0.2);
      position.set(y >= innerHeight ? 'relative' : 'fixed');
    };

    const scaleOnChange = scale.onChange(updateScaleAndPosition);
    const positionOnChange = position.onChange(updateScaleAndPosition);

    return () => {
      scaleOnChange();
      positionOnChange();
    };
  }, [scale, position, mousePosition]);

  const cursorStyle = {
    position: 'fixed',
    top: mousePosition.y,
    left: mousePosition.x,
    width: '500px',
    height: '500px',
    borderRadius: '50%',
    pointerEvents: 'none',
    background: 'radial-gradient(circle, #f35e91, #ff9840)',
    filter: 'blur(90px)',
    zIndex: 9999,
    transform: 'translate(-50%, -50%)',
    scale,
    willChange: 'transform',
  };

  return <motion.div style={cursorStyle} />;
};

export default CustomCursor;
