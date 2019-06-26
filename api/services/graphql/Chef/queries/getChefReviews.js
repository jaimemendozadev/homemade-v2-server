const getChefReviews = async (_parent, {chefID}, {models}) => {
  const {Chef} = models;

  console.log('chef id is ', chefID);

  try {
    const result = await Chef.findOne({_id: chefID}).populate('chefReviews');

    console.log('result is ', result);

    return result.chefReviews;
  } catch (error) {
    throw new Error("There was a problem getting the chef's reviews.");
  }
};

module.exports = getChefReviews;
