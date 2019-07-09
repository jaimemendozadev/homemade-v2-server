const formatNewOrder = incomingOrder => {
  const {cart} = incomingOrder;

  const cartOfIDs = cart.map(DishInput => DishInput.dishId);

  const payload = Object.assign({}, incomingOrder, {
    cart: cartOfIDs,
    cashTotal: 0,
  });

  return payload;
};

module.exports = formatNewOrder;
