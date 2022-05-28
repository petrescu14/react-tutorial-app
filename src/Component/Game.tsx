import { useState } from "react";
import calculateWinner from "../Helper/calculateWinner";
import Board from "./Board";

const Game = () => {
  const [squares, setSquares] = useState<string[]>(Array(9).fill(""));
  const [xIsNext, setXIsNext] = useState<boolean>(true)
  const [history, setHistory] = useState([{ squares: Array(9).fill("") }])
  const [stepNumber, setStepNumber] = useState(0)
  const winner = calculateWinner(squares)
  const status: string = winner ? "Winner" + winner : "Next player: " + (xIsNext ? "X" : "O");



  const handleClick = (i: number) => {
    if (calculateWinner(squares) || squares[i]) return

    const new_history = history
    const new_squares: string[] = squares.map((value, index) => (
      index === i ? (xIsNext ? "X" : "O") : value
    ))
    setSquares(new_squares)
    setXIsNext(!xIsNext)
    setHistory([...new_history, { squares: new_squares }])
    setStepNumber(stepNumber + 1)
  }

  const jumpTo = (step: number) => {
    const new_history = history.filter((history, index) => (index <= step))
    const new_squares = step ? new_history[step].squares : Array(9).fill("")
    setSquares(new_squares)
    setHistory(new_history)
    setStepNumber(step)
    setXIsNext(step % 2 === 0)
  }

  const moves = history.map((step, move) => {
    const desc = move ?
      "Go to move #" + move :
      "Go to game start"
    return (
      <li key={move}>
        <button
          onClick={() => jumpTo(move)}
        >{desc}</button>
      </li>
    )
  })

  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={squares}
          onClick={(i: number) => handleClick(i)}
        />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

export default Game