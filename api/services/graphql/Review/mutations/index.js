const postChefReview = async (_parent, {incomingReview}, {models}) => {
  const errorMsg = 'There was an error saving the review in the Database.';
  const {Review} = models;

  try {
    const newReview = await Review.create(incomingReview);

    console.log('newReview is ', newReview);

    return [newReview];
  } catch (error) {
    console.log(`${errorMsg} ${error}`);

    throw new Error(errorMsg);
  }
};

module.exports = {
  postChefReview,
};
