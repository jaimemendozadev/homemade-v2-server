const {bulkDBQuery} = require('../utils');

const resetDishQuantities = async (updatedOrder, DishModel) => {
  // Find all the dishes in the DB
  const dishIDs = updatedOrder.cart.map(dish => dish._id);

  const foundDishes = await bulkDBQuery(dishIDs, DishModel);

  console.log(dishIDs);
  console.log(foundDishes);

  // Update each Dish with new quantity in DB

  /*
  const updatePayload = cart.map(obj => {
    const {dishId} = obj;
    return {
      updateOne: {
        filter: {_id: dishId},
        update: {quantity: updatedDishQty[dishId]},
      },
    };
  });

  await DishModel.bulkWrite(updatePayload);

  */
};

module.exports = resetDishQuantities;
