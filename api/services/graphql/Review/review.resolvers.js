const {postChefReview} = require('./mutations');
const {getChefReviews, chefId, orderId} = require('./queries');

module.exports = {
  Query: {
    getChefReviews,
  },
  Mutation: {
    postChefReview,
  },

  Review: {
    chefId,
    orderId
  },
};
