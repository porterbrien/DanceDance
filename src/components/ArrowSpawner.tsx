import React, { useEffect, useState } from 'react';
import Arrow from './Arrow';

const ArrowSpawner: React.FC = () => {
  const [arrows, setArrows] = useState<{ id: string; type: string; position: number }[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const arrowTypes = ['up', 'down', 'left', 'right'];
      const newArrow = {
        id: Date.now().toString(),
        type: arrowTypes[Math.floor(Math.random() * arrowTypes.length)],
        position: 0,
      };
      setArrows((prev) => [...prev, newArrow]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {arrows.map((arrow) => (
        <Arrow key={arrow.id} type={arrow.type} position={arrow.position} />
      ))}
    </div>
  );
};

export default ArrowSpawner;