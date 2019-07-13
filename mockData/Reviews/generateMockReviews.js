const faker = require('faker');

const generateSingleReview = order => {
  const reviewText = faker.lorem.sentence();
  let rating = Math.floor(Math.random() * 6);
  rating = rating > 5 ? 5 : rating;

  const {chefId, customerId, _id, date} = order;
  const orderId = _id;
  

  return {
    reviewText,
    rating,
    chefId,
    customerId,
    orderId,
    date,
  };
};

const generateMockReviews = orders => {
  const ReviewsPayload = [];

  for (let i = 0; i < orders.length; i++) {
    const currentOrder = orders[i];

    ReviewsPayload.push(generateSingleReview(currentOrder));
  }

  return ReviewsPayload;
};

module.exports = generateMockReviews;
