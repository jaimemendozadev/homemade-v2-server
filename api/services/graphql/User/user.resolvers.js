const {
  createUser,
  updateUser,
  addSignature,
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
    postChefReview,
  },
  User: {
    chefDishes,
    chefReviews,
  },
};
