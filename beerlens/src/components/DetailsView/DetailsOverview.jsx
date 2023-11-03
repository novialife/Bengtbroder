import React, { useState, useEffect } from 'react';
import './styles/DetailsOverview.css';
import { beerData } from '../../beerData';
import Rating from '@mui/material/Rating';
import { BsDot } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { FaXTwitter } from 'react-icons/fa6';
import SaveIcon from './components/Icons/Save';
import StarIcon from '@mui/icons-material/Star';
import { Base64Image } from '../ExploreView/utils'
import { FlagIcon } from 'react-flag-kit';


const DetailsOverview = (beerData) => {
  const [liked, setLiked] = useState(false);
  
  return (
    <div className='detailsOverviewContainer'>
         <div className='detailsOverviewImage'>
            <Base64Image base64String={beerData.beerData.BeerIcon} />
          </div>
      <div className='detailsOverviewInfo'>
        <div className='detailsOverviewType'>{beerData.beerData.type.toUpperCase()}</div>
        <div className='detailsOverviewNameAndSave'>
          <span className='detailsOverviewName'>{beerData.beerData.name}</span>
          <span className='detailsOverviewSave'>
            <SaveIcon isSolid={liked} onClick={() => setLiked(!liked)} />
          </span>
        </div>
        <span className='detailsOverviewRatingAndPrice'>
          <span>
            <span className='detailsOverviewPrice'>{beerData.beerData.price}</span>
            <span className='detailsOverviewCurrency'>{' ' + '$'}</span>
          </span>
          <span className='detailsOverviewRating'>
            <Rating
              name='read-only'
              value={beerData.beerData.rating_score}
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
          <span>{beerData.beerData.volume}</span>
          <BsDot size={30} />
          <span>{beerData.beerData.abv + ' % vol'}</span>
          <BsDot size={30} />
          <span>{beerData.beerData.assortment_type + ' assortment'}</span>
        </div>
        <div className='detailsOverviewOrigin'>
          <span>{beerData.beerData.brewery + ', ' + beerData.beerData.country}</span>
          <FlagIcon
                  className='detailsOverviewFlag'
                  code={beerData.beerData.countryCode}
                  style={{ width: '15px', height: '10 px' }}
          />
        </div>
        <span className='detailsOverviewLine'></span>
        <div>{beerData.beerData.overview_description.replace(/Â/g, '')}</div>
        <span className='detailsOverviewLine'></span>
        <div className='detailsOverviewLinks'>
          <button className='detailsOverviewOriginBtn'>Add to cart</button>
          <span className='detailsOverviewStock'>
            <span className='detailsOverviewOriginDot'>·</span>
            <span>
              In stock:
              {beerData.beerData.number_in_stock > 10
                ? ' 50+'
                : ' ' + beerData.beerData.number_in_stock}
            </span>
          </span>
          <span>
            Expected delivery:{' '}
            {beerData.beerData.expected_delivery_date.month.substring(0, 3) +
              ' ' +
              beerData.beerData.expected_delivery_date.day}
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
