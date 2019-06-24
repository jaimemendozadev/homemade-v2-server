const mongoose = require('mongoose');

const {Schema} = mongoose;

const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  bio: String,
  status: String,
  phoneNumber: String,
  profileUrl: String,
  signatureURL: String,
  email: String,
  chefProfile: {type: Schema.Types.ObjectId, ref: 'chef'},
  
});

const UserModel = mongoose.model('user', UserSchema);

module.exports = UserModel;
