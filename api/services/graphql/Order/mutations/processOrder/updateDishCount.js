const updateDishCount = (currDishes, cart) => {
  const updatedCount = {};

  // Create updatedCount obj with currDish info
  currDishes.forEach(dish => {
    const {_id, quantity} = dish;
    updatedCount[_id] = quantity;
  });

  // Decrement dish quantity with currDish info
  cart.forEach(dish => {
    const {dishId, orderCount} = dish;
    const currentCount = updatedCount[dishId];
    updatedCount[dishId] = currentCount - orderCount;
  });

  return updatedCount;
};

module.exports = updateDishCount;
