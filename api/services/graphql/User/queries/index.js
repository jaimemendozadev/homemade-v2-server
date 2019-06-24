// parent, args, context, info
const getUser = async (_parent, {userID}, {models}) => {

  const {User} = models;

  try {
    const foundUser = await User.findById(userID);

    return foundUser;
  } catch (error) {
    console.log('Error getting a user ', error);

    throw new Error('There was an error finding the User.');
  }
};

const getChefReviews = async(_parent, {chefID}, {models}) => {
  const {User} = models;

  try {
    const result = await User.findOne({_id: chefID}).populate("chefReviews");

    return result.chefReviews;

  } catch(error) {
    throw new Error("There was a problem getting the chef's reviews.");
  }
};

const chefReviews = async (parent, _args, {models}) => {

  const {User} = models;
  const userID = parent._id;

  try {
    const result = await User.findOne({_id: userID}).populate("chefReviews");

    return result.chefReviews;

  } catch(error) {
    throw new Error("There was a problem getting the chef's reviews.");
  }

}

const chefDishes = async (parent, _args, {models}) => {
  const {User} = models;
  const userID = parent._id;

  try {
    const result = await User.findOne(userID).populate("chefDishes");

    console.log('chef dishes are ', result)

    return result.chefDishes;

  } catch(error) {
    throw new Error("There was a problem getting the chef's dishes.");
  }
};


// const getUserReviews = () => {};
const getChefDetails = () => {};
const findChefsInRange = () => {};
const findChefsByStyle = () => {};


module.exports = {
  getUser,
  getChefReviews,
  getChefDetails,
  findChefsInRange,
  findChefsByStyle,
  chefDishes,
  chefReviews
};
