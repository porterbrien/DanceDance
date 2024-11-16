import React from 'react';
import { motion } from 'framer-motion';

type ArrowProps = {
  type: 'up' | 'down' | 'left' | 'right';
  position: number;
};

const Arrow: React.FC<ArrowProps> = ({ type, position }) => {
  return (
    <motion.div
      initial={{ top: 0 }}
      animate={{ top: '100%' }}
      transition={{ duration: 2, ease: 'linear' }}
      style={{
        position: 'absolute',
        left: getArrowLeft(type), // Calculate arrow's horizontal position
        top: `${position}%`,
        width: '50px',
        height: '50px',
        background: 'red',
      }}
    >
      {type}
    </motion.div>
  );
};

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