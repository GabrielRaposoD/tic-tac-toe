import { Square } from 'components/Square';
import { Winner } from 'interfaces/global';

interface GameProps {
  board: string[];
  winnerPositions: number[];
  winner: Winner;
  handleClick: (index: number) => void;
}

const Game: React.FC<GameProps> = ({
  board,
  handleClick,
  winnerPositions,
  winner,
}) => {
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
