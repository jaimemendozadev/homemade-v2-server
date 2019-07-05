const {findOrdersByStatus} = require('./utils');

const getOrdersByStatus = async (
  _parent,
  {callerID, callerType, statusCode},
) => {
  const errorMsg = `The ${callerType} has no current pending orders.`;

  try {
    const pendingOrders = await findOrdersByStatus(
      callerType,
      callerID,
      statusCode,
    );

    return pendingOrders;
  } catch (error) {
    console.log(`${errorMsg} `, error);
  }
};


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
  getOrdersByStatus, 
  cart
};

/*

# OrderStatus codes/messages
# 0: "Pending"
# 1: "Accepted"
# 2: "Completed"
# 3: "Canceled"
# 4: "Reviewed"


*/
