const {
  userProfile,
  chefDishes,
  chefReviews,
  findChefsInRange,
  findChefsByStyle,
  getSingleChef,
} = require('./queries');

module.exports = {
  Query: {
    findChefsInRange,
    findChefsByStyle,
    getSingleChef,
  },
  Chef: {
    userProfile,
    chefDishes,
    chefReviews,
  },
};
