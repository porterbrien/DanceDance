type Arrow = {
  id: string;
  type: string;
  position: number;  
  hit: boolean;      
};

type GameState = {
  score: number;            
  arrows: Arrow[];          
  gameOver: boolean;        
  level: number;        
  lives: number;           
  comboStreak: number;      
  timeRemaining: number;   
};
