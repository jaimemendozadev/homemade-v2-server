const _generateMockOrders = require('./generateMockOrders');
const {Order} = require('../../api/DB/Models');

const createSaveOrdersInDB = async (
  dishes,
  users,
  numOfOrders = 30,
  currentOrder = false,
) => {
  // Create Payload of Orders with linked chef/user info and tabulated totals
  const OrdersPayload = _generateMockOrders(
    dishes,
    users,
    numOfOrders,
    currentOrder,
  );

  const Orders_DB_Result = await Order.insertMany(OrdersPayload);

  return Orders_DB_Result;
};

module.exports = {
  createSaveOrdersInDB,
};
