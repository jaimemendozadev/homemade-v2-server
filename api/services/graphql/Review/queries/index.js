const chefId = async ({chefId}, _args, {models}) => {
  const errorMsg = `Could not find the chef in the Database.`;
  const {Chef} = models;

  try {
    const foundChef = await Chef.findById(chefId);

    return foundChef;
  } catch (error) {
    console.log(`${errorMsg} ${error}`);
    throw new Error(errorMsg);
  }
};
const orderId = async ({orderId}, _args, {models}) => {
  const errorMsg = `Could not find the Order in the Database.`;
  const {Order} = models;

  try {
    const foundOrder = await Order.findById(orderId);

    return foundOrder;
  } catch (error) {
    console.log(`${errorMsg} ${error}`);
    throw new Error(errorMsg);
  }
};

const customerId = async ({customerId}, _args, {models}) => {
  const errorMsg = `Could not find the User in the Database.`;
  const {User} = models;

  try {
    const foundUser = await User.findById(customerId);

    return foundUser;
  } catch (error) {
    console.log(`${errorMsg} ${error}`);
    throw new Error(errorMsg);
  }
};

const getChefReviews = async (_parent, {chefID}, {models}) => {
  const {Chef} = models;
  const errorMsg = "There was a problem getting the chef's reviews.";

  try {
    const result = await Chef.findOne({_id: chefID}).populate('chefReviews');

    return result.chefReviews;
  } catch (error) {
    console.log(`${errorMsg} `, error);
    throw new Error(errorMsg);
  }
};

module.exports = {
  chefId,
  orderId,
  customerId,
  getChefReviews,
};
