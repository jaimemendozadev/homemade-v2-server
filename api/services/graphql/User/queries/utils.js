const geoPoint = require('geopoint');

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
};
