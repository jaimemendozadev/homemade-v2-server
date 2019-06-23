const faker = require('faker');

const _getRecentDate = () => {
  const randomNum = Math.floor(Math.random() * 10);

  return randomNum <= 4 ? new Date(faker.date.recent()) : new Date();
}

const generateSingleOrder = (chefId, customerId, menuOptions, currentOrder = false) => {
  const Order = {};
  const orderStatus = Math.floor(Math.random() * 5);
  const menuItemKeys = Object.keys(menuOptions);

  const cart = menuItemKeys;

  let cashTotal = 0;
  cart.forEach(item => (cashTotal += menuOptions[item]));

  const date = currentOrder === false ? new Date(faker.date.past()) : _getRecentDate();

  Order.chefId = chefId;
  Order.customerId = customerId;
  Order.cart = cart;
  Order.status = orderStatus;
  Order.date = date;
  Order.cashTotal = cashTotal;
  Order.Instructions = faker.lorem.sentence();

  return Order;
};

module.exports = generateSingleOrder;
