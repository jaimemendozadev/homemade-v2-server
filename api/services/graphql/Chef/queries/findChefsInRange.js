const {
  createBoundingBox,
  isChefInBounds,
  getCoordsInfo,
  parseGoogleResponse,
} = require('./utils');

const findChefsInRange = async (_parent, {geoCoords}, {models}) => {
  const {Neighborhood} = models;
  const errorMsg = 'There are currently no chefs within your location.';

  try {
    const googleResponse = await getCoordsInfo(geoCoords);

    // {Locality, MetroArea, Country}
    const {Locality} = parseGoogleResponse(googleResponse);

    const DB_Response = await Neighborhood.findOne({name: Locality}).populate(
      'chefs',
    );

    const foundLocalChefs = DB_Response.chefs;
    const boundingBox = createBoundingBox(geoCoords);

    const filteredChefs = foundLocalChefs.filter(chef =>
      isChefInBounds(chef, boundingBox),
    );

    return filteredChefs;
  } catch (error) {
    throw new Error(errorMsg);
  }
};

module.exports = findChefsInRange;
