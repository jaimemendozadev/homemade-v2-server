const getChefReviews = async (_parent, {chefID}, {models}) => {
  const {Chef} = models;
  const errorMsg = "There was a problem getting the chef's reviews.";

  console.log('chefID is ', chefID);

  try {
    const result = await Chef.findOne({_id: chefID}).populate('chefReviews');

    console.log('chef review result ', result);

    return result.chefReviews;
  } catch (error) {
    console.log(`${errorMsg} `, error);
    throw new Error(errorMsg);
  }
};

module.exports = getChefReviews;
