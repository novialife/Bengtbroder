import React, { useState } from 'react';
import './styles/Explore.css';
import { Dropdown } from './utils';
import { BeerGrid } from './BeerItem';
import { FilterMatrix, RangeSlider } from './Filters';
import BeerData  from './BeerData';
import "@fontsource/inter";
import searchIcon from '../../assets/images/search_icon.png';
import { useNavigate } from 'react-router-dom';


function Body() {
  const navigate = useNavigate();

  const handleBeerItemClick = (row, col, beer) => {
    console.log('Selected beer:', beer);
    navigate('/details', { state: { beer } });
  };

  const [activeFilters, setActiveFilters] = useState({
    beerType: [],
    assortmentType: [],
    flavorProfile: [],
    packageType: [],
    
  });

  const handleButtonClick = (filterType, label, isActive) => {
    setActiveFilters(prevFilters => {
      const currentFilters = prevFilters[filterType] || [];
      const updatedFilters = isActive
        ? [...currentFilters, label]
        : currentFilters.filter(l => l !== label);
      return {
        ...prevFilters,
        [filterType]: updatedFilters,
      };
    });
  };
  
  const [priceRange, setPriceRange] = useState([0, 100]);

  const handleRangeChange = (newRange) => {
    setPriceRange(newRange);
  };

  const filterBeers = () => {
    return BeerData.map(row =>
      row.filter(beer => {
        if (!beer) return false;
  
        const price = parseFloat(beer.price); // Assuming beer.price is a string, convert it to a float
        if (isNaN(price)) return false; // If price is not a number, exclude this beer
        if (price < priceRange[0] || price > priceRange[1]) return false; // Filter based on price range
  
        if (activeFilters.beerType.length > 0 && !activeFilters.beerType.includes(beer.type)) {
          return false;
        }
        if (activeFilters.assortmentType.length > 0 && !activeFilters.assortmentType.includes(beer.assortment_type)) {
          return false;
        }
        if (activeFilters.flavorProfile.length > 0 && !activeFilters.flavorProfile.includes(beer.flavor_profile)) {
          return false;
        }
        if (activeFilters.packageType.length > 0 && !activeFilters.packageType.includes(beer.package_type)) {
          return false;
        }
        return true;
      })
    ).filter(row => row.length > 0); // Filter out empty rows
  };


  const calcRowsCols = (length) => {
    if (length <= 0) return { rows: 0, cols: 0 };
    const cols = Math.min(3, length);
    const rows = Math.ceil(length / cols);
    return { rows, cols };
  };
  
  const filteredBeers = filterBeers();

  const min = BeerData.flat().length > 0 ? Math.floor(BeerData.flat().reduce((min, beer) => beer.price < min.price ? beer : min).price) : 0;
  const max = BeerData.flat().length > 0 ? Math.ceil(BeerData.flat().reduce((max, beer) => beer.price > max.price ? beer : max).price) : 0;
  
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
          <BeerGrid rows={filteredBeers.length} cols={filteredBeers[0].length} onButtonClick={handleBeerItemClick} beers={filteredBeers} />
        </div>
      </div>

      <div className='filter-side'>
        <div className='beer-type-filter'>
          <h4 className='filter-label'>Beer Type</h4>
          <FilterMatrix 
            rows={beer_type_rows}
            cols={beer_type_cols}
            onButtonClick={(label, isActive) => handleButtonClick('beerType', label, isActive)}
            labels={unique_beer_types}
          />
        </div>

        <div className='price-filter'>
          <h4 className='filter-label'>Price</h4>
          <div className='price-slider'>
          <RangeSlider min={min} max={max} onChange={handleRangeChange} />
          </div>
        </div>


        <div className='assortment-filter'>
          <h4 className='filter-label'>Assortment</h4>
          <FilterMatrix 
            rows={assortment_type_rows} 
            cols={assortment_type_cols} 
            onButtonClick={(label, isActive) => handleButtonClick('assortmentType', label, isActive)} 
            labels={unique_assortment_types}
          />
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
          <FilterMatrix 
            rows={flavor_profile_rows} 
            cols={flavor_profile_cols} 
            onButtonClick={(label, isActive) => handleButtonClick('flavorProfile', label, isActive)} 
            labels={unique_flavor_profiles}
          />
        </div>

        <div className='package-filter'>
          <h4 className='filter-label'>Package</h4>
          <FilterMatrix 
            rows={package_type_rows} 
            cols={package_type_cols} 
            onButtonClick={(label, isActive) => handleButtonClick('packageType', label, isActive)} 
            labels={unique_package_types} 
          />
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
