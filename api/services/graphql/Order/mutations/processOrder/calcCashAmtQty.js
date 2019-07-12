const calcCashTotal = require('./calcCashTotal');
const {bulkDBQuery, updateDishQuantities} = require('../utils');

const calcCashAmtQty = async (incomingOrder, Dish) => {
  const {cart} = incomingOrder;

  const dishIDsArray = cart.map(({dishId}) => dishId);

  // Query Each Dish from the DB
  const queriedDishes = await bulkDBQuery(dishIDsArray, Dish);

  // Update the quantity for each Dish with incoming Order quantities
  const updatedDishQty = updateDishQuantities(queriedDishes, cart, true);

  // Calculate cashTotal from incoming order quantities
  const cashTotal = calcCashTotal(queriedDishes, cart);

  // Update each Dish with new quantity in DB
  const updatePayload = cart.map(({dishId}) => {
    return {
      updateOne: {
        filter: {_id: dishId},
        update: {quantity: updatedDishQty[dishId]},
      },
    };
  });

  await Dish.bulkWrite(updatePayload);

  return cashTotal;
};

module.exports = calcCashAmtQty;
