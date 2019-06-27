const mongoose = require('mongoose');
const {Schema} = mongoose;

const CountrySchema = new Schema({
  name: String,
  state: [{type: Schema.Types.ObjectId, ref: "state"}],
  cities: [{type: Schema.Types.ObjectId, ref: "city"}]
});

const CountryModel = mongoose.model("country", CountrySchema);

module.exports = CountryModel;