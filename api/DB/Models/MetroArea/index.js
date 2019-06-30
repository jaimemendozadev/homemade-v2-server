const mongoose = require('mongoose');
const {Schema} = mongoose;

// Choosing not to add specific cuisine types to MetroAreaSchema in v2
const MetroAreaSchema = new Schema({
  name: String,
  neighborhoods: [{type: Schema.Types.ObjectId, ref: 'neighborhood'}],
});

const MetroAreaModel = mongoose.model('city', MetroAreaSchema);

module.exports = MetroAreaModel;
