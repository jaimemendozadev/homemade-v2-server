const {findPendingOrders} = require('./utils');

const getPendingOrders = async (_parent, {chefID}) => {
  const errorMsg = 'The Chef has no current pending orders.';

  try {
    const pendingOrders = await findPendingOrders('Chef', chefID);

    return pendingOrders;
  } catch (error) {
    console.log(`${errorMsg} `, error);
  }
};

const getUserCurrentOrder = async (_parent, {userID}) => {
  const errorMsg = 'The User has no current pending orders.';

  try {
    const pendingOrders = await findPendingOrders('User', userID);

    return pendingOrders;
  } catch (error) {
    console.log(`${errorMsg} `, error);

    throw new Error(errorMsg);
  }
};

const getCustomerOrders = () => {};
const getAcceptedOrders = () => {};
const getCompletedOrders = () => {};
const getCancelledOrders = () => {};

const cart = async ({_id}, _args, {models}) => {
  const {Order} = models;
  const errorMsg = 'Could find any dishes attached to the current order.';

  try {
    const foundOrder = await Order.findById(_id).populate('cart');
    const {cart}= foundOrder;

    return cart;
    
  } catch(error) {
    console.log(`${errorMsg} `, error);
    throw new Error(errorMsg);
  }
};

module.exports = {
  getPendingOrders,
  getUserCurrentOrder,
  getCustomerOrders,
  getAcceptedOrders,
  getCompletedOrders,
  getCancelledOrders,
  cart,
};
