const updateDishQuantities = (dishesInDB, cartWithOrders) => {
  const updatedQuantities = {};

  // Create updatedQuantities obj with each dish's
  // current available quantity in DB
  dishesInDB.forEach(dish => {
    const {_id, quantity} = dish;
    updatedQuantities[_id] = quantity;
  });

  // Decrement dish quantity with incoming orderCount
  cartWithOrders.forEach(orderedDish => {
    const {dishId, orderCount} = orderedDish;
    const countInDB = updatedQuantities[dishId];
    updatedQuantities[dishId] = countInDB - orderCount;
  });

  return updatedQuantities;
};

module.exports = updateDishQuantities;
