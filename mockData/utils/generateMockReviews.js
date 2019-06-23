const generateSingleReview = require('../Reviews');

const generateMockReviews = orders => {
  const ReviewsPayload = [];

  for (let i = 0; i < orders.length; i++) {
    const currentOrder = orders[i];

    ReviewsPayload.push(generateSingleReview(currentOrder));
  }

  return ReviewsPayload;
};

module.exports = generateMockReviews;
