import React from 'react';
import './styles/Explore.css';
import {ButtonMatrix, Dropdown} from './utils';


function Body() {
  const handleButtonClick = (row, col) => {
    alert(`Button clicked at row ${row}, col ${col}`);
  };

  return (
    <div className='container'>
      <div className='top-row'>
        <Dropdown />
      </div>

      <div className='filter-side'>

        <div className='BeerTypeFilter'>
        <ButtonMatrix rows={5} cols={5} onButtonClick={handleButtonClick} />
        </div>

      </div>
      
    </div>
  );
}

export default Body;
