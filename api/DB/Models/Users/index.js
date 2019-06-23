const mongoose = require('mongoose');

const {Schema} = mongoose;

const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  bio: String,
  status: String,
  phoneNumber: String,
  likes: [Number],
  profileUrl: String,
  chefReviews: [{type: Schema.Types.ObjectId, ref: 'review'}],
  isChef: Boolean,
  chefDishes: [{type: Schema.Types.ObjectId, ref: 'dish'}],
  location: {geo_lat: Number, geo_lng: Number},
  address: {
    streetNumber: String,
    city: String,
    state: String,
    postalCode: String,
  },
  rating: Number,
  signatureURL: String,
  email: String,
});

const UserModel = mongoose.model('user', UserSchema);

module.exports = UserModel;
