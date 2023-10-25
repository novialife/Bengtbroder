import belgiumFlag from './assets/images/flag_of_Belgium.png';
import fonteinenImage from './assets/images/fonteinen.png';

export const beerData = {
  id: 1,
  name: '3 Fonteinen',
  type: 'Ale, Dark Strong Belgian Ale',
  ratingAverage: 4.2,
  price: 6.6,
  package: 'bottle',
  alcoholPercentage: 5.0,
  assortment: 'seasonal',
  brewery: 'Brasserie Rochefort',
  country: 'Belgium',
  flag: belgiumFlag,
  image: fonteinenImage,
  overviewDescription:
    'Fruity, slightly sour taste with sweetness and clear character of apples, hints of honey and bitter orange. Served at 6-8°C as a companion drink, or with not too sweet fruit and berry desserts.',
  numberInStock: 100,
  expectedDeliveryDate: {
    month: 'October',
    day: 19,
  },
  tasteDescription: {
    scent:
      'Malty aroma with hints of rye bread, crackers, orange marmalade, spices and dried fruit.',
    flavor:
      'Malty taste with hints of rye bread, crackling, orange peel, spices and dried fruit.',
    color: 'Brownish yellow color.',
  },
  pairings: {
    food: ['Chocolate Mousse', 'Fried Camembert', 'Goat Cheese'],
    servingTips: [
      'Served at 6-8°C as a companion drink, or with not too sweet fruit and berry desserts.',
    ],
  },
  about: {
    ingredients: ['Barley malt', 'wheat', 'hops', 'apple juice'],
    brewery:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam turpis nec accumsan imperdiet. Curabitur rutrum facilisis ultricies. Sed feugiat auctor neque non porta. Maecenas risus dui, rhoncus ornare mauris id, lacinia varius nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis sem libero, cursus sit amet rutrum non, egestas nec lectus. Cras tempor metus ut arcu auctor, et malesuada ipsum interdum.',
  },
  reviews: [
    {
      name: 'Hanna Snarberg',
      rating: 4,
      text: 'I really recommend this beer. It is quite similar to Rocheford 10.',
    },
    {
      name: 'Alfred Knowles',
      rating: 4,
      text: 'I had this beer with goat cheese as suggested and I highly recommend.',
    },
    {
      name: 'Filip Mattsson',
      rating: 4,
      text: 'Similar in taste to Gueuzerie. But this was even better.',
    },
    {
      name: 'Mervan Kaya',
      rating: 4,
      text: 'All my friends and I loved this beer. Perfect for a chill night.',
    },
  ],
  ratings: {
    average: 4.2,
    stars5: 75,
    stars4: 15,
    stars3: 5,
    stars2: 3,
    stars1: 2,
  },
};
