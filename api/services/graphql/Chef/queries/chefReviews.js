const chefReviews = async ({_id}, _args, {models}) => {
  const {Chef} = models;
 
  const errorMsg = "There was a problem getting the chef's reviews.";

  try {
    const result = await Chef.findOne({_id}).populate('chefReviews');

    return result.chefReviews; // Can return empty array
    
  } catch (error) {
    console.log(`${errorMsg} `, error);
    throw new Error(errorMsg);
  }
};

module.exports = chefReviews;
