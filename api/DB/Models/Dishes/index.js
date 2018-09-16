const mongoose = require('mongoose')

const { Schema, model } = mongoose

const DishSchema = new Schema({
  cuisineType: String,
  name: String,
  description: String,
  dishImages: [String],
  chefId: String,
  allergies: [String],
  cashDonation: Number,
  isActive: Boolean,
  quantity: Number, // Amt of a dish a chef has left in their inventory
})

const DishModel = model('dish', DishSchema)

module.exports = DishModel
