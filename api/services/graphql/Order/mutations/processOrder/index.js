const calcCashAmtQty = require('./calcCashAmtQty');

const processOrder = async (incomingOrder, {Order, Dish}) => {
  // Calculate the cashTotal amount and
  // update quantity count for each dish
  const cashTotal = await calcCashAmtQty(incomingOrder, Dish);

  // Prep OrderPayload and save in DB
  const OrderPayload = Object.assign({}, incomingOrder, {cashTotal})

  const newOrder = await Order.create(OrderPayload);

  return [newOrder];
};

module.exports = processOrder;
