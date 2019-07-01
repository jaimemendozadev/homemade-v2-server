const getChefReviews = require('./getChefReviews');
const chefReviews = require('./chefReviews');
const chefDishes = require('./chefDishes');
const findChefsInRange = require('./findChefsInRange');
const findChefsByStyle = require('./findChefsByStyle');
const userProfile = require('./userProfile');
const getSingleChef = require('./getSingleChef');

const testGetAllChefs = async (parent, args, {models}) => {
  const {Chef} = models;
  const result = await Chef.find({});

  console.log('testGetAllChefs result ', result);

  return [];
};

module.exports = {
  getChefReviews,
  findChefsInRange,
  findChefsByStyle,
  chefDishes,
  chefReviews,
  userProfile,
  getSingleChef,
  testGetAllChefs,
};
