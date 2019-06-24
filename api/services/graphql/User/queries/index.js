const {
  createBoundingBox,
  isChefInBounds,
  filterChefByCuisine,
} = require('./utils');

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

const getChefReviews = async (_parent, {chefID}, {models}) => {
  const {User} = models;

  try {
    const result = await User.findOne({_id: chefID}).populate('chefReviews');

    return result.chefReviews;
  } catch (error) {
    throw new Error("There was a problem getting the chef's reviews.");
  }
};

const chefReviews = async (parent, _args, {models}) => {
  const {User} = models;
  const userID = parent._id;

  try {
    const result = await User.findOne({_id: userID}).populate('chefReviews');

    return result.chefReviews;
  } catch (error) {
    throw new Error("There was a problem getting the chef's reviews.");
  }
};

const chefDishes = async (parent, _args, {models}) => {
  const {User} = models;
  const userID = parent._id;

  try {
    const result = await User.findOne(userID).populate('chefDishes');

    console.log('chef dishes are ', result);

    return result.chefDishes;
  } catch (error) {
    throw new Error("There was a problem getting the chef's dishes.");
  }
};

const findChefsInRange = async (_parent, {geoCoords}, {models}) => {
  const {User} = models;
  const boundingBox = createBoundingBox(geoCoords);
  const errorMsg = 'There are currently no chefs within your location.';

  try {
    const foundChefs = await User.find({isChef: true});

    if (foundChefs.length) {
      const inBoundChefs = foundChefs.filter(chef =>
        isChefInBounds(chef, boundingBox),
      );

      if (!inBoundChefs.length) {
        throw new Error(errorMsg);
      }

      return inBoundChefs;
    } else {
      throw new Error(errorMsg);
    }
  } catch (error) {
    throw new Error('There was a problem finding the chefs in range.');
  }
};

const findChefsByStyle = async (
  _parent,
  {geoCoords, cuisineType},
  {models},
) => {
  const {User} = models;
  const boundingBox = createBoundingBox(geoCoords);
  const errorMsg = 'There are currently no chefs within your location.';

  try {
    const foundChefs = await User.find({isChef: true}).populate('chefDishes');

    if (foundChefs.length) {
      const inBoundChefs = foundChefs.filter(chef =>
        isChefInBounds(chef, boundingBox),
      );

      if (!inBoundChefs.length) {
        throw new Error(errorMsg);
      }

      const filteredByCuisine = inBoundChefs.filter(chef =>
        filterChefByCuisine(chef, cuisineType),
      );

      console.log('filteredByCuisine is ', filteredByCuisine);

      if (!filteredByCuisine.length) {
        throw new Error(
          'There were no chefs with that cuisine type in your area.',
        );
      }

      return filteredByCuisine;
    } else {
      throw new Error(errorMsg);
    }
  } catch (error) {
    throw new Error('There was a problem finding the chefs in range.');
  }
};

module.exports = {
  getUser,
  getChefReviews,
  findChefsInRange,
  findChefsByStyle,
  chefDishes,
  chefReviews,
};
