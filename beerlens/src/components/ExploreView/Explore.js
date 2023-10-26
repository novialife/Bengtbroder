import React from 'react';
import './styles/Explore.css';
import { Dropdown } from './utils';
import { BeerGrid } from './BeerItem';
import { FilterMatrix, RangeSlider } from './Filters';
import BeerData  from './BeerData';
import "@fontsource/inter";
import searchIcon from '../../assets/images/search_icon.png';


function Body() {
  const handleBeerItemClick = (row, col, beer) => {
    console.log('Selected beer:', beer);
  };

  const handleButtonClick = (row, col) => {
    console.log(`Button clicked at row ${row}, col ${col}`);
  };

  return (
    <div className='container'>
      <div className='BeerGrid-container'>
        <div className='BeerGrid-side'>
          <div className='dropdown'>
            <Dropdown />
          </div>
          <BeerGrid rows={4} cols={2} onButtonClick={handleBeerItemClick} beers={BeerData} />
        </div>
      </div>

      <div className='filter-side'>
        <div className='beer-type-filter'>
          <h4 className='filter-label'>Beer Type</h4>
          <FilterMatrix rows={3} cols={3} onButtonClick={handleButtonClick} />
        </div>

        <div className='price-filter'>
          <h4 className='filter-label'>Price</h4>
          <div className='price-slider'>
            <RangeSlider/>
          </div>
        </div>


        <div className='assortment-filter'>
          <h4 className='filter-label'>Assortment</h4>
          <FilterMatrix rows={1} cols={3} onButtonClick={handleButtonClick} />
        </div>

        <div className='country-filter'>
          <h4 className='filter-label'>Country</h4>
          <div className='filter-search-wrapper'>
            <input
              type='search'
              placeholder='Search for country'
            />
            <img className='search-pic' src={searchIcon} />
          </div>
        </div>

        <div className='brewery-filter'>
          <h4 className='filter-label'>Brewery</h4>
          <div className='filter-search-wrapper'>
            <input
              type='search'
              placeholder='Search for brewery'
            />
            <img className='search-pic' src={searchIcon} />
          </div>
        </div>

        <div className='flavor-profile-filter'>
          <h4 className='filter-label'>Flavor Profile</h4>
          <FilterMatrix rows={2} cols={3} onButtonClick={handleButtonClick} />
        </div>

        <div className='package-filter'>
          <h4 className='filter-label'>Package</h4>
          <FilterMatrix rows={1} cols={2} onButtonClick={handleButtonClick} labels={[["Bottle", "Can"]]} />
        </div>
      
        <div className='alcohol-percentage-filter'>
          <h4 className='filter-label'>Alcohol Percentage</h4>
          <div className='alcohol-search-wrapper'>
            <div className='input-wrapper'>
              <span className='input-label'>From</span>
              <input
                className='alcohol-percentage-input'
                type='search'
                placeholder='ABV'
              />
            </div>
            <span className='percentage-text'>%</span>
            <div className='input-wrapper'>
              <span className='input-label'>To</span>
              <input
                className='alcohol-percentage-input'
                type='search'
                placeholder='ABV'
              />
            </div>
            <span className='percentage-text'>%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
