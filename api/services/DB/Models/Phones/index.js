const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PhoneSchema = new Schema({
  number: Number,
  inUse: Boolean
});

module.exports = PhoneSchema;
