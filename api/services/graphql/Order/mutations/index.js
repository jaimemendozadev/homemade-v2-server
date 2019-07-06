const {generateErrorMsg, processOrder} = require('./utils');

/*
# OrderStatus codes/messages
# 0: "Pending"
# 1: "Accepted"
# 2: "Completed"
# 3: "Canceled"
# 4: "Reviewed"

*/

const postNewOrder = async (_parent, {incomingOrder}, {models}) => {
  const errorMsg = "Couldn't save the incoming order in the database.";
  
  try {
    const newOrder = await processOrder(incomingOrder, models);
    
    return {
      status: {
        hasError: false,
        message: "Your order was successfully processed! Waiting for the Chef's approval!"
      },
      payload: newOrder 
    }

  } catch (error) {
    console.log(`${errorMsg} ${error}`);
    throw new Error(errorMsg);
  }
};

const updateOrder = async (_parent, {orderID, statusCode}, {models}) => {
  const errorMsg = generateErrorMsg(statusCode);
  const {Order} = models;

  console.log('statusCode ', statusCode);
  console.log('orderID ', orderID);
  try {
    const foundOrder = await Order.findById(orderID).populate('cart');

    console.log('foundOrder is ', foundOrder);

    return [
      {
        _id: '0989',
        chefId: '7589',
        customerId: '58890',
      },
    ];
  } catch (error) {
    console.log(`${errorMsg} ${errorMsg}`);
    throw new Error(errorMsg);
  }
};

module.exports = {
  postNewOrder,
  updateOrder,
};
