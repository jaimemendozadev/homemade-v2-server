const chefDishes = async (parent, _args, {models}) => {
  const {Chef} = models;
  const userID = parent._id;
  const errorMsg = "There was a problem getting the chef's dishes.";


  try {
    const result = await Chef.findOne(userID).populate('chefDishes');

    return result.chefDishes;
  } catch (error) {
    console.log(`${errorMsg} `, error);
    throw new Error(errorMsg);
  }
};

module.exports = chefDishes;
