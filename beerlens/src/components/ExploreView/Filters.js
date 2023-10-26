import React, { useState } from 'react';
import './styles/Filters.css';

export function FilterMatrix({ rows, cols, onButtonClick, labels }) {
  const [clickedButtons, setClickedButtons] = useState({});

  const handleClick = (row, col) => {
    if (onButtonClick) {
      onButtonClick(row, col);
    }

    // Toggle the clicked state of the button
    setClickedButtons((prev) => ({
      ...prev,
      [`${row}-${col}`]: !prev[`${row}-${col}`],
    }));
  };

  const renderButton = (row, col) => {
    const isClicked = clickedButtons[`${row}-${col}`];
    const buttonClass = isClicked ? 'filter-button clicked' : 'filter-button';

    return (
      <button
        key={`${row}-${col}`}
        className={buttonClass}
        onClick={() => handleClick(row, col)}
      >
        {labels && labels[row] && labels[row][col] ? labels[row][col] : `${row},${col}`}
      </button>
    );
  };

  const renderRow = (row) => (
    <div key={row} className="filter-row">
      {Array.from({ length: cols }, (_, col) => renderButton(row, col))}
    </div>
  );

  return (
    <div className="filter-matrix">
      {Array.from({ length: rows }, (_, row) => renderRow(row))}
    </div>
  );
}
