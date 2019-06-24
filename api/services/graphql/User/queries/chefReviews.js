const chefReviews = async (parent, _args, {models}) => {
  const {User} = models;
  const userID = parent._id;

  try {
    const result = await User.findOne({_id: userID}).populate('chefReviews');

    return result.chefReviews;
  } catch (error) {
    throw new Error("There was a problem getting the chef's reviews.");
  }
};

module.exports = chefReviews;
