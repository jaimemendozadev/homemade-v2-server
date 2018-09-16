const {
  getPendingOrders,
  getUserCurrentOrder,
  getCustomerOrders,
  getAcceptedOrders,
  getCompletedOrders,
  getCancelledOrders,
} = require('./queries')

const { updateOrder, postNewOrder } = require('./mutations')

module.exports = {
  Query: {
    getPendingOrders,
    getUserCurrentOrder,
    getCustomerOrders,
    getAcceptedOrders,
    getCompletedOrders,
    getCancelledOrders,
  },
  Mutation: {
    updateOrder,
    postNewOrder,
  },
}
