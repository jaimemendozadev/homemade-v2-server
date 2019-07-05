const {Order} = require('../../../../DB/Models');

const findOrdersByStatus = async (userType, ID, statusCode) => {
  const condition = userType === 'Chef' ? {chefId: ID} : {customerId: ID};
  const foundOrders = await Order.find(condition);

  const filteredOrders = foundOrders.filter(
    order => order.status.statusCode === statusCode,
  );

  return filteredOrders;
};

module.exports = {
  findOrdersByStatus,
};
