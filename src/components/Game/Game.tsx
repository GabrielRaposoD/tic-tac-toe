import { Square } from 'components/Square';
import cs from 'clsx';
import { useTicTacToe } from 'contexts';

const Game: React.FC = () => {
  const {
    board,
    winnerPositions,
    winner,
    handleClick,
    status,
    turn,
    handleReset,
  } = useTicTacToe();

  return (
    <div className="flex flex-row gap-x-12">
      <div className="grid grid-cols-3 gap-4">
        {board.map((value, index) => (
          <Square
            key={index}
            isWinner={winnerPositions.includes(index)}
            value={value}
            index={index}
            handleClick={handleClick}
            winner={winner}
          />
        ))}
      </div>
      <aside className="flex flex-col">
        <div className="mb-6 flex flex-col items-center">
          <p>Current Turn: </p>
          <span
            className={cs('text-2xl font-medium', {
              'text-red-500': turn === 'X',
              'text-cyan-400': turn === 'O',
            })}
          >
            {turn}
          </span>
        </div>
        {status === 'FINISHED' ? (
          <button
            className="rounded-xl bg-blue-600 px-4 py-2"
            onClick={() => handleReset()}
          >
            Play Again
          </button>
        ) : null}
      </aside>
    </div>
  );
};

export default Game;
