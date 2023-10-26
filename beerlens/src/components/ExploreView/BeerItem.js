import React from 'react';
import './styles/BeerItem.css';
import { FlagIcon } from 'react-flag-kit';
import "@fontsource/inter";


export class BeerInfo {
  constructor(id, BeerIcon, name, brewery, country, countryCode, volume, abv, price, type, assortment_type, flavor_profile, package_type) {
    this.id = id;
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
  const handleClick = (beer) => {
    if (onButtonClick) {
      onButtonClick(beer);
    }
  };

  const renderItem = (beer, row, col) => (
    <div
      key={`${row}-${col}`}
      className="BeerItem"
      onClick={() => handleClick(beer)}
      style={{ cursor: 'pointer' }}  // Added cursor style to indicate it's clickable
    >
      {beer ? (
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
              <div>{beer.abv}</div>
              <div>${beer.price}</div>
            </div>

          </div>
          
          <img src={beer.BeerIcon} alt=''/>
        </div>

        <button className="AddToCart-btn">Add to Cart</button>
      </>
    ) : (
      `${row},${col}`
    )}
  </div>
);

  const renderRow = (row) => {
    const beerRow = beers ? beers[row] : null;
    return (
      <div key={row} className="BeerGrid-row">
        {Array.from({ length: cols }, (_, col) => {
          const beer = beerRow ? beerRow[col] : null;
          return renderItem(beer, row, col);
        })}
      </div>
    );
  };

  return <div className="BeerGrid">{Array.from({ length: rows }, (_, row) => renderRow(row))}</div>;
}
