const formatNewOrder = require('./formatNewOrder');
const calcCashAmtQty = require('./calcCashAmtQty');

const processOrder = async (incomingOrder, {Order, Dish}) => {
  // Start formatting the order for saving in DB
  const payload = formatNewOrder(incomingOrder);

  // Calculate the cashTotal amount and
  // update quantity count for each dish
  const cashTotal = await calcCashAmtQty(incomingOrder, Dish);

  payload.cashTotal = cashTotal;

  // Save the Order in the DB
  const newOrder = await Order.create(payload);

  return [newOrder];
};

module.exports = processOrder;
