import React from 'react';
import './styles/NavBar.css';
import { beerData } from '../../beerData';

const NavBar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <span className='navbarDetailsLine'></span>
      <div className='navbarContainer'>
        <span
          className='navbarItem'
          onClick={() => scrollToSection('tasteDescription')}
        >
          Taste Description
        </span>

        <span
          className='navbarItem'
          onClick={() => scrollToSection('pairings')}
        >
          Pairings
        </span>
        <span className='navbarItem' onClick={() => scrollToSection('about')}>
          About the Beer
        </span>
        <span className='navbarItem' onClick={() => scrollToSection('reviews')}>
          Reviews
        </span>
        <span
          className='navbarItem'
          onClick={() => scrollToSection('similarBeers')}
        >
          You may also like
        </span>
      </div>
      <span className='navbarDetailsLine'></span>
    </div>
  );
};

export default NavBar;
