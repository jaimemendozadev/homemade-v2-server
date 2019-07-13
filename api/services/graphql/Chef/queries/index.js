const chefReviews = require('./chefReviews');
const chefDishes = require('./chefDishes');
const findChefsInRange = require('./findChefsInRange');
const findChefsByStyle = require('./findChefsByStyle');
const userProfile = require('./userProfile');
const getSingleChef = require('./getSingleChef');

module.exports = {
  findChefsInRange,
  findChefsByStyle,
  chefDishes,
  chefReviews,
  userProfile,
  getSingleChef,
};
