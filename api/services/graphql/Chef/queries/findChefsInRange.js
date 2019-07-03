const {
  getCoordsInfo,
  filterByGeoCoords,
  parseGoogleResponse,
} = require('./utils');

const findChefsInRange = async (_parent, {geoCoords}, {models}) => {
  const {Neighborhood} = models;
  const errorMsg = 'There are currently no chefs within your location.';

  try {
    // Get Neighborhood Name from Google
    const googleResponse = await getCoordsInfo(geoCoords);

    const {Locality} = parseGoogleResponse(googleResponse);

    // Find Neighborhood in DB and populate Chefs
    const DB_Response = await Neighborhood.findOne({name: Locality}).populate(
      'chefs',
    );

    const foundLocalChefs = DB_Response.chefs;

    // Filter chefs by geoCoords
    const filteredChefs = filterByGeoCoords(geoCoords, foundLocalChefs);

    return filteredChefs;
  } catch (error) {
    throw new Error(errorMsg);
  }
};

module.exports = findChefsInRange;
