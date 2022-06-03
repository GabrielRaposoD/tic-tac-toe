import { useEffect, useState } from 'react';

import { calculateWinner } from 'utils/ticTacToeUtils';

interface IUseTicTacToe {
  board: string[];
  status: string;
  winner: string | null;
  winnerPositions: number[];
  handleClick: (index: number) => void;
  handleReset: () => void;
  handleStart: () => void;
}

const useTicTacToe = (): IUseTicTacToe => {
  const [board, setBoard] = useState<('X' | 'O')[]>(Array(9).fill(null));
  const [turn, setTurn] = useState<'X' | 'O'>('X');
  const [winner, setWinner] = useState<'X' | 'O' | null>(null);
  const [winnerPositions, setWinnerPosition] = useState<number[]>([]);
  const [status, setStatus] = useState<'CREATED' | 'FINISHED' | 'NEW'>(
    'CREATED'
  );
  const [players, setPlayers] = useState(['', '']);

  useEffect(() => {
    if (status === 'NEW' || status === 'FINISHED') {
      return;
    }

    const result = calculateWinner(board);
    setWinner(result.winner);
    setWinnerPosition(result.winnerPostion);

    if (result.winner) {
      setStatus('FINISHED');
    }
  }, [board, status]);

  const handleClick = (index: number): void => {
    if (index < 0 || index > 9 || winner) return;
    const newBoard = [...board];
    newBoard.splice(index, 1, turn);
    setBoard(newBoard);
    const newTurn = turn === 'X' ? 'O' : 'X';
    setTurn(newTurn);
  };

  const handleStart = () => {
    setTurn('X');
    setStatus('CREATED');
  };

  const handleReset = () => {
    setBoard(Array(9).fill(''));
    setWinner(null);
    setStatus('NEW');
  };

  return {
    board,
    handleClick,
    handleReset,
    handleStart,
    status,
    winner,
    winnerPositions,
  };
};

export default useTicTacToe;
