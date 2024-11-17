import React, { useEffect } from 'react';
import Arrow from './Arrow';

export interface Arrow {
  id: string;
  type: string;
  position: number;  // The position of the arrow as it falls (0 to 100)
  hit: boolean;      // Whether the arrow is hit or not
}

interface ArrowSpawnerProps {
  arrows: Arrow[];
  setArrows: React.Dispatch<React.SetStateAction<Arrow[]>>;
  handleArrowHit: (type: string) => void;
}

const ArrowSpawner: React.FC<ArrowSpawnerProps> = ({ arrows, setArrows, handleArrowHit }) => {
  useEffect(() => {
    // Spawning new arrows every second
    const spawnInterval = setInterval(() => {
      const arrowTypes = ['up', 'down', 'left', 'right'];
      const newArrow: Arrow = {
        id: Date.now().toString(),
        type: arrowTypes[Math.floor(Math.random() * arrowTypes.length)],
        position: 0,  // Starting position at the top (0%)
        hit: false,   // Initially, no arrow is hit
      };
      setArrows((prev) => [...prev, newArrow]);
    }, 1000);

    // Moving arrows down every 50ms
    const positionInterval = setInterval(() => {
      setArrows((prevArrows) =>
        prevArrows
          .map((arrow) => ({
            ...arrow,
            position: arrow.position + 1,
          }))
          .filter((arrow) => arrow.position < 100) // Remove arrows when they pass the screen
      );
    }, 50);

    return () => {
      clearInterval(spawnInterval);
      clearInterval(positionInterval);
    };
  }, [setArrows]);

  // Check if arrow is hit when it reaches a certain position (e.g., position >= 70)
  const checkArrowHit = (arrow: Arrow) => {
    if (arrow.position >= 70 && !arrow.hit) {
      handleArrowHit(arrow.type);
      setArrows((prevArrows) =>
        prevArrows.map((a) =>
          a.id === arrow.id ? { ...a, hit: true } : a // Mark the arrow as hit
        )
      );
    }
  };

  // Check for hits when arrows are updated
  useEffect(() => {
    arrows.forEach(checkArrowHit); // Check for arrow hits
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
