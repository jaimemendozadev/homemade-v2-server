const {postChefReview} = require('./mutations');

const {
  userProfile,
  chefDishes,
  chefReviews,
  findChefsByStyle,
  findChefsInRange,
  getChefReviews,
} = require('./queries');

module.exports = {
  Query: {
    getChefReviews,
    findChefsInRange,
    findChefsByStyle,
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
