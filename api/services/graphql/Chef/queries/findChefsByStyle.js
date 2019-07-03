const {
  getCoordsInfo,
  parseGoogleResponse,
  populateNeighborhoodDishes,
} = require('./utils');

const findChefsByStyle = async (_parent, {geoCoords, cuisineType}) => {
  const errorMsg = 'There are currently no chefs within your location.';

  try {
    const googleResponse = await getCoordsInfo(geoCoords);

    const {Locality} = parseGoogleResponse(googleResponse);

    const populatedChefDishes = await populateNeighborhoodDishes(
      Locality,
      cuisineType,
      geoCoords,
    );

    return populatedChefDishes;
  } catch (error) {
    throw new Error(errorMsg);
  }
};

module.exports = findChefsByStyle;
