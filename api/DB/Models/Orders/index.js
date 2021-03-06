const mongoose = require('mongoose');

const {Schema} = mongoose;

const OrderSchema = new Schema({
  chefId: {type: Schema.Types.ObjectId, ref: 'chef'},
  customerId: {type: Schema.Types.ObjectId, ref: 'user'},
  cart: [],
  status: {},
  date: {type: Date, default: Date.now},
  cashTotal: Number,
  orderInstructions: String,
});

const OrderModel = mongoose.model('order', OrderSchema);

module.exports = OrderModel;
