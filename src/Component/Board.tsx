import Square from "./Square";

type Props = {
  squares: string[],
  onClick: (i: number) => void
}

const Board: React.FC<Props> = (props) => {
  // const [squares, setSquares] = useState<string[]>(Array(9).fill(""));
  // const [xIsNext, setXIsNext] = useState<boolean>(true)

  const renderSquare = (i: number) => {
    return (
      <Square
        value={props.squares[i]}
        click={() => props.onClick(i)}
      />
    )
  }

  return (
    <>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </>
  );
}
export default Board