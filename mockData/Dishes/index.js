const faker = require('faker');

const cuisineOptions = [
  'Italian',
  'Indian',
  'American',
  'Chinese',
  'Korean',
  'Barbecue',
  'Burgers',
  'Japanese',
  'Mediterranean',
  'Mexican',
  'Ethiopian',
];

const cuisineImageURLS = {
  American: [
    'https://s3-media3.fl.yelpcdn.com/bphoto/qTW7Vfx-iIpjmPmBp1fLaw/o.jpg',
    'https://s3-media2.fl.yelpcdn.com/bphoto/v4yPMBpHzgq3vhEBKQi4fg/o.jpg',
    'https://s3-media2.fl.yelpcdn.com/bphoto/l8MuDDaduCYNKBlgVNDNcw/o.jpg',
    'https://s3-media3.fl.yelpcdn.com/bphoto/c94crz7o_nE-op_amqWYIQ/o.jpg',
    'https://s3-media1.fl.yelpcdn.com/bphoto/Wb0xGXNlcL7wo75xRJyApA/o.jpg',
    'https://s3-media1.fl.yelpcdn.com/bphoto/COUvqmkoMr4eUQoJ4IxJmA/o.jpg',
    'https://s3-media3.fl.yelpcdn.com/bphoto/8Fgdk6-BAkimxKzypmKDIA/o.jpg',
  ],
  Chinese: [
    'https://s3-media4.fl.yelpcdn.com/bphoto/dhLlSFO7K_N0VE26RcOYxQ/o.jpg',
    'https://s3-media3.fl.yelpcdn.com/bphoto/3JhhFwHx_wd7l6wgexieVw/o.jpg',
    'https://s3-media2.fl.yelpcdn.com/bphoto/ux2JC0C1Ak0qFJNBN4zpVw/o.jpg',
    'https://s3-media2.fl.yelpcdn.com/bphoto/5NnqRdqziLM7ugS75XuxAQ/o.jpg',
    'https://s3-media3.fl.yelpcdn.com/bphoto/AUGgsNOksK7WmC2CKUkOlQ/o.jpg',
    'https://s3-media4.fl.yelpcdn.com/bphoto/RlsAjAyUY63045ehu1RBrA/o.jpg',
    'https://s3-media4.fl.yelpcdn.com/bphoto/DPzpufUYvXKTkr_6Z0UHlw/o.jpg',
    'https://s3-media4.fl.yelpcdn.com/bphoto/EughiGiH61GLVHiSFj9d4Q/o.jpg',
    'https://s3-media4.fl.yelpcdn.com/bphoto/_uDzekvTvhT_1V0iECkx1w/o.jpg',
  ],
  Korean: [
    'https://s3-media1.fl.yelpcdn.com/bphoto/Iys8ofs5pMaKqBP8rmG1GQ/o.jpg',
    'https://s3-media4.fl.yelpcdn.com/bphoto/uQkgB8atY8WufPlt2-ZMYw/o.jpg',
    'https://s3-media2.fl.yelpcdn.com/bphoto/cXz2T6c-9ta30_BzMGd5eg/o.jpg',
    'https://s3-media2.fl.yelpcdn.com/bphoto/Xq7tokTsEpR7mOgVKGWR8w/o.jpg',
    'https://s3-media2.fl.yelpcdn.com/bphoto/FBLszzeRaCl4lLYYlNsP6w/o.jpg',
    'https://s3-media3.fl.yelpcdn.com/bphoto/WHrlezxs3WKgAXl0un7jVQ/o.jpg',
    'https://s3-media2.fl.yelpcdn.com/bphoto/jWc6Ey0iIlLL29ZB6DQAxQ/o.jpg',
    'https://s3-media2.fl.yelpcdn.com/bphoto/s0I1_75Xdx5Uji88ghbxSQ/o.jpg',
    'https://s3-media1.fl.yelpcdn.com/bphoto/qKTPVofT7rPhPhuzlx2POQ/o.jpg',
    'https://s3-media4.fl.yelpcdn.com/bphoto/3CLhEXxoIJIK5KOby14a4w/o.jpg',
  ],
  Barbecue: [
    'https://s3-media2.fl.yelpcdn.com/bphoto/1AMK5LO2fIIVp-TQLdjRUQ/o.jpg',
    'https://s3-media1.fl.yelpcdn.com/bphoto/jFpzGKKghe6PyVYsaHZNiw/o.jpg',
    'https://s3-media4.fl.yelpcdn.com/bphoto/CQX5wGe49GOUZoQpqmD2sg/o.jpg',
    'https://s3-media2.fl.yelpcdn.com/bphoto/UEdNL2qXbVLhxhqO0PIP1A/o.jpg',
    'https://s3-media1.fl.yelpcdn.com/bphoto/7VmONiACIaHuuYkIMa8AXQ/o.jpg',
    'https://s3-media3.fl.yelpcdn.com/bphoto/MC60LUI_GtmkSr3yFjXlcQ/o.jpg',
  ],
  Burgers: [
    'https://s3-media1.fl.yelpcdn.com/bphoto/dXkTRxLu4ZWKWVbO-8mDLg/o.jpg',
    'https://s3-media1.fl.yelpcdn.com/bphoto/yUm9BBABAFcIEGPnV5vr5A/o.jpg',
    'https://s3-media3.fl.yelpcdn.com/bphoto/N8WpYEmv15g-UxMDsCHWmw/o.jpg',
    'https://s3-media4.fl.yelpcdn.com/bphoto/5qwCe4uxErVVItH1QrjOnw/o.jpg',
    'https://s3-media4.fl.yelpcdn.com/bphoto/q_pwAsQ-8UDDCZqQ-hy53Q/o.jpg',
    'https://s3-media4.fl.yelpcdn.com/bphoto/cLGpOFjcv2ns7sLc2YBx6g/o.jpg',
  ],
  Indian: [
    'https://s3-media4.fl.yelpcdn.com/bphoto/uj4Ze51fOEUgxiyvHKAANg/o.jpg',
    'https://s3-media1.fl.yelpcdn.com/bphoto/49VOx5j26ZaFZMMW8agQxg/o.jpg',
    'https://s3-media4.fl.yelpcdn.com/bphoto/VgyOTAhcdkE6NuazIooxmg/o.jpg',
    'https://s3-media4.fl.yelpcdn.com/bphoto/EughiGiH61GLVHiSFj9d4Q/o.jpg',
    'https://s3-media1.fl.yelpcdn.com/bphoto/otBV9myV_sooMC14VSiLSg/o.jpg',
    'https://s3-media4.fl.yelpcdn.com/bphoto/mkp8MXPI2w0Xn0j7iocIYQ/o.jpg',
  ],
  Italian: [
    'https://s3-media3.fl.yelpcdn.com/bphoto/dYGmhRjSO--JMVgrQnzr6w/o.jpg',
    'https://s3-media3.fl.yelpcdn.com/bphoto/F0Gk3WhYmJBBa1CHu9k7oQ/o.jpg',
    'https://s3-media1.fl.yelpcdn.com/bphoto/otBV9myV_sooMC14VSiLSg/o.jpg',
    'https://s3-media3.fl.yelpcdn.com/bphoto/qm5jN0uK8xuPqD0_ctN0Cg/o.jpg',
    'https://s3-media1.fl.yelpcdn.com/bphoto/otBV9myV_sooMC14VSiLSg/o.jpg',
    'https://s3-media4.fl.yelpcdn.com/bphoto/p_iIeEGjQ2dxW_GXdtJoPw/o.jpg',
  ],
  Japanese: [
    'https://s3-media1.fl.yelpcdn.com/bphoto/SahdEgyIVfENagxRj1eilA/o.jpg',
    'https://s3-media4.fl.yelpcdn.com/bphoto/oeSi8qHprZ1Ncvkk7OHt0g/o.jpg',
    'https://s3-media4.fl.yelpcdn.com/bphoto/YCi689-pzghJCe52CLhvQw/o.jpg',
    'https://s3-media4.fl.yelpcdn.com/bphoto/og4aQbDEw-0ph8vUh86Leg/o.jpg',
    'https://s3-media3.fl.yelpcdn.com/bphoto/_pSvDwJOPohiBIbqDqOQmg/o.jpg',
    'https://s3-media4.fl.yelpcdn.com/bphoto/dk0PBCBh22uKDAnlTBF-5A/o.jpg',
  ],
  Mediterranean: [
    'https://s3-media1.fl.yelpcdn.com/bphoto/8AjCYodROVbsZpluhhOjrA/o.jpg',
    'https://s3-media1.fl.yelpcdn.com/bphoto/TpB0QCacPrbSGkk7JBk-gA/o.jpg',
    'https://s3-media4.fl.yelpcdn.com/bphoto/sLjki_DpCe2zIJljXWx6Cg/o.jpg',
    'https://s3-media4.fl.yelpcdn.com/bphoto/x87du64rkNYKZUZUhHYX7A/o.jpg',
    'https://s3-media3.fl.yelpcdn.com/bphoto/u8rd3S9Vhhbqtca5ttuPCw/o.jpg',
    'https://s3-media1.fl.yelpcdn.com/bphoto/0wyP990JuR3C87oqR8NtPA/o.jpg',
  ],
  Mexican: [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg/1200px-001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg',
  ],
  Ethiopian: [
    'https://2.bp.blogspot.com/-AddF70eZQ48/Va-f0vWZl2I/AAAAAAAAoYM/tqkRODDvZRA/s400/sonic-1-dollar-hot-dogs-2015.jpg',
  ],
};

const generateSingleDish = chefId => {
  const Dish = {};

  const randomCuisineIdx = Math.floor(Math.random() * cuisineOptions.length);
  const cuisineType = cuisineOptions[randomCuisineIdx];
  const name = `${cuisineType} ${faker.lorem.slug()}`;

  const imageOptions = cuisineImageURLS[cuisineType];
  const randomImageIdx = Math.floor(Math.random() * imageOptions.length);
  const dishImages = [imageOptions[randomImageIdx]];

  const randomDonation = Math.floor(Math.random() * 30);
  const isActive = Math.floor(Math.random() * 10);
  const quantity = Math.floor(Math.random() * 10);

  Dish.cuisineType = cuisineType;
  Dish.name = name;
  Dish.description = faker.lorem.slug();
  Dish.dishImages = dishImages;
  Dish.chefId = chefId;
  Dish.allergies = [];
  Dish.cashDonation = randomDonation;
  Dish.isActive = isActive <= 4 ? false : true;
  Dish.quantity = quantity;

  return Dish;
};

module.exports = {
  generateSingleDish,
};
