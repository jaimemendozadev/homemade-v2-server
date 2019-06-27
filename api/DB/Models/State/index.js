const mongoose = require('mongoose');
const {Schema} = mongoose;

const StateSchema = new Schema({
  name: String,
  country: {type: Schema.Types.ObjectId, ref: 'country'},
  cities: [{type: Schema.Types.ObjectId, ref: 'city'}],
});

const StateModel = mongoose.model('state', StateSchema);

module.exports = StateModel;
