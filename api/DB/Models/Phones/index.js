const mongoose = require('mongoose')

const { Schema, model } = mongoose

const PhoneSchema = new Schema({
  number: Number,
  inUse: Boolean,
})

const PhoneModel = model('phone', PhoneSchema)

module.exports = PhoneModel
