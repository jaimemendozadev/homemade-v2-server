const mongoose = require('mongoose');
const {Schema} = mongoose;

// Choosing not to add specific cuisine types to MetroAreaSchema in v2
const MetroAreaSchema = new Schema({
  name: String,
  neighborhoods: [{type: Schema.Types.ObjectId, ref: 'neighborhood'}],
  chefs: [{type: Schema.Types.ObjectId, ref: 'chef'}],
});

const MetroAreaModel = mongoose.model('metro_area', MetroAreaSchema);

module.exports = MetroAreaModel;
