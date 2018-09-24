// parent, args, context, info
const getUser = async (_parent, { authID }, { models }) => {
  console.log('inside getUser')

  const { User } = models

  const foundUser = await User.findById(authID)

  console.log(`foundUser is `, foundUser)

  return foundUser
}

const getChefReviews = () => {}
const getUserReviews = () => {}
const getChefDetails = () => {}
const findChefsInRange = () => {}
const findChefsByStyle = () => {}
const chefDishes = () => {}

module.exports = {
  getUser,
  getChefReviews,
  getUserReviews,
  getChefDetails,
  findChefsInRange,
  findChefsByStyle,
  chefDishes,
}
