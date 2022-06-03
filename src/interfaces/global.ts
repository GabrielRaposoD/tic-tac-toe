type Turn = 'X' | 'O';

type Winner = Turn | 'DRAW' | null;

type GameStatus = 'CREATED' | 'NEW' | 'FINISHED';

export type { Turn, Winner, GameStatus };
