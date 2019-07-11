const {findOrdersByStatus, generateErrorMsg} = require('./utils');

const getSingleOrder = async(_parent, {orderID}, {models}) => {
  const errorMsg = "Could not find the requested order in the database.";
  const {Order} = models;

  try {
    const foundOrder = await Order.findById(orderID);
    
    console.log('foundOrder is ', foundOrder);

    return [foundOrder];

  } catch(error) {
    console.log(`${errorMsg} `, error);

    throw new Error(errorMsg);
  }
}


const getOrdersByStatus = async (
  _parent,
  {callerID, callerType, statusCode},
) => {
  const errorMsg = generateErrorMsg(callerType, statusCode);

  try {
    const pendingOrders = await findOrdersByStatus(
      callerType,
      callerID,
      statusCode,
    );

    return pendingOrders;
  } catch (error) {
    console.log(`${errorMsg} `, error);

    throw new Error(errorMsg);
  }
};

module.exports = {
  getOrdersByStatus,
  getSingleOrder
};
