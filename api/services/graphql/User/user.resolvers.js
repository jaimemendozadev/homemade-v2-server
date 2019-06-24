const {
  createUser,
  updateUser,
  addSignature,
  postUserReview,
  postChefReview,
} = require('./mutations');

const {
  getUser,
  getChefReviews,
  findChefsInRange,
  findChefsByStyle,
  chefDishes,
  chefReviews,
} = require('./queries');

module.exports = {
  Query: {
    getUser,
    getChefReviews,
    findChefsInRange,
    findChefsByStyle,
  },
  Mutation: {
    createUser,
    updateUser,
    addSignature,
    postUserReview,
    postChefReview,
  },
  User: {
    chefDishes,
    chefReviews,
  },
};
