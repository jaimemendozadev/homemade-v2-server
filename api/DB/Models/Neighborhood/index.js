const mongoose = require('mongoose');
const {Schema} = mongoose;

const NeighborhoodSchema = new Schema({
  name: String,
  chefs: [{type: Schema.Types.ObjectId, ref: 'chef'}],
});

const NeighborhoodModel = mongoose.model('neighborhood', NeighborhoodSchema);

module.exports = NeighborhoodModel;
