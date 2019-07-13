const generateErrorMsg = statusCode => {
  const errorMessages = {
    1: 'to be accepted',
    2: 'to be completed',
    3: 'to be canceled',
    4: 'to be reviewed',
  };

  return `Could not update the order ${errorMessages[statusCode]} with status code ${statusCode}.`;
};

const generateStatusMsg = statusCode => {
  const statusMsgs = {
    0: 'Pending',
    1: 'Accepted',
    2: 'Completed',
    3: 'Canceled',
    4: 'Reviewed',
  };

  return statusMsgs[statusCode];
};

const updateDishQuantities = (dishesInDB, cartWithOrders, decrement = true) => {
  const updatedQuantities = {};

  // Create updatedQuantities obj with each dish's
  // current available quantity in DB
  dishesInDB.forEach(dish => {
    const {_id, quantity} = dish;
    updatedQuantities[_id] = quantity;
  });

  // Depending on decrement flag, decrement or increment
  // dish quantity with incoming orderCount

  cartWithOrders.forEach(orderedDish => {
    const {dishId, orderCount} = orderedDish;
    const countInDB = updatedQuantities[dishId];
    const updatedCount =
      decrement === true ? countInDB - orderCount : countInDB + orderCount;
    updatedQuantities[dishId] = updatedCount;
  });

  return updatedQuantities;
};

module.exports = {
  generateErrorMsg,
  generateStatusMsg,
  updateDishQuantities,
};
