const {
  createBoundingBox,
  isChefInBounds,
  filterChefByCuisine,
} = require('./utils');

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

module.exports = findChefsByStyle;
