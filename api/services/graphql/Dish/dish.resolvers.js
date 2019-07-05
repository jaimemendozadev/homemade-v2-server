const {getActiveDishes, getInactiveDishes, getAllChefDishes} = require('./queries');
const {updateDish, deleteDish} = require('./mutations');

module.exports = {
  Query: {
    getActiveDishes,
    getInactiveDishes,
    getAllChefDishes
  },
  Mutation: {
    updateDish,
    deleteDish,
  },
};
