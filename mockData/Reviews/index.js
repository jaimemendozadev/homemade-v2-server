const generateMockReviews = require('./generateMockReviews');
const {Review} = require('../../api/DB/Models');

const createSaveReviewsInDB = async savedOrdersInDB => {
  const ReviwesPayload = generateMockReviews(savedOrdersInDB);

  const Reviews_DB_Result = await Review.insertMany(ReviwesPayload);

  return Reviews_DB_Result;
};

module.exports = {createSaveReviewsInDB};
