import React, { useRef, useEffect } from 'react';
import DetailsOverview from './DetailsOverview';
import TasteDescription from './TasteDescription';
import Pairings from './Pairings';
import About from './About';
import NavBar from './NavBar';
import Reviews from './Reviews';
import './styles/Details.css';
import SimilarBeers from './SimilarBeers';

const Details = () => {
  return (
    <div className='detailsContainer'>
      <DetailsOverview />
      <NavBar />
      <TasteDescription />
      <span className='detailsLine' />
      <Pairings />
      <span className='detailsLine' />
      <About />
      <span className='detailsLine' />
      <Reviews />
      <span className='detailsLine' />
      <SimilarBeers />
    </div>
  );
};

export default Details;
