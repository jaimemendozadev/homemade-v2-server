const faker = require('faker');
const randomLocation = require('random-location');

/*

const ChefSchema = new Schema({
  userProfile: {type: Schema.Types.ObjectId, ref: 'user'},
  likes: [Number],
  chefReviews: [{type: Schema.Types.ObjectId, ref: 'review'}],
  chefDishes: [{type: Schema.Types.ObjectId, ref: 'dish'}],
  location: {geo_lat: Number, geo_lng: Number},
  address: {
    streetNumber: String,
    city: String,
    state: String,
    postalCode: String,
  },
  rating: Number,
});


*/

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



const generateSingleChef = user => {
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

}


module.exports = {
    generateSingleChef
}