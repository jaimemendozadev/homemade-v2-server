const getUser = async (_parent, {userID}, {models}) => {
  const {User} = models;
  const errorMsg = 'There was an error finding the User.'
  

  try {
    const foundUser = await User.findById(userID);

    return foundUser;
  } catch (error) {

    console.log(`${errorMsg} `, error);
    throw new Error(errorMsg);
  }
};

module.exports = getUser;
