import React, { useRef, useEffect } from 'react';
import DetailsOverview from './DetailsOverview';
import TasteDescription from './TasteDescription';
import Pairings from './Pairings';
import About from './About';
import NavBar from './NavBar';
import Reviews from './Reviews';
import './styles/Details.css';

const Details = () => {
  return (
    <div className='detailsContainer'>
      <DetailsOverview />
      <NavBar />
      <TasteDescription />
      <hr />
      <Pairings />
      <hr />
      <About />
      <Reviews />
    </div>
  );
};

export default Details;
