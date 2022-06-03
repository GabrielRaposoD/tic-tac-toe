import cs from 'clsx';

interface SquareProps {
  index: number;
  value: string;
  isWinner: boolean;
  handleClick: (index: number) => void;
}

const Square: React.FC<SquareProps> = ({
  value,
  index,
  handleClick,
  isWinner,
}) => {
  return (
    <button
      onClick={() => handleClick(index)}
      className={cs(
        'h-14 w-14 rounded-xl border-2 border-solid text-2xl font-medium',
        {
          'text-red-500': value === 'X',
          'text-cyan-400': value === 'O',
          'border-white': !isWinner,
          'border-green-500': isWinner,
        }
      )}
    >
      {value}
    </button>
  );
};

export default Square;
