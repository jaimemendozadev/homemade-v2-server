const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  authId: String,
  firstName: String,
  lastName: String,
  bio: String,
  status: String,
  phoneNumber: String,
  likes: [Number],
  profileUrl: String,
  customerReviews: [],
  chefReviews: [],
  isChef: Boolean,
  location: { geo_lat: Number, geo_lng: Number },
  address: String,
  rating: Number,
  signatureURL: String,
  email: String
});

module.exports = UserSchema;
