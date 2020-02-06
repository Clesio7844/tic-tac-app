import React, { useState } from 'react';
import Square from './square';
import './style.css';
import { WinningLogid } from './Helper';

function Game() {
  const [squares, setSquare] = useState(Array(9).fill(null));
  const [isXNext, setXNext] = useState(true);

  const winningInfo = WinningLogid(squares);
  const winner = winningInfo.winner;

  const winningHighLight = winningInfo.line;

  let status;

  if (winner) {
    status = 'David the winner is ' + winner;
  } else if (winningInfo.isDraw) {
    status = 'It is Draw';
  } else {
    status = 'Nex Player is ' + (isXNext ? 'X' : '0');
  }

  function renderSquare(i) {
    return (
      <Square
        onClick={() => {
          const nextSquare = squares.slice();
          nextSquare[i] = isXNext ? 'X' : '0';
          setXNext(!isXNext);
          setSquare(nextSquare);
        }}
        value={squares[i]}
        highlightWinner={winningHighLight && winningHighLight.includes(i)}
      />
    );
  }

  return (
    <div>
      <div className=' status'>{status}</div>
      <div className='board-row'>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className='board-row'>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className='board-row'>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

export default Game;
