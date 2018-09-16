const { getActiveDishes, getInactiveDishes } = require('./queries')
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
}
