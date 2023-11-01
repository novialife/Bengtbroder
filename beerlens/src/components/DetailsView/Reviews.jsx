import React from 'react';
import './styles/Reviews.css';
import BigReviewCard from './components/BigReviewCard';
import SmallReviewCard from './components/SmallReviewCard';

const Reviews = (beerData) => {
  return (
    <div id='reviews' className='reviewsContainer'>
      <h1 className='reviewsHeader'>Reviews</h1>
      <div class='parent'>
        <div class='div1'>
          <BigReviewCard />
        </div>
        {beerData.beerData.reviews.map((review, index) => (
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
