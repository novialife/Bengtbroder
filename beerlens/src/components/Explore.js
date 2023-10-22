import React from 'react';
import { HoverDropdown, HorizontalScrollComponent } from './utils';
import './styles/Explore.css';

function Body() {
  const cardData = [
    {
      img_path: '/images/brutal_brewing_a_ship_full_of_ipa.png',
      title: 'Card 1',
      content: 'Content of card 1',
      price: '£1.99',
    },
    {
      img_path: '/images/brewdog_punk_ipa.png',
      title: 'Card 2',
      content: 'Content of card 2',
      price: '£2.99',
    },
  ];

  return (
    <div>
      <div className='dropdown-container'>
        <HoverDropdown
          title='Beers'
          items={['Lager', 'IPA', 'Stout', 'Ale']}
          toggleImageSrc='/images/beerglass.jpg'
        />

        <HoverDropdown
          title='Pairs with'
          items={['Burger', 'Pizza', 'Cheese', 'Fries']}
          toggleImageSrc='/images/pairings.png'
        />

        <HoverDropdown
          title='Offers'
          items={['Discount 1', 'Discount 2', 'Promotion 1']}
          toggleImageSrc={'/images/offers.png'}
        />

        <HoverDropdown
          title='Regions'
          items={['Sweden', 'Gernmany', 'USA', 'Croatia']}
          toggleImageSrc='/images/regions.png'
        />
      </div>

      <div className='App'>
        <HorizontalScrollComponent cardData={cardData} />
      </div>
    </div>
  );
}

export default Body;
