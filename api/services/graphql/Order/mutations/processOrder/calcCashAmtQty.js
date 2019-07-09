const mongoose = require('mongoose');
const updateDishQuantities = require('./updateDishQuantities');
const calcCashTotal = require('./calcCashTotal');

const calcCashAmtQty = async (incomingOrder, Dish) => {
  const {cart} = incomingOrder;

  // Query Each Dish from the DB
  const findPayload = cart.map(obj => mongoose.Types.ObjectId(obj.dishId));

  const queriedDishes = await Dish.find({_id: {$in: findPayload}});

  // Update the quantity for each Dish with incoming Order quantities
  const updatedDishQty = updateDishQuantities(queriedDishes, cart);

  // Calculate cashTotal from incoming order quantities
  const cashTotal = calcCashTotal(queriedDishes, cart);

  // Update each Dish with new quantity in DB
  const updatePayload = cart.map(obj => {
    const {dishId} = obj;
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
