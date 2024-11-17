import React from 'react';

interface ArrowTargetProps {
  type: string;
}

const ArrowTarget: React.FC<ArrowTargetProps> = ({ type }) => {
  const targetStyle: React.CSSProperties = {
    position: 'absolute',
    width: '50px',
    height: '50px',
    border: '2px solid white',
    top: '80%',
    left: getArrowLeft(type),
  };

  return <div style={targetStyle}></div>;
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

export default ArrowTarget;
