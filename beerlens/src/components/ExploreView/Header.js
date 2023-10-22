import React, { useState, useEffect } from 'react';
import './styles/Header.css';
import axios from 'axios';

import { ImageButton } from './utils';

function Header() {
  const [countries, setCountries] = useState([]);
  const BACKEND_URL =
    process.env.REACT_APP_BACKEND_URL || 'http://localhost:8000';

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/countries`)
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        console.error(
          'There was an error fetching countries from backend',
          error
        );
      });
  }, [BACKEND_URL]);

  return (
    <div className='container'>
      <div className='left-section'>
        <img className='logo' src='/images/logo.png' alt='logo' />

        <h1 className='Beer-Name'>Beer Lens</h1>
        <div class='search-wrapper'>
          <input
            type='search'
            placeholder='Search any beer'
            className='search-bar'
          />
          <img class='search-pic' src='/images/search_icon.png' />
        </div>
      </div>

      <div className='right-section'>
        <button className='Header-Button'>Our Beers</button>

        <button className='Header-Button'>Contact Us</button>

        <button className='Header-Button'>About Us</button>

        {ImageButton('/login', '/images/user_icon.png')}

        {ImageButton('/saved', '/images/saved.png')}

        {ImageButton('/cart', '/images/shopping_cart.png')}
      </div>
    </div>
  );
}

export default Header;
