const {Order} = require('../../../../DB/Models');

const findOrdersByStatus = async (userType, ID, statusCode) => {
  const condition = userType === 'Chef' ? {chefId: ID} : {customerId: ID};
  const foundOrders = await Order.find(condition);

  const filteredOrders = foundOrders.filter(
    order => order.status.statusCode === statusCode,
  );

  return filteredOrders;
};

const generateErrorMsg = (callerType, statusCode) => {
  const errorMessages = {
    0: 'has no pending orders.',
    1: 'has no accepted orders.',
    2: 'has no completed orders.',
    3: 'has no canceled orders.',
    4: 'has no reviewed orders.',
  };

  return `The ${callerType} ${errorMessages[statusCode]}`;
};

module.exports = {
  findOrdersByStatus,
  generateErrorMsg,
};
