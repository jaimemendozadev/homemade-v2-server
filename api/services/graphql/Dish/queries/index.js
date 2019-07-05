// parent, args, context, info

const getActiveDishes = () => {};
const getInactiveDishes = () => {};
const getAllChefDishes = async (_parent, {chefID}, {models}) => {
  const {Chef} = models;
  const errorMsg = "There was a problem getting the chef's dishes.";

  console.log('chefID is ', chefID);
  try {
    const result = await Chef.findById(chefID).populate('chefDishes');

    return result.chefDishes;
  } catch (error) {
    console.log(`${errorMsg} `, error);
    throw new Error(errorMsg);
  }
};

const getSingleDish = async (_parent, {dishID}, {models}) => {
  const errorMsg = "Couldn't find the specified dish in the database.";
  const {Dish} = models;
  try {
    const foundDishes = await Dish.findById(dishID);

    console.log('foundDishes ', foundDishes);

    return [foundDishes];
  } catch (error) {
    console.log(`${errorMsg} ${error}`);
    throw new Error(errorMsg);
  }
};

module.exports = {
  getActiveDishes,
  getInactiveDishes,
  getAllChefDishes,
  getSingleDish,
};
