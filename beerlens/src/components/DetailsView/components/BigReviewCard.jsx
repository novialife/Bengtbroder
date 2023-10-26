import React from 'react';
import { beerData } from '../../../beerData';
import StarIcon from '@mui/icons-material/Star';
import Rating from '@mui/material/Rating';
import '../styles/BigReviewCard.css';

const BigReviewCard = () => {
  return (
    <div className='bigReviewCardContainer'>
      <div className='bigReviewCardRating'>{beerData.ratingAverage}</div>
      <Rating
        name='read-only'
        value={beerData.ratingAverage}
        precision={0.1}
        size='medium'
        readOnly
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize='inherit' />}
      />
      {beerData.ratings.starsDistribution.map((percentage, index) => (
        <div className='bigReviewCardProgress'>
          <span>{5 - index + ' stars'}</span>
          <div className='bigReviewCardProgressBar'>
            <div
              className='bigReviewCardProgressBarPercentage'
              style={{ width: +percentage.toString() + '%' }}
            ></div>
          </div>
          <span>{percentage.toString() + '%'}</span>
        </div>
      ))}
      <button className='bigReviewCardBtn'>Leave a review</button>
    </div>
  );
};

export default BigReviewCard;
