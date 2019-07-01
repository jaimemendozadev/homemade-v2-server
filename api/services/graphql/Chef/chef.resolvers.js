const {postChefReview} = require('./mutations');

const {
  userProfile,
  chefDishes,
  chefReviews,
  findChefsByStyle,
  findChefsInRange,
  getChefReviews,
  getSingleChef,
  testGetAllChefs,
} = require('./queries');

module.exports = {
  Query: {
    getChefReviews,
    findChefsInRange,
    findChefsByStyle,
    getSingleChef,
    testGetAllChefs,
  },
  Mutation: {
    postChefReview,
  },

  Chef: {
    userProfile,
    chefDishes,
    chefReviews,
  },
};
