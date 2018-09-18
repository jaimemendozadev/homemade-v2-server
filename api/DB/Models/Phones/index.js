const mongoose = require('mongoose')

const { Schema } = mongoose

const PhoneSchema = new Schema({
  number: Number,
  inUse: Boolean,
})

const PhoneModel = mongoose.model('phone', PhoneSchema)

module.exports = PhoneModel
