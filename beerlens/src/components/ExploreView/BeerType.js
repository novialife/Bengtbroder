import React from 'react';
import './styles/BeerType.css';

function ButtonMatrix({ rows, cols, onButtonClick, labels }) {
  const handleClick = (row, col) => {
    if (onButtonClick) {
      onButtonClick(row, col);
    }
  };

  const renderButton = (row, col) => (
    <button
      key={`${row}-${col}`}
      className="matrix-button"
      onClick={() => handleClick(row, col)}
    >
      {labels && labels[row] && labels[row][col] ? labels[row][col] : `${row},${col}`}
    </button>
  );

  const renderRow = (row) => (
    <div key={row} className="matrix-row">
      {Array.from({ length: cols }, (_, col) => renderButton(row, col))}
    </div>
  );

  return (
    <div className="matrix">
      {Array.from({ length: rows }, (_, row) => renderRow(row))}
    </div>
  );
}

export default ButtonMatrix;
