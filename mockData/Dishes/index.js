const faker = require('faker');
const cuisineImageURLS = require('./imageUrls');
const {Dish} = require('../../api/DB/Models');

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

const _generateSingleDish = chefId => {
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

// Create Users File and Seed DB
const _generateMockDishes = (numOfDishes = 50, chefsArray) => {
  const dishesPayload = [];

  for (let i = 0; i < numOfDishes; i++) {
    const randomID = Math.floor(Math.random() * chefsArray.length);
    const chefID = chefsArray[randomID]._id;

    dishesPayload.push(_generateSingleDish(chefID));
  }

  return dishesPayload;
};

const createSaveDishesInDB = async savedChefsInDB => {
  // Create New Dishes and attach Chef IDs to Dishes
  const DishPayload = _generateMockDishes(50, savedChefsInDB);

  // Insert Dishes in the DB
  const Dishes_DB_Result = await Dish.insertMany(DishPayload);

  return Dishes_DB_Result;
};

module.exports = {
  createSaveDishesInDB,
};
