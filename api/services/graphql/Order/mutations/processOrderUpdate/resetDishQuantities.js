const {bulkDBQuery, updateDishQuantities} = require('../utils');

const resetDishQuantities = async (updatedOrder, DishModel) => {
  // Find all the dishes in the DB
  const {cart} = updatedOrder;
  const dishIDsArray = cart.map(({dishId})=> dishId);

  const foundDishes = await bulkDBQuery(dishIDsArray, DishModel);

  const updatedQuantities = updateDishQuantities(foundDishes, cart, false);

  // Update each Dish with new quantity in DB
  const updatePayload = cart.map(orderedDish => {
    const {dishId} = orderedDish;
    return {
      updateOne: {
        filter: {_id: dishId},
        update: {quantity: updatedQuantities[dishId]},
      },
    };
  });

  await DishModel.bulkWrite(updatePayload);

};

module.exports = resetDishQuantities;
