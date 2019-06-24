const {postChefReview} = require('./mutations');

const {
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
    chefDishes,
    chefReviews,
  },
};
