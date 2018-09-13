const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  chefId: String,
  customerId: String,
  cart: {},
  status: Number,
  date: { type: Date, default: Date.now },
  cashTotal: Number,
  orderInstructions: String
});

module.exports = OrderSchema;
