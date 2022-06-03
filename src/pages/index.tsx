import { Game } from 'components/Game';
import useTicTacToe from 'hooks/useTicTacToe';

const IndexPage = () => {
  const { board, handleClick, winnerPositions } = useTicTacToe();

  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
      <h1 className="mb-2 text-6xl font-bold tracking-tight text-cyan-400">
        Tic <span className="text-red-500">Tac</span> Toe
      </h1>
      <h5 className="mb-8 text-xs">Made by: Gabriel Raposo</h5>
      <Game
        board={board}
        handleClick={handleClick}
        winnerPositions={winnerPositions}
      />
    </section>
  );
};

export default IndexPage;
