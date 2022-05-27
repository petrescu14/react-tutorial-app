import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Board from './Component/Board';



class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

const container = document.getElementById("root")
if (container) {
  const root = createRoot(container)
  root.render(<Game />)
}


