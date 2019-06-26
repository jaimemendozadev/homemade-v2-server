const {postChefReview} = require('./mutations');

const {
  userProfile,
  chefDishes,
  chefReviews,
  findChefsByStyle,
  findChefsInRange,
  getChefReviews,
  testGetAllChefs
} = require('./queries');

module.exports = {
  Query: {
    getChefReviews,
    findChefsInRange,
    findChefsByStyle,
    testGetAllChefs
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
