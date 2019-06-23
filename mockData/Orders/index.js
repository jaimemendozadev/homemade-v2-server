const faker = require('faker');

/*

const OrderSchema = new Schema({
  chefId: {type: Schema.Types.ObjectId, ref: 'user'},
  customerId: {type: Schema.Types.ObjectId, ref: 'user'},
  cart: [{type: Schema.Types.ObjectId, ref: 'order'}],
  status: Number,
  date: {type: Date, default: Date.now},
  cashTotal: Number,
  orderInstructions: String,
});


*/

/*
OrderSchema Status Codes
0: pending
1: accepted
2: completed
3: canceled
4: reviewed

*/

const generateSingleOrder = (chefId, customerId, menuOptions) => {
  const Order = {};
  const orderStatus = Math.floor(Math.random() * 5);
  const menuItemKeys = Object.keys(menuOptions);

  const cart = menuItemKeys;

  let cashTotal = 0;
  cart.forEach(item => (cashTotal += menuOptions[item]));

  Order.chefId = chefId;
  Order.customerId = customerId;
  Order.cart = cart;
  Order.status = orderStatus;
  Order.cashTotal = cashTotal;
  Order.Instructions = faker.lorem.sentence();

  return Order;
};

module.exports = generateSingleOrder;
