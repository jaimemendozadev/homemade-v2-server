const fetch = require('node-fetch');
const geoPoint = require('geopoint');
const {GOOGLE_GEOCODE_URL, GOOGLE_MAPS_APIKEY} = process.env;

const getCoordsInfo = async geoCoords => {
  const {geo_lat, geo_lng} = geoCoords;

  const reqURL = `${GOOGLE_GEOCODE_URL}${geo_lat},${geo_lng}&key=${GOOGLE_MAPS_APIKEY}`;

  const googleResponse = await fetch(reqURL).then(response => response.json());

  const {results} = googleResponse;

  return results;
};

const parseGoogleResponse = googleResponse => {
  const responseInfo = {};

  googleResponse.forEach(obj => {
    // Get the types array
    const {address_components, types} = obj;

    // Only use obj that has "street_address" in types
    if (types.includes('street_address')) {
      address_components.forEach(addressObj => {
        const {types} = addressObj;

        // Name of the local neighborhood
        if (types.includes('locality')) {
          responseInfo['Locality'] = addressObj.long_name;
        }

        // Similar to a U.S. State
        if (types.includes('administrative_area_level_2')) {
          responseInfo['MetroArea'] = addressObj.long_name;
        }

        if (types.includes('country')) {
          responseInfo['Country'] = addressObj.long_name;
        }
      });
    }
  });

  return responseInfo;
};

const createBoundingBox = geoCoords => {
  const {geo_lat, geo_lng} = geoCoords;
  const lat = Number(geo_lat);
  const long = Number(geo_lng);
  const distance = 5; // Miles
  const userLocation = new geoPoint(lat, long);
  const boundingBox = userLocation.boundingCoordinates(distance);

  return boundingBox;
};

const isChefInBounds = (user, boundingBox) => {
  const {
    location: {geo_lat, geo_lng},
  } = user;

  return (
    geo_lat > boundingBox[0]._degLat &&
    geo_lat < boundingBox[1]._degLat &&
    geo_lng > boundingBox[0]._degLon &&
    geo_lng < boundingBox[1]._degLon
  );
};

const filterChefByCuisine = (chef, targetCuisine) => {
  const {chefDishes} = chef;

  for (let i = 0; i < chefDishes.length; i++) {
    const currentDish = chefDishes[i];

    const {cuisineType} = currentDish;

    if (cuisineType === targetCuisine) {
      return true;
    }
  }

  return false;
};

module.exports = {
  createBoundingBox,
  isChefInBounds,
  filterChefByCuisine,
  getCoordsInfo,
  parseGoogleResponse,
};
