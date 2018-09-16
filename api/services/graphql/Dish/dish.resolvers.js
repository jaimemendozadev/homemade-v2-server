const { getActiveDishes, getInactiveDishes, chefId } = require('./queries')
const { updateDish, deleteDish } = require('./mutations')

module.exports = {
  Query: {
    getActiveDishes,
    getInactiveDishes,
  },
  Mutation: {
    updateDish,
    deleteDish,
  },
  Dish: {
    chefId,
  },
}
