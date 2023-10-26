import React from 'react';
import '../styles/SmallReviewCard.css';
import { FaUserCircle } from 'react-icons/fa';
import { Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const SmallReviewCard = ({ name, rating, text }) => {
  return (
    <div className='reviewCardContainer'>
      <div className='reviewCardRaterInfo'>
        <FaUserCircle size={39} />
        <div className='reviewCardNameAndRating'>
          <div className='reviewCardName'>{name}</div>
          <Rating
            name='read-only'
            value={rating}
            precision={0.1}
            size='small'
            readOnly
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize='inherit' />
            }
          />
        </div>
      </div>
      <div className='reviewCardText'>{text}</div>
    </div>
  );
};

export default SmallReviewCard;
