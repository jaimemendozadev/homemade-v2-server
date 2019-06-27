const mongoose = require('mongoose');
const {Schema} = mongoose;

// Choosing not to add specific cuisine types to CitySchema in v2
const CitySchema = new Schema({
  name: String,
  chefs: [{type: Schema.Types.ObjectId, ref: 'chef'}],
});

const CityModel = mongoose.model('city', CitySchema);

module.exports = CityModel;
