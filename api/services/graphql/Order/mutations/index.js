// parent, args, context, info

/*

input IncomingOrder {
  chefId: ID!
  customerId: ID!
  cart: [ID!]!
  status: OrderStatusInput!
  date: String!
  cashTotal: Int!  
  orderInstructions: String!
}


*/
const updateOrder = () => {};
const postNewOrder = (_parent, {input}, {models}) => {
  const errorMsg = "Couldn't save the incoming order in the database.";


  try {
    console.log('input ', input);
    console.log('models ', models);

  } catch (error) {
    console.log(`${errorMsg} ${error}`);
    throw new Error(errorMsg);
  }
};

module.exports = {
  updateOrder,
  postNewOrder,
};
