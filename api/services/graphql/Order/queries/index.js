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

  console.log('inside getUserCurrentOrder');
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
const cart = () => {};

module.exports = {
  getPendingOrders,
  getUserCurrentOrder,
  getCustomerOrders,
  getAcceptedOrders,
  getCompletedOrders,
  getCancelledOrders,
  cart,
};
