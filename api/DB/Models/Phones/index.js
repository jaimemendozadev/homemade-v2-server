const mongoose = require('mongoose')

const { Schema } = mongoose

const PhoneSchema = new Schema({
  number: Number,
  inUse: Boolean,
})

module.exports = PhoneSchema
