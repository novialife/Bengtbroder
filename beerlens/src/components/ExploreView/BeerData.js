import { BeerInfo } from './BeerItem';
import Image from '../../assets/images/brewdog_punk_ipa.png'


const BeerData = [
  [
    new BeerInfo(1, Image, 'Beer Name 1', 'Brewery A', 'USA', 'US', '500 ml', '5%', '$4.99', 'Ale'),
    new BeerInfo(2, Image, 'Beer Name 2', 'Brewery B', 'Germany', 'DE', '330 ml', '4.5 %', '$3.99', 'Lager'),
    new BeerInfo(3, Image, 'Beer Name 3', 'Brewery C', 'Belgium', 'BE', '750 ml', '7 %', '$7.99', 'Stout'),
  ],
  [
    new BeerInfo(4, Image, 'Beer Name 4', 'Brewery D', 'USA', 'US', '500 ml', '6 %', '$5.99', 'IPA'),
    new BeerInfo(5, Image, 'Beer Name 5', 'Brewery E', 'United Kingdom', 'GB', '330 ml', '4 %', '$4.49', 'Pilsner'),
    new BeerInfo(6, Image, 'Beer Name 6', 'Brewery F', 'Ireland', 'IR', '500 ml', '4.8 %', '$4.99', 'Porter'),
  ],
  [
    null,
    new BeerInfo(7, Image, 'Beer Name 7', 'Brewery G', 'France', 'FR', '750 ml', '7.5 %', '$8.99', 'Saison'),
    new BeerInfo(8, Image, 'Beer Name 8', 'Brewery H', 'Canada', 'CA', '330 ml', '5 %', '$4.59', 'Bock'),
  ],
];

  
  export default BeerData;
  