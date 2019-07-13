const {postChefReview} = require('./mutations');
const {getChefReviews, chefId, orderId, customerId} = require('./queries');

module.exports = {
  Query: {
    getChefReviews,
  },
  Mutation: {
    postChefReview,
  },

  Review: {
    chefId,
    orderId,
    customerId
  },
};
