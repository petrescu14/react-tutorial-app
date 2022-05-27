import { useState } from "react";
import calculateWinner from "../Helper/calculateWinner";
import Square from "./Square";

const Board = () => {
  const [squares, setSquares] = useState<string[]>(Array(9).fill(""));
  const [xIsNext, setXIsNext] = useState<boolean>(true)
  const winner = calculateWinner(squares)
  const [status, setStatus] = useState("Next player: X")

  const handleClick = (i: number) => {
    setSquares(
      squares.map((value, index) => (
        index === i ? (xIsNext ? "X" : "O") : value
      ))
    )
    setXIsNext(!xIsNext)
    if (winner) {
      setStatus("Winner " + winner);
    } else {
      setStatus("Next player: " + (xIsNext ? "X" : "O"));
    }
  }


  const renderSquare = (i: number) => {
    return (
      <Square
        value={squares[i]}
        onClick={() => handleClick(i)}
      />
    )
  }

  return (
    <>
      <div className="status">{status}</div>
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