
const calcCashTotal = (dishesInDB, incomingOrderCart) => {
  const prices = {};
  let cashTotal = 0;

  // Get a list of all the Dish prices
  dishesInDB.forEach(dish => {
    const {_id, cashDonation} = dish;
    prices[_id] = cashDonation;
  });

  // Loop through the incomingOrderCart 
  // and calculate total amount
  incomingOrderCart.forEach(dish => {
    const {dishId, orderCount} = dish;
    const dishPrice = prices[dishId];
    cashTotal += (dishPrice * orderCount);
  });

  return cashTotal;
}


module.exports = calcCashTotal;