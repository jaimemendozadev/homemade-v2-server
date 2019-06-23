const mongoose = require('mongoose');

const {Schema} = mongoose;

const ReviewSchema = new Schema({
  reviewText: String,
  rating: Number,
  chefId: {type: Schema.Types.ObjectId, ref: 'user'},
  orderId: {type: Schema.Types.ObjectId, ref: 'order'},
  date: {type: Date, default: Date.now},
});

const ReviewModel = mongoose.model('review', ReviewSchema);

module.exports = ReviewModel;
