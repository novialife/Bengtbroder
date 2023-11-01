import { BeerInfo } from './BeerItem';

export async function getBeers() {

  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8000';

  try {
    const response = await fetch(`${BACKEND_URL}/beers`);
    const beersData = await response.json();
    
    if (!Array.isArray(beersData)) {
      throw new Error('Data must be an array');
    }

    const beers = beersData.map(beer => new BeerInfo(
      beer.id, 
      beer.BeerIcon,
      beer.name,
      beer.brewery,
      beer.country,
      beer.countryCode,
      beer.volume,
      beer.abv,
      beer.price,
      beer.type,
      beer.assortment_type,
      beer.flavor_profile,
      beer.package_type,
      beer.rating_count,
      beer.rating_score,
    ));

    return beers;
  } catch (error) {
    console.error('Error fetching beers:', error);
    return [];
  }
}

