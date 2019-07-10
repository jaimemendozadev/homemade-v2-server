const processOrder = require('./processOrder');
const processOrderUpdate = require('./processOrderUpdate');
const {generateErrorMsg} = require('./utils');

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
        message:
          "Your order was successfully processed! Waiting for the Chef's approval!",
      },
      payload: newOrder,
    };
  } catch (error) {
    console.log(`${errorMsg} ${error}`);
    throw new Error(errorMsg);
  }
};

const updateOrder = async (_parent, {orderID, statusCode}, {models}) => {
  const errorMsg = generateErrorMsg(statusCode);
  const {Order} = models;

  try {
    const updatedOrder = await processOrderUpdate(orderID, statusCode, Order);

    return [updatedOrder];
  } catch (error) {
    console.log(`${errorMsg} ${errorMsg}`);
    throw new Error(errorMsg);
  }
};

module.exports = {
  postNewOrder,
  updateOrder,
};
