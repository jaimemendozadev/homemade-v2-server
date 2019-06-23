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
  getChefDetails,
  findChefsInRange,
  findChefsByStyle,
  chefDishes,
  chefReviews
} = require('./queries');

module.exports = {
  
  Query: {
    getUser,
    getChefReviews,
    getChefDetails,
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
