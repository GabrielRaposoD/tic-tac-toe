import { GameStatus, Turn, Winner } from 'interfaces/global';
import React, { createContext, useContext, useEffect, useState } from 'react';

import { calculateWinner } from 'utils/ticTacToeUtils';

interface IUseTicTacToe {
  board: Turn[];
  status: GameStatus;
  winner: Winner | null;
  winnerPositions: number[];
  turn: Turn;
  handleClick: (index: number) => void;
  handleReset: () => void;
  handleStart: () => void;
}

const TicTacToeContext = createContext<IUseTicTacToe | null>(null);

export const useTicTacToe = () => {
  return useContext(TicTacToeContext);
};

export const TicTacToeContextProvider: React.FC<any> = ({ children }) => {
  const values = useProvideTicTacToe();

  return (
    <TicTacToeContext.Provider value={values}>
      {children}
    </TicTacToeContext.Provider>
  );
};

const useProvideTicTacToe = () => {
  const [board, setBoard] = useState<Turn[]>(Array(9).fill(null));
  const [turn, setTurn] = useState<Turn>('X');
  const [winner, setWinner] = useState<Winner | null>(null);
  const [winnerPositions, setWinnerPosition] = useState<number[]>([]);
  const [status, setStatus] = useState<GameStatus>('NEW');
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
    if (index < 0 || index > 9 || winner || board[index] !== null) return;
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
    setBoard(Array(9).fill(null));
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
    turn,
  };
};
