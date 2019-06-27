// const {GOOGLE_GEOCODE_URL, GOOGLE_MAPS_APIKEY} = process.env;
// const CREDS = `&key=${GOOGLE_MAPS_APIKEY}`;

// https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=YOUR_API_KEY

const {createBoundingBox, isChefInBounds} = require('./utils');

const findChefsInRange = async (_parent, {geoCoords}, {models}) => {
  const {Chef} = models;
  const boundingBox = createBoundingBox(geoCoords);
  const errorMsg = 'There are currently no chefs within your location.';

  try {
    const foundChefs = await Chef.find({});

    if (foundChefs.length) {
      const inBoundChefs = foundChefs.filter(chef =>
        isChefInBounds(chef, boundingBox),
      );

      if (!inBoundChefs.length) {
        throw new Error(errorMsg);
      }

      return inBoundChefs;
    }

    throw new Error(errorMsg);
  } catch (error) {
    throw new Error('There was a problem finding the chefs in range.');
  }
};

module.exports = findChefsInRange;
