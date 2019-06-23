/*

const OrderSchema = new Schema({
  chefId: {type: Schema.Types.ObjectId, ref: 'user'},
  customerId: {type: Schema.Types.ObjectId, ref: 'user'},
  cart: {},
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

const generateSingleOrder = (chefId, customerId, ) => {
  const Order = {};
  const orderStatus = Math.floor(Math.random() * 5);
  
  Order.chefId = chefId;
  Order.customerId = customerId;
  Order.cart
  Order.status = orderStatus;
}



module.exports = generateSingleOrder;


