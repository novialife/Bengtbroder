import React from 'react';
import './styles/DetailsOverview.css';
import { beerData } from '../../beerData';

const DetailsOverview = () => {
  return (
    <div className='detailsOverviewContainer'>
      <img className='detailsOverviewImage' src={beerData.image} />
      <div>Hello</div>
    </div>
  );
};

export default DetailsOverview;
