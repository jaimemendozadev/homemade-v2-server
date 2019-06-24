const chefDishes = async (parent, _args, {models}) => {
    const {User} = models;
    const userID = parent._id;
  
    try {
      const result = await User.findOne(userID).populate('chefDishes');
  
      console.log('chef dishes are ', result);
  
      return result.chefDishes;
    } catch (error) {
      throw new Error("There was a problem getting the chef's dishes.");
    }
  };



  module.exports = chefDishes;