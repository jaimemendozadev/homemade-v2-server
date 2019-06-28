const faker = require('faker');
const randomLocation = require('random-location');
const generateChefUpdates = require('./generateChefUpdates');
const geoCoords = require('./geoCoords');

const {Chef} = require('../../api/DB/Models');

const _generateGeoCoords = () => {
  const randomIdx = Math.floor(Math.random() * geoCoords.length); 
  const chosenCoords = geoCoords[randomIdx]; 

  const{coords} = chosenCoords;

  const R = 500; // meters

  const randomPoint = randomLocation.randomCirclePoint(coords, R);

  const {latitude, longitude} = randomPoint;

  return {geo_lat: latitude, geo_lng: longitude};
};

const _generateSingleChef = user => {
  const newChef = {};

  const rating = Math.floor(Math.random() * 100);

  const address = {
    streetNumber: faker.address.streetAddress(),
    city: faker.address.city(),
    state: faker.address.state(),
    postalCode: faker.address.zipCode(),
  };

  newChef.userProfile = user._id;

  newChef.likes = [];
  newChef.chefReviews = [];

  newChef.chefDishes = [];
  newChef.location = _generateGeoCoords();
  newChef.address = address;
  newChef.rating = rating;

  return newChef;
};

const _generateMockChefs = users => {
  const numOfChefs = Math.floor(users.length / 2);

  const chefsArray = [];

  for (let i = 0; i < numOfChefs; i++) {
    const currentUser = users[i];

    chefsArray.push(_generateSingleChef(currentUser));
  }

  return chefsArray;
};

const createSaveChefsInDB = async generatedUsers => {
  // Use half of existing users and make them chefs
  const ChefsPayload = _generateMockChefs(generatedUsers);

  const Chefs_DB_Result = await Chef.insertMany(ChefsPayload);

  return Chefs_DB_Result;
};

module.exports = {
  createSaveChefsInDB,
  generateChefUpdates,
};
