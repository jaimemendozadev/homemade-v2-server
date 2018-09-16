const mongoose = require('mongoose')

const { Schema, model } = mongoose

const OrderSchema = new Schema({
  chefId: { type: Schema.Types.ObjectId, ref: 'user' },
  customerId: { type: Schema.Types.ObjectId, ref: 'user' },
  cart: {},
  status: Number,
  date: { type: Date, default: Date.now },
  cashTotal: Number,
  orderInstructions: String,
})

const OrderModel = model('order', OrderSchema)

module.exports = OrderModel
