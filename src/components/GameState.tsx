type GameState = {
    score: number;
    arrows: { id: string; type: string; position: number }[];
    gameOver: boolean;
  };