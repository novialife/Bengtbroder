import React from 'react';
import './styles/BeerItem.css';
import { FlagIcon } from 'react-flag-kit';
import '@fontsource/inter';
import { useState } from 'react';

export class BeerInfo {
  constructor(
    id, 
    BeerIcon,
    name,
    brewery,
    country,
    countryCode,
    volume,
    abv,
    price,
    type,
    assortment_type,
    flavor_profile,
    package_type
  ) {
    this.id = id;
    this.BeerIcon = BeerIcon;
    this.name = name.replace(/ /g, '-');
    this.brewery = brewery.replace(/ /g, '-');
    this.country = country;
    this.countryCode = countryCode;
    this.volume = volume;
    this.abv = abv;
    this.price = price;
    this.type = type.replace(/ /g, '-');;
    this.assortment_type = assortment_type.replace(/ /g, '-');;
    this.flavor_profile = flavor_profile.replace(/ /g, '-');;
    this.package_type = package_type.replace(/ /g, '-');;
  }
}

export function BeerGrid({ onButtonClick, beers }) {
  const [selectedBeerId, setSelectedBeerId] = useState(null);

  const handleClick = (beer) => {
    setSelectedBeerId(beer.id);
    if (onButtonClick) {
      console.log('Clicked:', beer);
      onButtonClick(beer);
    }
  };

  const addItemToCart = (beer, event) => {
    event.stopPropagation(); // Prevent click event from bubbling up to the BeerItem
    console.log('Added to cart:', beer);
  };

  const renderItem = (beer, row, col) => {
    if (!beer) return null;
    return (
      <div
        key={`${row}-${col}`}
        className='BeerItem'
        onClick={() => handleClick(beer)}
        style={{ cursor: 'pointer' }}
      >
        <>
          <div className='Info-Image'>
            <div className='Info'>
              <div>{beer.type}</div>
              <div>{beer.name}</div>
              <div>{beer.brewery}</div>
              <div className='country-with-flag'>
                <FlagIcon
                  code={beer.countryCode}
                  style={{ width: '15px', height: '10 px' }}
                />
                <span>{beer.country}</span>
              </div>
              <div className='BeerItem-info'>
                <div>{beer.volume}</div>
                <div>{beer.abv}%</div>
                <div>${beer.price}</div>
              </div>
            </div>
            <img src={beer.BeerIcon} alt='' />
          </div>
          <button
            className='AddToCart-btn'
            onClick={(e) => addItemToCart(beer, e)}
          >
            Add to Cart
          </button>
          {selectedBeerId === beer.id}
        </>
      </div>
    );
  };

  return (
    <div className='BeerGrid'>{beers.map((beer) => renderItem(beer))}</div>
  );
}
