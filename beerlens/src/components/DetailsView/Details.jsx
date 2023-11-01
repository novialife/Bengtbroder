import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DetailsOverview from './DetailsOverview';
import TasteDescription from './TasteDescription';
import Pairings from './Pairings';
import About from './About';
import NavBar from './NavBar';
import Reviews from './Reviews';
import './styles/Details.css';
import SimilarBeers from './SimilarBeers';

const Details = () => {
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8000';

  const { beer_id } = useParams();
  const [beerInfo, setBeer] = useState({});
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const beerResponse = await fetch(`${BACKEND_URL}/beers/${beer_id}/info`);
        const beerData = await beerResponse.json();
        setBeer(beerData);

        const reviewsResponse = await fetch(`${BACKEND_URL}/beers/${beer_id}/reviews`);
        const reviewsData = await reviewsResponse.json();
        setReviews(reviewsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [beer_id]);

  if (loading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    );
  }
  
  const combinedBeerObject = {
    ...beerInfo,
    ...reviews,
    reviews: [...(beerInfo.reviews || []), ...(reviews.reviews || [])]
  };

  

  return (
    <div className='detailsContainer'>
      <DetailsOverview beerData={combinedBeerObject} />
      <NavBar />
      <TasteDescription beerData={combinedBeerObject}/>
      <span className='detailsLine' />
      <Pairings beerData={combinedBeerObject}/>
      <span className='detailsLine' />
      <About beerData={combinedBeerObject}/>
      <span className='detailsLine' />
      <Reviews beerData={combinedBeerObject}/>
      <span className='detailsLine' />
      <SimilarBeers />
    </div>
  );
};

export default Details;
