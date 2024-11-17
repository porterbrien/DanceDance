import React from 'react';
import { motion } from 'framer-motion';

interface ArrowProps {
  type: string;
  position: number;
}

const Arrow: React.FC<ArrowProps> = ({ type, position }) => {
  return (
    <motion.div
      style={{
        position: 'absolute',
        left: getArrowLeft(type),
        top: `${position}%`,
        width: '50px',
        height: '50px',
        backgroundColor: 'red', // You could later change this color based on hit status
      }}
      animate={{ opacity: position < 100 ? 1 : 0 }} // Fade out after the arrow goes off-screen
    >
      {type}
    </motion.div>
  );
};

// Function to determine arrow's horizontal position
const getArrowLeft = (type: string): string => {
  switch (type) {
    case 'up': return '25%';
    case 'down': return '50%';
    case 'left': return '15%';
    case 'right': return '75%';
    default: return '50%';
  }
};

export default Arrow;
