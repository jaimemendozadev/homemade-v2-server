const generateMockReviews = require('./generateMockReviews');
const {Review} = require('../../api/DB/Models');

const createSaveReviewsInDB = async savedReviewsInDB => {
  const ReviwesPayload = generateMockReviews(savedReviewsInDB);

  const Reviews_DB_Result = await Review.insertMany(ReviwesPayload);

  return Reviews_DB_Result;
};

module.exports = {createSaveReviewsInDB};
