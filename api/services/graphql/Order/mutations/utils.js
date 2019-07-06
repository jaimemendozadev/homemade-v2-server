const generateErrorMsg = statusCode => {
  const errorMessages = {
    1: 'to be accepted',
    2: 'to be completed',
    3: 'to be canceled',
    4: 'to be reviewed',
  };

  return `Could not update the order ${errorMessages[statusCode]} with status code ${statusCode}.`;
};

/*

# New incoming order should have cart array of dishIDs.
input IncomingOrder {
  chefId: ID!
  customerId: ID!
  cart: [DishInput!]!
  status: OrderStatusInput!
  # date on IncomingOrder is optional, default set by Database.
  date: String
  orderInstructions: String!
}

*/

const formatNewDocument = incomingOrder => {
  const {cart} = incomingOrder;

  const cartOfIDs = cart.map(DishInput => DishInput.dishId);

  const payload = Object.assign(incomingOrder, {cart: cartOfIDs});

  return payload;
};

const performDishUpdates = async (incomingOrder, Dish) => {
  const {cart} = incomingOrder;
  const cartOfIDs = cart.map(DishInput => DishInput.dishId);

  const promiseArr = [];

  cartOfIDs.forEach(id => promiseArr.push(Dish.findById(id)));

  console.log('promiseArr ', promiseArr);

  return await Promise.all(promiseArr).then(values =>
    console.log('values ', values),
  );
};

const processOrder = async (incomingOrder, {Order, Dish}) => {
  // Format/Create Order in DB
  const payload = formatNewDocument(incomingOrder);

  const newOrder = await Order.create(payload);

  // Get the Dish info from DB
  const dishes = await performDishUpdates(incomingOrder, Dish);

  console.log(dishes);

  return [newOrder];
};

module.exports = {
  generateErrorMsg,
  processOrder,
};
