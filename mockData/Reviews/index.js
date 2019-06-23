const faker = require('faker');

const generateSingleReview = order => {


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
          date

      }
}


module.exports = generateSingleReview;