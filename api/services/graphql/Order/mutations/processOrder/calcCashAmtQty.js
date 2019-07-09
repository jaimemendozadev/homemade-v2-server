const mongoose = require('mongoose');
const updateDishQuantities = require('./updateDishQuantities');

const calcCashAmtQty = async (incomingOrder, Dish) => {
  const {cart} = incomingOrder;

  // Query Each Dish from the DB
  const findPayload = cart.map(obj => mongoose.Types.ObjectId(obj.dishId));

  const queriedDishes = await Dish.find({_id: {$in: findPayload}});

  const updatedDishQuantities = updateDishQuantities(queriedDishes, cart);

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
