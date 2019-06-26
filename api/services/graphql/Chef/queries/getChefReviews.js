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

module.exports = getChefReviews;
