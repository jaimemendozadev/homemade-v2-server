const mongoose = require('mongoose');
const {Schema} = mongoose;

const CountrySchema = new Schema({
  name: String,
  metroAreas: [{type: Schema.Types.ObjectId, ref: 'metro_area'}],
});

const CountryModel = mongoose.model('country', CountrySchema);

module.exports = CountryModel;
