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

  const calcRowsCols = (length) => {
    if (length <= 0) return { rows: 0, cols: 0 };
    const cols = Math.min(3, length);
    const rows = Math.ceil(length / cols);
    return { rows, cols };
  };
  

  const min = Math.floor(BeerData.flat().reduce((min, beer) => beer.price < min.price ? beer : min).price);
  const max = Math.ceil(BeerData.flat().reduce((max, beer) => beer.price > max.price ? beer : max).price);
  
  const all_beer_types = BeerData.flat().map(beer => beer.type);
  const unique_beer_types = Array.from(new Set(all_beer_types));
  const { rows: beer_type_rows, cols: beer_type_cols } = calcRowsCols(unique_beer_types.length);
  
  const all_assortment_types = BeerData.flat().map(beer => beer.assortment_type);
  const unique_assortment_types = Array.from(new Set(all_assortment_types));
  const { rows: assortment_type_rows, cols: assortment_type_cols } = calcRowsCols(unique_assortment_types.length);

  const all_flavor_profiles = BeerData.flat().map(beer => beer.flavor_profile);
  const unique_flavor_profiles = Array.from(new Set(all_flavor_profiles));
  const { rows: flavor_profile_rows, cols: flavor_profile_cols } = calcRowsCols(unique_flavor_profiles.length);

  const all_package_types = BeerData.flat().map(beer => beer.package_type);
  const unique_package_types = Array.from(new Set(all_package_types));
  const { rows: package_type_rows, cols: package_type_cols } = calcRowsCols(unique_package_types.length);

  return (
    <div className='container'>
      <div className='BeerGrid-container'>
        <div className='BeerGrid-side'>
          <div className='dropdown'>
            <Dropdown />
          </div>
          <BeerGrid rows={BeerData.length} cols={BeerData[0].length} onButtonClick={handleBeerItemClick} beers={BeerData} />
        </div>
      </div>

      <div className='filter-side'>
        <div className='beer-type-filter'>
          <h4 className='filter-label'>Beer Type</h4>
          <FilterMatrix rows={beer_type_rows} cols={beer_type_cols} onButtonClick={handleButtonClick} labels={unique_beer_types}/>
        </div>

        <div className='price-filter'>
          <h4 className='filter-label'>Price</h4>
          <div className='price-slider'>
          <RangeSlider min={min} max={max} />
          </div>
        </div>


        <div className='assortment-filter'>
          <h4 className='filter-label'>Assortment</h4>
          <FilterMatrix rows={assortment_type_rows} cols={assortment_type_cols} onButtonClick={handleButtonClick} labels={unique_assortment_types}/>
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
          <FilterMatrix rows={flavor_profile_rows} cols={flavor_profile_cols} onButtonClick={handleButtonClick} labels={unique_flavor_profiles}/>
        </div>

        <div className='package-filter'>
          <h4 className='filter-label'>Package</h4>
          <FilterMatrix rows={package_type_rows} cols={package_type_cols} onButtonClick={handleButtonClick} labels={unique_package_types} />
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
