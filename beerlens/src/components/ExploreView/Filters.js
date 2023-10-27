import React, { useState, useEffect } from 'react';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';
import './styles/Filters.css';

export function FilterMatrix({ rows, cols, onButtonClick, labels = [] }) {
  const [clickedButtons, setClickedButtons] = useState({});

  const handleClick = (row, col) => {
    const key = `${row}-${col}`;
    const labelIndex = row * cols + col;
    const label = labels[labelIndex];
    const isClicked = !clickedButtons[key];

    if (label) {
      if (onButtonClick) {
        onButtonClick(label, isClicked);
      }
      setClickedButtons((prev) => ({
        ...prev,
        [key]: isClicked,
      }));
    }
  };

  const renderButton = (row, col) => {
    const key = `${row}-${col}`;
    const isClicked = clickedButtons[key];
    const buttonClass = isClicked ? 'filter-button clicked' : 'filter-button';
    const labelIndex = row * cols + col;
    const label = labels[labelIndex];

    if (!label) return null; // If there's no label, don't create the button

    return (
      <button
        key={key}
        className={buttonClass}
        onClick={() => handleClick(row, col)}
      >
        {label}
      </button>
    );
  };

  const renderRow = (row) => {
    const buttons = Array.from({ length: cols }, (_, col) => renderButton(row, col));
    const visibleButtons = buttons.filter(Boolean); // Filter out null values
    if (visibleButtons.length === 0) return null; // If no buttons in this row, don't create the row

    return (
      <div key={row} className="filter-row">
        {visibleButtons}
      </div>
    );
  };

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

export function RangeSlider({ min, max, onChange }) {
  const [range, setRange] = useState([min, max]);

  useEffect(() => {
    if (onChange) {
      onChange(range);
    }
  }, [range, onChange]);


  const minVal = range[0];
  const maxVal = range[1];

  return (
    <div>
      <Box sx={{ width: 300 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography color="black" sx={{ fontWeight: 'bold' }}>${minVal}</Typography>
          <Typography color="black" sx={{ fontWeight: 'bold' }}>${maxVal}</Typography>
        </Box>
        <StyledSlider
          value={range}
          onChange={(event, newValue) => setRange(newValue)}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          min={min}
          max={max}
        />
      </Box>
    </div>
  );
}

