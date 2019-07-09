const formatNewDocument = require('./formatNewDocument');
const calcCashAmtQty = require('./calcCashAmtQty');

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


type Order {
  # Decided chefId and customerId won't resolve to user info
  _id: ID!
  chefId: ID!
  customerId: ID!
  cart: [Dish!]!
  status: OrderStatus!
  date: String!
  cashTotal: Int!
  orderInstructions: String
}

*/

const processOrder = async (incomingOrder, {Order, Dish}) => {
  // Start formatting the order for saving in DB
  const payload = formatNewDocument(incomingOrder);

  // Calculate the cashTotal amount and
  // update quantity count for each dish
  await calcCashAmtQty(incomingOrder, Dish);

  // Save the Order in the DB
  const newOrder = await Order.create(payload);

  return [newOrder];
};

module.exports = processOrder;
