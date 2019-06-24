const getChefReviews = require('./getChefReviews');
const getUser = require('./getUser');
const chefReviews = require('./chefReviews');
const chefDishes = require('./chefDishes');
const findChefsInRange = require('./findChefsInRange');
const findChefsByStyle = require('./findChefsByStyle');

module.exports = {
  getUser,
  getChefReviews,
  findChefsInRange,
  findChefsByStyle,
  chefDishes,
  chefReviews,
};
