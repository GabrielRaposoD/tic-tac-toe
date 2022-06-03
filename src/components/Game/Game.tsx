import { Square } from 'components/Square';

interface GameProps {
  board: string[];
  handleClick: (index: number) => void;
}

const Game: React.FC<GameProps> = ({ board, handleClick }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {board.map((value, index) => (
        <Square
          key={index}
          value={value}
          index={index}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
};

export default Game;
