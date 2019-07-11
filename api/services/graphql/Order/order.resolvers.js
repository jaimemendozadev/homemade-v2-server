const {getOrdersByStatus, getSingleOrder} = require('./queries');

const {updateOrder, postNewOrder} = require('./mutations');

module.exports = {
  Query: {
    getOrdersByStatus,
    getSingleOrder,
  },
  Mutation: {
    updateOrder,
    postNewOrder,
  },
};
