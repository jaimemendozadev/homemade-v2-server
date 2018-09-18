const mongoose = require('mongoose')

const { Schema } = mongoose

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
  chefDishes: [{ type: Schema.Types.ObjectId, ref: 'dish' }],
  location: { geo_lat: Number, geo_lng: Number },
  address: String,
  rating: Number,
  signatureURL: String,
  email: String,
})

const UserModel = mongoose.model('user', UserSchema)

module.exports = UserModel
