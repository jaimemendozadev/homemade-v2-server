// parent, args, context, info
const getUser = async (_parent, {userID}, {models}) => {
  console.log('inside getUser');

  const {User} = models;

  try {
    const foundUser = await User.findById(userID);

    console.log(`foundUser is `, foundUser);

    return foundUser;

  } catch(error) {
    console.log('Error getting a user ', error);

    throw new Error("There was an error finding the User.");
  }
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
