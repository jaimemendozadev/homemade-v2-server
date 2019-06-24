const mongoose = require('mongoose');
const {Schema} = mongoose;

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

const ChefModel = mongoose.model('chef', ChefSchema);

module.exports = ChefModel;
