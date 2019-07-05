// parent, args, context, info

const getActiveDishes = () => {};
const getInactiveDishes = () => {};
const getAllChefDishes = async (_parent, {chefID}, {models}) => {
  const {Chef} = models;
  const errorMsg = "There was a problem getting the chef's dishes.";

  console.log('chefID is ', chefID)
  try {
    const result = await Chef.findById(chefID).populate('chefDishes');

    return result.chefDishes;
  } catch (error) {
    console.log(`${errorMsg} `, error);
    throw new Error(errorMsg);
  }
};


module.exports = {
  getActiveDishes,
  getInactiveDishes,
  getAllChefDishes
};
