interface ScoreboardProps {
    score: number;
  }
  
  const Scoreboard: React.FC<ScoreboardProps> = ({ score }) => {
    return (
      <div style={{ position: 'absolute', top: 0, left: 0, color: 'white', padding: '20px' }}>
        Score: {score}
      </div>
    );
  };
  
  export default Scoreboard;
  