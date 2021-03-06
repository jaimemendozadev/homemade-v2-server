const randomLocation = require('random-location');
const geoCoords = require('./geoCoords');

const generateGeoCoords = () => {
  const randomIdx = Math.floor(Math.random() * geoCoords.length);
  const chosenCoords = geoCoords[randomIdx];

  const {coords} = chosenCoords;

  const lessThan5Miles = Math.floor(Math.random() * 6) <= 4 ? true : false;

  const Radius = lessThan5Miles ? 8046 : 16093; // meters, 1 meter = 0.000621371 miles

  const randomPoint = randomLocation.randomCirclePoint(coords, Radius);

  const {latitude, longitude} = randomPoint;

  return {geo_lat: latitude, geo_lng: longitude};
};

const generateSingleChef = user => {
  const newChef = {};

  const rating = Math.floor(Math.random() * 100);

  newChef.userProfile = user._id;

  newChef.likes = [];
  newChef.chefReviews = [];

  newChef.chefDishes = [];
  newChef.location = generateGeoCoords();
  newChef.rating = rating;

  return newChef;
};

const generateMockChefs = users => {
  const numOfChefs = Math.floor(users.length / 2);

  const chefsArray = [];

  for (let i = 0; i < numOfChefs; i++) {
    const currentUser = users[i];

    chefsArray.push(generateSingleChef(currentUser));
  }

  return chefsArray;
};

module.exports = generateMockChefs;
