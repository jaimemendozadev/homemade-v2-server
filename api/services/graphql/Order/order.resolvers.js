const {
  getPendingOrders,
  getAcceptedOrders,
  getCompletedOrders,
  getCancelledOrders,
  cart,
} = require('./queries');

const {updateOrder, postNewOrder} = require('./mutations');

module.exports = {
  Query: {
    getPendingOrders,
    getAcceptedOrders,
    getCompletedOrders,
    getCancelledOrders,
  },
  Mutation: {
    updateOrder,
    postNewOrder,
  },
  Order: {
    cart,
  },
};
