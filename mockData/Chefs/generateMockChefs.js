//const faker = require('faker');
const randomLocation = require('random-location');
const geoCoords = require('./geoCoords');

const _generateGeoCoords = () => {
  const randomIdx = Math.floor(Math.random() * geoCoords.length);
  const chosenCoords = geoCoords[randomIdx];

  const {coords} = chosenCoords;

  const R = 500; // meters

  const randomPoint = randomLocation.randomCirclePoint(coords, R);

  const {latitude, longitude} = randomPoint;

  return {geo_lat: latitude, geo_lng: longitude};
};

const _generateSingleChef = user => {
  const newChef = {};

  const rating = Math.floor(Math.random() * 100);

  // const address = {
  //   streetNumber: faker.address.streetAddress(),
  //   city: faker.address.city(),
  //   state: faker.address.state(),
  //   postalCode: faker.address.zipCode(),
  // };

  newChef.userProfile = user._id;

  newChef.likes = [];
  newChef.chefReviews = [];

  newChef.chefDishes = [];
  newChef.location = _generateGeoCoords();
  //newChef.address = address;
  newChef.rating = rating;

  return newChef;
};

const generateMockChefs = users => {
  const numOfChefs = Math.floor(users.length / 2);

  const chefsArray = [];

  for (let i = 0; i < numOfChefs; i++) {
    const currentUser = users[i];

    chefsArray.push(_generateSingleChef(currentUser));
  }

  return chefsArray;
};

module.exports = generateMockChefs;
