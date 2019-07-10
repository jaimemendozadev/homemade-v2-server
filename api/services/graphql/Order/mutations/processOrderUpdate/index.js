const {generateStatusMsg} = require('../utils');
const resetDishQuantities = require('./resetDishQuantities');

const processOrderUpdate = async (orderID, statusCode, {Order, Dish}) => {
  // Update Order in DB with new statusCode
  const options = {new: true};
  const statusMessage = generateStatusMsg(statusCode);
  const status = {
    statusCode,
    statusMessage,
  };
  const update = {status};

  const updatedOrder = await Order.findOneAndUpdate(
    {_id: orderID},
    update,
    options,
  ).populate('cart');

  // If the order get canceled,
  // update each Dish count in DB

  if (statusCode === 3) {
    await resetDishQuantities(updatedOrder, Dish);
  }

  return updatedOrder;
};

module.exports = processOrderUpdate;
