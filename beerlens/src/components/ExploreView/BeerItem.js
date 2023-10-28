import React from 'react';
import './styles/BeerItem.css';
import { FlagIcon } from 'react-flag-kit';
import "@fontsource/inter";
import { useState } from 'react';


export class BeerInfo {
  constructor(BeerIcon, name, brewery, country, countryCode, volume, abv, price, type, assortment_type, flavor_profile, package_type) {
    this.id = (name + '-' + brewery).replace(/\s+/g, '-');
    this.BeerIcon = BeerIcon;
    this.name = name;
    this.brewery = brewery;
    this.country = country;
    this.countryCode = countryCode;
    this.volume = volume;
    this.abv = abv;
    this.price = price;
    this.type = type;
    this.assortment_type = assortment_type;
    this.flavor_profile = flavor_profile;
    this.package_type = package_type;
  }
}

export function BeerGrid({ rows, cols, onButtonClick, beers }) {

  const [selectedBeerId, setSelectedBeerId] = useState(null);

  
  const handleClick = (beer) => {
    setSelectedBeerId(beer.id);
    if (onButtonClick) {
      console.log('Clicked:', beer);
      onButtonClick(beer);
    }
  };

  const addItemToCart = (beer, event) => {
    event.stopPropagation();  // Prevent click event from bubbling up to the BeerItem
    console.log('Added to cart:', beer);
  };

  const renderItem = (beer, row, col) => {
    if (!beer) return null;
    return (
      <div
        key={`${row}-${col}`}
        className="BeerItem"
        onClick={() => handleClick(beer)}
        style={{ cursor: 'pointer' }}
      >
        <>
          <div className="Info-Image">
            <div className='Info'>
              <div>{beer.type}</div>
              <div>{beer.name}</div>
              <div>{beer.brewery}</div>
              <div className='country-with-flag'>
                <FlagIcon code={beer.countryCode} style={{ width: '15px', height: '10 px' }} />
                <span>{beer.country}</span>
              </div>
              <div className="BeerItem-info">
                <div>{beer.volume}</div>
                <div>{beer.abv}%</div>
                <div>${beer.price}</div>
              </div>
            </div>
            <img src={beer.BeerIcon} alt=''/>
          </div>
          <button className="AddToCart-btn" onClick={(e) => addItemToCart(beer, e)}>
          Add to Cart
          </button>
          {selectedBeerId === beer.id}
      </>
    </div>
  );
};
  
  
  const renderPlaceholder = (key) => {
    return <div key={key} className="BeerItem" style={{ visibility: 'hidden' }} />;
  };

  const renderRow = (row) => {
    const beerRow = beers ? beers[row] : null;
    if (!beerRow) return null;

    // Ensure there are always 3 elements in a row, adding placeholders if necessary
    const items = [...beerRow];
    while (items.length < 3) {
      items.push(null);
    }

    return (
      <div key={row} className="BeerGrid-row">
        {items.map((beer, col) => beer ? renderItem(beer, row, col) : renderPlaceholder(`${row}-${col}`))}
      </div>
    );
  };

  return <div className="BeerGrid">{Array.from({ length: rows }, (_, row) => renderRow(row))}</div>;
}
