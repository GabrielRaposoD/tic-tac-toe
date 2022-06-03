import { Game } from 'components/Game';
import { useTicTacToe } from 'contexts';

const IndexPage = () => {
  const { status, handleStart } = useTicTacToe();

  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
      <h1 className="mb-2 text-6xl font-bold tracking-tight text-cyan-400">
        Tic <span className="text-red-500">Tac</span> Toe
      </h1>
      <h5 className="mb-8 text-xs">Made by: Gabriel Raposo</h5>

      {status === 'NEW' ? (
        <button
          onClick={() => handleStart()}
          className="rounded-xl bg-blue-600 px-4 py-2"
        >
          New Game
        </button>
      ) : (
        <Game />
      )}
    </section>
  );
};

export default IndexPage;
