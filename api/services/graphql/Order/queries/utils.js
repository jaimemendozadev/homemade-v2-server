const {Order} = require('../../../../DB/Models');

const findPendingOrders = async (userType, ID) => {
    const condition = userType === "Chef" ? {chefId: ID} : {customerId: ID};
    const foundOrders = await Order.find(condition);

    const pendingOrders = foundOrders.filter(order => {
      const {
        status: {statusCode},
      } = order;
      if (statusCode === 0) {
        return order;
      }
    });

    return pendingOrders;
}

module.exports = {
    findPendingOrders
}