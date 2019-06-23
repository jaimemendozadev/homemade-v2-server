const faker = require('faker');
const randomLocation = require('random-location');

const _generateGeoCoords = () => {
  //Coordinates for Koreatown, Los Angeles
  const P = {
    latitude: 34.06508,
    longitude: -118.33531,
  };

  const R = 500; // meters

  const randomPoint = randomLocation.randomCirclePoint(P, R);

  const {latitude, longitude} = randomPoint;

  return {geo_lat: latitude, geo_lng: longitude};
};

const generateSingleUser = () => {
  const newUser = {};

  const randomChef = Math.floor(Math.random() * 10);
  const rating = Math.floor(Math.random() * 100);
  const address = {
    streetNumber: faker.address.streetAddress(),
    city: faker.address.city(),
    state: faker.address.state(),
    postalCode: faker.address.zipCode(),
  };

  newUser.firstName = faker.name.firstName();
  newUser.lastName = faker.name.lastName();
  newUser.bio = faker.name.jobDescriptor();
  newUser.status = faker.name.jobTitle();
  newUser.phoneNumber = faker.phone.phoneNumber();
  newUser.likes = [];
  newUser.profileUrl = 'https://via.placeholder.com/300.png';
  newUser.chefReviews = [];
  newUser.isChef = randomChef <= 4 ? false : true;
  newUser.chefDishes = [];
  newUser.location = _generateGeoCoords();
  newUser.address = address;
  newUser.rating = rating;
  newUser.signatureURL = faker.internet.url();
  newUser.email = faker.internet.email();

  return newUser;
};

module.exports = {
  generateSingleUser,
};
