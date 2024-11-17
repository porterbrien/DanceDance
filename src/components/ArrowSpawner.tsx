import React, { useEffect } from 'react';
import Arrow from './Arrow';

export interface Arrow {
  id: string;
  type: string;
  position: number;  
  hit: boolean;      
}

interface ArrowSpawnerProps {
  arrows: Arrow[];
  setArrows: React.Dispatch<React.SetStateAction<Arrow[]>>;
  handleArrowHit: (type: string) => void;
}

const ArrowSpawner: React.FC<ArrowSpawnerProps> = ({ arrows, setArrows, handleArrowHit }) => {
  useEffect(() => {
    const spawnInterval = setInterval(() => {
      const arrowTypes = ['up', 'down', 'left', 'right'];
      const newArrow: Arrow = {
        id: Date.now().toString(),
        type: arrowTypes[Math.floor(Math.random() * arrowTypes.length)],
        position: 0,  
        hit: false,   
      };
      setArrows((prev) => [...prev, newArrow]);
    }, 1000);

    const positionInterval = setInterval(() => {
      setArrows((prevArrows) =>
        prevArrows
          .map((arrow) => ({
            ...arrow,
            position: arrow.position + 1,
          }))
          .filter((arrow) => arrow.position < 100) 
      );
    }, 50);

    return () => {
      clearInterval(spawnInterval);
      clearInterval(positionInterval);
    };
  }, [setArrows]);

  const checkArrowHit = (arrow: Arrow) => {
    if (arrow.position >= 70 && !arrow.hit) {
      handleArrowHit(arrow.type);
      setArrows((prevArrows) =>
        prevArrows.map((a) =>
          a.id === arrow.id ? { ...a, hit: true } : a 
        )
      );
    }
  };

  useEffect(() => {
    arrows.forEach(checkArrowHit); 
  }, [arrows, handleArrowHit]);

  return (
    <div>
      {arrows.map((arrow) => (
        <Arrow key={arrow.id} type={arrow.type} position={arrow.position} />
      ))}
    </div>
  );
};

export default ArrowSpawner;
