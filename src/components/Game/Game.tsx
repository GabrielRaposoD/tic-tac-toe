import { Square } from 'components/Square';
import { useTicTacToe } from 'contexts';

const Game: React.FC = () => {
  const { board, winnerPositions, winner, handleClick } = useTicTacToe();
  return (
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
  );
};

export default Game;
