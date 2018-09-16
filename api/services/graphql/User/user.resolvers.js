const {
  createUser,
  updateUser,
  addSignature,
  postUserReview,
  postChefReview,
} = require('./mutations')
const {
  getUser,
  getChefReviews,
  getUserReviews,
  getChefDetails,
  findChefsInRange,
  findChefsByStyle,
  chefDishes,
} = require('./queries')

module.exports = {
  Query: {
    getUser,
    getChefReviews,
    getUserReviews,

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
  },
}
