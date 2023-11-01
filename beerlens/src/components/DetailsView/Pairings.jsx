import React from 'react';
import './styles/Pairings.css';

const Pairings = (beerData) => {
  return (
    <div id='pairings'>
      <div className='pairings-grid-container'>
        <h1 style={{ textAlign: 'left' }}>Pairings</h1>

        <div className='pairings-grid-item'>
          <h2>Goes well with</h2>
          <ul>
            {beerData.beerData.pairings.food.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className='pairings-grid-item'>
          <h2>Serving tips</h2>
          <p>{beerData.beerData.pairings.servingTips[0].replace(/Â/g, '')}</p>
        </div>
      </div>
    </div>
  );
};

export default Pairings;
