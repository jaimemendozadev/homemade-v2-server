const {getOrdersByStatus, cart} = require('./queries');

const {updateOrder, postNewOrder} = require('./mutations');

module.exports = {
  Query: {
    getOrdersByStatus,
  },
  Mutation: {
    updateOrder,
    postNewOrder,
  },
  Order: {
    cart,
  },
};
