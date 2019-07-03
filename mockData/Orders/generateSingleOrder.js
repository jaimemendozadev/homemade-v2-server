const faker = require('faker');

const _getRecentDate = () => {
  const randomNum = Math.floor(Math.random() * 10);

  return randomNum <= 4 ? new Date(faker.date.recent()) : new Date();
};

const generateSingleOrder = (
  chefId,
  customerId,
  menuOptions,
  currentOrder = false,
) => {
  const Order = {};
  
  const statusCodeList = {
    0: "Pending",
    1: "Accepted",
    2: "Completed",
    3: "Canceled",
    4: "Reviewed"
  };

  const statusCode = Math.floor(Math.random() * 5);

  const status = {
    statusCode,
    statusMessage:  statusCodeList[statusCode]
  }

  const menuItemKeys = Object.keys(menuOptions);

  const cart = menuItemKeys;

  let cashTotal = 0;
  cart.forEach(item => (cashTotal += menuOptions[item]));

  const date =
    currentOrder === false ? new Date(faker.date.past()) : _getRecentDate();

  Order.chefId = chefId;
  Order.customerId = customerId;
  Order.cart = cart;
  Order.status = status;
  Order.date = date;
  Order.cashTotal = cashTotal;
  Order.orderInstructions = faker.lorem.sentence();

  return Order;
};

module.exports = generateSingleOrder;
