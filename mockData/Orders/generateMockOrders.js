const generateSingleOrder = require('./generateSingleOrder');

const generateChefMenu = dishes => {
  const menu = {};

  dishes.forEach(dish => {
    const {chefId, _id, cashDonation, isActive} = dish;

    if (isActive) {
      if (!menu[chefId]) {
        menu[chefId] = {};
      }

      if (!menu[chefId][_id]) {
        menu[chefId][_id] = cashDonation;
      }
    }
  });

  return menu;
};

const generateRandomIdx = len => Math.floor(Math.random() * len);

const generateMockOrders = (
  dishes,
  users,
  numOfOrders = 30,
  currentOrder = false,
) => {
  // Create a menu from saved dishes in DB
  const menu = generateChefMenu(dishes);

  // Get a list of chefIDs that have saved dishes in DB
  const chefIDs = Object.keys(menu);

  const OrdersPayload = [];

  for (let i = 0; i < numOfOrders; i++) {
    const chefIdx = generateRandomIdx(chefIDs.length);
    const userIdx = generateRandomIdx(users.length);
    const chosenChefID = chefIDs[chefIdx];
    const chosenUserID = users[userIdx]._id;
    const menuOptions = menu[chosenChefID];

    const newOrder = generateSingleOrder(
      chosenChefID,
      chosenUserID,
      menuOptions,
      currentOrder,
    );

    OrdersPayload.push(newOrder);
  }

  return OrdersPayload;
};

module.exports = generateMockOrders;
