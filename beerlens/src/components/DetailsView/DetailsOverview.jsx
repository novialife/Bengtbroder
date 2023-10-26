import React from 'react';
import './styles/DetailsOverview.css';
import { beerData } from '../../beerData';
import Rating from '@mui/material/Rating';
import { BsDot } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { FaXTwitter } from 'react-icons/fa6';
import { BsBookmark } from 'react-icons/bs';
import StarIcon from '@mui/icons-material/Star';

const DetailsOverview = () => {
  return (
    <div className='detailsOverviewContainer'>
      <img className='detailsOverviewImage' src={beerData.image} />
      <div className='detailsOverviewInfo'>
        <div className='detailsOverviewType'>{beerData.type.toUpperCase()}</div>
        <div className='detailsOverviewNameAndSave'>
          <span className='detailsOverviewName'>{beerData.name}</span>
          <BsBookmark className='detailsOverviewSave' />
        </div>
        <span className='detailsOverviewRatingAndPrice'>
          <span>
            <span className='detailsOverviewPrice'>{beerData.price}</span>
            <span className='detailsOverviewCurrency'>{' ' + '€'}</span>
          </span>
          <span className='detailsOverviewRating'>
            <Rating
              name='read-only'
              value={beerData.ratingAverage}
              precision={0.1}
              size='medium'
              readOnly
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize='inherit' />
              }
            />
          </span>
        </span>
        <div className='detailsOverviewNumbers'>
          <span>{beerData.volume + ' ml'}</span>
          <BsDot size={30} />
          <span>{beerData.alcoholPercentage + ' % vol'}</span>
          <BsDot size={30} />
          <span>{beerData.assortment + ' assortment'}</span>
        </div>
        <div className='detailsOverviewOrigin'>
          <span>{beerData.brewery + ', ' + beerData.country}</span>
          <img className='detailsOverviewFlag' src={beerData.flag} />
        </div>
        <span className='detailsOverviewLine'></span>
        <div>{beerData.overviewDescription}</div>
        <span className='detailsOverviewLine'></span>
        <div className='detailsOverviewLinks'>
          <button className='detailsOverviewOriginBtn'>Add to cart</button>
          <span className='detailsOverviewOriginDot'>·</span>
          <span className='detailsOverviewStock'>
            In stock:
            {beerData.numberInStock > 10
              ? ' 50+'
              : ' ' + beerData.numberInStock}
          </span>
          <span>
            Expected delivery:{' '}
            {beerData.expectedDeliveryDate.month.substring(0, 3) +
              ' ' +
              beerData.expectedDeliveryDate.day}
          </span>
          <span className='detailsOverviewShare'>
            <BsFacebook size='22' />
            <BsInstagram size='22' />
            <FaXTwitter size='22' />
          </span>
        </div>
      </div>
    </div>
  );
};

export default DetailsOverview;
