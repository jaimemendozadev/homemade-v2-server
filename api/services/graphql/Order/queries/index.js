const {findPendingOrders} = require('./utils');

const getPendingOrders = async (_parent, {callerID, callerType}) => {
  const errorMsg = `The ${callerType} has no current pending orders.`;

  try {
    const pendingOrders = await findPendingOrders(callerType, callerID);

    return pendingOrders;
  } catch (error) {
    console.log(`${errorMsg} `, error);
  }
};



const getAcceptedOrders = () => {};
const getCompletedOrders = () => {};
const getCancelledOrders = () => {};

const cart = async ({_id}, _args, {models}) => {
  const {Order} = models;
  const errorMsg = 'Could find any dishes attached to the current order.';

  try {
    const foundOrder = await Order.findById(_id).populate('cart');
    const {cart} = foundOrder;

    return cart;
  } catch (error) {
    console.log(`${errorMsg} `, error);
    throw new Error(errorMsg);
  }
};

module.exports = {
  getPendingOrders,
  getAcceptedOrders,
  getCompletedOrders,
  getCancelledOrders,
  cart,
};

/*

# OrderStatus codes/messages
# 0: "Pending"
# 1: "Accepted"
# 2: "Completed"
# 3: "Canceled"
# 4: "Reviewed"


*/