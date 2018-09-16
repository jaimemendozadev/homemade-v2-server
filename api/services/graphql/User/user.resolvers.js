const {
  createUser,
  updateUser,
  addSignature,
  postUserReview,
  postChefReview,
} = require('./mutations')
const { getUser, getChefReviews, getUserReviews } = require('./queries')

module.exports = {
  Query: {
    getUser,
    getChefReviews,
    getUserReviews,
  },
  Mutation: {
    createUser,
    updateUser,
    addSignature,
    postUserReview,
    postChefReview,
  },
}
