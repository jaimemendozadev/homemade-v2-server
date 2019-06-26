const chefReviews = async (parent, _args, {models}) => {
  const {Chef} = models;
  const userID = parent._id;
  const errorMsg = "There was a problem getting the chef's reviews.";

  try {
    const result = await Chef.findOne({_id: userID}).populate('chefReviews');

    return result.chefReviews;
    
  } catch (error) {
    console.log(`${errorMsg} `, error);
    throw new Error(errorMsg);
  }
};

module.exports = chefReviews;
