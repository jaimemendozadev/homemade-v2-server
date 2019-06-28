const faker = require('faker');

const _generateSingleReview = order => {
  const reviewText = faker.lorem.sentence();
  let rating = Math.floor(Math.random() * 6);
  rating = rating > 5 ? 5 : rating;

  const {chefId, _id, date} = order;
  const orderId = _id;

  return {
    reviewText,
    rating,
    chefId,
    orderId,
    date,
  };
};

const generateMockReviews = orders => {
  const ReviewsPayload = [];

  for (let i = 0; i < orders.length; i++) {
    const currentOrder = orders[i];

    ReviewsPayload.push(_generateSingleReview(currentOrder));
  }

  return ReviewsPayload;
};

module.exports = generateMockReviews;
