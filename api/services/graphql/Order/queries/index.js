// parent, args, context, info

const getPendingOrders = async (_parent, {chefID}, {models}) => {
  const {Order} = models;
  const errorMsg = "The Chef has no current pending orders.";

  console.log('inside pending orders')

  try {
    const foundOrders = await Order.find({chefId: chefID});

    const pendingOrders = foundOrders.filter(order => {
      const {status: {statusCode}} = order;
      if(statusCode === 0) {
        return order;
      }
    });

    console.log('pendingOrders ', pendingOrders)

    return pendingOrders;
  } catch (error) {
    console.log(`${errorMsg} `, error);
  }
};

const getUserCurrentOrder = () => {};
const getCustomerOrders = () => {};
const getAcceptedOrders = () => {};
const getCompletedOrders = () => {};
const getCancelledOrders = () => {};
const chefId = () => {};
const customerId = () => {};
const cart = () => {};

module.exports = {
  getPendingOrders,
  getUserCurrentOrder,
  getCustomerOrders,
  getAcceptedOrders,
  getCompletedOrders,
  getCancelledOrders,
  chefId,
  customerId,
  cart,
};
