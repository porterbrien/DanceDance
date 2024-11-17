import React, { useState } from 'react';
import ArrowSpawner from './components/ArrowSpawner';
import ArrowTarget from './components/ArrowTarget';
import InputHandler from './components/InputHandler';
import Scoreboard from './components/Scoreboard';
import { Arrow } from './components/ArrowSpawner';
import './styles/index.css';

const App: React.FC = () => {
  const [score, setScore] = useState(0);
  const [arrows, setArrows] = useState<Arrow[]>([]);

  const handleArrowHit = (arrowType: string): void => {
    console.log(`Arrow of type "${arrowType}" hit!`);
    setScore((prevScore) => prevScore + 10); 
  };

  return (
    <div
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        background: '#000',
        overflow: 'hidden', 
      }}
    >
      {/* Arrow Targets */}
      {['up', 'down', 'left', 'right'].map((type) => (
        <ArrowTarget key={type} type={type} />
      ))}

      {/* Components */}
      <ArrowSpawner arrows={arrows} setArrows={setArrows} handleArrowHit={handleArrowHit} />
      <Scoreboard score={score} />
      <InputHandler
        arrows={arrows}
        setArrows={setArrows}
        handleArrowHit={handleArrowHit} 
      />
    </div>
  );
};

export default App;
