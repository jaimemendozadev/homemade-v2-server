const {
  getActiveDishes,
  getInactiveDishes,
  getAllChefDishes,
  getSingleDish,
} = require('./queries');
const {updateDish, deleteDish} = require('./mutations');

module.exports = {
  Query: {
    getActiveDishes,
    getInactiveDishes,
    getAllChefDishes,
    getSingleDish,
  },
  Mutation: {
    updateDish,
    deleteDish,
  },
};
