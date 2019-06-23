// parent, args, context, info
const getUser = async (_parent, {userID}, {models}) => {
  console.log('inside getUser');

  const {User} = models;

  const foundUser = await User.findById(userID);

  console.log(`foundUser is `, foundUser);

  return foundUser;
};

const getChefReviews = (_parent, {chefID}, {models}) => {
  const {Review} = models;

  const foundChefReviews = Review.findById(chefID);

  console.log('foundChefReviews are ', foundChefReviews);

  return foundChefReviews;
};
// const getUserReviews = () => {};
const getChefDetails = () => {};
const findChefsInRange = () => {};
const findChefsByStyle = () => {};
const chefDishes = () => {};

module.exports = {
  getUser,
  getChefReviews,
  getChefDetails,
  findChefsInRange,
  findChefsByStyle,
  chefDishes,
};
