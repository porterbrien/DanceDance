type Arrow = {
  id: string;
  type: string;
  position: number;  // Arrow's vertical position on the screen (0 to 100)
  hit: boolean;      // Whether the arrow was hit by the player
};

type GameState = {
  score: number;            // Player's current score
  arrows: Arrow[];          // List of arrows currently on the screen
  gameOver: boolean;        // Game over flag
  level: number;            // Current game level (increase difficulty over time)
  lives: number;            // Number of lives remaining
  comboStreak: number;      // Current combo streak (consecutive hits)
  timeRemaining: number;    // Time remaining for the current round/level
};
