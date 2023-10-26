import React from 'react';
import './styles/Reviews.css';
import BigReviewCard from './components/BigReviewCard';
import SmallReviewCard from './components/SmallReviewCard';
import { beerData } from '../../beerData';

const Reviews = () => {
  return (
    <div className='reviewsContainer'>
      <h2>Reviews</h2>
      <div class='parent'>
        <div class='div1'>
          <BigReviewCard />
        </div>
        {beerData.reviews.map((review, index) => (
          <div className={'div' + (index + 2).toString()}>
            <SmallReviewCard
              name={review.name}
              rating={review.rating}
              text={review.text}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
