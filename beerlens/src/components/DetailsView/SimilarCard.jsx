import React from 'react';
import './styles/SimilarCard.css';
import { beerData } from '../../beerData';
import recommededImg from '../../assets/images/recommended.png';
import { BsBookmark } from 'react-icons/bs';

const SimilarCard = () => {
  return (
    <div className='similarCardOuter'>
      <div className='similarCardContainer'>
        <div className='similarCardTopInfo'>
          <span className='similarCardTopLeftInfo'>
            <div className='similarCardType'>{beerData.type.toUpperCase()}</div>
            <div className='similarCardName'>{beerData.name}</div>
            <div className='similarCardBrewery'>{beerData.brewery}</div>
            <div>
              <span>{beerData.country}</span>
              <img className='similarCardFlag' src={beerData.flag}></img>
            </div>
            <div className='similarCardNumbers'>
              <span>{beerData.volume + ' ml'}</span>
              <span>{beerData.alcoholPercentage + ' % vol'}</span>
              <span className='similarCardPrice'>{beerData.price + ' €'}</span>
            </div>
          </span>
          <img className='similarCardImage' src={beerData.image}></img>
        </div>
        <div className='similarCardBottom'>
          <button className='similarCardBtn'>Add to cart</button>
          <span className='similarCardRecommendedText'>
            Recommended for you
          </span>
          <img src={recommededImg} className='similarCardRecommendedIcon'></img>
        </div>
        <BsBookmark className='similarCardSave' />
      </div>
    </div>
  );
};

export default SimilarCard;
