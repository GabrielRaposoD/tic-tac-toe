import cs from 'clsx';

interface SquareProps {
  index: number;
  value: string;
  handleClick: (index: number) => void;
}

const Square: React.FC<SquareProps> = ({ value, index, handleClick }) => {
  return (
    <button
      onClick={() => handleClick(index)}
      className={cs(
        'h-14 w-14 rounded-xl border-2 border-solid border-white text-2xl font-medium',
        { 'text-red-500': value === 'X', 'text-cyan-400': value === 'O' }
      )}
    >
      {value}
    </button>
  );
};

export default Square;
