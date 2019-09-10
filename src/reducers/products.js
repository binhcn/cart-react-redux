var initialState = [
  {
    id: 1,
    name: 'Iphone 7 Plus',
    image: 'https://cdn.tgdd.vn/Products/Images/42/87839/iphone-7-plus-128gb-hh-600x600.jpg',
    description: 'The product is made by Apple Corporation',
    price: 500,
    inventory: 10,
    rating: 4
  },
  {
    id: 2,
    name: 'Samsung Galaxy S7',
    image: 'https://image-us.samsung.com/SamsungUS/home/mobile/phones/galaxy-s/pdp/sm-g930vzkatfn/gallery/Pdpdefault-SM-G930VZKATFN-600x600-C1-052016.jpg?$product-details-jpg$',
    description: 'The product is made by Samsung Corporation',
    price: 400,
    inventory: 15,
    rating: 3
  },
  {
    id: 3,
    name: 'Oppo F1s',
    image: 'https://images-na.ssl-images-amazon.com/images/I/51dRpC4qytL.jpg',
    description: 'The product is made by Oppo Corporation',
    price: 450,
    inventory: 5,
    rating: 5
  }
];

const products = (state = initialState, action) => {
  switch(action.type){
    default:
      return [...state];
  }
}

export default products;