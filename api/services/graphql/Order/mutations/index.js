const updateOrder = () => {};

const postNewOrder = async (_parent, {incomingOrder}, {models}) => {
  const errorMsg = "Couldn't save the incoming order in the database.";
  const {Order} = models;

  try {
    const newOrder = await Order.create(incomingOrder);

    return [newOrder];

  } catch (error) {
    console.log(`${errorMsg} ${error}`);
    throw new Error(errorMsg);
  }
};

module.exports = {
  updateOrder,
  postNewOrder,
};
