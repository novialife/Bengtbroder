import React from 'react';
import './styles/Header.css';
import logo from '../../assets/images/logo.png';
import searchIcon from '../../assets/images/search_icon.png';
import loginIcon from '../../assets/images/user_icon.png';
import savedIcon from '../../assets/images/saved.png';
import shoppingCart from '../../assets/images/shopping_cart.png';
import { ImageButton } from './utils';
import { useNavigate } from 'react-router-dom';

function Header() {

  const navigate = useNavigate();

  const redirectToHome = () => {
    navigate('/');
  };

  const redirectToAbout = () => {
    navigate('/about');
  };

  return (
    <div className='header-container'>
      <div className='left-section'>
        <button className='Header-Button' onClick={redirectToHome}>
        <img className='logo' src={logo} alt='logo' />
        </button>
        <button className='Beer-Name' onClick={redirectToHome}>Beer Lens</button>
        <div className='search-wrapper'>
          <input
            type='search'
            placeholder='Search any beer'
            className='search-bar'
            disabled={true}
          />
          <img className='search-pic' src={searchIcon} />
        </div>
      </div>

      <div className='right-section'>
        <button className='Header-Button' onClick={redirectToHome}>
          Our Beers
        </button>

        <button className='Header-Button' onClick={redirectToAbout}>
          About Us
        </button>

        {ImageButton('/login', loginIcon)}

        {ImageButton('/saved', savedIcon)}

        {ImageButton('/cart', shoppingCart)}
      </div>
    </div>
  );
}

export default Header;