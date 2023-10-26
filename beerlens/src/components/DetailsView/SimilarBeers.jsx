import React from 'react';
import './styles/SimilarBeers.css';
import SimilarCard from './SimilarCard';

const SimilarBeers = () => {
  return (
    <div id='similarBeers' className='similarBeersContainer'>
      <h1 className='similarBeersHeader'>You may also like</h1>
      <div class='scrolling-wrapper'>
        <tbody>
          {[...Array(6)].map((x, i) => (
            <div class='card' key={i}>
              <SimilarCard />
            </div>
          ))}
        </tbody>
      </div>
    </div>
  );
};

export default SimilarBeers;
