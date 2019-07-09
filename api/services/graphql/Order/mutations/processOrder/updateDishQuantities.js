const updateDishQuantities = (dishesInDB, incomingOrderCart) => {
  const updatedQuantities = {};

  // Create updatedQuantities obj with each dish's
  // current available quantity in DB
  dishesInDB.forEach(dish => {
    const {_id, quantity} = dish;
    updatedQuantities[_id] = quantity;
  });

  // Decrement dish quantity with incoming orderCount
  incomingOrderCart.forEach(dish => {
    const {dishId, orderCount} = dish;
    const countInDB = updatedQuantities[dishId];
    updatedQuantities[dishId] = countInDB - orderCount;
  });

  return updatedQuantities;
};

module.exports = updateDishQuantities;
