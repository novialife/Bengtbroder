import { BeerInfo } from './BeerItem';
import Image from '../../assets/images/brewdog_punk_ipa.png'


const BeerData = [
  [
    new BeerInfo(1, Image, 'Beer Name 1', 'Brewery A', 'USA', 'US', '500 ml', '5%', 4.99, 'Ale', 'Regular', 'Fruity', 'Bottle'),
    new BeerInfo(2, Image, 'Beer Name 2', 'Brewery B', 'Germany', 'DE', '330 ml', '4.5 %', 3.99, 'Lager', 'Upcoming', 'Crisp', 'Can'),
  ],
  [
    new BeerInfo(3, Image, 'Beer Name 3', 'Brewery D', 'USA', 'US', '500 ml', '6 %', 5.99, 'IPA', 'Seasonal', 'Hoppy', 'Bottle'),
    new BeerInfo(4, Image, 'Beer Name 4', 'Brewery E', 'United Kingdom', 'GB', '330 ml', '4 %', 4.49, 'Pilsner', 'Regular', 'Malty', 'Can'),
  ],
  [
    new BeerInfo(5, Image, 'Beer Name 5', 'Brewery G', 'France', 'FR', '750 ml', '7.5 %', 8.99, 'Saison', 'Seasonal', 'Spicy', 'Bottle'),
    new BeerInfo(6, Image, 'Beer Name 6', 'Brewery H', 'Canada', 'CA', '330 ml', '5 %', 4.59, 'Bock', 'Upcoming', 'Rich', 'Can'),
  ],
  [
    new BeerInfo(7, Image, 'Beer Name 7', 'Brewery J', 'USA', 'US', '500 ml', '5.5 %', 5.99, 'Ale', 'Regular', 'Sweet', 'Bottle'),
  ]
];


  
  export default BeerData;
  