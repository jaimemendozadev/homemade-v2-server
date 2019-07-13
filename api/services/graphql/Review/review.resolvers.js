const {postChefReview} = require('./mutations');
const {
  getChefReviews
} = require('./queries');

module.exports = {
  Query: {
    getChefReviews,
  },
  Mutation: {
    postChefReview,
  },

  Review: {

  },
};
