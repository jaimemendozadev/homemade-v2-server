const {postChefReview} = require('./mutations');

const {
  userProfile,
  chefDishes,
  chefReviews,
  findChefsInRange,
  findChefsByStyle,
  getChefReviews,
  getSingleChef,
} = require('./queries');

module.exports = {
  Query: {
    getChefReviews,
    findChefsInRange,
    findChefsByStyle,
    getSingleChef,
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
