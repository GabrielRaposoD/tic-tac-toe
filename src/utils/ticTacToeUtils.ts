const calculateWinner = (
  board: ('X' | 'O')[]
): { winner: 'X' | 'O'; winnerPostion: number[] } => {
  const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const pattern of winningPatterns) {
    const [a, b, c] = pattern;

    if (board[a] === board[b] && board[a] === board[c]) {
      return { winner: board[a], winnerPostion: pattern };
    }
  }
  return { winner: null, winnerPostion: null };
};

export { calculateWinner };
