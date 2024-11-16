import React from 'react';
import ArrowSpawner from './components/ArrowSpawner';
import ArrowTarget from './components/ArrowTarget';
import Scoreboard from './components/Scoreboard';
import InputHandler from './components/InputHandler';
import './styles/index.css';

const App: React.FC = () => {
  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', background: '#000' }} className="game-container">
      <div style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)' }}>
        {/* Arrow Targets */}
        {['up', 'down', 'left', 'right'].map((dir) => (
          <ArrowTarget key={dir} type={dir} />
        ))}
        
      </div>
      <ArrowTarget />
      <ArrowSpawner />
      <Scoreboard />
      <InputHandler />
    </div>
  );
};

export default App;