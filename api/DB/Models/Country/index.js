const mongoose = require('mongoose');
const {Schema} = mongoose;

const CountrySchema = new Schema({
  name: String,
  states: [{type: Schema.Types.ObjectId, ref: 'state'}],
  cities: [{type: Schema.Types.ObjectId, ref: 'city'}],
});

const CountryModel = mongoose.model('country', CountrySchema);

module.exports = CountryModel;
