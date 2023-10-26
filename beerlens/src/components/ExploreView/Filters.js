import React, { useState } from 'react';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';
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


const StyledSlider = styled(Slider)(({ theme }) => ({
  '& .MuiSlider-thumb': {
    backgroundColor: 'rgba(255, 194, 45, 1)',
    '&:hover, &.Mui-focusVisible': {
      boxShadow: '0 0 0 0.25rem rgba(0,0,0,0.15)',
    },
  },
  '& .MuiSlider-track': {
    backgroundColor: 'rgba(255, 194, 45, 1)',
    border: 'none'
  },
  '& .MuiSlider-rail': {
    backgroundColor: 'lightgrey',
  },
}));

export function RangeSlider() {
  const [range, setRange] = useState([0, 100]);
  const minVal = range[0];
  const maxVal = range[1];
  return (
    <div>
      <Box sx={{ width: 300 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography color="black" sx={{ fontWeight: 'bold' }}>{minVal}$</Typography>
          <Typography color="black" sx={{ fontWeight: 'bold' }}>{maxVal}$</Typography>
        </Box>
        <StyledSlider
          value={range}
          onChange={(event, newValue) => setRange(newValue)}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          min={0}
          max={100}
        />
      </Box>
    </div>
  );
}