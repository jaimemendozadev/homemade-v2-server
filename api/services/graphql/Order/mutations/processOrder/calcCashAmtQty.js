const mongoose = require('mongoose');
const updateDishQuantities = require('./updateDishQuantities');
const calcCashTotal = require('./calcCashTotal');

const calcCashAmtQty = async (incomingOrder, Dish) => {
  const {cart} = incomingOrder;

  // Query Each Dish from the DB
  const findPayload = cart.map(obj => mongoose.Types.ObjectId(obj.dishId));

  const queriedDishes = await Dish.find({_id: {$in: findPayload}});

  // Update the quantity for each Dish with incoming Order quantities
  const updatedDishQuantities = updateDishQuantities(queriedDishes, cart);

  // Calculate cashTotal from incoming order quantities
  const cashTotal = calcCashTotal(queriedDishes, cart);

  console.log(cashTotal);
  console.log(updatedDishQuantities);

  //   const updatePayload = cart.map(obj => {
  //     return {
  //       updateOne: {
  //         filter: {_id: obj.dishId},
  //         update: {}
  //       }
  //     }
  //   })

  // const bulkResult = await Dish.bulkWrite();

  // return filteredDishes;
};

module.exports = calcCashAmtQty;
